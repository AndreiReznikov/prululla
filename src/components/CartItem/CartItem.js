import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../..";
import styles from "./CartItem.module.css";

const CartItem = observer(({ cartItem, cartMethods }) => {

    return (
        <div className={styles.cartItemContainer}>
            <div className={styles.cartItemDescriptionContainer}>
                <img className={styles.cartItemImage} src={cartItem.img[0]} />
                <div className={styles.cartItemDescription}>
                    <h3 className={styles.cartItemTitle}>{cartItem.name}</h3>
                    <span>Size: {cartItem.size}</span>
                    <span>Colour: {cartItem.colour}</span>
                </div>
            </div>
            <div className={styles.middleContainer}>
                <div className={styles.quantityContainer}>
                    <span
                        onClick={() => cartMethods.removeFromCart(cartItem.id)}
                    >
                        -
                    </span>
                    <span>{cartItem.count}</span>
                    <span
                        onClick={() => cartMethods.addToCart(cartItem.id, cartItem.size, cartItem.colour, 1)}
                    >
                        +
                    </span>
                </div>
                <div className={styles.cartItemPriceContainer}>
                    <span className={styles.cartItemPrice}>{cartItem.totalPrice}.00</span>
                    <span
                        onClick={() => cartMethods.deletePurshasedClothingItem(cartItem.id)}
                        className={styles.cartItemCloseButton}
                    ></span>
                </div>
            </div>
        </div>
    );
});

export default CartItem;