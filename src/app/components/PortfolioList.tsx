import styles from "@styles/PortfolioList.module.css";
import React from "react";
import type { Portfolio as PortfolioType } from "@/types";
import Portfolio from "@/components/Portfolio";

interface Props {
  portfolios: Array<PortfolioType>;
}

const PortfolioList: React.FC<Props> = ({ portfolios }) => {
  return (
    <>
      {(portfolios.length ?? 0) > 0 && (
        <div className={styles["portfolio-list"]}>
          {portfolios.map((item) => 
            <Portfolio key={item.slug} portfolio={item} />
          )}
        </div>
      )}
    </>
  );
};

export default PortfolioList;
