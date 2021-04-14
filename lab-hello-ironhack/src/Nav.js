import logo from "./images/ironhack-logo.svg";
import hamburger from "./images/menu-top.svg";

function Nav() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="logo ironhack" />
        <img src={hamburger} alt="hamburger icon" />
      </header>
    </div>
  );
}

export default Nav;
