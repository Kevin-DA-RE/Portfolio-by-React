import logo from "../assets/logo.svg";
import "../css/Header.css";


function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <p className="p-header" >A propos</p>
      <p className="p-header" >Compétences</p>
      <p className="p-header" >Experiences</p>
      <p className="p-header" >Projets</p>
      <p className="p-header" >Contact</p>
    </div>
  );
}

export default Header;
