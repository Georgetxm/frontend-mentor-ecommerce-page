import React, { useState, useEffect } from "react";
import styles from "../styles/ImageModal.module.css";
import Image from "next/image";

const ImageModal = ({
  imgArray,
  thumbArray,
  clickedSlide,
  setShowImageModal,
  setClickedSlide,
}) => {
  const [slideNumber, setSlideNumber] = useState(null);

  useEffect(() => {
    setSlideNumber(clickedSlide);
  }, [clickedSlide]);

  const changeSlide = (value) => {
    let slides = document.getElementsByClassName(
      `${styles["image-modal-slides-div"]}`
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
    if (slideNumber != null) {
      let modal = document.getElementById(`image-modal`);
      let slides = document.getElementsByClassName(
        `${styles["image-modal-slides-div"]}`
      );
      let thumbnails = document.getElementsByClassName(
        `${styles["image-modal-thumbnail"]}`
      );
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        thumbnails[i].style.opacity = null;
      }
      modal.style.display = "block";
      slides[slideNumber - 1].style.display = "block";
      thumbnails[slideNumber - 1].style.opacity = "0.3";
    }
  }, [slideNumber]);

  useEffect(() => {
    const modal = document.getElementById("image-modal");
    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
        setShowImageModal(false);
        setClickedSlide(null);
      }
    });
  }, []);

  return (
    <div id={`image-modal`} className={`${styles["image-modal-container"]}`}>
      <div className={`${styles["image-modal-content"]} flex`}>
        <span
          className={`${styles["image-modal-close-button"]}`}
          onClick={() => {
            setShowImageModal(false);
            setClickedSlide(null);
          }}
        />
        <div className={`${styles["image-modal-slideshow-container"]}`}>
          {imgArray.map((image, i) => {
            return (
              <div key={i} className={`${styles["image-modal-slides-div"]}`}>
                <Image
                  className={`${styles["image-modal-slides-image"]}`}
                  alt={`product image ${i}`}
                  src={image}
                  layout={"responsive"}
                />
              </div>
            );
          })}
          <a
            className={`${styles["image-modal-slideshow-prev"]}`}
            onClick={() => changeSlide(-1)}
          />
          <a
            className={`${styles["image-modal-slideshow-next"]}`}
            onClick={() => changeSlide(+1)}
          />
        </div>
        <div className={`${styles["image-modal-thumbnail-container"]} flex`}>
          {thumbArray.map((thumb, i) => {
            return (
              <div key={i} className={`${styles["image-modal-thumbnail-div"]}`}>
                <Image
                  className={`${styles["image-modal-thumbnail"]}`}
                  alt={`product thumbnail ${i}`}
                  src={thumb}
                  layout={"responsive"}
                  onClick={() => setSlideNumber(i + 1)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
