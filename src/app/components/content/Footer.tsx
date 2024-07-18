"use client"

import styles from "@styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"
import getUrlByName from "@/utils/constant/socialMedias"
import { useGetHrefWithAnchor } from "@/hooks/useGetHrefWithAnchor"

const Footer: React.FC = () => {
  const getHref = useGetHrefWithAnchor();
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["footer-container"]}>
          <Link href={getHref("/", "#home")} className={styles["logo"]}>
            <Image className={styles["logo-image"]} src="/logo.svg" alt="Logo" width={0} height={0} priority={true}/>
          </Link>
          <div>
            <p className={styles["footer-column-title"]}>Section</p>
            <Link href={getHref("/", "#home")}>Home</Link>
            <Link href={getHref("/", "#portfolio")}>Portfolio</Link>
            <Link href={getHref("/", "#contact")}>Contact</Link>
          </div>
          <div>
            <p className={styles["footer-column-title"]}>Social</p>
            <Link href={`${getUrlByName("LinkedIn")}`} target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            <Link href={`${getUrlByName("GitHub")}`} target="_blank" rel="noopener noreferrer">GitHub</Link>
            <Link href={`${getUrlByName("Discord")}`} target="_blank" rel="noopener noreferrer">Discord</Link>
          </div>
        </div>
      </footer>
      <div className={styles["copyright"]}>&copy; 2024 Regu</div>
    </>
  )
}

export default Footer