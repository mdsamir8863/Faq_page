import React, { useState } from "react";

const AccordionComp = (item) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div>{isActive ? "-" : "+"}</div>
        <div>{item.title}</div>
      </div>
      {isActive && <div className="accordion-content">{item.content}</div>}
    </div>
  );
};

export default AccordionComp;
