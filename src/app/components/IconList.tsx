import React from "react";
import styles from "@/styles/IconList.module.css";
import Icon from "@/components/Icon";

interface Props {
  iconNames: Array<string>;
  isVerbose?: boolean;
}

const IconList: React.FC<Props> = ({ iconNames, isVerbose }) => {
  const duplicateIconNames = iconNames.concat(iconNames);
  return (
    <>
      {isVerbose ?
        <div className={styles["verbose-icons"]}>
          {duplicateIconNames.map((name) => 
            <div key={name}>
              <Icon name={name} size={40} />
              <span>{name.toUpperCase()}</span>
            </div>
          )}
        </div>
      :    
        <div className={styles["icons"]}>
          {iconNames.map((name) => 
            <Icon key={name} name={name} size={20} />
          )}
        </div>
      }
    </>
  );
};

export default IconList;
