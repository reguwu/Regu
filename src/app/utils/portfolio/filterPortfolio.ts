import { Portfolio } from "@/types";

/**
 * Filters an array of portfolios based on a query string.
 *
 * @param {Portfolio[]} portfolio - The array of portfolio objects to filter.
 * @param {string} query - The query string to match against the portfolio's name, description, and tech stack.
 * @return {Portfolio[]} The filtered array of portfolios.
 */
export const filterPortfolio = (portfolio: Portfolio[], query: string) => {

  //sort by date in descending order
  const sortedPortfolio = portfolio.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const filteredPortfolios = sortedPortfolio.filter((p) => {
    return (
      p.name?.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack
        ?.map((s) => s.toLowerCase().includes(query.toLowerCase()))
        .includes(true)
    );
  });
  return filteredPortfolios;
};
