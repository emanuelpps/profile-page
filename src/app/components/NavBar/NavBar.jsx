"use client";
import { useState, useEffect } from "react";
import NavBarLogo from "./components/NavBarLogo";
import NavBarMenu from "./components/NavBarMenu";
import data from "@/app/api/user/userData.json";
import "./styles/NavBar.css";

function NavBar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(data);
  }, []);
  return (
    <div id="NavBar" className="headerNavBar">
      <NavBarLogo />
      <NavBarMenu user={user} />
    </div>
  );
}

export default NavBar;
