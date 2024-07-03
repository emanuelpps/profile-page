"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProfileHeader from "./components/profileHeader/ProfileHeader";
import ProfileAbout from "./components/profileAbout/ProfileAbout";
import ProfileForm from "./components/profileForm/ProfileForm";
import data from "@/app/api/user/userData.json";
import "./components/styles/Profile.css";

function page() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(data);
  }, []);
  return (
    <div id="profile-page">
      <div id="profile-container" className="profileContainer">
        <ProfileHeader  user={user}/>
          <ProfileAbout  user={user}/>
          <ProfileForm user={user}/>
      </div>
    </div>
  );
}

export default page;
