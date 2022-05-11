import { observer } from "mobx-react-lite";
import React, {useContext} from "react";
import { Context } from "../..";
import ClothingItem from "../ClothingItem/ClothingItem";
import styles from "./ClothingList.module.css";

const ClothingList = observer(() => {
    const { clothes } = useContext(Context)
    const clothingList = clothes.clothingItems.filter(clothingItem => clothingItem.type === clothes.selectedType)
    const list = clothes.selectedType === 'All' ? clothes.clothingItems : clothingList
    
    return (
         <div className={styles.clothingListContainer}>
            {list.map(clothingItem =>
                <ClothingItem key={clothingItem.id} clothingItem={clothingItem}/>
            )}
        </div>
    );
});

export default ClothingList;