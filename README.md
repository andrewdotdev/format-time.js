# ms-humanizer
<!-- Thanks for reading -->
A package for formatting ms into a readable time format.

## Installation

```bash
npm install ms-humanizer
```

# Usage

```ts
/**
 * Formats a ms into a readable time format.
 * @param ms The input duration in milliseconds.
 * @param op Options = withMs?: boolean;
 *                     complete?: boolean;
 * @returns The formatted duration string.
 */

format(ms, op)
```

# Examples

```ts
import { format } from 'ms-humanizer';

const durationInMilliseconds = 150000; // 2 minutes and 30 seconds

// Default formatting
const formattedDuration: string = format(durationInMilliseconds);
console.log(formattedDuration); // Output: '02:30'

// Custom formatting options
const customFormattedDuration: string = format(durationInMilliseconds, { withMs: true, complete: true });
console.log(customFormattedDuration); // Output: '02m 30s 00ms'
```
