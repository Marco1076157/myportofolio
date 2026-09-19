import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaPhp,
  FaServer,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiLaravel, SiMysql } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: SiLaravel },
      { name: "MySQL", icon: SiMysql },
      { name: "REST API", icon: FaServer },
    ],
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default skills;