import React from "react";
import logo from "../../../assets/logo.png";
import whatsapp from "../../../assets/whatsapp.png";
import instagram from "../../../assets/instagram.png";
import youtube from "../../../assets/youtube.png";
import facebook from "../../../assets/facebook.png";
import Styles from "./footer.module.scss";

function FooterComp() {
  return (
    <div className={Styles.container}>
      <ul>
        <li className={Styles.logo}>
          <img src={logo} alt="" />
        </li>
        <li>Home</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Careers</li>
      </ul>

      <p>Follow us on</p>

      <ul className={Styles.social}>
        <li>
          <img src={facebook} alt="" />
        </li>
        <li>
          <img src={youtube} alt="" />
        </li>
        <li>
          <img src={whatsapp} alt="" />
        </li>
        <li>
          <img src={instagram} alt="" />
        </li>
      </ul>
    </div>
  );
}

export default FooterComp;
