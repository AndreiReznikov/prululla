import About from "./pages/About/About";
import Admin from "./pages/Admin";
import Archive from "./pages/Archive/Archive";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ItemPage from "./pages/ClothingItemPage/ClothingItemPage";
import Shop from "./pages/Shop";
import { ABOUT_ROUTE, ADMIN_ROUTE, ARCHIVE_ROUTE, CART_ROUTE, CONTACT_ROUTE, HOME_ROUTE, SHOP_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ARCHIVE_ROUTE,
        Component: Archive
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: SHOP_ROUTE + '/:id',
        Component: ItemPage
    }
]