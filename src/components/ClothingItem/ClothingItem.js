import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../..";
import { SHOP_ROUTE } from "../../utils/consts";
import styles from "./ClothingItem.module.css";

const ClothingItem = observer(({clothingItem}) => {
    const history = useHistory()

    return (
        <div className={styles.clothingItemContainer} onClick={() => history.push(SHOP_ROUTE + '/' + clothingItem.id)}>
            <img src={clothingItem.img} alt="Clothes photo"/>
            <span>{clothingItem.name}</span>
            <span className={styles.clothingItemPrice}>{clothingItem.price}</span>
        </div>
    );
});

export default ClothingItem;