import { join } from "path";
import type { Portfolio } from "@/types";
import { getMdxContentByFileName } from "@/utils/mdx";
import { MdxContent } from "@/types";
import { getMdxContent } from "@/utils/mdx";

export const dynamicParams = false;
export async function generateStaticParams() {
  const portfolioPath = join(process.cwd(), "src/app/data/portfolio");
  const portfolios = await getMdxContent<Portfolio>(portfolioPath);
  const paths = portfolios.map((p) => ({ slug: p.metadata.slug }));
  
  return paths;
}

async function fetchPortfolioBySlug(slug: string) {
  const path = join(process.cwd(), "src/app/data/portfolio");
  const portfolio: MdxContent<Portfolio> = await getMdxContentByFileName<
    MdxContent<Portfolio>
  >(path, slug).then((portfolio) => portfolio.metadata);

  return portfolio;
}

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const portfolio = await fetchPortfolioBySlug(params.slug);

  return <div>My Post: {params.slug}</div>;
};

export default PortfolioPage;
