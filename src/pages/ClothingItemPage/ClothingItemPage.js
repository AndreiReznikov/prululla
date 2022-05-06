import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../..';
import styles from './ClothingItemPage.module.css';

const ClothingItemPage = observer(() => {
    const { clothes } = useContext(Context)

    const clothingItem = {
        id: 1,
        name: '0.0 WRAPAROUND COAT',
        price: 380,
        img: 'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585515807683-EWYVTC58JQ3G0JJ9781E/1-2757.jpg?format=300w',
        text: 'WRAPAROUND COAT IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. TWO PANEL SLEEVES. PUFF SHOULDERS. WORN FROM THE FRONT AND WRAPPED AROUND THE BACK.  INSIDE POCKET WITH BUTTON FASTENING ON THE FRONT FLAP. SIDE SEAM POCKET ON THE LEFT SIDE SEAM. 100% polyester Please note: each garment is crafted especially for you, therefore it might take 2-4 weeks for your order to reach you.'
    }

    const addToCart = () => {
        clothes.setCartItems(clothingItem)
    }
    
    return (
        <div className={styles.clothingItemContainer}>
           <img src={clothingItem.img}/>
           <div>
               <h2>{clothingItem.name}</h2>
               <span>{clothingItem.price}</span>
               <p>{clothingItem.text}</p>
               <button
                  onClick={addToCart}
               >
                   Add to cart
                </button>
           </div>
        </div>
    );
});

export default ClothingItemPage;