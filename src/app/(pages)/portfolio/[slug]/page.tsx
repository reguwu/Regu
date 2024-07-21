import { join } from "path";
import type { Portfolio } from "@/types";
import { getMdxContentByFileName } from "@/utils/mdx";
import { MdxContent } from "@/types";
import { getMdxContent } from "@/utils/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components/content/mdx";
import styles from "@styles/PortfolioPage.module.css";
import SkillList from "@/components/content/SkillList";
import { formatDateString } from "@/utils/date";
import { LightboxWrapper } from "@/components/ui/navigation/lightbox";
import { CATEGORY_COLOR } from "@/utils/constant";
import Link from "next/link";
import Icon from "@/components/content/Icon";
import { Divider } from "@/components/ui/divider";
import { Slide } from "yet-another-react-lightbox";

export const dynamicParams = false;
export async function generateStaticParams() {
  const portfolioPath = join(process.cwd(), "src/app/data/portfolio");
  const portfolios = await getMdxContent<Portfolio>(portfolioPath);
  const paths = portfolios.map((p) => ({ slug: p.metadata.slug }));
  
  return paths;
}

async function fetchPortfolioBySlug(slug: string) {
  const path = join(process.cwd(), "src/app/data/portfolio");
  const portfolio: MdxContent<Portfolio> = await getMdxContentByFileName<Portfolio>(path, slug);

  return portfolio;
}

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  const portfolio = await fetchPortfolioBySlug(params.slug);

  return (
    <>
      <article className={styles["article"]}>
        <div className={styles["header-container"]}>
          <div className={styles["header"]}>
            <div>{portfolio.metadata.name}</div>
            <span style={{backgroundColor: `${CATEGORY_COLOR[portfolio.metadata.category]}`}}>
              {portfolio.metadata.category}
            </span>
            <span>{formatDateString(portfolio.metadata.date, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className={styles["links-container"]}>
            <div> 
              <Link href={portfolio.metadata.link.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github-2" size={25} />
                <span>Source Code <Icon name="external-link" size={12.5} /></span>
              </Link>
            </div>
            <div>
              <Link href={portfolio.metadata.link.live} target="_blank" rel="noopener noreferrer">
                <Icon name="computer" size={25} />
                <span>Live <Icon name="external-link" size={12.5} /></span>
              </Link>
            </div>
          </div>
        </div>

        <SkillList iconNames={portfolio.metadata.techStack} verbose/>
        <Divider text="Gallery" margin={[2.5, 0, 1.5, 0]}/>
        <LightboxWrapper slides={portfolio.metadata.gallery as Slide[]}/>

        <div className={styles["mdx-content"]}>
          <MDXRemote source={portfolio.content} components={MdxComponents}/>
        </div>
      </article>
    </>
  )
};

export default PortfolioPage;
