# HighLevel API SDK

The official TypeScript/JavaScript SDK for the HighLevel (GoHighLevel) API. This SDK provides a comprehensive interface to interact with all HighLevel API endpoints with built-in authentication, error handling, and automatic token refresh.

## Table of Contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Token Management](#token-management)
- [Usage Examples](#usage-examples)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)
- [API Reference](#api-reference)

## Installation

```bash
npm install @ghl/api-client
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
import HighLevel, { MongoDBSessionStorage, LogLevel } from '@ghl/api-client';
// or
import { HighLevel } from '@ghl/api-client';

// Initialize with private integration token
const ghl = new HighLevel({
  privateIntegrationToken: 'your-private-integration-token',
  logLevel: LogLevel.INFO
});

// Initialize with clientId, clientSecret, and MongoDB storage (recommended)
const ghl = new HighLevel({
  clientId: 'your-oauth-client-id',
  clientSecret: 'your-oauth-client-secret',
  sessionStorage: new MongoDBSessionStorage({
    dbUrl: 'mongodb://localhost:27017',
    dbName: 'ghl_sessions'
  }),
  logLevel: LogLevel.WARN
});
```

#### JavaScript (CommonJS)
```javascript
const HighLevel = require('@ghl/api-client').default;
// or
const { HighLevel } = require('@ghl/api-client');

const ghl = new HighLevel({
  privateIntegrationToken: 'your-private-integration-token'
});
```

#### JavaScript (ES Modules)
```javascript
import HighLevel from '@ghl/api-client';

const ghl = new HighLevel({
  locationAccessToken: 'your-location-access-token'
});
```

## Token Management

### MongoDB Storage

Configure MongoDB storage to store token data and automatically fetch it while making API calls:

```typescript
import { HighLevel, MongoDBSessionStorage } from '@ghl/api-client';

const ghl = new HighLevel({
  clientId: 'your-client-id',
  clientSecret: 'your-client-secret',
  sessionStorage: new MongoDBSessionStorage({
    dbUrl: 'mongodb://localhost:27017',
    dbName: 'ghl_sessions'
  })
});
```

**⚠️ Warning**: Without MongoDB storage, data will be stored in memory by default and will be lost on application restart. This is not recommended for production.

### Custom Storage Implementation

You can also implement your own storage by extending the `SessionStorage` class:

```typescript
import { SessionStorage, ISessionData } from '@ghl/api-client';

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

## Usage Examples

### Working with Contacts

#### Get a Single Contact
```typescript
try {
  const contact = await ghl.contacts.getContact({
    contactId: 'contact-uuid-here'
  });
  
  console.log('Contact details:', contact);
  console.log('Contact name:', contact.contact.name);
  console.log('Contact email:', contact.contact.email);
  console.log('Contact phone:', contact.contact.phone);
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
const locations = await ghl.locations.getLocations();

// Get specific location
const location = await ghl.locations.getLocation({
  locationId: 'location-id'
});
```

#### Campaigns
```typescript
// Get campaigns
const campaigns = await ghl.campaigns.getCampaigns({
  locationId: 'location-id'
});
```

#### Opportunities
```typescript
// Get opportunities
const opportunities = await ghl.opportunities.getOpportunities({
  locationId: 'location-id',
  limit: 20
});
```

### Preferred Token Type

You can specify which token type to prefer for specific API calls where both agency and sub-account token are supported:

```typescript
// Prefer agency token for this call
const location = await ghl.locations.getLocation(
  {
    locationId: 'location-id'
  }, 
  { 
    preferredTokenType: 'agency' 
  }
);
```

## Error Handling

The SDK uses a custom `GHLError` class that provides detailed error information:

```typescript
import { GHLError } from '@ghl/api-client';

try {
  const contact = await ghl.contacts.getContact({
    contactId: 'invalid-contact-id'
  });
} catch (error) {
  if (error instanceof GHLError) {
    console.error('GHL API Error:', {
      message: error.message,
      statusCode: error.statusCode,
      response: error.response,
      request: error.request
    });
    
    // Handle specific error codes
    switch (error.statusCode) {
      case 401:
        console.log('Authentication failed - check your tokens');
        break;
      case 404:
        console.log('Contact not found');
        break;
      case 429:
        console.log('Rate limit exceeded - retry after delay');
        break;
      default:
        console.log('Other API error occurred');
    }
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions:

```typescript
import HighLevel, { 
  HighLevelConfig, 
  GHLError,
  RequestInterceptor,
  ResponseInterceptor 
} from '@ghl/api-client';

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

The SDK provides access to all HighLevel API services:

- **associations** - Manage contact associations
- **blogs** - Blog management
- **businesses** - Business operations
- **calendars** - Calendar and appointment management
- **campaigns** - Marketing campaigns
- **companies** - Company/agency management
- **contacts** - Contact management
- **conversations** - Conversation and messaging
- **courses** - Course management
- **customFields** - Custom field definitions
- **customMenus** - Custom menu management
- **emails** - Email operations
- **forms** - Form management
- **funnels** - Funnel operations
- **invoices** - Invoice management
- **links** - Link management
- **locations** - Location management
- **marketplace** - Marketplace operations
- **medias** - Media file management
- **oauth** - OAuth 2.0 operations
- **objects** - Custom object management
- **opportunities** - Pipeline and opportunity management
- **payments** - Payment processing
- **products** - Product management
- **saas** - SaaS management
- **snapshots** - Snapshot operations
- **socialPlanner** - Social media planning
- **surveys** - Survey management
- **users** - User management
- **workflows** - Workflow automation

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

ISC License - see the [LICENSE](LICENSE) file for details.

