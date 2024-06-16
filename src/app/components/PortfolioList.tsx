import styles from "@styles/PortfolioList.module.css"
import React from "react"
import type { Portfolio } from "@/types"
import PortfolioItem from "@/components/PortfolioItem"

interface Props {
  portfolios: Array<Portfolio>
}

const PortfolioList: React.FC<Props> = (props) => {
  return (
    <section>
        <h2>Portfolio</h2>
        {(props.portfolios.length ?? 0) > 0 && (
            <div className={styles["portfolio-list"]}>
              {props.portfolios.map((item) => {
                return <PortfolioItem key={item.slug} {...item} />
              })}
            </div>
        )}
    </section>
  )
}

export default PortfolioList