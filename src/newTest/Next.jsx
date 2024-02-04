import { useState } from "react";
import "./Next.css";
function Next() {
  return (
    <>
      <Hooktest />
      <nav className="nav">
        <ul>
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#"> About </a>
          </li>
          <li>
            <a href="#"> Contact </a>
          </li>
          <li>
            <a href="#"> Terms of use </a>
          </li>
          <li>
            <a href="#"> Join Us </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
function Hooktest() {
  const [apple, setApple] = useState(1);
  const [changee, setChangee] = useState("Developer");
  function change() {
    setChangee("React");
  }
  function increase() {
    setApple((state) => state + 1);
  }
  return (
    <>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase
        <button> {apple}</button>
      </button>
      <button
        onClick={() => {
          change();
        }}
      >
        <h1> Hello,{changee}</h1>
      </button>
    </>
  );
}

export default Next;
