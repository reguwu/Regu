import React from "react";
import styles from "@/styles/VerboseSkillList.module.css";
import Icon from "@/components/content/Icon";

interface Props {
  iconNames?: Array<string>;
}

const VerboseSkillList: React.FC<Props> = ({ iconNames }) => {
  return (
    <div className={styles["verbose-icons"]}>
      {iconNames?.map((name) => 
        <div key={name}>
            <Icon name={name} size={25} />
            <span>{name.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
};

export default VerboseSkillList;
