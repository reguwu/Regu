import React from "react";
import styles from "@/styles/SkillList.module.css";
import Icon from "@/components/content/Icon";

interface Props {
  iconNames?: Array<string>;
  verbose?: boolean;
}

const SkillList: React.FC<Props> = ({ iconNames, verbose }) => {
  const rowSize = 8;
  const slicedIconNames: Array<string> | undefined = iconNames?.slice(0, rowSize);
  const extraIconCount = (iconNames?.length ?? 0) - rowSize;

  return (
    <>
      {verbose ?
        <div className={styles["verbose-icons"]}>
          {iconNames?.map((name) => 
            <div key={name}>
                <Icon name={name} size={25} />
                <span>{name.toUpperCase()}</span>
            </div>
          )}
        </div>
      :    
        <div className={styles["icons"]}>
          {slicedIconNames?.map((name, index) => 
            <Icon key={name} name={name} size={25} />
          )}
          {extraIconCount > 0 ? <span>+{extraIconCount} ...</span> : null}
        </div>
      }
    </>
  );
};

export default SkillList;
