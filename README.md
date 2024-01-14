# format-time.js

A package for formatting ms into a readable time format.

## Installation

```bash
npm install format-time.js
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
import { format } from 'format-time.js';

const durationInMilliseconds = 150000; // 2 minutes and 30 seconds

// Default formatting
const formattedDuration = format(durationInMilliseconds);
console.log(formattedDuration); // Output: '2:30'

// Custom formatting options
const customFormattedDuration = format(durationInMilliseconds, { withMs: true, complete: true });
console.log(customFormattedDuration); // Output: '2m 30s 0ms'
```

# Credits

This package adapts code snippets from the following repositories:

* [sindresorhus/parse-ms](https://github.com/sindresorhus/parse-ms)

* [rafaelrinaldi/add-zero](https://github.com/rafaelrinaldi/add-zero)
