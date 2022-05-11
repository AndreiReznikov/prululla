import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Context } from '../..';
import styles from './ClothingItemPage.module.css';
import { SHOP_ROUTE } from '../../utils/consts';

const ClothingItemPage = observer(({ cartMethods }) => {
    const { clothes } = useContext(Context)
    const { id } = useParams()
    const [colourOption, setColourOption] = useState(null)
    const [sizeOption, setSizeOption] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [showPopup, setShowPopup] = useState(false)
    const [buttonText, setButtonText] = useState('ADD TO CART')

    const getClothingItem = clothes.clothingItems.find(clothingItem => clothingItem.id === Number(id))
    const history = useHistory()

    return (
        <div>
            <div className={styles.routesContainer}>
                <span>
                    <Link
                        onClick={() => history.push(SHOP_ROUTE)}
                    >
                        Womenswear
                    </Link>
                    {` > ${getClothingItem.name}`}
                </span>
                <span>
                    {id > 1 &&
                        <span>
                            <Link
                                onClick={() => history.push(SHOP_ROUTE + `/${Number(id) - 1}`)}
                            >
                                {`< PREVIOUS`}
                            </Link>
                        </span>
                    }
                    {(id > 1 && id < clothes.clothingItems.length) && <span> / </span>}
                    {id < clothes.clothingItems.length &&
                        <span>
                            <Link
                                onClick={() => history.push(SHOP_ROUTE + `/${Number(id) + 1}`)}
                            >
                                {`NEXT >`}
                            </Link>
                        </span>
                    }
                </span>
            </div>
            <div className={styles.clothingItemContainer}>
                <div className={styles.clothingItemImageWrapper}>
                    <img className={styles.clothingItemImage} src={getClothingItem.img[0]} />
                </div>
                <div className={styles.infoContainer}>
                    <h1 className={styles.clothingItemTitle}>{getClothingItem.name}</h1>
                    <span className={styles.clothingItemPrice}>{getClothingItem.price}</span>
                    <p className={styles.clothingItemDescription}>{getClothingItem.description}</p>
                    <p className={styles.clothingItemDescription}>{getClothingItem.material}</p>
                    <p className={styles.clothingItemDescription}>Please note: each garment is crafted especially for you, therefore it might take 2-4 weeks for your order to reach you.</p>
                    <form className={styles.form}>
                        <label className={styles.label}>
                            SIZE:
                            <select onChange={e => setSizeOption(e.target.value)} className={styles.select}>
                                <option>Select Size</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                        </label>
                        <label className={styles.label}>
                            COLOUR:
                            <select onChange={e => setColourOption(e.target.value)} className={styles.select}>
                                <option>Select Colour</option>
                                <option>Champagne</option>
                                <option>Khaki</option>
                                <option>Red</option>
                            </select>
                        </label>
                        <label className={styles.inputLabel}>
                            QUANTITY:
                            <input onChange={e => {
                                if (Number(e.target.value) <= 1) return
                                setQuantity(Number(e.target.value))
                            }} className={styles.input} type='number' value={quantity} />
                        </label>
                    </form>
                    <button
                        className={styles.button}
                        onClick={() => {
                            if (!sizeOption || !colourOption) {
                                setShowPopup(true)
                                return
                            }
                            setTimeout(() => setButtonText('ADDING...'))
                            setTimeout(() => setButtonText('ADDED!'), 2000)
                            setTimeout(() => setButtonText('ADD TO CART'), 3500)
                            cartMethods.addToCart(id, sizeOption, colourOption, quantity)
                        }}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
            {showPopup &&
                <div onClick={() => setShowPopup(false)} className={styles.popupContainer}>
                    <div className={styles.popup}>
                        <div className={styles.popupText}>
                            <span>UNABLE TO ADD ITEM</span>
                            <span>Please select the Size and Colour options.</span>
                        </div>
                        <span onClick={() => setShowPopup(false)} className={styles.popupButton}>OKAY</span>
                    </div>
                </div>}
        </div>
    );
});

export default ClothingItemPage;