import "./styles.css";

export const Button = ({ text, variant, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={variant === "secondary" ? "buttonSecondary" : "button"}
    >
      {text}
    </button>
  );
};
