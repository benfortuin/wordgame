import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [string, setString] = useState("hi");

  const [letterL, setLetterL] = useState("");
  const [letterR, setLetterR] = useState("");

  const handleClickL = () => {
    setString(letterL + string);
  };
  const handleClickR = () => {
    setString(string + letterR);
  };

  const handleChangeL = (event) => {
    setLetterL(event.target.value);
  };

  const handleChangeR = (event) => {
    setLetterR(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          id="letter"
          name="letter"
          maxLength="1"
          value={letterL}
          onChange={handleChangeL}
        />
        <button type="button" onClick={handleClickL}>
          Submit
        </button>
      </div>

      <p>{string}</p>

      <div>
        <input
          type="text"
          id="letter"
          name="letter"
          maxLength="1"
          value={letterR}
          onChange={handleChangeR}
        />
        <button type="button" onClick={handleClickR}>
          Submit
        </button>
      </div>
    </div>
  );
}
