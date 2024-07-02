import React from "react";
import NavBarLogo from "./components/NavBarLogo";
import NavBarMenu from "./components/NavBarMenu";
import "./styles/NavBar.css"

function NavBar({user}) {
  return (
    <div id="NavBar" className="headerNavBar">
      <NavBarLogo />
      <NavBarMenu user={user}/>
    </div>
  );
}

export default NavBar;
