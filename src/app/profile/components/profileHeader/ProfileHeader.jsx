import Buttons from "@/app/components/Buttons/Buttons";
import Link from "next/link";
import React from "react";

function ProfileHeader({ user }) {
  return (
    <div id="profile-header">
      <div id="profile-header-buttons">
        <Link href={"/"}>
          <Buttons variant="primary" label="← Volver a inicio"></Buttons>
        </Link>
      </div>
      <div id="profile-header-title" className="profileTitle">
        <h1 className="weight-titles-700">
          {user?.first_name} {user?.last_name}
        </h1>
      </div>
    </div>
  );
}

export default ProfileHeader;
