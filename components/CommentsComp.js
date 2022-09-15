import React from "react";
import Styles from "../pages/footer/comments/comments.module.scss";

function CommentsComp({ name, img, content }) {
  return (
    <div>
      <div key={name} className={Styles.container}>
        <div className={Styles.heading}>
          <img src={img} alt="" />
          <div>
            <h3>{name}</h3>
            <p>Shared his</p>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default CommentsComp;
