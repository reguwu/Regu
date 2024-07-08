import Image from "next/image";

import { 
  SiUnity,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiFlask,
  SiTwilio,
  SiJira,
  SiGradle,
  SiDocker,
  SiFlyway
} from "react-icons/si";

const Icon = ({ name, size }: { name: string; size: number }) => {
  switch (name) {
    case "java":
      return <Image src="/images/skill-icons/java.svg" 
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
        <Image src={`/images/skill-icons/mdx.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "black", borderRadius: "20%" }}/>
      );
    case "flask":
      return <SiFlask color="white" size={size} />;
    case "aws":
      return (
        <Image src={`/images/skill-icons/aws.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    case "twilio":
      return <SiTwilio color="#ef384e" size={size} />;
    case "github":
      return (
        <Image src={`/images/skill-icons/github.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%", outline: "2px solid black", outlineOffset: "-1px" }}/>
      );
    case "jira":
      return <SiJira color="#2580f7" size={size} />;
    case "gradle":
      return <SiGradle color="#6cc644" size={size} />;
    case "unity":
      return <SiUnity size={size} />;
    case "maven":
      return (
        <Image src={`/images/skill-icons/maven.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    case "docker":
      return <SiDocker color="#2496ed" size={size} />;
    case "flyway":
      return <SiFlyway color="#c60000" size={size} />;
    case "oauth":
      return (
        <Image src={`/images/skill-icons/oauth.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    default:
      return (
        <Image src={`/images/skill-icons/${name}.svg`}
          alt="" width={size} height={size} priority />
      );
  }
};

export default Icon;
