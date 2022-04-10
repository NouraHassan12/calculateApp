import "./Button.css";
function Button({ name, orange, wide, handleClick, calc, clear }) {
  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];
  const functionName = handleClick ? handleClick : clear ? clear : calc;
  return (
    <div className={className.join(" ").trim()}>
      <button onClick={functionName} name={name}>
        {name}
      </button>
    </div>
  );
}

export default Button;
