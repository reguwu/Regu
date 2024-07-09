import React from "react";
import type { Portfolio as PortfolioType } from "@/types";
import styles from "@/styles/Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import SkillList from "@/components/SkillList";
import { formatDateString } from "@/helpers/date";

interface Props {
  portfolio: PortfolioType;
}

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className={styles["portfolio-item"]}>
      <Link href={`/portfolio/${portfolio.slug}`} className={styles["portfolio-item-link"]}>
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
            <p>{formatDateString(portfolio.date)}</p>
          </div>
          <SkillList iconNames={portfolio.techStack} />
          <p>{portfolio.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Portfolio;
