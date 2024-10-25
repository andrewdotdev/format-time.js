interface Options {
  withMs?: boolean;
  complete?: boolean;
}

/**
 * Formats a duration into a string.
 * @param ms The input duration in milliseconds.
 * @param op Options defined on the Options interface.
 * @returns The formatted duration string.
 */
export function format(ms: number, op?: Options): string {
  if (typeof ms !== "number") {
    throw new TypeError("A number was expected");
  }

  const milliseconds = (ms % 1000).toString().padStart(2, "0");
  const seconds = Math.floor((ms / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((ms / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)).toString();

  const withMs = op && op.withMs;
  const complete = op && op.complete;

  let result: string;

  if (days === "0" && hours === "00" && minutes === "00" && seconds !== "00") {
    result = `00:${seconds}`;
  } else if (days === "0" && hours === "00" && minutes !== "00") {
    result = `${minutes}:${seconds}`;
  } else if (days === "0" && hours !== "00") {
    result = `${hours}:${minutes}:${seconds}`;
  } else if (days !== "0") {
    result = `${days}:${hours}:${minutes}:${seconds}`;
  } else {
    result = "00:00";
  }

  if (withMs) {
    result += `.${milliseconds}`;
  }

  if (complete) {
    if (
      days === "0" &&
      hours === "00" &&
      minutes === "00" &&
      seconds !== "00"
    ) {
      result = `${seconds}s`;
    } else if (days === "0" && hours === "00" && minutes !== "00") {
      result = `${minutes}m ${seconds}s`;
    } else if (days === "0" && hours !== "00") {
      result = `${hours}h ${minutes}m ${seconds}s`;
    } else if (days !== "0") {
      result = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
      result = "0s";
    }

    if (withMs) {
      result += ` ${milliseconds}ms`;
    }
  }

  return result;
}
