/**
 * Splits an array into chunks of a specified size.
 *
 * @param {T[]} array - The array to be split into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @returns {T[][]} - An array of arrays, where each inner array represents a chunk of the original array.
 */
export const sliceIntoChunks = <T>(array: T[], chunkSize: number = 4): T[][] => {
  const result: T[][] = [];
  
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  
  return result;
}