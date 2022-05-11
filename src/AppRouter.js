import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Context } from ".";
import { authRoutes, publicRoutes } from "./routes";
import { HOME_ROUTE } from "./utils/consts";

const updateCartItems = (cartItems, newClothingItem, index) => {
    if (newClothingItem?.count === 0) {
        return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)]
    }

    if (index === -1) {
        return [...cartItems, newClothingItem]
    }

    return [...cartItems.slice(0, index), newClothingItem, ...cartItems.slice(index + 1)]
}

const updateCartItem = (getCartItem, cartItemInCart, quantity, size, colour) => {
    if (cartItemInCart) {
        return {
            ...cartItemInCart,
            totalPrice: Number(cartItemInCart.totalPrice) + quantity * Number(getCartItem.price),
            count: cartItemInCart.count + quantity
        }
    }

        return {
            id: getCartItem.id,
            name: getCartItem.name,
            img: getCartItem.img,
            size: size,
            colour: colour,
            totalPrice: Number(getCartItem.price) * quantity,
            count: quantity
        }
}

const AppRouter = observer(() => {
    const isAuth = false;

    const { clothes } = useContext(Context)

    const addToCart = (id, size, colour, quantity) => {
        let cartItems = clothes.cartItems
        const getClothingItem = clothes.clothingItems.find(clothingItem => clothingItem.id === Number(id))
        const getClothingItemIndex = clothes.cartItems.findIndex(cartItem => cartItem.id === Number(id))
        const clothingItemInCart = clothes.cartItems[getClothingItemIndex]
    
        const newCartItem = updateCartItem(getClothingItem, clothingItemInCart, quantity, size, colour)
        const newCartItems = updateCartItems(cartItems, newCartItem, getClothingItemIndex)
        
        clothes.setCartItems(newCartItems)
    }

    const removeFromCart = (id) => {
        let cartItems = clothes.cartItems
        const getClothingItem = clothes.clothingItems.find(clothingItem => clothingItem.id === Number(id))
        const getClothingItemIndex = clothes.cartItems.findIndex(cartItem => cartItem.id === Number(id))
        const clothingItemInCart = clothes.cartItems[getClothingItemIndex]
    
        const newCartItem = updateCartItem(getClothingItem, clothingItemInCart, -1)
        const newCartItems = updateCartItems(cartItems, newCartItem, getClothingItemIndex)
        
        clothes.setCartItems(newCartItems)
    }

    const deletePurshasedClothingItem = (id) => {
        let cartItems = clothes.cartItems
        const getClothingItem = clothes.clothingItems.find(clothingItem => clothingItem.id === Number(id))
        const getClothingItemIndex = clothes.cartItems.findIndex(cartItem => cartItem.id === Number(id))
        const clothingItemInCart = clothes.cartItems[getClothingItemIndex]
    
        const newCartItem = updateCartItem(getClothingItem, clothingItemInCart, -clothingItemInCart.count)
        const newCartItems = updateCartItems(cartItems, newCartItem, getClothingItemIndex)
        
        clothes.setCartItems(newCartItems)
    }

    const cartMethods = () => {
        return {
            updateCartItems,
            updateCartItem,
            addToCart,
            removeFromCart,
            deletePurshasedClothingItem
        }
    }

    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} render={() => <Component cartMethods={cartMethods()}/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} render={() => <Component cartMethods={cartMethods()}/>} exact/>
            )}
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;