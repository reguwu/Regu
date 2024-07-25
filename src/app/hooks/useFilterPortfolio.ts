import { Portfolio } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { filterPortfolio } from "@/utils/portfolio/filterPortfolio";


export const useFilterPortfolio = (portfolios: Portfolio[]) => {
  const searchParams = useSearchParams();
  const [filteredPortfolio, setFilteredPortfolios] = useState<Portfolio[]>(portfolios);

  const getFilteredPortfolio = () => {
    const query = searchParams.get("query")?.toString() || "";
    if (portfolios.length === 0) return [];
    if (query === "") return portfolios;
    const filteredPortfolios = filterPortfolio(portfolios, query);

    return filteredPortfolios;
  };

  useEffect(() => {
    setFilteredPortfolios(getFilteredPortfolio());
  }, [searchParams.get("query")]);

  return filteredPortfolio;
};
