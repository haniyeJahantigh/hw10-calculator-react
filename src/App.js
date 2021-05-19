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
    // try {
    // setResult(eval(result).tostring());
    // } catch (err) {
    //   setResult("Error");
    // }
  };

  return (
    <div className="container">
      <Result result={result} />
      <Keypad
        handleClick={handleClick}

        // calculate();
      />
      {/* <div className="button">
        <button name="CE" onClick={clear} id="clear" className="colorebtn">
          Clear
        </button>
        <button
          name="C"
          onClick={backspace}
          id="backspace"
          className="colorebtn"
        >
          C
        </button>
        <button name="/" onClick={onClick} className="colorebtn">
          &divide;
        </button>
        <br />

        <button name="7" onClick={onClick}>
          7
        </button>
        <button name="8" onClick={onClick}>
          8
        </button>
        <button name="9" onClick={onClick}>
          9
        </button>
        <button name="*" onClick={onClick} className="colorebtn">
          &times;
        </button>
        <br />

        <button name="4" onClick={onClick}>
          4
        </button>
        <button name="5" onClick={onClick}>
          5
        </button>
        <button name="6" onClick={onClick}>
          6
        </button>
        <button name="-" onClick={onClick} className="colorebtn">
          &ndash;
        </button>
        <br />

        <button name="1" onClick={onClick}>
          1
        </button>
        <button name="2" onClick={onClick}>
          2
        </button>
        <button name="3" onClick={onClick}>
          3
        </button>
        <button name="+" onClick={onClick} className="colorebtn">
          +
        </button>

        <button name="0" onClick={onClick}>
          0
        </button>
        <button name="." onClick={onClick}>
          .
        </button>
        <button name="=" onClick={calculate} id="equal" className="colorebtn">
          =
        </button>
      </div>

      */}
    </div>
  );
};

export default App;
