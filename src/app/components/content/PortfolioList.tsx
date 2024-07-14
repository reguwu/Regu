"use client";

import styles from "@styles/PortfolioList.module.css";
import Portfolio from "@/components/content/PortfolioItem";
import { Search, Pagination } from "@/components/content-navigation";
import { Portfolio as PortfolioType } from "@/types";
import { useFilterPortfolio } from "@/hooks/useFilterPortfolio";
import { sliceIntoChunks } from "@/utils/portfolio";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSkipFirstEffect } from "@/hooks";
import { PORTFOLIO_PER_PAGE } from "@/utils/constant/portfolio";
import { variants } from "@/utils/animation";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"

interface Props {
  currentPage: number;
  portfolios: PortfolioType[];
  pagedPortfolios: PortfolioType[][];
}

const PortfolioList: React.FC<Props> = ({
  portfolios,
  pagedPortfolios,
  currentPage,
}) => {
  const searchParams = useSearchParams();
  const [updatedCurrentPage, setCurrentPage] = useState(currentPage);
  const [updatedPagedPortfolios, setPagedPortfolios] = useState(pagedPortfolios);
  const filteredPortfolios = useFilterPortfolio(portfolios);
  const pageIndex = (updatedCurrentPage <= updatedPagedPortfolios.length && updatedCurrentPage > 0)
  ? updatedCurrentPage - 1 : 0;

  useSkipFirstEffect(() => {
    setPagedPortfolios(sliceIntoChunks(filteredPortfolios, PORTFOLIO_PER_PAGE, true));
  }, [filteredPortfolios]);

  useSkipFirstEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams.get("page")]);

  return (
    <>
      <Search placeholder="Search" />
      <LazyMotion features={domAnimation}>
        <AnimatePresence initial={false}>
          {(filteredPortfolios.length ?? 0) > 0 
            ? (<m.div className={styles["portfolio-list"]}
                key={pageIndex}
                variants={variants.container} 
                initial="hidden"
                animate="visible"
              >
                {updatedPagedPortfolios[pageIndex]?.map((item, index) => (
                  item === null 
                  ? <div  key={index} className={styles["placeholder"]}></div> 
                  : <Portfolio key={item.slug} portfolio={item}/>
                ))}
              </m.div>)
            : <m.div className={styles["no-result"]}
                key="no-result"
                variants={variants.container} 
                initial="hidden"
                animate="visible"
              >
                <h4>Search Result</h4>
                <p>No results found</p>
                <p>{"\u{1F343}"}</p>
              </m.div>
          }
        </AnimatePresence>
      </LazyMotion>
      <Pagination
        totalPages={updatedPagedPortfolios.length}
        currentPage={updatedCurrentPage}
      />
    </>
  );
};

export default PortfolioList;
