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
import { IoReader } from "react-icons/io5";

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
    case "flask":
      return <SiFlask color="white" size={size} />;
    case "aws":
      return (
        <Image src={`/images/icons/aws.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    case "twilio":
      return <SiTwilio color="#ef384e" size={size} />;
    case "github":
      return (
        <Image src={`/images/icons/github.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "black", borderRadius: "20%" }}/>
          // style={{ backgroundColor: "black", borderRadius: "20%", outline: "2px solid black", outlineOffset: "-1px" }}/>
      );
    case "jira":
      return <SiJira color="#2580f7" size={size} />;
    case "gradle":
      return <SiGradle color="#6cc644" size={size} />;
    case "unity":
      return <SiUnity size={size} />;
    case "maven":
      return (
        <Image src={`/images/icons/maven.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    case "docker":
      return <SiDocker color="#2496ed" size={size} />;
    case "flyway":
      return <SiFlyway color="#c60000" size={size} />;
    case "oauth":
      return (
        <Image src={`/images/icons/oauth.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "white", borderRadius: "20%" }}/>
      );
    case "linkedin":
      return (
        <Image src={`/images/icons/linkedin.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "#0963bf", borderRadius: "20%" }}/>
      );
    case "discord":
      return (
        <Image src={`/images/icons/discord.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ backgroundColor: "#5865f2", borderRadius: "20%" }}/>
      );
    case "email":
      return (
        <Image src={`/images/icons/email.svg`}
          alt="" width={size} height={size} unoptimized={true} priority
          style={{ background: "linear-gradient(135deg, hsl(270, 100%, 30%) 0%, hsl(270, 100%, 50%) 50%, hsl(270, 100%, 70%) 100%)", borderRadius: "20%" }}/>
      );
    case "resume":
      return (
        <div style={{
            height: size, 
            width: size, 
            background: "linear-gradient(135deg, hsl(16, 100%, 30%) 0%, hsl(16, 100%, 50%) 50%, hsl(16, 100%, 70%) 100%)", 
            borderRadius: "20%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
          <IoReader color="white" size={size*0.8} />
        </div>
      );
    case "": {
      return (
        <div style={{
            height: size, 
            width: size, 
            backgroundColor: "hsl(0, 0%, 70%)", 
            borderRadius: "20%",
            outline: "4px solid hsl(0, 0%, 35%)",
            outlineOffset: "-3px",
          }}>
        </div>
      );
    }
    default:
      return (
        <Image src={`/images/icons/${name}.svg`}
          alt="" width={size} height={size} priority />
      );
  }
};

export default Icon;
