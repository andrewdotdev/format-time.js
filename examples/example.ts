import { format } from "../dist/main.js";

const durationInMilliseconds = 150000; // 2 minutes and 30 seconds

// Default formatting
const formattedDuration: string = format(durationInMilliseconds);
console.log(formattedDuration); // Output: '2:30'

// Custom formatting options
const customFormattedDuration: string = format(durationInMilliseconds, {
  withMs: true,
  complete: true,
});
console.log(customFormattedDuration); // Output: '2m 30s 0ms'
