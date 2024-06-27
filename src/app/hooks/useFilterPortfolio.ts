import { Portfolio } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { filterPortfolio } from "@/helpers/portfolio/filterPortfolio";

const useSearchPortfolio = (portfolios: Portfolio[]) => {
  const searchParams = useSearchParams();
  const [filteredPortfolio, setFilteredPortfolios] =
    useState<Portfolio[]>(portfolios);
  const mounted = useRef(true);

  const getFilteredPortfolio = () => {
    const query = searchParams.get("query")?.toString() || "";
    if (portfolios.length === 0) return [];
    if (query === "") return portfolios;
    const filteredPortfolios = filterPortfolio(portfolios, query);

    return filteredPortfolios;
  };

  useEffect(() => {
    if (mounted.current) {
      mounted.current = false;
      return;
    }

    setFilteredPortfolios(getFilteredPortfolio());
  }, [searchParams]);

  return filteredPortfolio;
};

export default useSearchPortfolio;
