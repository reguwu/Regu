"use client"

import styles from "@styles/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import { useGetHrefWithAnchor } from "@/hooks/useGetHrefAnchor"

const Header: React.FC = () => {
  const getHref = useGetHrefWithAnchor();

  return (
    <header className={styles["page-header"]}>
      <div className={styles["page-navbar-container"]}>
        <nav className={styles["page-navbar"]}>
            <Link href={getHref("/", "#about-me")} className={styles["logo"]}>
              <Image src="/logo.svg" alt="Logo" width={100} height={67} priority={true}/>
            </Link>
            <Link href={getHref("/", "#about-me")} className={styles["page-navbar-link"]}>Home</Link>
            <Link href={getHref("/", "#portfolio")} className={styles["page-navbar-link"]}>Portfolio</Link>
            <Link href={getHref("/", "#contact")} className={styles["page-navbar-link"]}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header