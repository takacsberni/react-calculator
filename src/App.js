import './App.css';
import React from "react";

function App() {

  return (
      <div className="container">
          <div className="display"></div>
          <div className="buttons">
              <button className="btn-number">1</button>
              <button className="btn-number">2</button>
              <button className="btn-number">3</button>
              <button className="btn-operator">+</button>
              <button className="btn-number">4</button>
              <button className="btn-number">5</button>
              <button className="btn-number">6</button>
              <button className="btn-operator">-</button>
              <button className="btn-number">7</button>
              <button className="btn-number">8</button>
              <button className="btn-number">9</button>
              <button className="btn-operator">X</button>
              <button className="btn-clear">C</button>
              <button className="btn-number">0</button>
              <button className="btn-equals">=</button>
              <button className="btn-operator">/</button>
          </div>
      </div>
  );
}

export default App;
