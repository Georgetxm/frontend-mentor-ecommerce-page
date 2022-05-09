import React, { useState } from "react";
import Image from "next/image";
import img1thumb from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";
import styles from "../styles/CartDropDown.module.css";
import { useDispatch } from "react-redux";
import { deleteCart } from "../features/cart/cartSlice";

const CartDropDown = ({ cart }) => {
  const [deleteCartStaus, setDeleteCartStatus] = useState("idle");

  const dispatch = useDispatch();

  const deleteCartItem = () => {
    try {
      setDeleteCartStatus("pending");
      dispatch(deleteCart());
    } catch (err) {
      console.error("failed to delete cart: ", err);
    } finally {
      setDeleteCartStatus("idle");
    }
  };
  if (cart) {
    return (
      <div className={`${styles["cart-container"]}`}>
        <h1 className={`${styles["cart-title"]}`}>Cart</h1>
        <div className={`${styles["cart-item-container"]} flex`}>
          {
            <div
              key={cart.itemId}
              className={`${styles["cart-item-div"]} flex`}
            >
              <div className={`${styles["cart-item-image-div"]}`}>
                <Image
                  className={`${styles["cart-item-image"]}`}
                  alt={`cart product thumbnail`}
                  src={img1thumb}
                />
              </div>
              <div className={`${styles["cart-item-action-group"]} flex`}>
                <div
                  className={`${styles["cart-item-action-group-text"]} flex`}
                >
                  <p
                    className={`${styles["cart-item-action-group-item-name"]}`}
                  >
                    {cart["itemName"]}
                  </p>
                  <div>
                    <p
                      className={`${styles["cart-item-action-group-item-price-quantity"]}`}
                    >
                      ${cart["netPricePerItem"]} x {cart["quantity"]}
                    </p>
                    <strong
                      className={`${styles["cart-item-action-group-item-total-price"]}`}
                    >
                      ${cart["netPricePerItem"] * cart["quantity"]}
                    </strong>
                  </div>
                </div>
              </div>
              <button className={`${styles["cart-item__delete-button"]}`}>
                <Image
                  onClick={deleteCartItem}
                  alt={`delete icon`}
                  src={deleteIcon}
                />
              </button>
            </div>
          }

          <button
            onClick={() => {
              localStorage.removeItem("123asacaq1w123");
            }}
            className={`${styles["cart-item__checkout-button"]}`}
          >
            Checkout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles["cart-container"]}`}>
        <h1 className={`${styles["cart-title"]}`}>Cart</h1>
        <div className={`${styles["cart-item-container"]} flex`}>
          <div className={`${styles["cart-item-div"]} flex`}>
            <p>Your cart is empty</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CartDropDown;
