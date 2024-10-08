import styles from "@styles/HomePage.module.css";
import PorfolioList from "@/components/content/PortfolioList";
import type { SearchParams } from "@/types";
import type { Portfolio as PortfolioType } from "@/types";
import { join } from "path";
import { getMdxContent } from "@/utils/mdx";
import { filterPortfolio, sliceIntoChunks } from "@/utils/portfolio";
import { PORTFOLIO_PER_PAGE } from "@/utils/constant/portfolio";
import ScrollingSkillList from "@/components/content/ScrollingSkillList";
import Contact from "@/components/content/Contact";
import { Divider } from "@/components/ui/divider";
import SocialMediaList from "@/components/content/SocialMediaList";

async function fetchPortfolio() {
  const path = join(process.cwd(), "src/app/data/portfolio");
  const portfolios: Array<PortfolioType> = await getMdxContent<PortfolioType>(
    path
  ).then((portfolios) => portfolios.map((portfolio) => portfolio.metadata));
  return portfolios;
}

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const portfolios = await fetchPortfolio();
  const filteredPortfolios = filterPortfolio(portfolios, query);
  const pagedPortfolios = sliceIntoChunks(filteredPortfolios, PORTFOLIO_PER_PAGE, true);

  return (
    <>
      <section id="home" className={styles["about-me"]}>
        <div className={styles["about-me-container"]}>
          <div>
            <h1 className={styles["profile-name"]}>Reg Yu</h1>
            <h4 className={styles["profile-career"]}>Software Engineer</h4>
            <p>
            Hello, I&apos;m Reg, I like to code 💻 and explore new technologies.
            I think it&apos;s fun making awesome and unique things.
            Some activities I occasionally like to do are drawing ✏️, fishing 🎣, or video games 🎮.
            I also enjoy peaceful art 🎨 and music 🎧 that makes me feel tranquil. 
            </p>
          </div>
          <Divider orientation="v" margin={[1.5, 1.5, 1.5, 1]}/>
          <SocialMediaList/>
        </div>
 
        <Divider text="Skills" orientation="h" margin={[3, 0, 2, 0]}/>
        <ScrollingSkillList speed={120}/>
      </section>

      <section id="portfolio" className={styles["portfolio"]}>
        <h1>Portfolio</h1>
        <PorfolioList
          portfolios={portfolios}
          pagedPortfolios={pagedPortfolios}
          currentPage={currentPage}
        />
      </section>

      <section id="contact" className={styles["contact"]}>
        <h1>Contact</h1>
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
