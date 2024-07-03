import React from "react";
import Image from "next/image";

function ProfileAbout({ user }) {
  return (
    <div id="profile-about">
      <div id="profile-about-container">
        <div id="profile-about-image">
          <Image
            src={user?.profile_image}
            width={300}
            height={300}
            className="profileImage"
          />
        </div>
        <div id="profile-about-content">
          <div id="profile-about-content-text">
            <div className="aboutText">
              <span>Nombre</span>
              <span>
                {user?.first_name} {user?.last_name}
              </span>
            </div>
            <div className="aboutText">
              <span>Edad</span>
              <span>{user?.age} años</span>
            </div>
            <div className="aboutText">
              <span>Ubicacion</span>
              <span>{user?.city}</span>
            </div>
            <div className="aboutText">
              <span>Email</span>
              <span>{user?.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div id="about-me">
        <h2 className="border-title weight-titles-200">Sobre Mi</h2>
        <p className="text-separate">{user?.bio}</p>
        <div id="profile-about-interests-tags" className="flex-row">
          <div id="interests-title">
            <h4>Intereses</h4>
          </div>
          {user?.interests?.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
