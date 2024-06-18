import React from "react";
import type { Portfolio } from "@/types";
import styles from "@/styles/PortfolioItem.module.css";
import Image from "next/image";
import Link from "next/link";

interface Props {
  portfolio: Portfolio;
}

const PortfolioItem: React.FC<Portfolio> = (props) => {
  return (
    <div className={styles["portfolio-item"]}>
      <Link href={`/portfolio/${props.slug}`}>
        <div className={styles["cover-image-container"]}>
          <Image
            src={props.image}
            alt={props.name}
            className={styles["cover-image"]}
            // sizes= "(max-width: 768px) 100%"
            fill={true}
          />
        </div>
      </Link>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </div>
  );
};

export default PortfolioItem;
