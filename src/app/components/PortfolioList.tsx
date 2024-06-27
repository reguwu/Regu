"use client";

import styles from "@styles/PortfolioList.module.css";
import Portfolio from "@/components/Portfolio";
import { Search, Pagination } from "@/components/ui";
import { Portfolio as PortfolioType } from "@/types";
import useFilterPortfolio from "@/hooks/useFilterPortfolio";
import { sliceIntoChunks } from "@/helpers/portfolio";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
    setPagedPortfolios(sliceIntoChunks(filteredPortfolios));
  }, [filteredPortfolios]);

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
          ]?.map((item) => (
            <Portfolio key={item.slug} portfolio={item} />
          ))}
        </div>
      )}
      <Pagination
        totalPages={updatedPagedPortfolios.length}
        currentPage={updatedCurrentPage}
      />
    </>
  );
};

export default PortfolioList;
