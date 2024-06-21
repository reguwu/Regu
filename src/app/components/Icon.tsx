import React from "react";
import {
  SiUnity,
  SiCsharp,
  SiAutodeskmaya
} from "react-icons/si";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "unity":
      return <SiUnity />;
    case "csharp":
      return <SiCsharp style={{ color: "purple" }}/>;
    case "maya":
      return <SiAutodeskmaya style={{ color: "teal" }}/>;
    default:
      return <span>?</span>;
  }
};

export default Icon;
