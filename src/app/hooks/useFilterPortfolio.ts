import { Portfolio } from "@/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const useSearchPortfolio = (portfolios: Portfolio[]) => {
  const searchParams = useSearchParams();
  const [filteredPortfolio, setFilteredPortfolios] = useState<Portfolio[]>(portfolios);
  const mounted = useRef(true);

  const getFilteredPortfolio = () => {
    const query = searchParams.get("query")?.toString() || "";

    if (portfolios.length === 0) return [];

    if (query === "") {
      return portfolios;
    }

    const filteredPortfolios = portfolios.filter((p) => {
      return (
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack
          .map((s) => s.toLowerCase().includes(query.toLowerCase()))
          .includes(true)
      );
    });

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
