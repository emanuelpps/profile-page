import Image from "next/image";
import Link from "next/link";

function NavBarMenu({ user }) {
  return (
    <div id="NavBar-menu-container">
      <Link href="/profile" id="NavBar-menu" className="navbarMenu">
        <div id="NavBar-menu-userName">
          <span>
            {user?.first_name} {user?.last_name}
          </span>
        </div>
        <div id="NavBar-menu-userImage" className="">
          {user?.profile_image && (
            <Image
              src={user?.profile_image}
              className="avatarImage"
              width={40}
              height={40}
              alt="profile image"
            />
          )}
        </div>
      </Link>
    </div>
  );
}

export default NavBarMenu;
