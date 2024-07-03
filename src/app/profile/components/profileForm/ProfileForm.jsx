import Buttons from "@/app/components/Buttons/Buttons";
import { useState } from "react";

function ProfileForm({ user }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

/*funcion para resetear el formulario */
  const resetFormValues = () => {
    setFormValues({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(false);
  };

  /*manejo para simular envio de formulario */
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
    setIsSubmitted(true);
    setTimeout(() => resetFormValues(), 8000);
  };

  const buttonText = isSubmitting
    ? "⌛ Enviando Mensaje..."
    : isSubmitted
    ? "Mensaje Enviado con exito ✅"
    : "Enviar";

  return (
    <div id="profile-form" className="slideInUp">
      <form onSubmit={handleSubmit}>
        <div id="contact-form">
          <h2 className="border-title weight-titles-200">Contactar</h2>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                required
                pattern="^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{1,32}$"
                title="El campo debe contener entre 1 y 32 letras, espacios y tildes"
                value={formValues.name}
                onChange={(e) =>
                  setFormValues({ ...formValues, name: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                title="El formato del email no es correcto"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                required
                value={formValues.message}
                onChange={(e) =>
                  setFormValues({ ...formValues, message: e.target.value })
                }
              ></textarea>
            </div>
          </div>
        </div>
        <div id="profile-form-buttons">
          <Buttons
            type="submit"
            variant="secondary"
            label={buttonText}
          ></Buttons>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
