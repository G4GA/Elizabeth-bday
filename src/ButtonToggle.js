import { useState } from "react";
import "./ButtonToggle.css";
import Letter from "./Letter";

export default function ButtonToggle() {
  const [letterB, setLetterB] = useState(false);

  function HandleClick() {
    setLetterB(!letterB);
  }
  return (
    <>
      <button onClick={HandleClick} className="Toggle">
        👉🏽¿Me das?👈🏽
      </button>
      {letterB ? <Letter /> : <></>}
    </>
  );
}
