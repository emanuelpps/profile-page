import "./styles/Buttons.css";

const ButtonVariants = {
  primary: "buttonStyle",
  secondary: "buttonStyleSecondary",
};

const Buttons = ({ variant = "primary", label, onClick, style, className }) => (
  <button className={ButtonVariants[variant]} onClick={onClick} style={style}>
    {label}
  </button>
);

export default Buttons;
