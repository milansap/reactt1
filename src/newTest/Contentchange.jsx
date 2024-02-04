/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ContentChange.css";

function ContentChange(props) {
  const [navg, setNavg] = useState(<Home />);
  function main_home(contantType) {
    console.log(contantType);
    switch (contantType) {
      case "Home":
        setNavg(<Home />);
        break;
      case "News":
        setNavg(<News />);
        break;
      case "Contact":
        setNavg(<Contact />);
        break;
      case "About":
        setNavg(<About />);
        break;
    }
  }
  return (
    <>
      <div>{props.prop}</div>
      <div className="topnav">
        <a
          onClick={() => {
            main_home("Home");
          }}
          className="active"
        >
          Home
        </a>
        <a
          onClick={() => {
            main_home("News");
          }}
        >
          News
        </a>
        <a
          onClick={() => {
            main_home("Contact");
          }}
        >
          Contact
        </a>
        <a
          onClick={() => {
            main_home("About");
          }}
        >
          About
        </a>
      </div>
      <div className="main-content">
        Content Changed Here!!!
        <p>
          we are at
          <div>{navg}</div>
        </p>
      </div>
      {props.propssecond}
    </>
  );
}
function Home() {
  return <div>homeeeeeeee</div>;
}
function News() {
  return <div>Newwwwsssss</div>;
}
function Contact() {
  return <div>Contactttttt</div>;
}
function About() {
  return <div>Abouttttt</div>;
}

export default ContentChange;
