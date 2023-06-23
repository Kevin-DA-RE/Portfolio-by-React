import logo from "../assets/logo.svg";
import "../css/Header.css";
import Experience from "./Experience";
import Competence from "./Competence";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <p className="p-header"> Bonjour et bienvenue sur mon portfolio</p>
      <Experience />
      <Competence />
    </div>
  );
}

export default Header;
