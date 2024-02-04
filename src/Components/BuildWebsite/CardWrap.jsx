/* eslint-disable react/prop-types */
import BuildWebsite from "./BuildWebsite";
import "./CardWrap.css";
import { navbar } from "./data";
import Footer from "./Footer";

function CardWrap() {
  return (
    <div className="wrap">
      <BuildWebsite bar={navbar} />

      <Footer />
    </div>
  );
}
export default CardWrap;
