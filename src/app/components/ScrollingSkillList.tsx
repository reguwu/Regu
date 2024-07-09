import React from "react";
import styles from "@/styles/ScrollingSkillList.module.css";
import "@/styles/animation.css";
import Icon from "@/components/Icon";

interface Props {
  iconNames: Array<string>;
  direction: "left" | "right";
  speed: number;
}

const ScrollingSkillList: React.FC<Props> = ({ iconNames, direction, speed }) => {
  const duplicateIconNames = iconNames.concat(iconNames);
  return (
    <div className={styles["scrolling-icons-container"]}>
      <div className={styles["scrolling-icons"]} 
        style={{"--direction": `scroll-${direction}`, "--speed": `${speed}s`} as React.CSSProperties}
      >
        {duplicateIconNames.map((name, index) => 
          <div key={`${name}_${index}`}>
            <Icon name={name} size={40} />
            <span>{name.toUpperCase()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollingSkillList;
