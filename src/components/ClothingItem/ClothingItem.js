import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../..";
import { SHOP_ROUTE } from "../../utils/consts";
import styles from "./ClothingItem.module.css";

const ClothingItem = observer(({ clothingItem }) => {
    const history = useHistory()

    return (
        <div className={styles.clothingItemContainer} onClick={() => history.push(SHOP_ROUTE + '/' + clothingItem.id)}>
            <div className={styles.clothingItemImageContainer}>
                <img
                    src={clothingItem.img[0]}
                    onMouseOver={e => e.currentTarget.src = clothingItem.img[1]}
                    onMouseOut={e => e.currentTarget.src = clothingItem.img[0]}
                    alt="Clothes photo"
                />
            </div>
            <div className={styles.clothingItemDescription}>
                <span className={styles.clothingItemName}>{clothingItem.name}</span>
                <span className={styles.clothingItemPrice}>{clothingItem.price}</span>
            </div>
        </div>
    );
});

export default ClothingItem;