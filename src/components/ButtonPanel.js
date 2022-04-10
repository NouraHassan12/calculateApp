import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./ButtonPanel.css";
function ButtonPanel({}) {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result?.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calc = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("invalid format");
    }
  };
  return (
    <>
      <Display result={result} />
      <div className="component-button-panel">
        <div>
          <Button name="AC" clear={clear} />
          <Button name="+/-" handleClick={handleClick} />
          <Button name="%" handleClick={handleClick} />
          <Button name="/" orange handleClick={handleClick} />
        </div>
        <div>
          <Button name="7" handleClick={handleClick} />
          <Button name="8" handleClick={handleClick} />
          <Button name="9" handleClick={handleClick} />
          <Button name="*" orange handleClick={handleClick} />
        </div>
        <div>
          <Button name="4" handleClick={handleClick} />
          <Button name="5" handleClick={handleClick} />
          <Button name="6" handleClick={handleClick} />
          <Button name="-" handleClick={handleClick} orange />
        </div>
        <div>
          <Button name="1" handleClick={handleClick} />
          <Button name="2" handleClick={handleClick} />
          <Button name="3" handleClick={handleClick} />
          <Button name="+" handleClick={handleClick} orange />
        </div>
        <div>
          <Button name="0" wide handleClick={handleClick} wide />
          <Button name="." handleClick={handleClick} />
          <Button name="=" orange calc={calc} />
        </div>
      </div>
    </>
  );
}

export default ButtonPanel;
