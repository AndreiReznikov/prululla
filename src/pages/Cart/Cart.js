import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../..';
import CartItem from '../../components/CartItem/CartItem';
import { SHOP_ROUTE } from '../../utils/consts';
import styles from './Cart.module.css';

const Cart = () => {
    const { clothes } = useContext(Context)
    const history = useHistory()
    
    let totalPrice = 0;
    clothes.cartItems.map(cartItem => 
        totalPrice += cartItem.price
    )
    
    return (
        <div className={styles.cartContainer}>
            <h2 className={styles.cartTitle}>Shopping Cart</h2>
            {clothes.cartItems.length > 0 && clothes.cartItems.map(cartItem => 
                <CartItem key={cartItem.id} cartItem={cartItem} />
            )}
            {clothes.cartItems.length > 0 && 
            (<div className={styles.paymantContainer}>
                <div className={styles.totalPriceContainer}>
                    <h3>Subtotal</h3>
                    <span className={styles.totalPrice}>{totalPrice}</span>
                </div>
                <button className={styles.paymantButton} type='submit'>Chekout</button>
            </div>)}
            {clothes.cartItems.length === 0 && (
                <div>
                    <div>You have nothing in your shopping cart.</div>
                    <button
                        className={styles.continueShoppingButton}
                        onClick={() => history.push(SHOP_ROUTE)}
                    >
                        Continue shopping
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;