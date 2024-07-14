"use client"

import React from "react";
import styles from "@/styles/ScrollingSkillList.module.css";
import "@/styles/animation.css";
import Icon from "@/components/content/Icon";
import { useInView } from "react-intersection-observer"
import { sliceIntoChunks } from "@/utils/portfolio";
import { SKILLS } from "@/utils/constant";

interface Props {
  speed: number;
}

const ScrollingSkillList: React.FC<Props> = ({ speed }) => {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const icons: string[][] = [];
  const iconChunks = sliceIntoChunks(SKILLS, 12);
  iconChunks.map((chunk) => icons.push(chunk.concat(chunk)));

  return (
    <div ref={ref} className={styles["scrolling-icons-container"]}>
      {icons.map((icons, index) => (
        <div key={index} className={styles["scrolling-icons"]} 
          style={{
            "--direction": `scroll-${index % 2 === 0 ? "right" : "left"}`, 
            "--speed": `${speed}s`, 
            animationPlayState: inView ? null : "paused"
          } as React.CSSProperties }
        >
          {icons.map((name, index) => 
            <div key={`${name}_${index}`}>
              <Icon name={name} size={40} />
              <span>{name.toUpperCase()}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScrollingSkillList;
