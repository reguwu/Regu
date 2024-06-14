import styles from "@styles/PortfolioList.module.css"
import React from "react"
import { Portfolio } from "@/models/portfolio"
import PortfolioItem from "@/components/PortfolioItem"

interface Props {
  portfolios: Array<Portfolio>
}

const PortfolioList: React.FC<Props> = (props) => {
  return (
    <section>
        <h2>Portfolio</h2>
        <div className={styles["portfolio-list"]}>
          <div>Project 1</div>
          <div>Project 2</div>
          <div>Project 3</div>
        </div>

        {(props.portfolios.length ?? 0) > 0 && (
            <div className={styles["portfolio-list"]}>
              {props.portfolios.map((item) => {
                return <PortfolioItem key={item.name} {...item} />
              })}
            </div>
        )}
    </section>
  )
}

export default PortfolioList