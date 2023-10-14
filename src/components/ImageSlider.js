import React from "react";
import { useState } from "react";
import slide1 from "../utils/slide1.png";
import slide2 from "../utils/slide2.png";
import slide3 from "../utils/slide3.png";

const ImageSlider = () => {
  const [count, setcount] = useState(0);
  const [forward, setforward] = useState(true);
  const [margin, setMargin] = useState("0%");

  function setImage(count) {
    switch (count) {
      case 0:
        setMargin("0%");
        break;
      case 1:
        setMargin("-33%");
        break;
      case 2:
        setMargin("-66%");
        break;

      default:
        break;
    }

    if(forward){
        for (let i = 0; i < 3; i++) {
         setTimeout(() => {
            if(count==2){
                setforward(false);
            } else {
                setcount(count+1);
                setImage(count)
            }
         }, 1000);
            
        }
    }
  }
  return (
    <React.Fragment>
      <div className="caurosel-container">
        <div className="image-container">
          <div className="image image1" style={{marginLeft:''}}>
            <img alt="img 1" src={slide1} />
          </div>
          <div className="image">
            <img alt="img 2" src={slide2} />
          </div>
          <div className="image">
            <img alt="img 3" src={slide3} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageSlider;
