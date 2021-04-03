import React from "react";
import One from "../assests/img1.jpg";
import Two from "../assests/img2.jpg";
import Three from "../assests/img3.jpg";

function ImgSlider(props) {
  return (
    <div className="imgContainer">
      <div className="Images">
        <img src={Three} alt="Three" />
      </div>
    </div>
  );
}

export default ImgSlider;
