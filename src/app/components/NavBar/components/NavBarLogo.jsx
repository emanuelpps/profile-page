import comanyLogo from "@/../public/assets/icons/companyLogo.png";
import Image from "next/image";

function NavBarLogo() {
  return (
    <div id="NavBar-logo-container">
      <Image src={comanyLogo} className="logoImage" />
    </div>
  );
}

export default NavBarLogo;
