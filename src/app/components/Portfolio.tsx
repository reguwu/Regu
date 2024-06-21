import React from "react";
import type { Portfolio as PortfolioType } from "@/types";
import styles from "@/styles/Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";
import IconList from "@/components/IconList";

interface Props {
  portfolio: PortfolioType;
}

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className={styles["portfolio-item"]}>
      <Link href={`/portfolio/${portfolio.slug}`}>
        <div className={styles["cover-image-container"]}>
          <Image
            src={portfolio.image}
            alt={portfolio.name}
            className={styles["cover-image"]}
            // sizes= "(max-width: 768px) 100%"
            fill={true}
          />
        </div>
      </Link>
      <h3>{portfolio.name}</h3>
      <IconList iconNames={portfolio.techStack} />
      <p>{portfolio.description}</p>
    </div>
  );
};

export default Portfolio;
