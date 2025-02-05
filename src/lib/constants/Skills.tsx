import { FaJava } from "react-icons/fa";
import { SiC, SiCsswizardry, SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandCSharp } from "react-icons/tb";

export const Skills = {
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
  },
};
