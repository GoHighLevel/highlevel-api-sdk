# HighLevel API SDK

The official TypeScript/JavaScript SDK for the HighLevel (GoHighLevel) API. This SDK provides a comprehensive interface to interact with all HighLevel API endpoints with built-in authentication, error handling, and automatic token refresh.

## Table of Contents

- [Installation](#installation)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Token Management](#token-management)
- [Webhooks](#webhooks)
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
  sessionStorage: new MongoDBSessionStorage({
    dbUrl: 'mongodb://localhost:27017',
    dbName: 'ghl_sessions'
  }),
  logLevel: LogLevel.WARN
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

## Webhooks

Handle HighLevel webhooks with built-in signature verification and handles INSTALL and UNINSTALL events for your application.
- INSTALL: In case of bulk installation, it will generate and store the token for all the locations for which installation was triggered
- UNINSTALL: If your app is uninstalled at any location or company, it will remove token for that from the storage which is used by SDK.

**NOTE**: The endpoint which you use should be the one which is configured in `Default Webhook URL` for your application in marketplace. We send INSTALL and UNINSTALL events to default url only.

```typescript
import express from 'express';

const app = express();

// SDK middleware processes webhook 
app.use(bodyParser.json()) // This is required to parse the request body properly
app.use('/webhooks/ghl', ghl.webhooks.subscribe());

// Your handler runs after SDK processing
app.post('/webhooks/ghl', async (req, res) => {
  console.log(req.isSignatureValid)
  // your logic for webhook goes here
  res.json({ success: true });
});

// you can also use SDK to verify signature
ghl.webhooks.verifySignature(payload, signature, ghlPublicKey)
```

The SDK automatically handles signature verification, if it is valid then you will get the flag `isSignatureValid` as true.

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
const locations = await ghl.locations.getLocations();

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

### Lead Intelligence (AI-Powered Scoring) 🚀 NEW

Score leads and predict conversions using rules-based + optional LLM-powered analysis with **60% token savings** via TOON format integration.

#### Basic Lead Scoring
```typescript
// Score all leads in a location
const result = await ghl.leadIntelligence.scoreContacts({
  locationId: 'your-location-id',
  minScore: 70,  // Only return hot leads (70+)
  limit: 100
});

console.log(`Processed ${result.totalProcessed} leads`);
console.log(`Found ${result.successful} hot leads`);

result.scores.forEach(lead => {
  console.log(`Contact ${lead.contactId}: Score ${lead.score}/100`);
  console.log(`  Engagement: ${lead.factors.engagement}/40`);
  console.log(`  Behavioral: ${lead.factors.behavioral}/30`);
  console.log(`  Recency: ${lead.factors.recency}/30`);
  console.log(`  Conversion Probability: ${(lead.prediction?.conversionProbability * 100).toFixed(1)}%`);
});
```

#### LLM-Powered Scoring (60% Token Savings with TOON)
```typescript
// Set up LLM provider (example with OpenAI-compatible API)
import { Configuration, OpenAIApi } from 'openai';

const llmProvider = {
  async scoreLeads(toonData: string, options?: any) {
    const openai = new OpenAIApi(new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    }));

    const prompt = `Analyze these leads and score them 0-100 based on conversion likelihood:
${toonData}

Return JSON array with: contactId, score (0-100), reasoning`;

    const response = await openai.createChatCompletion({
      model: options?.model || 'gpt-4',
      messages: [{ role: 'user', content: prompt }]
    });

    return JSON.parse(response.data.choices[0].message?.content || '[]');
  }
};

ghl.leadIntelligence.setLLMProvider(llmProvider);

// Score with LLM (uses TOON format internally = 60% fewer tokens!)
const result = await ghl.leadIntelligence.scoreContacts({
  locationId: 'your-location-id',
  useLLM: true,
  llmModel: 'gpt-4',
  includeEnrichedData: true
});

console.log(`✅ Token savings: ${result.tokensSaved} tokens saved with TOON format!`);
console.log(`💰 Cost savings: ~${(result.tokensSaved! * 0.00003).toFixed(2)} USD saved`);
```

#### Get Lead Insights
```typescript
const insights = await ghl.leadIntelligence.getLeadInsights(
  'your-location-id',
  {
    startDate: '2024-01-01',
    endDate: '2024-12-31'
  }
);

console.log(`Total Leads: ${insights.totalLeads}`);
console.log(`🔥 Hot Leads (70+): ${insights.hotLeads}`);
console.log(`🌡️  Warm Leads (40-69): ${insights.warmLeads}`);
console.log(`❄️  Cold Leads (<40): ${insights.coldLeads}`);
console.log(`📊 Average Score: ${insights.averageScore.toFixed(1)}`);
console.log(`💯 Conversion Rate: ${(insights.conversionRate * 100).toFixed(1)}%`);

console.log('\nTop Performing Tags:');
insights.topPerformingTags.forEach((tag, idx) => {
  console.log(`${idx + 1}. ${tag.tag}: ${(tag.conversionRate * 100).toFixed(1)}% conversion`);
});
```

#### Predict Deal Close Probability
```typescript
const prediction = await ghl.leadIntelligence.predictDealClose('opportunity-id');

console.log(`Close Probability: ${(prediction.closeProbability * 100).toFixed(1)}%`);
console.log(`Confidence: ${(prediction.confidence * 100).toFixed(1)}%`);
console.log(`Estimated Close Date: ${prediction.estimatedCloseDate}`);
console.log(`Estimated Value: $${prediction.estimatedValue}`);

console.log('\n⚠️ Risk Factors:');
prediction.riskFactors.forEach(risk => console.log(`  - ${risk}`));

console.log('\n✅ Accelerators:');
prediction.accelerators.forEach(accel => console.log(`  - ${accel}`));

console.log('\n💡 Recommended Actions:');
prediction.recommendedActions.forEach(action => console.log(`  - ${action}`));
```

#### Export to TOON Format for LLM Processing
```typescript
// Score leads
const result = await ghl.leadIntelligence.scoreContacts({
  locationId: 'your-location-id'
});

// Export to TOON format (60% smaller than JSON!)
const toonData = ghl.leadIntelligence.exportToTOON(result.scores, {
  delimiter: '\t',      // Tab-separated for max efficiency
  lengthMarker: true    // Add # prefix to array lengths
});

// Send to your LLM for further analysis
// TOON format = 60% fewer tokens = 60% lower API costs!
console.log('TOON format data:', toonData);
```

## Error Handling

The SDK uses a custom `GHLError` class that provides detailed error information:

```typescript
import { GHLError } from '@gohighlevel/api-client';

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
- **leadIntelligence** - AI-powered lead scoring and predictive analytics with TOON integration (60% token savings)
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

MIT License - see the [LICENSE](LICENSE) file for details.

