import React from "react";
import Styles from "./comments.module.scss";
import img1 from "../../../assets/pro1.jpeg";
import img2 from "../../../assets/pro2.jpeg";
import img3 from "../../../assets/pro3.jpeg";
import CommentsComp from "../../../components/CommentsComp";

function Comments() {
  const commentsData = [
    {
      name: "Tara",
      img: img1,
      content: `Richard McClintock, a Latin professor at Hampden-Sydney College in
      Virginia, looked up one of the more obscure Latin words, consectetu.`,
    },
    {
      name: "Lincy",
      img: img2,
      content: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
      It has roots in a piece of classical Latin literature from .`,
    },
    {
      name: "Nora",
      img: img3,
      content: `There are many variations of passages of Lorem Ipsum available, 
      but the majority have suffered alteration in some form.`,
    },
  ];
  return (
    <div>
      <div className={Styles.comments}>
        {commentsData.map(({ name, img, content }) => (
          <CommentsComp key={name} name={name} img={img} content={content} />
        ))}
      </div>
    </div>
  );
}

export default Comments;
