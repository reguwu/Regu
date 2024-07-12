import { usePathname } from "next/navigation";

/**
 * Example: useGetHrefWithAnchor('/', '#projects')
 * will return '#projects' if current path is '/'
 * or '/#projects' if current path is not '/'
 * 
 * @param {string} path - path the anchor is located at
 * @param {string} anchor - anchor
 * @return {string} href
 */
export const useGetHrefWithAnchor = () => {
  const pathname = usePathname();
  return (path: string, anchor: string) => pathname === path ? anchor: `${path}${anchor}`;
};