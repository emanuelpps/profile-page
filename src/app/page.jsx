"use client";
import NavBar from "./components/NavBar/NavBar";
import React, { useState, useEffect } from "react";
import data from "../app/api/user/userData.json";
export default function Home({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(data);
  }, []);
  return (
    <>
      <header>
        <NavBar user={user} />
      </header>
      <main>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { user })
        )}
      </main>
      <footer>FOOTER</footer>
    </>
  );
}
