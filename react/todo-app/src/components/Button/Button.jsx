import "./button.css";

export const Button = ({ _click, _text, _priority }) => {
  const className = _priority === "primary" ? "button" : "button second";

  return (
    <button className={className} onClick={_click}>
      {_text}
    </button>
  );
};
