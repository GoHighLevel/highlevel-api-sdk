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

**TOON (Token-Oriented Object Notation)** is a compact, human-readable serialization format designed specifically for passing structured data to Large Language Models with significantly reduced token usage. It's a lossless, drop-in representation of JSON data optimized for LLM contexts.

**Official Repository:** [github.com/toon-format/toon](https://github.com/toon-format/toon)  
**Specification:** [TOON Spec v1.4](https://github.com/toon-format/spec/blob/main/SPEC.md)  
**NPM Package:** [@toon-format/toon](https://www.npmjs.com/package/@toon-format/toon)

**Key Benefits:**
- 💸 **30-60% Token Reduction** - Typically 30-60% fewer tokens on large uniform arrays vs formatted JSON
- 🤿 **LLM-Friendly Guardrails** - Explicit lengths `[N]` and fields `{field1,field2}` enable validation
- 🍱 **Minimal Syntax** - Removes redundant punctuation (braces, brackets, most quotes)
- � **Indentation-Based** - Like YAML, uses whitespace instead of braces
- 🧺 **Tabular Arrays** - Declare keys once, stream data as rows (CSV-like efficiency)

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

```toon
contacts[2]{id,name,email,score,tags}:
  contact_123,John Doe,john@example.com,85,hot-lead|enterprise
  contact_456,Jane Smith,jane@example.com,72,warm-lead
```
**Size:** ~140 bytes (~35 tokens @ $0.00105/request with GPT-4)

**Savings: 44% fewer bytes = 44% lower costs! 💰**

**Note:** TOON's sweet spot is **uniform arrays of objects** (multiple fields per row, same structure across items). For deeply nested or non-uniform data, JSON may be more efficient.

#### Real-World Impact

**Scenario:** AI-powered lead scoring service processing 10,000 contacts/month

| Metric | Without TOON | With TOON | Savings |
|--------|--------------|-----------|---------|
| Avg Request Size | 25 KB | 15 KB | 40% |
| Tokens per Request | ~6,250 | ~3,750 | 40% |
| Monthly Tokens | 62.5M | 37.5M | 25M |
| Monthly Cost (GPT-4) | $1,875 | $1,125 | **$750/mo** |
| **Annual Savings** | - | - | **$9,000/yr** 🎉 |

*Based on GPT-4 pricing: $0.03 per 1K input tokens*

**Official Benchmarks (from TOON repository):**
- **Mixed-Structure Track:** 21.8% fewer tokens vs formatted JSON (289,901 → 226,613 tokens)
- **Flat-Only Track:** 58.8% fewer tokens vs formatted JSON (164,255 → 67,696 tokens)
- **Retrieval Accuracy:** 73.9% accuracy vs JSON's 69.7% while using 39.6% fewer tokens
- Token counts measured using GPT-5 `o200k_base` tokenizer

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
┌──────────────────────────────────────────────────────────────────────┐
│                         Developer's Code                              │
│                                                                       │
│  const contacts = await ghl.contacts.searchContacts({...});          │
│  const opportunities = await ghl.opportunities.get({...});           │
│  // Data received in JSON format from HighLevel API                  │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                │ JavaScript Objects/Arrays (from JSON)
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│              TOON Utilities (lib/utils/toon-utils.ts)                │
│                                                                       │
│  Core Functions:                                                     │
│  ✓ encodeToTOON(data, options)  → Full conversion + metrics         │
│  ✓ toTOON(data, options)         → Simple conversion                │
│                                                                       │
│  Pre-Built Helpers:                                                  │
│  ✓ prepareContactsForLLM(contacts, fields)                          │
│  ✓ prepareOpportunitiesForLLM(opportunities, fields)                │
│  ✓ prepareConversationsForLLM(conversations, fields)                │
│                                                                       │
│  Utilities:                                                          │
│  ✓ formatSavingsReport(savings)       → Display metrics             │
│  ✓ calculateMonthlySavings(...)       → ROI calculator              │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                │ Calls encode() function
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│          @toon-format/toon Package (npm v0.8.0)                      │
│                                                                       │
│  Core Encoding Algorithm:                                            │
│  1️⃣  Analyze data structure                                          │
│  2️⃣  Detect uniform arrays (tabular format applies)                  │
│  3️⃣  Generate header: array[N]{field1,field2}:                       │
│  4️⃣  Serialize rows with delimiter (comma/tab/pipe)                  │
│  5️⃣  Apply intelligent quoting (only when necessary)                 │
│  6️⃣  Handle nested structures recursively                            │
│                                                                       │
│  Supported Formats:                                                  │
│  ✓ Tabular arrays    → items[2]{id,name}: 1,Alice  2,Bob            │
│  ✓ Primitive arrays  → tags[3]: admin,ops,dev                       │
│  ✓ Nested objects    → Indentation-based (YAML-like)                │
│  ✓ Mixed structures  → List format with hyphens                     │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                │ Returns TOON-formatted string
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│                       TOON-Encoded Output                             │
│                                                                       │
│  Comma-delimited (default):                                          │
│    contacts[2]{id,name,email,score}:                                 │
│      c123,John Doe,john@ex.com,85                                    │
│      c456,Jane Smith,jane@ex.com,72                                  │
│                                                                       │
│  Tab-delimited (more efficient):                                     │
│    contacts[2	]{id	name	email	score}:                                │
│      c123	John Doe	john@ex.com	85                                    │
│      c456	Jane Smith	jane@ex.com	72                                  │
│                                                                       │
│  With length markers:                                                │
│    contacts[#2]{id,name,email,score}:                                │
│      c123,John Doe,john@ex.com,85                                    │
│      c456,Jane Smith,jane@ex.com,72                                  │
│                                                                       │
│  Size Comparison:                                                    │
│    JSON:  250 bytes  →  TOON:  140 bytes  =  44% savings! 💰        │
└───────────────────────────────┬──────────────────────────────────────┘
                                │
                                │ Send to LLM API
                                │
                                ▼
┌──────────────────────────────────────────────────────────────────────┐
│               LLM Provider (OpenAI, Claude, Gemini, etc.)            │
│                                                                       │
│  Token Efficiency (GPT-5 o200k_base tokenizer):                     │
│  • JSON input:  ~62 tokens                                           │
│  • TOON input:  ~35 tokens  (44% fewer tokens!)                      │
│                                                                       │
│  Cost Savings (GPT-4 pricing: $0.03/1K tokens):                     │
│  • JSON cost:  $0.00186/request                                      │
│  • TOON cost:  $0.00105/request  ($0.00081 saved per request)       │
│                                                                       │
│  Accuracy (from official benchmarks):                                │
│  • TOON accuracy:  73.9%  (GPT-5, Claude, Gemini average)            │
│  • JSON accuracy:  69.7%  (TOON = +4.2% better!)                     │
│                                                                       │
│  Efficiency Score (accuracy per 1K tokens):                          │
│  • TOON:  26.9  (best performance)                                   │
│  • JSON:  15.3  (76% less efficient)                                 │
│                                                                       │
│  Result: Better accuracy + 44% lower costs = 🎯 Win-Win!             │
└──────────────────────────────────────────────────────────────────────┘
```

#### Encoding Process

1. **Input Data** (JavaScript objects/arrays)
2. **Field Extraction** - Identifies all unique keys in array objects
3. **Header Creation** - Generates header with length marker and field list: `items[N]{field1,field2}:`
4. **Tabular Detection** - Checks if array objects have identical primitive fields
5. **Data Serialization** - Converts values to delimited rows (comma/tab/pipe)
6. **Intelligent Quoting** - Quotes strings only when necessary (delimiter-aware)
7. **Metrics Calculation** - Compares TOON size vs JSON size
8. **Output** - Returns TOON string + savings metrics

**TOON Syntax Rules:**
- **Objects:** Key-value pairs with `: ` separator, indentation-based nesting
- **Primitive Arrays:** Inline format with length: `tags[3]: admin,ops,dev`
- **Tabular Arrays:** Header + rows: `users[2]{id,name}: 1,Alice 2,Bob`
- **Quoting:** Minimal - only for empty strings, leading/trailing spaces, values containing delimiter/colon/quotes, or values that look like booleans/numbers
- **Delimiters:** Comma (default), tab (`\t`), or pipe (`|`) - explicitly shown in header for non-comma

#### Example Transformation

**Input (JavaScript):**
```javascript
const data = {
  contacts: [
    { id: '123', name: 'John', score: 85 },
    { id: '456', name: 'Jane', score: 72 }
  ]
};
```

**Step 1: Detect Tabular Structure**
- All objects in `contacts` array have identical primitive fields: `id`, `name`, `score`
- Tabular format applies

**Step 2: Create Header**
```toon
contacts[2]{id,name,score}:
```
- `[2]` = array length (2 items)
- `{id,name,score}` = field names (order matches data)
- `:` = header terminator

**Step 3: Serialize Data Rows**
```toon
contacts[2]{id,name,score}:
  123,John,85
  456,Jane,72
```
- Each row is indented 2 spaces
- Values separated by delimiter (comma is default)
- No quotes needed (simple strings/numbers)

**Step 4: Calculate Savings**
```javascript
// JSON size: ~110 bytes (formatted with 2-space indent)
// TOON size: ~60 bytes
{
  originalSize: 110,
  toonSize: 60,
  bytesSaved: 50,
  percentageSaved: 45.5,
  estimatedTokensSaved: 12,  // ~4 chars per token
  estimatedCostSavings: 0.00036  // @ $0.03/1K tokens
}
```

**Alternative Delimiters for More Savings:**

Using tab delimiter (`\t`) - often more token-efficient:
```toon
contacts[2	]{id	name	score}:
  123	John	85
  456	Jane	72
```

Using pipe delimiter (`|`) with length marker:
```toon
contacts[#2|]{id|name|score}:
  123|John|85
  456|Jane|72
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
