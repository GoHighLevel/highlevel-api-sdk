# Contributing to HighLevel API SDK

Thank you for your interest in contributing to the HighLevel API SDK! This document provides guidelines for contributing and detailed information about the TOON integration for AI/LLM token cost reduction.

## Table of Contents

- [Getting Started](#getting-started)
- [TOON Integration](#toon-integration)
  - [What is TOON?](#what-is-toon)
  - [Why TOON?](#why-toon)
  - [Where TOON is Used](#where-toon-is-used)
  - [How TOON Works](#how-toon-works)
  - [Adding TOON to New Services](#adding-toon-to-new-services)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)

---

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- TypeScript 5.3.0+
- Git
- A HighLevel developer account

### Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/GoHighLevel/highlevel-api-sdk.git
cd highlevel-api-sdk
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

---

## TOON Integration

### What is TOON?

**TOON (Tabular Object Oriented Notation)** is a token-efficient data serialization format designed specifically for LLM (Large Language Model) applications. It was integrated into this SDK to dramatically reduce the cost of AI-powered features.

**Key Benefits:**
- 🎯 **30-60% Token Reduction** - Significantly smaller than JSON
- 💰 **Cost Savings** - Direct reduction in LLM API costs
- 📊 **Automatic Metrics** - Built-in savings tracking
- 🚀 **Performance** - Faster transmission and processing
- 🔧 **Easy Integration** - Simple API, works with any data

### Why TOON?

#### The Problem

When sending data to LLMs (OpenAI, Claude, etc.) for analysis, every byte counts toward your token usage and API costs. Traditional JSON is verbose and includes significant overhead:

```json
{
  "contacts": [
    {
      "id": "contact_123",
      "name": "John Doe",
      "email": "john@example.com",
      "score": 85,
      "tags": ["hot-lead", "enterprise"]
    },
    {
      "id": "contact_456",
      "name": "Jane Smith",
      "email": "jane@example.com",
      "score": 72,
      "tags": ["warm-lead"]
    }
  ]
}
```
**Size:** ~250 bytes (~62 tokens @ $0.00186/request with GPT-4)

#### The Solution

TOON encodes the same data in a tabular format:

```
contacts	#2
id	name	email	score	tags	#2
contact_123	John Doe	john@example.com	85	hot-lead	enterprise
contact_456	Jane Smith	jane@example.com	72	warm-lead
```
**Size:** ~120 bytes (~30 tokens @ $0.00090/request with GPT-4)

**Savings: 52% fewer bytes = 52% lower costs! 💰**

#### Real-World Impact

**Scenario:** AI-powered lead scoring service processing 10,000 contacts/month

| Metric | Without TOON | With TOON | Savings |
|--------|--------------|-----------|---------|
| Avg Request Size | 25 KB | 12 KB | 52% |
| Tokens per Request | ~6,250 | ~3,000 | 52% |
| Monthly Tokens | 62.5M | 30M | 32.5M |
| Monthly Cost (GPT-4) | $1,875 | $900 | **$975/mo** |
| **Annual Savings** | - | - | **$11,700/yr** 🎉 |

*Based on GPT-4 pricing: $0.03 per 1K input tokens*

### Where TOON is Used

#### Current Implementation

TOON is currently implemented in the following locations:

##### 1. **Lead Intelligence Service** (`lib/code/lead-intelligence/lead-intelligence.ts`)

The Lead Intelligence service uses TOON in 4 key methods:

```typescript
// ✅ Used in scoreContacts() - Lines 56-75
// Converts enriched contact data to TOON before sending to LLM
const { toonData, savings } = encodeToTOON(enrichedContacts, {
  delimiter: '\t',
  lengthMarker: true
});

// ✅ Used in analyzeConversionPatterns() - Lines 137-142
// Encodes historical conversion data for pattern analysis
const toonData = toTOON(conversions, {
  delimiter: '\t',
  lengthMarker: true
});

// ✅ Used in predictDealClose() - Lines 165-169
// Converts opportunity data for deal probability prediction
const toonData = toTOON(opportunity, {
  delimiter: '\t',
  lengthMarker: true
});

// ✅ Used in exportToTOON() - Lines 268-274
// Public method for manual TOON export by developers
exportToTOON(scores, options) {
  return encodeToTOON(scores, options);
}
```

##### 2. **Shared TOON Utilities** (`lib/utils/toon-utils.ts`)

Universal utilities available to **ALL services**:

```typescript
// Core encoding functions
export function encodeToTOON(data, options): { toonData, savings }
export function toTOON(data, options): string

// Pre-built helpers for common use cases
export function prepareContactsForLLM(contacts, fields)
export function prepareOpportunitiesForLLM(opportunities, fields)
export function prepareConversationsForLLM(conversations, fields)

// Utility functions
export function formatSavingsReport(savings): string
export function calculateMonthlySavings(...): ROI_Metrics
```

##### 3. **Main SDK Exports** (`index.ts`)

TOON utilities are exported from the main SDK for easy access:

```typescript
export {
  encodeToTOON,
  toTOON,
  prepareContactsForLLM,
  prepareOpportunitiesForLLM,
  prepareConversationsForLLM,
  formatSavingsReport,
  calculateMonthlySavings
} from './lib/utils/toon-utils';
```

#### Services Ready for TOON Integration

The following services have AI/LLM use cases and can benefit from TOON:

| Service | File Location | AI Use Case | Potential Savings |
|---------|---------------|-------------|-------------------|
| **Voice AI** | `lib/code/voice-ai/voice-ai.ts` | Call transcription analysis, sentiment detection | 40-60% |
| **Conversations** | `lib/code/conversations/conversations.ts` | Chat history analysis, intent classification | 50-60% |
| **Campaigns** | `lib/code/campaigns/campaigns.ts` | Performance analysis, optimization recommendations | 30-50% |
| **Emails** | `lib/code/emails/emails.ts` | Content analysis, subject line optimization | 40-55% |
| **Workflows** | `lib/code/workflows/workflows.ts` | AI-powered trigger optimization | 35-50% |
| **Forms** | `lib/code/forms/forms.ts` | Response analysis, pattern detection | 45-55% |
| **Opportunities** | `lib/code/opportunities/opportunities.ts` | Deal analysis, win probability prediction | 50-60% |

### How TOON Works

#### Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Developer's Code                          │
│  (Contacts, Opportunities, Conversations, etc.)              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              TOON Utilities (lib/utils/toon-utils.ts)       │
│  • encodeToTOON()  - Converts data + calculates savings     │
│  • toTOON()        - Simple conversion                       │
│  • prepareXForLLM() - Pre-built helpers                      │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│         @toon-format/toon Package (npm dependency)           │
│  • encode() - Core TOON encoding algorithm                   │
│  • Tabular format conversion                                 │
│  • Length markers (#) for arrays                             │
│  • Tab delimiter for efficiency                              │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                  TOON-Encoded String                         │
│  contacts  #2                                                │
│  id    name         email              score                 │
│  c123  John Doe     john@ex.com        85                    │
│  c456  Jane Smith   jane@ex.com        72                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│          LLM Provider (OpenAI, Claude, etc.)                 │
│  • Processes TOON data (60% fewer tokens)                    │
│  • Returns AI analysis/predictions                           │
│  • 💰 Lower costs due to reduced token usage                 │
└─────────────────────────────────────────────────────────────┘
```

#### Encoding Process

1. **Input Data** (JavaScript objects/arrays)
2. **Field Extraction** - Identifies all unique keys
3. **Header Creation** - Generates tab-separated header row
4. **Array Marking** - Adds `#count` markers for arrays
5. **Data Serialization** - Converts values to tab-separated rows
6. **Metrics Calculation** - Compares TOON size vs JSON size
7. **Output** - Returns TOON string + savings metrics

#### Example Transformation

**Input (JavaScript):**
```javascript
const contacts = [
  { id: '123', name: 'John', score: 85, tags: ['hot', 'vip'] },
  { id: '456', name: 'Jane', score: 72, tags: ['warm'] }
];
```

**Step 1: Extract Fields**
```
Fields: id, name, score, tags
```

**Step 2: Create Header**
```
contacts	#2
id	name	score	tags	#2	#1
```

**Step 3: Serialize Data**
```
contacts	#2
id	name	score	tags	#2	#1
123	John	85	hot	vip
456	Jane	72	warm
```

**Step 4: Calculate Savings**
```javascript
{
  originalSize: 156,
  toonSize: 78,
  bytesSaved: 78,
  percentageSaved: 50,
  estimatedTokensSaved: 19,
  estimatedCostSavings: 0.00057
}
```

### Adding TOON to New Services

#### Step-by-Step Guide

##### 1. **Import TOON Utilities**

```typescript
import { encodeToTOON, toTOON, prepareContactsForLLM } from '../../utils/toon-utils';
```

##### 2. **Use in Your Service Method**

**Option A: Full Metrics (Recommended for user-facing features)**
```typescript
async analyzeWithAI(data: any[]): Promise<AIAnalysis> {
  // Convert to TOON with automatic savings tracking
  const { toonData, savings } = encodeToTOON(data, {
    delimiter: '\t',
    lengthMarker: true
  });

  // Log savings (optional but helpful for debugging)
  console.log(`💰 Saved ${savings.estimatedTokensSaved} tokens ($${savings.estimatedCostSavings})`);

  // Send to LLM provider
  const analysis = await this.llmProvider.analyze(toonData);

  return {
    ...analysis,
    tokensSaved: savings.estimatedTokensSaved
  };
}
```

**Option B: Simple Conversion (For internal use)**
```typescript
async quickAnalysis(data: any[]): Promise<void> {
  // Simple conversion without metrics
  const toonData = toTOON(data, {
    delimiter: '\t',
    lengthMarker: true
  });

  await this.llmProvider.process(toonData);
}
```

**Option C: Use Pre-built Helpers**
```typescript
async analyzeContacts(contacts: Contact[]): Promise<Insights> {
  // Use specialized helper for contacts
  const { toonData, savings } = prepareContactsForLLM(
    contacts,
    ['id', 'name', 'email', 'score', 'tags'] // Only needed fields
  );

  return await this.llmProvider.analyze(toonData);
}
```

##### 3. **Document Token Savings**

Add savings information to your return types:

```typescript
export interface AIAnalysisResult {
  analysis: string;
  confidence: number;
  tokensSaved?: number;        // ✅ Add this
  costSavings?: number;         // ✅ Add this
}
```

##### 4. **Update README Examples**

Add usage examples showing TOON benefits:

```markdown
### Using AI Analysis with Token Savings

\`\`\`typescript
import { formatSavingsReport } from '@gohighlevel/api-client';

const result = await ghl.yourService.analyzeWithAI(data);

console.log(formatSavingsReport({
  estimatedTokensSaved: result.tokensSaved,
  // ... other metrics
}));
\`\`\`
```

##### 5. **Test Your Implementation**

```typescript
// Test TOON encoding
const testData = [{ id: '1', value: 'test' }];
const { toonData, savings } = encodeToTOON(testData);

console.assert(savings.percentageSaved > 0, 'Should have token savings');
console.assert(toonData.includes('\t'), 'Should use tab delimiter');
```

#### Best Practices

✅ **DO:**
- Use TOON for any data sent to LLMs (OpenAI, Claude, etc.)
- Include only necessary fields to maximize savings
- Track and report token savings to users
- Use `prepareXForLLM()` helpers when available
- Set `delimiter: '\t'` for maximum efficiency
- Enable `lengthMarker: true` for arrays

❌ **DON'T:**
- Use TOON for data not going to LLMs (unnecessary overhead)
- Include sensitive fields that LLM doesn't need
- Forget to handle TOON encoding errors
- Assume all LLMs understand TOON (add context in prompts)

#### Example: Adding TOON to Voice AI Service

```typescript
// File: lib/code/voice-ai/voice-ai.ts

import { encodeToTOON } from '../../utils/toon-utils';

export class VoiceAi {
  // ... existing code ...

  /**
   * Analyze call transcriptions with AI sentiment detection
   * Uses TOON format for 60% token cost reduction
   */
  async analyzeCallSentiment(
    callIds: string[],
    options?: { llmProvider?: LLMProvider }
  ): Promise<SentimentAnalysis> {
    // Get call transcriptions
    const calls = await this.getCalls(callIds);
    
    // Prepare data with only needed fields
    const callData = calls.map(call => ({
      id: call.id,
      transcript: call.transcript,
      duration: call.duration,
      speaker: call.speaker
    }));

    // Convert to TOON format (60% token savings!)
    const { toonData, savings } = encodeToTOON(callData, {
      delimiter: '\t',
      lengthMarker: true
    });

    // Send to LLM for analysis
    const provider = options?.llmProvider || this.defaultLLMProvider;
    const analysis = await provider.analyze(toonData, {
      prompt: 'Analyze sentiment of these call transcriptions (TOON format)'
    });

    return {
      ...analysis,
      tokensSaved: savings.estimatedTokensSaved,
      costSavings: savings.estimatedCostSavings
    };
  }
}
```

---

## Development Workflow

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions/updates

Example: `feature/toon-integration-campaigns`

### Commit Message Format

Follow conventional commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `refactor` - Code refactoring
- `test` - Testing
- `chore` - Maintenance

**Example:**
```
feat(voice-ai): Add TOON integration for call transcription analysis

- Integrated TOON encoding for 60% token savings
- Added analyzeCallSentiment() method with LLM support
- Updated tests and documentation
- Estimated savings: $500/month for typical usage

Closes #123
```

---

## Code Standards

### TypeScript

- Use TypeScript strict mode
- Define interfaces for all public APIs
- Avoid `any` - use proper types or generics
- Document all public methods with JSDoc

```typescript
/**
 * Analyze data with AI using TOON format
 * @param data - Data to analyze
 * @param options - Analysis options
 * @returns Analysis result with token savings metrics
 * @throws {GHLError} If LLM provider fails
 */
async analyzeWithAI(
  data: any[],
  options?: AnalysisOptions
): Promise<AnalysisResult> {
  // Implementation
}
```

### File Structure

```
lib/
  code/
    your-service/
      your-service.ts          # Main service class
      models/
        your-service.ts        # TypeScript interfaces
  utils/
    toon-utils.ts              # Shared TOON utilities
    request-utils.ts           # HTTP utilities
```

### Error Handling

Always use the SDK's error handling:

```typescript
import { GHLError } from '../../HighLevel';

try {
  const { toonData, savings } = encodeToTOON(data);
  return await this.llmProvider.analyze(toonData);
} catch (error) {
  throw new GHLError('AI analysis failed', {
    statusCode: 500,
    originalError: error
  });
}
```

---

## Testing

### Running Tests

```bash
npm test
```

### Testing TOON Integration

```typescript
import { encodeToTOON, toTOON } from './lib/utils/toon-utils';

describe('TOON Integration', () => {
  it('should reduce token count by at least 30%', () => {
    const data = generateLargeDataset();
    const { savings } = encodeToTOON(data);
    
    expect(savings.percentageSaved).toBeGreaterThan(30);
  });

  it('should handle empty arrays', () => {
    const { toonData } = encodeToTOON([]);
    expect(toonData).toBeDefined();
  });

  it('should preserve data structure', () => {
    const original = [{ id: '1', value: 'test' }];
    const { toonData } = encodeToTOON(original);
    
    // Verify data is properly encoded
    expect(toonData).toContain('id');
    expect(toonData).toContain('value');
  });
});
```

---

## Pull Request Process

### Before Submitting

1. ✅ **Test your changes**
   ```bash
   npm run build
   npm test
   ```

2. ✅ **Update documentation**
   - Add JSDoc comments
   - Update README.md with examples
   - Update this CONTRIBUTION.md if adding TOON to new service

3. ✅ **Calculate and document savings**
   - Measure token reduction percentage
   - Estimate monthly cost savings
   - Include in PR description

4. ✅ **Check code style**
   ```bash
   npm run lint
   ```

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update
- [ ] TOON integration

## TOON Integration Details (if applicable)
- **Service:** Name of service
- **Use Case:** What AI feature uses TOON
- **Token Savings:** XX% reduction
- **Estimated Monthly Savings:** $XXX for typical usage

## Testing
- [ ] Unit tests added/updated
- [ ] Manual testing completed
- [ ] TOON encoding verified

## Documentation
- [ ] README.md updated
- [ ] CONTRIBUTION.md updated (if adding TOON)
- [ ] JSDoc comments added
- [ ] Examples provided

## Screenshots/Examples
(If applicable)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No breaking changes (or documented if unavoidable)
```

### Review Process

1. Automated checks (CI/CD) must pass
2. Code review by maintainers
3. Documentation review
4. Approval required before merge

---

## Questions?

- **GitHub Issues:** [github.com/GoHighLevel/highlevel-api-sdk/issues](https://github.com/GoHighLevel/highlevel-api-sdk/issues)
- **Documentation:** [README.md](./README.md)
- **TOON Package:** [@toon-format/toon](https://www.npmjs.com/package/@toon-format/toon)

---

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Acknowledgments

Special thanks to:
- The TOON format creators for enabling massive token cost reductions
- All contributors who help make this SDK better
- The HighLevel community for feedback and support

**Happy Contributing! 🚀**
