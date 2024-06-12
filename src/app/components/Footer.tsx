import styles from "@styles/Footer.module.css"
import React from "react"


const Footer: React.FC = () => {
  return (
    <footer id={styles["page-footer"]}>
      <div>Email</div>
      <div>LinkedIn</div>
      <div>GitHub</div>
    </footer>
  )
}

export default Footer