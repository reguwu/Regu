import { Portfolio } from "@/types";

/**
 * Filters an array of portfolios based on a query string.
 *
 * @param {Portfolio[]} portfolios - The array of portfolios to filter.
 * @param {string} query - The query string to match against the portfolio's name, description, and tech stack.
 * @return {Portfolio[]} The filtered array of portfolios.
 */
export const filterPortfolio = (portfolios: Portfolio[], query: string) => {
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
