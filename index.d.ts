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
declare function format(ms: number, op?: Options): string;

export { format };