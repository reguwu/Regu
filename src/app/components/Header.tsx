import styles from "@styles/Header.module.css"
import Link from "next/link"

const Header: React.FC = () => {
  return (
    <header id={styles["page-header"]}>
        {/* <h1>Wuheng (Reg) Yu</h1> */}
        <nav id={styles["page-navbar"]}>
            <Link href="#" className={styles["page-navbar-link"]}>Home</Link>
            <Link href="#" className={styles["page-navbar-link"]}>Resume</Link>
        </nav>
    </header>
  )
}

export default Header