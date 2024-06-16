import { readdir } from "fs/promises";
import { extname } from "path";

/**
 * Reads the contents of a directory in the data directory of the project and returns an array of file names with the ".mdx" extension.
 *
 * @param {string} path - The path of the directory to read.
 * @param {String} ext - The file extension to filter by.
 * @return {Promise<Array<string>>} A promise that resolves to an array of file names with the specified extension.
 */
export const getFileNamesByPathAndExtension = async (
  path: string,
  ext: String
): Promise<Array<string>> => {
  const fileNames = (await readdir(path)).filter((file) => extname(file) === ext);

  return fileNames;
};
