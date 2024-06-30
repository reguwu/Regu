import { Portfolio } from "@/types";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { filterPortfolio } from "@/helpers/portfolio/filterPortfolio";
import { useSkipFirstEffect } from "@/hooks/useSkipFirstEffect";

export const useFilterPortfolio = (portfolios: Portfolio[]) => {
  const searchParams = useSearchParams();
  const [filteredPortfolio, setFilteredPortfolios] =
    useState<Portfolio[]>(portfolios);

  const getFilteredPortfolio = () => {
    const query = searchParams.get("query")?.toString() || "";
    if (portfolios.length === 0) return [];
    if (query === "") return portfolios;
    const filteredPortfolios = filterPortfolio(portfolios, query);

    return filteredPortfolios;
  };

  useSkipFirstEffect(() => {
    setFilteredPortfolios(getFilteredPortfolio());
  }, [searchParams.get("query")]);

  return filteredPortfolio;
};
