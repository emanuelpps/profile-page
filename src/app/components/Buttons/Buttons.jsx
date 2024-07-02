import "./Buttons.css"

const ButtonVariants = {
  primary: "buttonStyle",
};

const Buttons = ({ variant = "primary", label, onClick, style }) => (
  <button className={ButtonVariants[variant]} onClick={onClick} style={style}>
    {label}
  </button>
);

export default Buttons;
