import React from "react";
import Styles from "./interaction.module.scss";

function Interaction() {
  return (
    <div>
      <div className={Styles.form}>
        <div className={Styles.container}>
          <h4>Interact with us</h4>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <textarea />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Interaction;
