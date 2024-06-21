import React from "react";
import styles from "@/styles/IconList.module.css";
import Icon from "@/components/Icon";

interface Props {
  iconNames: Array<string>;
}

const IconList: React.FC<Props> = ({ iconNames }) => {
  return (
    <div className={styles["icon-list"]}>
      {iconNames.map((name) => 
        <Icon key={name} name={name} />
      )}
    </div>
  );
};

export default IconList;
