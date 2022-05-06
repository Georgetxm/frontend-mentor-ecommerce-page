import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import styles from "../styles/MobileSlideshow.module.css";

const MobileSlideshow = () => {
  const [slideNumber, setSlideNumber] = useState(1);

  const changeSlide = (value) => {
    let slides = document.getElementsByClassName(
      `${styles["mobile-image-slides"]}`
    );
    let newValue = slideNumber + value;
    if (newValue > slides.length) {
      setSlideNumber(1);
    } else if (newValue < 1) {
      setSlideNumber(slides.length);
    } else {
      setSlideNumber(newValue);
    }
  };

  useEffect(() => {
    let slides = document.getElementsByClassName(
      `${styles["mobile-image-slides"]}`
    );
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideNumber - 1].style.display = "block";
  }, [slideNumber]);

  return (
    <div className={`${styles["mobile-slideshow-container"]}`}>
      <div className={`${styles["mobile-image-slides"]}`}>
        <Image alt={`product image 1`} src={img1} layout={"responsive"} />
      </div>
      <div className={`${styles["mobile-image-slides"]}`}>
        <Image alt={`product image 2`} src={img2} layout={"responsive"} />
      </div>
      <div className={`${styles["mobile-image-slides"]}`}>
        <Image alt={`product image 3`} src={img3} layout={"responsive"} />
      </div>
      <div className={`${styles["mobile-image-slides"]}`}>
        <Image alt={`product image 4`} src={img4} layout={"responsive"} />
      </div>
      <a
        className={`${styles["mobile-slideshow-prev"]}`}
        onClick={() => changeSlide(-1)}
      />
      <a
        className={`${styles["mobile-slideshow-next"]}`}
        onClick={() => changeSlide(+1)}
      />
    </div>
  );
};

export default MobileSlideshow;
