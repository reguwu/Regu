import Link from "next/link"
import styles from "@/styles/Pagination.module.css"
import { useSearchParams, usePathname } from 'next/navigation';

interface Props {
  totalPages: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({totalPages, currentPage}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  if(pageNumbers.length === 0) pageNumbers.push(1);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  const getPrevPageHref = () => {
    params.set('page', (currentPage - 1).toString());
    return `${pathname}?${params.toString()}`
  }

  const getSpecificPageHref = (page: number) => {
    params.set('page', page.toString());
    return `${pathname}?${params.toString()}`
  }

  const getNextPageHref = () => {
    params.set('page', (currentPage + 1).toString());
    return `${pathname}?${params.toString()}`
  }
  
  return (
    <div className={styles["pagination-container"]}>
      <div  className={styles["pagination"]}>
        <Link 
          href={`${getPrevPageHref()}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage === 1 ? styles["inactive"] : ""}`}
          replace
        > 
          Prev 
        </Link>

        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={`${getSpecificPageHref(page)}#portfolio`}
            className={`${styles["pagination-item"]} ${currentPage === page ? styles["active"] : ""}`}
            replace
          >
            {page}
          </Link>
        ))}

        <Link 
          href={`${getNextPageHref()}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage >= totalPages ? styles["inactive"] : ""}`}
          replace
        > 
          Next 
        </Link>
      </div>
    </div>
  )
}