import styles from "@styles/HomePage.module.css";
import PorfolioList from "@/components/PortfolioList";
import type { SearchParams } from "@/types";
import type { Portfolio as PortfolioType } from "@/types";
import { join } from "path";
import { getMdxContent } from "@/helpers/mdx";
import { filterPortfolio, sliceIntoChunks } from "@/helpers/portfolio";
import ScrollingSkillIconList from "@/components/ScrollingSkillList";
import Contact from "@/components/Contact";
import Divider from "@/components/ui/Divider";
import SocialMediaList from "@/components/SocialMediaList";

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
  const pagedPortfolios = sliceIntoChunks(filteredPortfolios);

  return (
    <>
      <section id="about-me" className={styles["about-me"]}>
        <div className={styles["about-me-container"]}>
          <div>
            <h1 className={styles["profile-name"]}>Reg Yu</h1>
            <h4 className={styles["profile-career"]}>Software Engineer</h4>
            <p>
              Hello, I&apos;m Reg. I like to explore new technologies and tinker
              with electronics. I am also passionate about art and video games.
              Tangerines are one of my favorite fruits {"\u{1F34A}"}.

              Hello, I&apos;m Reg. I like to explore new technologies and tinker
              with electronics. I am also passionate about art and video games.
              Tangerines are one of my favorite fruits {"\u{1F34A}"}.
            </p>
          </div>
          <Divider orientation="v" margin={[1.5, 1.5, 1.5, 1]}/>
          <SocialMediaList/>
        </div>
 
        <Divider text="Skills" orientation="h" margin={[3, 0, 2, 0]}/>
        <ScrollingSkillIconList speed={120}/>
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
