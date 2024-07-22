import React from "react";
import styles from "@/styles/SkillList.module.css";
import Icon from "@/components/content/Icon";
import useResizeObserver from "use-resize-observer";

interface Props {
  iconNames?: Array<string>;
}

//pixels
const iconWidth = 25;
const gap = 12;
const extraIconCountTextWidth = 31;

const SkillList: React.FC<Props> = ({ iconNames }) => {
  const { ref, width = 328 } = useResizeObserver<HTMLDivElement>();
  let rowSize = Math.floor((width - extraIconCountTextWidth) / (iconWidth + gap));

  const slicedIconNames: Array<string> | undefined = iconNames?.slice(0, rowSize);
  const extraIconCount = (iconNames?.length ?? 0) - rowSize;
  
  return (
    <div ref={ref} className={styles["icons"]} style={{gap: `${gap}px`}}>
      {slicedIconNames?.map((name) => 
        <Icon key={name} name={name} size={iconWidth} />
      )}
      {extraIconCount > 0 ? <span>+{extraIconCount} ...</span> : null}
    </div>
  )
};

export default SkillList;
