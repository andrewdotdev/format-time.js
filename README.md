# format-time.ts

A TypeScript package for formatting durations into strings.

## Installation

```bash
npm install format-time.ts
```

# Usage

```ts
/**
 * Formats a duration into a string.
 * @param ms The input duration in milliseconds.
 * @param op Options = ld?: boolean;
 *                     milliseconds?: boolean;
 * @returns The formatted duration string.
 */

format(ms, op)
```

# Examples

```ts
import { format } from 'format-time.ts';

const durationInMilliseconds = 150000; // 2 minutes and 30 seconds

// Default formatting
const formattedDuration = format(durationInMilliseconds);
console.log(formattedDuration); // Output: '2:30'

// Custom formatting options
const customFormattedDuration = format(durationInMilliseconds, { ld: true, milliseconds: true });
console.log(customFormattedDuration); // Output: '2:30.000'
```

# Credits

This package is adapted from the following repositories:

* [sindresorhus/parse-ms](https://github.com/sindresorhus/parse-ms)

* [rafaelrinaldi/add-zero](https://github.com/rafaelrinaldi/add-zero)

A part of the code was inspired from the following repositories:

* [ungoldman/format-duration](https://github.com/ungoldman/format-duration) and this is the [License](https://github.com/ungoldman/format-duration/blob/main/LICENSE.md)