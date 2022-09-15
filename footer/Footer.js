import React from "react";
import Accordion from "./accordion/Accordion";
import Comments from "./comments/Comments";
import FooterComp from "./footer/Footer";
import Interaction from "./interaction/Interaction";

function Footer() {
  return (
    <div>
      <Accordion />
      <br />
      <Interaction />
      <br />
      <Comments />
      <br />
      <FooterComp />
    </div>
  );
}

export default Footer;
