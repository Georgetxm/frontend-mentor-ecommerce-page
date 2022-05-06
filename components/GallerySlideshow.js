import Image from "next/image";
import React, { useState, useEffect } from "react";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import img1thumb from "../images/image-product-1-thumbnail.jpg";
import img2thumb from "../images/image-product-2-thumbnail.jpg";
import img3thumb from "../images/image-product-3-thumbnail.jpg";
import img4thumb from "../images/image-product-4-thumbnail.jpg";
import styles from "../styles/GallerySlideshow.module.css";
import ImageModal from "./ImageModal";

export const GallerySlideshow = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [clickedSlide, setClickedSlide] = useState(null);

  let slides = document.getElementsByClassName(
    `${styles["slideshow-image-div"]}`
  );
  let thumbnails = document.getElementsByClassName(
    `${styles["slideshow-thumbnail-div"]}`
  );

  useEffect(() => {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      thumbnails[i].style.opacity = null;
    }
    slides[slideNumber - 1].style.display = "block";
    thumbnails[slideNumber - 1].style.opacity = "0.3";
  }, [slideNumber]);

  const showModal = (clickedSlide) => {
    setClickedSlide(clickedSlide);
  };

  useEffect(() => {
    if (clickedSlide != null) {
      setShowImageModal(!showImageModal);
    }
  }, [clickedSlide]);

  return (
    <>
      <div className={`${styles["slideshow-container"]} flex`}>
        <div className={`${styles["slideshow-image-container"]}`}>
          <div className={`${styles["slideshow-image-div"]}`}>
            <Image
              className={`${styles["slideshow-image"]}`}
              alt={`product image 1`}
              src={img1}
              layout={"responsive"}
              onClick={() => showModal(1)}
            />
          </div>
          <div className={`${styles["slideshow-image-div"]}`}>
            <Image
              className={`${styles["slideshow-image"]}`}
              alt={`product image 2`}
              src={img2}
              layout={"responsive"}
              onClick={() => showModal(2)}
            />
          </div>
          <div className={`${styles["slideshow-image-div"]}`}>
            <Image
              className={`${styles["slideshow-image"]}`}
              alt={`product image 3`}
              src={img3}
              layout={"responsive"}
              onClick={() => showModal(3)}
            />
          </div>
          <div className={`${styles["slideshow-image-div"]}`}>
            <Image
              className={`${styles["slideshow-image"]}`}
              alt={`product image 4`}
              src={img4}
              layout={"responsive"}
              onClick={() => showModal(4)}
            />
          </div>
        </div>
        <div className={`${styles["slideshow-thumbnail-container"]} flex`}>
          <div className={`${styles["slideshow-thumbnail-div"]}`}>
            <Image
              className={`${styles["slideshow-thumbnail"]}`}
              alt={`product thumbnail 1`}
              src={img1thumb}
              layout={"responsive"}
              onClick={() => setSlideNumber(1)}
            />
          </div>
          <div className={`${styles["slideshow-thumbnail-div"]}`}>
            <Image
              className={`${styles["slideshow-thumbnail"]}`}
              alt={`product thumbnail 2`}
              src={img2thumb}
              layout={"responsive"}
              onClick={() => setSlideNumber(2)}
            />
          </div>
          <div className={`${styles["slideshow-thumbnail-div"]}`}>
            <Image
              className={`${styles["slideshow-thumbnail"]}`}
              alt={`product thumbnail 3`}
              src={img3thumb}
              layout={"responsive"}
              onClick={() => setSlideNumber(3)}
            />
          </div>
          <div className={`${styles["slideshow-thumbnail-div"]}`}>
            <Image
              className={`${styles["slideshow-thumbnail"]}`}
              alt={`product thumbnail 4`}
              src={img4thumb}
              layout={"responsive"}
              onClick={() => setSlideNumber(4)}
            />
          </div>
        </div>
      </div>
      {showImageModal ? (
        <ImageModal
          imgArray={[img1, img2, img3, img4]}
          thumbArray={[img1thumb, img2thumb, img3thumb, img4thumb]}
          clickedSlide={clickedSlide}
          setShowImageModal={setShowImageModal}
          setClickedSlide={setClickedSlide}
        />
      ) : (
        <></>
      )}
    </>
  );
};
