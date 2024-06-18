import { join } from "path";
import type { Portfolio } from "@/types";
import { getMdxContentByFileName } from "@/helpers/mdx";
import { MdxContent } from "@/types";
import { getMdxContent } from "@/helpers/mdx";

export const dynamicParams = false;
export async function generateStaticParams() {
  const portfolioPath = join(process.cwd(), "src/app/data/portfolio");
  const portfolios = await getMdxContent<Portfolio>(portfolioPath);
  const paths = portfolios.map((p) => ({ slug: p.metadata.slug }));
  
  return paths;
}

    return <div>My Post: {params.slug}</div>
  }

export default PortfolioPage