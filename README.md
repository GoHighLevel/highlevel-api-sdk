# HighLevel API SDK

The official TypeScript/JavaScript SDK for the HighLevel (GoHighLevel) API. This SDK provides a comprehensive interface to interact with all HighLevel API endpoints with built-in authentication, error handling, and automatic token refresh.

## Table of Contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Token Management](#token-management)
- [Rate Limit Retry](#rate-limit-retry)
- [Webhooks](#webhooks)
- [Logging](#logging)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)
- [API Reference](#api-reference)

## Installation

```bash
npm install @gohighlevel/api-client
```

### Requirements

- Node.js >= 18.0.0
- TypeScript >= 4.0 (if using TypeScript)

## Authentication

The HighLevel API supports three types of authentication tokens with different levels of access:

### 1. Private Integration Token
- **Highest priority** - Used for private integrations
- Full access to all API endpoints
- Managed through your HighLevel app settings

### 2. Agency Access Token
- Used for agency-level operations
- Access to agency and sub-account data
- Obtained through OAuth 2.0 flow

### 3. Location Access Token
- Used for location-specific operations
- Access to single location data
- Obtained through OAuth 2.0 flow

## Getting Started

### Basic Setup

#### TypeScript
```typescript
import HighLevel, { MongoDBSessionStorage, LogLevel } from '@gohighlevel/api-client';
// or
import { HighLevel } from '@gohighlevel/api-client';

// Initialize with private integration token
const ghl = new HighLevel({
  privateIntegrationToken: 'your-private-integration-token',
  logLevel: LogLevel.INFO
});

// Initialize with clientId, clientSecret, and MongoDB storage (recommended)
const ghl = new HighLevel({
  clientId: 'your-oauth-client-id',
  clientSecret: 'your-oauth-client-secret',
  sessionStorage: new MongoDBSessionStorage(
    'mongodb://localhost:27017', // connection string
    'ghl_sessions',              // database name
    'application_sessions'       // collection name (optional, this is the default)
  ),
  logLevel: LogLevel.WARN,
  rateLimitRetry: true // retry requests rejected by the burst rate limit, see Rate Limit Retry
});
```

#### JavaScript (CommonJS)
```javascript
const HighLevel = require('@gohighlevel/api-client').default;
// or
const { HighLevel } = require('@gohighlevel/api-client');

const ghl = new HighLevel({
  privateIntegrationToken: 'your-private-integration-token'
});
```

#### JavaScript (ES Modules)
```javascript
import HighLevel from '@gohighlevel/api-client';

const ghl = new HighLevel({
  locationAccessToken: 'your-location-access-token'
});
```

## Token Management

### MongoDB Storage

Configure MongoDB storage to store token data and automatically fetch it while making API calls:

```typescript
import { HighLevel, MongoDBSessionStorage } from '@gohighlevel/api-client';

const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage: new MongoDBSessionStorage(
    'mongodb://localhost:27017',
    'ghl_sessions',
    'application_sessions' // optional collection name
  )
});
```

The `mongodb` driver is only loaded when `MongoDBSessionStorage` is used, so applications with a custom storage do not pay for it at startup.

**⚠️ Warning**: Without MongoDB storage, data will be stored in memory by default (`MemorySessionStorage`) and will be lost on application restart. This is not recommended for production. If you do use it, cap its size so it cannot grow without bound:

```typescript
import { HighLevel, MemorySessionStorage } from '@gohighlevel/api-client';

const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage: new MemorySessionStorage(undefined, { maxEntries: 1000 }) // least recently used sessions are evicted first
});
```

### Custom Storage Implementation

You can also implement your own storage by extending the `SessionStorage` class:

```typescript
import { SessionStorage, ISessionData } from '@gohighlevel/api-client';

class RedisSessionStorage extends SessionStorage {
  async init(): Promise<void> {
    // Initialize your storage connection
  }

  async disconnect(): Promise<void> {
    // Close your storage connection
  }

  async setSession(key: string, data: ISessionData, ttl?: number): Promise<void> {
    // Implement session storage logic
  }

  async getSession(key: string): Promise<ISessionData | null> {
    // Implement session retrieval logic
    return null;
  }

  async deleteSession(key: string): Promise<boolean> {
    // Implement session deletion logic
    return true;
  }
}

// Use your custom storage
const ghl = new HighLevel({
  sessionStorage: new RedisSessionStorage({
    // your custom config
  })
});
```

### Automatic Token Refresh

The SDK automatically attempts to refresh expired tokens when:
- A 401 (Unauthorized) response is received
- Valid refresh tokens are available
- OAuth client credentials are configured

The failed request is retried once with the new token. Concurrent requests that receive a 401 for the same location or company share a single refresh call, so a burst of requests never triggers parallel refreshes for the same resource.

## Rate Limit Retry

The API enforces a burst limit (a maximum number of requests per short interval) and a daily limit, and reports the current state on every response:

| Header | Meaning |
|--------|---------|
| `X-RateLimit-Max` | Requests allowed per burst interval |
| `X-RateLimit-Interval-Milliseconds` | Length of the burst interval |
| `X-RateLimit-Remaining` | Requests left in the current interval |
| `X-RateLimit-Limit-Daily` | Requests allowed per day |
| `X-RateLimit-Daily-Remaining` | Requests left today |

When a limit is exceeded the API responds with `429 Too Many Requests`. Retrying is opt-in and off by default, so existing applications keep their current behaviour. Enable it with `rateLimitRetry`:

```typescript
// Defaults: up to 3 retries, never wait more than 30 seconds for a single retry
const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage,
  rateLimitRetry: true
});

// Or tune it
const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage,
  rateLimitRetry: {
    maxRetries: 3,     // retries after the first 429 (default 3)
    maxDelayMs: 10000, // upper bound for a single wait in ms (default 30000)
    baseDelayMs: 1000  // starting delay in ms when the response has no rate limit headers (default 1000)
  }
});
```

What happens on a 429:

1. **Burst limit reached** (`X-RateLimit-Daily-Remaining` is above zero): the SDK waits for the interval in `X-RateLimit-Interval-Milliseconds`, capped at `maxDelayMs`, and sends the same request again, up to `maxRetries` times.
2. **Daily limit exhausted** (`X-RateLimit-Daily-Remaining` is `0`): a retry cannot succeed, so the error is thrown immediately.
3. **No rate limit headers** on the response: the SDK falls back to exponential backoff starting at `baseDelayMs` with jitter, capped at `maxDelayMs`.

Each retry is logged at `WARN` level together with the parsed headers. When the retries are used up, or when retry is disabled, the call rejects with a `GHLRateLimitError` whose `rateLimit` field holds the parsed headers:

```typescript
import { GHLRateLimitError } from '@gohighlevel/api-client';

try {
  await ghl.contacts.getContact({ contactId }, { headers: { locationId } });
} catch (error) {
  if (error instanceof GHLRateLimitError) {
    console.log(error.rateLimit);
    // {
    //   scope: 'burst',            // 'burst' | 'daily' | 'unknown'
    //   intervalMs: 10000,
    //   max: 100,
    //   remaining: 0,
    //   dailyLimit: 200000,
    //   dailyRemaining: 199642,
    //   dailyResetMs: 84322000     // only when the API reports it
    // }
    if (error.rateLimit?.scope === 'daily') {
      // stop sending requests until the daily limit resets
    }
  }
}
```

Example: 125 `getContact` calls fired at once against a limit of 100 requests per 10 seconds. The calls over the limit receive a 429, wait for the reported 10 second interval and succeed on their first retry:

```typescript
const results = await Promise.allSettled(
  Array.from({ length: 125 }, () =>
    ghl.contacts.getContact({ contactId }, { headers: { locationId } })
  )
);
// [GHL SDK] WARN: 429 Too Many Requests - burst limit reached, retrying in 10000ms (attempt 1 of 3) { scope: 'burst', intervalMs: 10000, max: 100, remaining: 0, ... }
// results: 125 fulfilled, 0 rejected, in about 11.5 seconds
```

## Webhooks

Handle HighLevel webhooks with built-in signature verification. The middleware also handles the INSTALL and UNINSTALL events for your application:
- INSTALL: In case of bulk installation, it will generate and store the token for all the locations for which installation was triggered
- UNINSTALL: If your app is uninstalled at any location or company, it will remove the token for that resource from the storage used by the SDK

**NOTE**: The endpoint you use should be the one configured as `Default Webhook URL` for your application in the marketplace. INSTALL and UNINSTALL events are sent to the default URL only.

The middleware works with Express and with any framework that calls it as `(req, res, next)` with `req.headers` and `req.body`. Express is not a dependency of the SDK.

```typescript
import express from 'express';

const app = express();

// Keep the raw body so the signature is checked against the exact bytes HighLevel signed
app.use(express.json({ verify: (req, _res, buf) => { req.rawBody = buf; } }));

// SDK middleware processes the webhook first
app.use('/webhooks/ghl', ghl.webhooks.subscribe());

// Your handler runs after SDK processing
app.post('/webhooks/ghl', async (req, res) => {
  if (req.skippedSignatureVerification) {
    // no x-ghl-signature header on the request, or no public key configured
  }
  if (req.isSignatureValid === false && !req.skippedSignatureVerification) {
    return res.status(401).json({ success: false }); // signature present but invalid
  }
  if (req.installTokenError) {
    // INSTALL webhook was verified but the location token could not be generated
  }
  // your logic for the webhook goes here
  res.json({ success: true });
});
```

### Signature verification

HighLevel signs every webhook with Ed25519 and sends the signature in the `x-ghl-signature` header. Provide the public key from the marketplace either in the constructor or through the `WEBHOOK_SIGNATURE_PUBLIC_KEY` environment variable. PEM, raw base64 and hex encodings are accepted:

```typescript
const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage,
  webhookPublicKey: process.env.WEBHOOK_SIGNATURE_PUBLIC_KEY
});
```

The middleware sets these flags on the request for your handler:

| Flag | Meaning |
|------|---------|
| `isSignatureValid` | `true` when `x-ghl-signature` verified against the configured public key |
| `skippedSignatureVerification` | `true` when the header or the public key was missing, so nothing was verified |
| `installTokenError` | Set when an INSTALL webhook verified but generating the location token failed |

INSTALL and UNINSTALL are only processed when the signature is valid. Webhooks whose `appId` does not belong to your `clientId` are passed through without processing. The middleware never ends the response, so your handler always runs and decides what to return.

To verify a signature yourself:

```typescript
const isValid = ghl.webhooks.verifyEd25519Signature(rawBody, req.headers['x-ghl-signature'] as string, publicKey);
```

The legacy `x-wh-signature` header (RSA) is no longer sent by HighLevel and is not checked by the middleware. The `WEBHOOK_PUBLIC_KEY` environment variable is no longer read, and `verifySignature()` is deprecated and kept only for backward compatibility.

## Logging

`logLevel` controls how much the SDK logs (`LogLevel.ERROR`, `LogLevel.WARN`, `LogLevel.INFO`, `LogLevel.DEBUG`). At `DEBUG` every request, response and webhook payload is logged.

Authorization headers, tokens, client secrets and similar values are replaced with `[REDACTED]` in those logs and in the `request` attached to thrown errors. To see the real values, for example while debugging authentication locally, opt in with `logSensitiveData`:

```typescript
const ghl = new HighLevel({
  privateIntegrationToken: 'your-token',
  logLevel: LogLevel.DEBUG,
  logSensitiveData: true // default false. Do not enable in production
});
```

## Usage Examples

**NOTE**: If companyId or locationId is part of query, body or header parameter then you don't need to pass it specifically. But if it is not, then you need to pass it in headers as shown below.

### Working with Contacts

#### Get a Single Contact
```typescript
try {
  const contact = await ghl.contacts.getContact({
    contactId: 'contact-uuid-here'
  },
  {
    headers: {
      locationId // need to pass locationId here so that SDK can fetch the token for the location (as it is not part of body or query parameter)
    },
  });
  
  console.log('Contact details:', contact);
  console.log('Contact name:', contact.contact.name);
} catch (error) {
  console.error('Error fetching contact:', error.message);
}
```

#### Get Multiple Contacts
```typescript
try {
  const contactsList = await ghl.contacts.getContacts({
    locationId: 'your-location-id',
    limit: 20,
    startAfter: 1634567890000 // Unix timestamp
  });
  
  console.log(`Found ${contactsList.contacts.length} contacts`);
  
  contactsList.contacts.forEach(contact => {
    console.log(`${contact.name} - ${contact.email}`);
  });
} catch (error) {
  console.error('Error fetching contacts:', error.message);
}
```

### Working with Other Services

#### Locations
```typescript
// Get all locations
const locations = await ghl.locations.searchLocations();

// As getLocation supports both agency and location token, you can pass which token you want to use using preferredTokenType
const location = await ghl.locations.getLocation(
{
  locationId
},
{
  preferredTokenType: 'location'
}
)
```

#### Campaigns
```typescript
// Get campaigns
const campaigns = await ghl.campaigns.getCampaigns({
  locationId: 'location-id'
});
```

## Error Handling

Every error thrown by the SDK is a `GHLError` with `message`, `statusCode`, the API `response`, the sanitized `request` and a machine-readable `code`. HTTP failures are thrown as a subclass so you can branch with `instanceof`:

| Class | `code` | Thrown for |
|-------|--------|------------|
| `GHLAuthenticationError` | `AUTHENTICATION` | 401 when the token is invalid and could not be refreshed |
| `GHLForbiddenError` | `FORBIDDEN` | 403 |
| `GHLNotFoundError` | `NOT_FOUND` | 404 |
| `GHLValidationError` | `VALIDATION` | 400 and 422 |
| `GHLRateLimitError` | `RATE_LIMIT` | 429, with the parsed headers in `rateLimit` (see [Rate Limit Retry](#rate-limit-retry)) |
| `GHLServerError` | `SERVER` | 5xx |
| `GHLNetworkError` | `NETWORK` | No response received (timeout, DNS failure, connection refused) |
| `GHLError` | `REQUEST`, `UNKNOWN` | The request could not be sent, or any other status code |

```typescript
import {
  GHLError,
  GHLAuthenticationError,
  GHLNotFoundError,
  GHLRateLimitError,
  GHLNetworkError
} from '@gohighlevel/api-client';

try {
  const contact = await ghl.contacts.getContact({
    contactId: 'invalid-contact-id'
  });
} catch (error) {
  if (error instanceof GHLNotFoundError) {
    console.log('Contact not found');
  } else if (error instanceof GHLAuthenticationError) {
    console.log('Authentication failed - check your tokens');
  } else if (error instanceof GHLRateLimitError) {
    console.log('Rate limited', error.rateLimit);
  } else if (error instanceof GHLNetworkError) {
    console.log('Could not reach the API', error.message);
  } else if (error instanceof GHLError) {
    console.error('GHL API Error:', {
      code: error.code,
      message: error.message,
      statusCode: error.statusCode,
      response: error.response,
      request: error.request
    });
  } else {
    console.error('Unexpected error:', error);
  }
}
```

Code written against earlier versions keeps working: every subclass extends `GHLError`, reports `name === 'GHLError'` and still exposes `statusCode`, so `switch (error.statusCode)` style handling is unchanged.

Authorization headers and other secrets are removed from `error.request` unless `logSensitiveData` is enabled (see [Logging](#logging)).

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions:

```typescript
import HighLevel, { 
  HighLevelConfig, 
  ValidConfig,
  RateLimitRetryConfig,
  RateLimitInfo,
  GHLError,
  GHLErrorCode,
  RequestInterceptor,
  ResponseInterceptor 
} from '@gohighlevel/api-client';

// Type-safe configuration
const config: HighLevelConfig = {
  privateIntegrationToken: 'your-token',
  apiVersion: '2021-07-28'
};

const ghl = new HighLevel(config);

// All methods return properly typed responses
const contact: ContactsByIdSuccessfulResponseDto = await ghl.contacts.getContact({
  contactId: 'contact-id'
});

// TypeScript will catch parameter errors at compile time
// ghl.contacts.getContact({}); // ✗ Error: missing contactId
// ghl.contacts.getContact({ contactId: 123 }); // ✗ Error: contactId must be string
```

## API Reference

The SDK provides access to all HighLevel API services. Each one is available as a property on the `HighLevel` instance:

- **adManager** - Ad publishing and reporting
- **affiliateManager** - Affiliate manager
- **agentStudio** - Agent Studio
- **associations** - Contact associations
- **blogs** - Blog management
- **brandBoards** - Brand boards
- **businesses** - Business operations
- **calendars** - Calendar and appointment management
- **campaigns** - Marketing campaigns
- **chatWidget** - Chat widget management
- **companies** - Company/agency management
- **contacts** - Contact management
- **conversationAi** - Conversation AI
- **conversations** - Conversations and messaging
- **courses** - Course management
- **customFields** - Custom field definitions
- **customMenus** - Custom menu management
- **emailIsv** - Email verification
- **emails** - Email templates and campaigns
- **files** - File access
- **forms** - Form management
- **funnels** - Funnel operations
- **invoices** - Invoice management
- **knowledgeBase** - Knowledge base
- **links** - Link management
- **locations** - Location management
- **marketplace** - Marketplace operations
- **medias** - Media file management
- **oauth** - OAuth 2.0 operations
- **objects** - Custom object management
- **opportunities** - Pipeline and opportunity management
- **payments** - Payment processing
- **phoneSystem** - Phone numbers and number pools
- **products** - Product management
- **proposals** - Proposals and estimates
- **saasApi** - SaaS management
- **snapshots** - Snapshot operations
- **socialMediaPosting** - Social planner
- **store** - Online store settings
- **surveys** - Survey management
- **users** - User management
- **voiceAi** - Voice AI
- **workflows** - Workflow automation

The webhook middleware is available as `ghl.webhooks` (see [Webhooks](#webhooks)).

### Configuration Methods

```typescript
// Update configuration
ghl.updateConfig({ apiVersion: '2021-07-28' });

// Get current configuration
const config = ghl.getConfig();

// Get current headers
const headers = ghl.getHeaders();

// Set API version
ghl.setApiVersion('2021-07-28');
```

### Advanced Usage

#### Custom Interceptors
```typescript
// Add request interceptor
const requestInterceptorId = ghl.addRequestInterceptor({
  onFulfilled: (config) => {
    console.log('Making request to:', config.url);
    return config;
  },
  onRejected: (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
});

// Add response interceptor
const responseInterceptorId = ghl.addResponseInterceptor({
  onFulfilled: (response) => {
    console.log('Received response:', response.status);
    return response;
  },
  onRejected: (error) => {
    console.error('Response error:', error);
    return Promise.reject(error);
  }
});

// Remove interceptors when done
ghl.removeRequestInterceptor(requestInterceptorId);
ghl.removeResponseInterceptor(responseInterceptorId);
```

#### Raw HTTP Requests
```typescript
// Make custom HTTP requests using the configured client
const response = await ghl.request({
  method: 'GET',
  url: '/custom-endpoint',
  params: { locationId: 'location-id' }
});

// Get underlying Axios instance for advanced usage
const httpClient = ghl.getHttpClient();
```

---
## Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/GoHighLevel/highlevel-api-docs/issues)
- **Documentation**: [HighLevel API Docs](https://marketplace.gohighlevel.com/docs/)
- **Examples**: [SDK Examples Node](https://github.com/GoHighLevel/ghl-sdk-examples/tree/main/node)

## License

MIT License - see the [LICENSE](LICENSE) file for details.

