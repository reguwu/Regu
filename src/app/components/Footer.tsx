import styles from "@styles/Footer.module.css"
import Link from "next/link"
import Image from "next/image"


const Footer: React.FC = () => {
  return (
    <footer className={styles["page-footer"]}>
      <div>
        <div>
          <Link href="/#about-me">
            <Image src="/logo.svg" alt="Logo" width={125} height={84} priority={true}/>
          </Link>
        </div>
        <div>
          <Link href="/#contact">Github</Link>
          <Link href="/#contact">LinkedIn</Link>
          <Link href="/#contact">Discord</Link>
          <Link href="/#contact">Email</Link>
        </div>
      </div>
      <div>&copy; 2024 Regu</div>
    </footer>
  )
}

export default Footer