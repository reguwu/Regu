"use client"

import styles from "@styles/Header.module.css"
import Link from "next/link"
import Image from "next/image"
import { useGetHrefWithAnchor } from "@/hooks/useGetHrefWithAnchor"
import { MobileNav } from "@/components/ui/menu"

const Header: React.FC = () => {
  const getHref = useGetHrefWithAnchor();

  return (
    <header className={styles["page-header"]}>
      <div className={styles["page-navbar-container"]}>
        <nav className={styles["page-navbar"]}>
            <Link href={getHref("/", "#home")} className={styles["logo"]}>
              <Image className={styles["logo-image"]} src="/logo.svg" alt="Logo" width={0} height={0} priority={true}/>
            </Link>
            <Link href={getHref("/", "#home")} className={styles["page-navbar-link"]}>Home</Link>
            <Link href={getHref("/", "#portfolio")} className={styles["page-navbar-link"]}>Portfolio</Link>
            <Link href={getHref("/", "#contact")} className={styles["page-navbar-link"]}>Contact</Link>
            <MobileNav />
        </nav>
      </div>
    </header>
  )
}

export default Header