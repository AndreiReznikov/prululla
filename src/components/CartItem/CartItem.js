import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({cartItem}) => {
    return (
        <div className={styles.cartItemContainer}>
            <div className={styles.cartItemDescriptionContainer}>
                <img className={styles.cartItemImage} src={cartItem.img} />
                <h3>{cartItem.name}</h3>
            </div>
            <div className={styles.cartItemPriceContainer}>
                <span className={styles.cartItemPrice}>{cartItem.price}</span>
                <span className={styles.cartItemCloseButton}></span>
            </div>
        </div>
    );
};

export default CartItem;