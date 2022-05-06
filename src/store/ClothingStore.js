import { makeAutoObservable } from "mobx";

export default class ClothingStore {
    constructor() {
        this._clothingItems = [
            {
                id: 1,
                name: '0.0 WRAPAROUND COAT',
                price: 380,
                img: 'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585515807683-EWYVTC58JQ3G0JJ9781E/1-2757.jpg?format=300w'
            },
            {
                id: 2,
                name: '0.1 WRAPAROUND COAT WITH CONTRAST SLEEVEST',
                price: 380,
                img: 'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585516903206-FR79RK75FNMB3AVKGHB8/1-1322.jpg?format=300w'
            },
            {
                id: 3,
                name: '0.1 WRAPAROUND JACKET',
                price: 176,
                img: 'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586348131174-HNFNE5UCG9G7FLMMVTF9/red-jacket.jpg?format=2500w'
            },
        ]
        this._cartItems = []
        makeAutoObservable(this)
    }

    setClothingItems(clothingItems) {
        this._clothingItems = clothingItems
    }
    setCartItems(cartItem) {
        this._cartItems.push(cartItem)
    }

    get clothingItems() {
        return this._clothingItems
    }
    get cartItems() {
        return this._cartItems
    }
}