import React from "react";
import One from "../assests/images/img1.jpg";
import Two from "../assests/images/img2.jpg";
import Three from "../assests/images/img3.jpg";

function ImgSlider(props) {
  return (
    <div className="imgContainer">
      <div className="Images">
        <img src={One} alt="Three" />
      </div>
    </div>
  );
}

export default ImgSlider;
