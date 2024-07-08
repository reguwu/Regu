import styles from "@styles/Header.module.css"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header className={styles["page-header"]}>
      <div className={styles["page-navbar-container"]}>
        <nav className={styles["page-navbar"]}>
            <Link href="/#about-me" className={styles["page-navbar-link"]}>Home</Link>
            <Link href="/#portfolio" className={styles["page-navbar-link"]}>Portfolio</Link>
            <Link href="/#contact" className={styles["page-navbar-link"]}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header