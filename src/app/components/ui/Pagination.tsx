import Link from "next/link"
import styles from "@/styles/Pagination.module.css"

interface Props {
  totalPages: number
  currentPage: number
  query?: string
}

export const Pagination: React.FC<Props> = ({totalPages, currentPage, query}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  if(pageNumbers.length === 0) pageNumbers.push(1);

  return (
    <div className={styles["pagination-container"]}>
      <div  className={styles["pagination"]}>
        <Link 
          href={`/?${query === "" ? "" : `query=${query}&`}page=${currentPage - 1}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage === 1 ? styles["inactive"] : ""}`}
          replace
        > 
          Prev 
        </Link>

        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={`/?${query === "" ? "" : `query=${query}&`}page=${page}#portfolio`}
            className={`${styles["pagination-item"]} ${currentPage === page ? styles["active"] : ""}`}
            replace
          >
            {page}
          </Link>
        ))}

        <Link 
          href={`/?${query === "" ? "" : `query=${query}&`}page=${currentPage + 1}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage >= totalPages ? styles["inactive"] : ""}`}
          replace
        > 
          Next 
        </Link>
      </div>
    </div>
  )
}