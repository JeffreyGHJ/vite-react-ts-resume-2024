import { FaGit, FaJava, FaPython, FaReact } from "react-icons/fa";
import {
  SiBlender,
  SiC,
  SiCsswizardry,
  SiExpress,
  SiIntellijidea,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPostgresql,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import {
  TbBrandAdobePhotoshop,
  TbBrandCSharp,
  TbBrandVscode,
  TbSql,
} from "react-icons/tb";

export const Skills = {
  group1: {
    react: {
      name: "React",
      icon: <FaReact />,
    },
    nextjs: {
      name: "Next.js",
      icon: <SiNextdotjs />,
    },
  },
  group2: {
    express: {
      name: "Express.js",
      icon: <SiExpress />,
    },
    mongodb: {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    mongoose: {
      name: "Mongoose",
      icon: <SiMongoose />,
    },
    postgresql: {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
  },
  primary: {
    html: {
      name: "HTML",
      icon: <TiHtml5 />,
      details:
        "For adding elements to the page. Everything on the page is an element. Text, buttons, icons, etc... each one can only be added by adding a node to the HTML document tree",
    },
    css: {
      name: "CSS",
      icon: <SiCsswizardry />,
      details:
        "HTML only adds raw elements to the page. With CSS we can style the elements to make an HTML page look thematic or animated",
    },
    javascript: {
      name: "JavaScript",
      icon: <SiJavascript />,
      details:
        "The fanciest looking button couldn't accomplish anything very interesting on its own, but with javascript we can attach actual code to the button to make it do anything we want",
    },
  },
  secondary: {
    java: {
      name: "Java",
      icon: <FaJava />,
    },
    c: {
      name: "C",
      icon: <SiC />,
    },
    csharp: {
      name: "C#",
      icon: <TbBrandCSharp />,
    },
    python: {
      name: "Python",
      icon: <FaPython />,
    },
    sql: {
      name: "SQL",
      icon: <TbSql />,
    },
  },
  group3: {
    unrealengine: {
      name: "Unreal Engine",
      icon: <SiUnrealengine />,
    },
    unity: {
      name: "Unity",
      icon: <SiUnity />,
    },
    blender: {
      name: "Blender",
      icon: <SiBlender />,
    },
    photoshop: {
      name: "PhotoShop",
      icon: <TbBrandAdobePhotoshop />,
    },
  },
  group4: {
    vscode: {
      name: "VS Code",
      icon: <TbBrandVscode />,
    },
    intellij: {
      name: "IntelliJ IDEA",
      icon: <SiIntellijidea />,
    },
    git: {
      name: "Git",
      icon: <FaGit />,
    },
  },
};
