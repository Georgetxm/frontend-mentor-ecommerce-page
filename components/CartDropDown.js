import React from "react";
import Image from "next/image";
import img1thumb from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
import styles from "../styles/CartDropDown.module.css";

const CartDropDown = () => {
  return (
    <div className={`${styles["cart-container"]}`}>
      <h1 className={`${styles["cart-title"]}`}>Cart</h1>
      <div className={`${styles["cart-item-container"]} flex`}>
        <div className={`${styles["cart-item-div"]} flex`}>
          <div className={`${styles["cart-item-image-div"]}`}>
            <Image
              className={`${styles["cart-item-image"]}`}
              alt={`cart product thumbnail`}
              src={img1thumb}
            />
          </div>
          <div className={`${styles["cart-item-action-group"]} flex`}>
            <div className={`${styles["cart-item-action-group-text"]} flex`}>
              <p className={`${styles["cart-item-action-group-item-name"]}`}>
                Fall Limited Edition Sneakers
              </p>
              <div>
                <p
                  className={`${styles["cart-item-action-group-item-price-quantity"]}`}
                >
                  $125.00 x 3
                </p>
                <strong
                  className={`${styles["cart-item-action-group-item-total-price"]}`}
                >
                  $375.00
                </strong>
              </div>
            </div>
          </div>
          <div>
            <Image alt={`delete icon`} src={deleteIcon} />
          </div>
        </div>
        <button className={`${styles["cart-item__checkout-button"]}`}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDropDown;
