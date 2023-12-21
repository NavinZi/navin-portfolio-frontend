import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { PiFileSqlFill } from "react-icons/pi";

const skills = [
  {
    id: 1,
    name: "HTML",
    icon: <ImHtmlFive />,
    color: "#f97316",
  },
  {
    id: 2,
    name: "CSS",
    icon: <IoLogoCss3 />,
    color: "#2fa9d7",
  },
  {
    id: 3,
    name: "JS",
    icon: <SiJavascript />,
    color: "#efd91c",
  },
  {
    id: 4,
    name: "REACT.JS",
    icon: <FaReact />,
    color: "#5ed3f3",
  },
  {
    id: 5,
    name: "SQL",
    icon: <PiFileSqlFill />,
    color: "#f7ac00",
  },
];

export default skills;