"use client";

import styles from "@styles/PortfolioList.module.css";
import Portfolio from "@/components/Portfolio";
import { Search, Pagination } from "@/components/ui";
import { Portfolio as PortfolioType } from "@/types";
import useFilterPortfolio from "@/hooks/useFilterPortfolio";

interface Props {
  query: string;
  page: number;
  portfolios: PortfolioType[];
}

const PortfolioList: React.FC<Props> = ({portfolios, query, page }) => {
  const filteredPortfolios = useFilterPortfolio(portfolios);

  return (
    <>
      <Search placeholder="Search"/>
      {(filteredPortfolios.length ?? 0) > 0 && (
        <div className={styles["portfolio-list"]}>
          {filteredPortfolios.map((item) => (
            <Portfolio key={item.slug} portfolio={item} />
          ))}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default PortfolioList;
