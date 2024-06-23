import styles from "@styles/HomePage.module.css";
import profilePic from "@public/images/profile-pic.jpg";
import Image from "next/image";
import PorfolioList from "@/components/PortfolioList";
import type { SearchParams } from "@/types";
import type { Portfolio as PortfolioType } from "@/types";
import { join } from "path";
import { getMdxContent } from "@/helpers/mdx";

async function fetchPortfolio() {
  const path = join(process.cwd(), "src/app/data/portfolio");
  const portfolios: Array<PortfolioType> = await getMdxContent<PortfolioType>(
    path
  ).then((portfolios) => portfolios.map((portfolio) => portfolio.metadata));
  return portfolios;
}

const HomePage = async ({ searchParams }: { searchParams: SearchParams }) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const portfolios = await fetchPortfolio();

  return (
    <>
      <section id={styles["about-me-section"]}>
        <div>
          <h1 id={styles["profile-name"]}>Wuheng (Reg) Yu</h1>
          <h4 id={styles["profile-career"]}>Software Developer</h4>
          <p>
            Hello, I&apos;m Reg. I like to explore new technologies and tinker with
            electronics. I am also passionate about art and video games.
            Tangerines are one of my favorite fruits {"\u{1F34A}"}.
          </p>
        </div>
        <Image
          id={styles["profile-pic"]}
          src={profilePic}
          alt="Profile Picture"
        />
      </section>

      <section>
        <h1>Portfolio</h1>
        <PorfolioList portfolios={portfolios} query={query} page={currentPage}/>
      </section>
    </>
  );
};

export default HomePage;
