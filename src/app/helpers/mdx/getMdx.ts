import { readFile } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import { getFileNamesByPathAndExtension } from "@/helpers/file-system";
import type { MdxContent } from "@/types";

export const getMdxContent = async <T>(
  directoryPath: string
): Promise<Array<MdxContent<T>>> => {
  
  const fileNames = await getFileNamesByPathAndExtension(directoryPath,".mdx");

  const files = fileNames.map(async (fileName) => {
    const dir = join(directoryPath, fileName);
    const file = await readFile(dir, "utf8");

    const { content, data } = matter(file);

    return {
      metadata: {
        ...(data as T),
        slug: fileName.replace(".mdx", ""),
      },
      content
    };
  });

  return await Promise.all(files);
};
