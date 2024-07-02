import Image from "next/image";

import { 
  SiUnity,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";

const Icon = ({ name, size }: { name: string; size: number }) => {
  switch (name) {
    case "java":
      return <Image src="/images/icons/java.svg" 
      alt="" width={size} height={size} unoptimized={true} priority
      style={{backgroundColor: "white", borderRadius: "20%"}} />;
    case "springboot":
      return <SiSpringboot color="#71b544" size={size} />;
    case "react":
      return <SiReact color="#61DBFB" size={size} />;
    case "nextjs":
      return <SiNextdotjs 
      color="black" 
      size={size} 
      style={{backgroundColor: "white", borderRadius: "50%" , outline: "3px solid white", outlineOffset: "-3px"}} />;
    case "mdx":
      return (
        <Image src={`/images/icons/mdx.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "black", borderRadius: "20%" }}/>
      );
    case "unity":
      return <SiUnity size={size} />;
    default:
      return (
        <Image src={`/images/icons/${name}.svg`}
          alt="" width={size} height={size} unoptimized={true} priority />
      );
  }
};

export default Icon;
