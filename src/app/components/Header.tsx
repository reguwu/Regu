import styles from "@styles/Header.module.css"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header id={styles["page-header"]}>
        <nav id={styles["page-navbar"]}>
            <Link href="/#about-me" className={styles["page-navbar-link"]}>Home</Link>
            <Link href="/#skills" className={styles["page-navbar-link"]}>Skills</Link>
            <Link href="/#portfolio" className={styles["page-navbar-link"]}>Portfolio</Link>
            <Link href="/#contact" className={styles["page-navbar-link"]}>Contact</Link>
        </nav>
    </header>
  )
}

export default Header