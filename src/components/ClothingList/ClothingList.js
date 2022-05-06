import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import { Context } from "../..";
import ClothingItem from "../ClothingItem/ClothingItem";
import styles from "./ClothingList.module.css";

const ClothingList = observer(() => {
    const { clothes } = useContext(Context)
    
    return (
         <div className={styles.clothingListContainer}>
            {clothes.clothingItems.map(clothingItem =>
                <ClothingItem key={clothingItem.id} clothingItem={clothingItem}/>
            )}
        </div>
    );
});

export default ClothingList;