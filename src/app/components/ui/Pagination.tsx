import Link from "next/link"
import styles from "@/styles/Pagination.module.css"

interface Props {
  totalPages: number
  currentPage: number
}

export const Pagination: React.FC<Props> = ({totalPages, currentPage}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles["pagination-container"]}>
      <div  className={styles["pagination"]}>
        <Link 
          href={`/?page=${currentPage - 1}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage === 1 ? styles["inactive"] : ""}`}
        > 
          Prev 
        </Link>

        {pageNumbers.map((page) => (
          <Link
            key={page}
            href={`/?page=${page}#portfolio`}
            className={`${styles["pagination-item"]} ${currentPage === page ? styles["active"] : ""}`}
          >
            {page}
          </Link>
        ))}

        <Link 
          href={`/?page=${currentPage + 1}#portfolio`} 
          className={`${styles["pagination-item"]} ${currentPage === totalPages ? styles["inactive"] : ""}`}
        > 
          Next 
        </Link>
      </div>
    </div>
  )
}