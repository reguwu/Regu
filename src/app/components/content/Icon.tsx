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
  SiFlyway,
  SiGithub,
  SiRadixui,
  SiFramer,
  SiCloudflare,
  SiVercel
} from "react-icons/si";
import { IoReader, IoHome, IoFolderSharp, IoMail, IoClose, IoVideocam } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

interface IconWrapperProps {
  children: React.ReactNode;
  size: number;
  bgColor?: string;
  background?: string;
  borderRadius?: string;
}

const IconWrapper = ({ children, size, bgColor, background, borderRadius }: IconWrapperProps) => (
  <div style={{
    height: size, 
    width: size, 
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    backgroundColor: bgColor,
    background: background,
    borderRadius: borderRadius,
  }}>
    {children}
  </div>
)

const Icon = ({ name, size }: { name: string; size: number }) => {
  switch (name) {
    case "java":
      return <Image src="/images/icons/java.svg" 
      alt="" width={size} height={size} priority
      style={{backgroundColor: "white", borderRadius: "15%"}} />;
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
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "black", borderRadius: "15%" }}/>
      );
    case "flask":
      return <SiFlask color="white" size={size} />;
    case "aws":
      return (
        <Image src={`/images/icons/aws.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "white", borderRadius: "15%" }}/>
      );
    case "twilio":
      return <SiTwilio color="#ef384e" size={size} />;
    case "github":
      return (
        <Image src={`/images/icons/github.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "black", borderRadius: "15%" }}/>
          // style={{ backgroundColor: "black", borderRadius: "15%", outline: "2px solid black", outlineOffset: "-1px" }}/>
      );
    case "github-2": 
      return <SiGithub color="white" size={size} />
    case "jira":
      return <SiJira color="#2580f7" size={size} />;
    case "gradle":
      return <SiGradle color="#6cc644" size={size} />;
    case "unity":
      return <SiUnity size={size} />;
    case "maven":
      return (
        <Image src={`/images/icons/maven.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "white", borderRadius: "15%" }}/>
      );
    case "docker":
      return <SiDocker color="#2496ed" size={size} />;
    case "flyway":
      return <IconWrapper size={size}><SiFlyway color="#c60000" size={size*0.9} /></IconWrapper>;
    case "oauth":
      return (
        <Image src={`/images/icons/oauth.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "white", borderRadius: "15%" }}/>
      );
    case "linkedin":
      return (
        <Image src={`/images/icons/linkedin.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "#0963bf", borderRadius: "15%" }}/>
      );
    case "discord":
      return (
        <Image src={`/images/icons/discord.svg`}
          alt="" width={size} height={size} priority
          style={{ backgroundColor: "#5865f2", borderRadius: "15%" }}/>
      );
    case "email":
      return (
        <Image src={`/images/icons/email.svg`}
          alt="" width={size} height={size} priority
          style={{ background: "linear-gradient(135deg, hsl(270, 100%, 30%) 0%, hsl(270, 100%, 50%) 50%, hsl(270, 100%, 70%) 100%)", borderRadius: "15%" }}/>
      );
    case "email-2":
      return <IoMail color="white" size={size} />
    case "resume":
      return (
        <IconWrapper 
          size={size}
          background="linear-gradient(135deg, hsl(16, 100%, 30%) 0%, hsl(16, 100%, 50%) 50%, hsl(16, 100%, 70%) 100%)"
          borderRadius= "15%"
        >
          <IoReader color="white" size={size*0.8} />
        </IconWrapper>
      );
    case "external-link":
      return <TbExternalLink color="white" size={size} />
    case "computer":
      return <RiComputerLine color="white" size={size} />
    case "hamburger":
      return <GiHamburgerMenu color="white" size={size} />
    case "home":
      return <IoHome color="white" size={size} />
    case "folder":
      return <IoFolderSharp color="white" size={size} />
    case "close": 
      return <IoClose size={size} />
    case "video":
      return <IoVideocam color="white" size={size} />
    case "radix ui":
      return <IconWrapper size={size}><SiRadixui size={size*0.85} /></IconWrapper>
    case "framer motion":
      return <IconWrapper size={size}><SiFramer size={size*0.85} /></IconWrapper>

    case "cloudflare":
      return <IconWrapper size={size}><SiCloudflare color="#f6821f" size={size*0.9} /></IconWrapper>
    case "vercel":
      return (
        <IconWrapper size={size}>
          <SiVercel color="black" size={size*0.85} />
        </IconWrapper>
      );
    case "": {
      return (
        <div style={{
            height: size, 
            width: size, 
            backgroundColor: "hsl(0, 0%, 70%)", 
            borderRadius: "15%",
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
