import { readFile } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import type { MdxContent } from "@/types";

export const getMdxContentByFileName = async <T>(
  directoryPath: string,
  fileName: string
): Promise<MdxContent<T>> => {
    const dir = join(directoryPath, `${fileName}.mdx`);
    const file = await readFile(dir, "utf8");

    const { content, data } = matter(file);

    return {
      metadata: {
        ...(data as T),
        slug: fileName,
      },
      content
    };
};
