import { makeAutoObservable } from "mobx";

export default class ClothingStore {
    constructor() {
        this._clothingItems = [
            {
                id: 1,
                name: '0.0 WRAPAROUND COAT',
                price: '380.00',
                type: 'coats',
                description: 'WRAPAROUND COAT IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. TWO PANEL SLEEVES. PUFF SHOULDERS. WORN FROM THE FRONT AND WRAPPED AROUND THE BACK.  INSIDE POCKET WITH BUTTON FASTENING ON THE FRONT FLAP. SIDE SEAM POCKET ON THE LEFT SIDE SEAM.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585515777171-MLTZXXH6RD3EHNSY1695/1-2751.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585515807683-EWYVTC58JQ3G0JJ9781E/1-2757.jpg?format=300w'
                ]
            },
            {
                id: 2,
                name: '0.1 WRAPAROUND COAT WITH CONTRAST SLEEVEST',
                price: '380.00',
                type: 'coats',
                description: 'WRAPAROUND COAT IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. CONTRAST COLOUR SLEEVES. PUFF SHOULDERS. WORN FROM THE BACK AND WRAPPED AROUND THE FRONT. SIDE SEAM POCKET POCKETS ON BOTH SIDES.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585516766426-61P8RN21SR3CRQZMRN22/1-12.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585516903206-FR79RK75FNMB3AVKGHB8/1-1322.jpg?format=300w'
                ]
            },
            {
                id: 3,
                name: '0.1 WRAPAROUND JACKET',
                price: '176.00',
                type: 'jackets',
                description: 'WRAPAROUND JACKET IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. PUFF SHOULDERS. WORN FROM THE BACK AND WRAPPED AROUND THE FRONT. SIDE SEAM POCKET POCKETS ON BOTH SIDES.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586348131174-HNFNE5UCG9G7FLMMVTF9/red-jacket.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585519686465-7FOI8WAJ1HZYI4G0FT2C/1-19.jpg?format=2500w'
                ]
            },
            {
                id: 4,
                name: 'STRIPE DETAIL KNITTED JUMPER',
                price: '350.00',
                material: '70% merino wool 30% cashmere',
                description: 'Fully fashioned knit merino wool and cashmere blend sweater. Stripe detail at centre front. Long sleeves. Puffed shoulders.',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585588835839-XSVS8XCGB8MTJ49KK108/1-2808.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585589181596-02CF58C1J6TEXI2F274X/1-2815.jpg?format=2500w'
                ]
            },
            {
                id: 5,
                name: '0.0 WRAPAROUND JACKET',
                price: '330.00',
                type: 'jackets',
                description: 'WRAPAROUND JACKET IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. TWO PANEL SLEEVES. PUFF SHOULDERS. WORN FROM THE FRONT AND WRAPPED AROUND THE BACK.  INSIDE POCKET WITH BUTTON FASTENING ON THE FRONT FLAP. SIDE SEAM POCKET ON THE LEFT SIDE SEAM.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586350245033-YVQHI7WY1PWM8RDN3TAP/blu.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586350406043-119NH68YZL3P28MI0DHR/1-2739.jpg?format=2500w'
                ]
            },
            {
                id: 6,
                name: '0.2 STANDARD SLEEVES WRAPAROUND JACKET',
                price: '330.00',
                type: 'jackets',
                description: 'WRAPAROUND JACKET IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. STANDARD SHOULDERS. WORN FROM THE BACK AND WRAPPED AROUND THE FRONT. SIDE SEAM POCKET POCKETS ON BOTH SIDES.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586353393407-O1W38M2QXNXAYS0B5MWM/standard-sleeves.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586353426825-443DFFCL0CCKPGEIA3H0/1-34.jpg?format=2500w'
                ]
            },
            {
                id: 7,
                name: '0.3 ZIP CLOSURE JACKET',
                price: '330.00',
                type: 'jackets',
                description: 'FRONT ZIP CLOSURE JACKET IN QUILTED HIGH QUALITY ITALIAN NYLON.  THERMORE PADDING. TRUE TO SIZE UTILITARIAN SHAPE. CONTRAST COLOUR SLEEVES. PUFF SHOULDERS. SIDE SEAM POCKETS POCKETS ON BOTH SIDES.',
                material: '100% polyester',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586353777304-A9CWTZ95YHEE21DO2Y39/due-colori-finale.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586353847429-HZTVEVY11SX6JMT8FEJ2/1-26.jpg?format=2500w'
                ]
            },
            {
                id: 8,
                name: 'EVA VELVET DRESS',
                price: '450.00',
                type: 'dresses',
                description: 'WRAP DRESS IN ITALIAN VELVET. ONE LINED SLEEVE WITH PUFF SHOULDER. FLUID GREEN VELVET FABRIC. WAIST BELT',
                material: '83% viscose 17% silk',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585589973945-YM41H2ALYJ1J28ON1WGB/1-2765.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1585590536685-U19WTC9ZOUJ41ZVLPUTH/1-2773.jpg?format=2500w'
                ]
            },
            {
                id: 9,
                name: 'STRIPE DETAIL KNITTED PULLOVER',
                price: '270.00',
                type: 'pullovers',
                description: 'FULLY FASHIONED KNIT MERINO WOOL CASHMERE BLEND SWEATER. STRIPE DETAIL ACROSS CHEST AND SHOULDERS. LONG SLEEVES. RIBBED WAIST AND RIB DETAIL ON SHOULDERS AND SLEEVES. TURTLENECK COLLAR.',
                material: '70% merino wool 30% cashmere',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586724647779-PDSQW8WX7LKHOF311QGW/Maglioncino-righe-finale.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1586725183723-AXPZL8G55RKT5E6KIR56/1-2803-1.jpg?format=2500w'
                ]
            },
            {
                id: 10,
                name: '0.1 CARGO TROUSERS',
                price: '270.00',
                type: 'trousers',
                description: 'CARGO TROUSERS CRAFTED IN ITALIAN CORDUROY. WAISTBAND WITH D-RINGS. BELTS WITH D-RINGS ON KNEES. WELT POCKETS.',
                material: '100% cotton',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1589822423843-63R3SK6WLY4CWEUUM7RO/red-pant-with-drings.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1589823058657-HADB7JQWX607VS4CVSB7/1-2713.jpg?format=2500w'
                ]
            },
            {
                id: 11,
                name: 'LUNA T-SHIRT',
                price: '75.00',
                type: 'tops',
                description: 'LUNA EMBROIDERY DETAIL T-SHIRT CRAFTED IN ITALIAN COTTON. LETTUCE EDGE HEM ON BODY AND SLEEVES.',
                material: '100% cotton',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1588427983402-08024KDSKBD9OFUF8RWV/Luna-Luna_smaller.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1588428044552-FG90MQRX0YFJRRFXOYPL/f99fbe2c-46d7-4172-9f2c-afecd21bf77e.jpg?format=2500w'
                ]
            },
            {
                id: 12,
                name: 'CURTAIN SKIRT',
                price: '370.00',
                type: 'skirts',
                description: 'DRAPED CURTAIN SKIRT CRAFTED IN ITALIAN SATIN FABRIC. FULLY LINED.',
                material: '58% nylon 42% acetate',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1589038050085-MNZS1X7OIFB4LOUKWS18/1-2729+jpg.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1589038441715-0N2EBGZ4BJMUM6V00J4Z/1-2731+jpg.jpg?format=2500w'
                ]
            },
            {
                id: 13,
                name: 'SILK BLOUSE',
                price: '280.00',
                type: 'tops',
                description: 'WRAP DRESS IN ITALIAN SILK. PUFF SHOULDER SLEEVES. FLUID SILHOUETTE. WAIST BELT',
                material: '100% silk',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1590357593550-GSQ0CXDLRBSGKAN1DNBZ/_MG_8822+%281%29.jpeg?format=1500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1590357593792-YIYKLWIHRSTVK9MGVNTK/_MG_8824+%281%29.jpeg?format=1500w'
                ]
            },
            {
                id: 14,
                name: 'SILK WRAP DRESS',
                price: '450.00',
                type: 'dresses',
                description: 'WRAP DRESS IN ITALIAN SILK. PUFF SHOULDER SLEEVES. FLUID SILHOUETTE. WAIST BELT',
                material: '100% silk',
                img: [
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1588635187193-CUUQFUMYFZ66905KPUCW/2018_11_07+MAYA+AT+AUCH+STUDIO2160+copy.jpg?format=2500w',
                    'https://images.squarespace-cdn.com/content/v1/5b2a303f50a54f3718aed4a2/1588635358254-K8NNHILZUEMEPFBO23NI/2018_11_07+MAYA+AT+AUCH+STUDIO2089+copy.jpg?format=2500w'
                ]
            },
        ]
        this._cartItems = []
        this._types = ['All', 'coats', 'dresses', 'jackets', 'pullovers', 'skirts', 'tops', 'trousers']
        this._selectedType = 'All'
        makeAutoObservable(this)
    }

    setClothingItems(clothingItems) {
        this._clothingItems = clothingItems
    }
    setCartItems(cartItems) {
        this._cartItems = cartItems
    }
    setSelectedType(type) {
        this._selectedType = type
    }

    get clothingItems() {
        return this._clothingItems
    }
    get cartItems() {
        return this._cartItems
    }
    get types(){
        return this._types
    }
    get selectedType() {
        return this._selectedType
    }
}