import Buttons from "@/app/components/Buttons/Buttons";
import React from "react";

function ProfileForm({ user }) {
  return (
    <div id="profile-form">
      <div id="about-me">
        <h2 className="border-title weight-titles-200">Sobre Mi</h2>
        <p className="text-separate">{user?.bio}</p>
      </div>
      <form>
        <div id="contact-form">
          <h2 className="border-title weight-titles-200">Contactar</h2>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input type="text" id="name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensaje</label>
              <textarea id="message"></textarea>
            </div>
          </div>
        </div>
        <div id="profile-form-buttons">
          <Buttons variant="secondary" label="Enviar"></Buttons>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
