import React, { useState } from "react";
import styles from "../styles/ItemActions.module.css";

const ItemActions = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count > 99) {
      setCount(99);
    } else {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count < 1) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className={`${styles["item-action-container"]}`}>
      <div>
        <small className={`${styles["item-action__brand-text"]}`}>
          Sneaker Company
        </small>
        <h1 className={`${styles["item-action__title"]}`}>
          Fall Limited Edition Sneakers
        </h1>
        <p className={`${styles["item-action__text"]}`}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>
      </div>
      <div>
        <div className={`${styles["item-action__price-container"]} flex`}>
          <div
            className={`${styles["item-action__price__discount-container"]} flex`}
          >
            <h1>$125.00</h1>
            <p
              className={`${styles["item-action__price__discount-percentage"]}`}
            >
              50%
            </p>
          </div>
          <p className={`${styles["item-action__price__original"]}`}>$250.00</p>
        </div>
        <div className={`${styles["item-action__action-container"]} flex`}>
          <div className={`${styles["item-action__action-input-container"]}`}>
            <button
              className={`${styles["item-action__action-minus-button"]}`}
              onClick={decrementCount}
            >
              -
            </button>
            <input
              className={`${styles["item-action__action-input"]}`}
              type={"text"}
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button
              className={`${styles["item-action__action-plus-button"]}`}
              onClick={incrementCount}
            >
              +
            </button>
          </div>
          <button className={`${styles["item-action__action-cart-button"]}`}>
            <svg xmlns="http://www.w3.org/2000/svg">
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemActions;
