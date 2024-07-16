import React from "react";
import type { Portfolio as PortfolioType } from "@/types";
import styles from "@/styles/PortfolioItem.module.css";
import Image from "next/image";
import SkillList from "@/components/content/SkillList";
import { formatDateString } from "@/utils/date";

interface Props {
  portfolio: PortfolioType;
}

const PortfolioItem: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className={styles["portfolio-item"]}>
      <a href={`/portfolio/${portfolio.slug}`} className={styles["portfolio-item-link"]}>
        <div className={styles["cover-image-container"]}>
          <Image
            src={portfolio.image}
            alt={portfolio.name}
            className={styles["cover-image"]}
            sizes= "(max-width: 768px) 100%"
            fill={true}
            priority={true}
          />
        </div>
        <div className={styles["portfolio-item-content"]}>
          <div className={styles["portfolio-item-header"]}>
            <h3>{portfolio.name}</h3>
            <div>
              <p>{portfolio.category}</p>
            </div>
          </div>
          <SkillList iconNames={portfolio.techStack} />
          <p>{portfolio.description}<br/><br/></p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioItem;
