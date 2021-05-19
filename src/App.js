import React, { useState } from "react";
import Result from "./componenets/Result";
import Keypad from "./componenets/Keypad";

const App = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
    console.log("done");
  };
  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1)); //or instead of -1 => result.length-1
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <Result result={result} />
      <Keypad
        handleClick={handleClick}
        clear={clear}
        backspace={backspace}
        calculate={calculate}
      />
    </div>
  );
};

export default App;
