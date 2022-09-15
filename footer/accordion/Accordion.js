import React from "react";
import AccordionComp from "../../../components/Accordion";
import Comments from "../comments/Comments";
import Footer from "../footer/Footer";
import Interaction from "../interaction/Interaction";
import "./styles.css";

const Accordion = () => {
  const accordionData = [
    {
      title: "Workshops- bangalore offline",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "How to buy from this site",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Can I Gpay",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
    {
      title: "Can I pay through cards",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];

  return (
    <div>
      <div className="accordion">
        <h4 style={{ textAlign: "center" }}> FAQ</h4>
        {accordionData.map((item, i) => (
          <AccordionComp
            key={item.title}
            i={i}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
