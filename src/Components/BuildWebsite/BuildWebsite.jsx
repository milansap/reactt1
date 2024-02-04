/* eslint-disable react/prop-types */
import { useState } from "react";
import "./BuildWebsite.css";
import Home from "../BuildWebsite/pages/Home";
import Shows from "../BuildWebsite/pages/Shows";
import About from "../BuildWebsite/pages/About";
import Gallery from "../BuildWebsite/pages/Gallery";
import Contact from "../BuildWebsite/pages/Contact";
function BuildWebsite(props) {
  const [web, setWeb] = useState(<Home />);
  function main(contantType) {
    console.log(contantType);
    switch (contantType) {
      case "Home":
        setWeb(<Home />);
        break;
      case "Shows":
        setWeb(<Shows />);
        break;
      case "About":
        setWeb(<About />);
        break;
      case "Gallery":
        setWeb(<Gallery />);
        break;
      case "Contact":
        setWeb(<Contact />);
        break;
    }
  }

  return (
    <div>
      <div className="naav">
        <div className="logo">
          <div>
            <img
              src={props.bar.logo_img}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <a
            href="#"
            onClick={() => {
              main("About");
            }}
          >
            <h2>{props.bar.logo_name} </h2>
          </a>
        </div>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                main("Home");
              }}
            >
              {props.bar.nav_home}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                main("Shows");
              }}
            >
              {" "}
              {props.bar.nav_shows}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                main("About");
              }}
            >
              {" "}
              {props.bar.nav_about}{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                main("Gallery");
              }}
            >
              {" "}
              {props.bar.nav_gallery}{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                main("Contact");
              }}
            >
              {" "}
              {props.bar.nav_contact}{" "}
            </a>
          </li>
          <li>
            <a href="">{props.bar.nav_boyz}</a>
          </li>
        </ul>
        <div className="social-media">
          <a href="#">
            <img src="./icons8-facebook-50.png" alt="" />
          </a>
          <a href="#">
            <img src="./icons8-insta-50.png" alt="" />
          </a>
          <a href="#">
            <img src="./icons8-youtube-50.png" alt="" />
          </a>
        </div>
      </div>
      {web}
    </div>
  );
}

export default BuildWebsite;
