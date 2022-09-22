import './App.css';
import React, {useState} from "react";

function App() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
        console.log(e.target.name)
    }

    const handleClear = () => {
        setResult("");
    }

    const calculate = () => {
        setResult(eval(result).toString() );
        console.log(eval(result).toString())
    }

    function backspace() {
        setResult(result.slice(0, result.length-1));
    }

    return (
      <div className="container">
          <input className="display" value={result}></input>
          <div className="buttons">
              <button className="btn-number" name="1" onClick={handleClick}>1</button>
              <button className="btn-number" name="2" onClick={handleClick}>2</button>
              <button className="btn-number" name="3" onClick={handleClick}>3</button>
              <button className="btn-operator" name="+" onClick={handleClick}>+</button>
              <button className="btn-number" name="4" onClick={handleClick}>4</button>
              <button className="btn-number" name="5" onClick={handleClick}>5</button>
              <button className="btn-number" name="6" onClick={handleClick}>6</button>
              <button className="btn-operator" name="-" onClick={handleClick}>-</button>
              <button className="btn-number" name="7" onClick={handleClick}>7</button>
              <button className="btn-number" name="8" onClick={handleClick}>8</button>
              <button className="btn-number" name="9" onClick={handleClick}>9</button>
              <button className="btn-operator" name="*" onClick={handleClick}>*</button>
              <button className="btn-number" name="0" onClick={handleClick}>0</button>
              <button className="btn-other" name="." onClick={handleClick}>.</button>
              <button className="btn-other" id="backspace" onClick={backspace}>C</button>
              <button className="btn-operator" name="/" onClick={handleClick}>/</button>
              <button className="btn-other" name="clear" onClick={handleClear}>clear</button>
              <button className="btn-other" id={result} onClick={calculate}>=</button>

          </div>
      </div>
  );
}

export default App;
