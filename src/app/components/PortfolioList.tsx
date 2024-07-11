"use client";

import styles from "@styles/PortfolioList.module.css";
import Portfolio from "@/components/Portfolio";
import { Search, Pagination } from "@/components/ui";
import { Portfolio as PortfolioType } from "@/types";
import { useFilterPortfolio } from "@/hooks/useFilterPortfolio";
import { sliceIntoChunks } from "@/helpers/portfolio";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSkipFirstEffect } from "@/hooks";

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
  const [updatedPagedPortfolios, setPagedPortfolios] =
    useState(pagedPortfolios);
  const filteredPortfolios = useFilterPortfolio(portfolios);

  useSkipFirstEffect(() => {
    setPagedPortfolios(sliceIntoChunks(filteredPortfolios, 4, true));
  }, [filteredPortfolios]);

  useSkipFirstEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams.get("page")]);

  return (
    <>
      <Search placeholder="Search" />
      {(filteredPortfolios.length ?? 0) > 0 && (
        <div className={styles["portfolio-list"]}>
          {updatedPagedPortfolios[
            updatedCurrentPage <= updatedPagedPortfolios.length &&
            updatedCurrentPage > 0
              ? updatedCurrentPage - 1
              : 0
          ]?.map((item, index) => (
            item === null 
            ? <div key={index} className={styles["placeholder"]}></div> 
            : <Portfolio key={item.slug} portfolio={item} />
          ))}
        </div>
      )}
      <Pagination
        totalPages={updatedPagedPortfolios.length}
        currentPage={updatedCurrentPage}
        query = {searchParams.get("query") || ""}
      />
    </>
  );
};

export default PortfolioList;
