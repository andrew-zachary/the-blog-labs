import initCart from "./alpinejs/cart-page";
import intersectionObserver from "./alpinejs/lazy-loading-page";
import initNavMenu from "./alpinejs/nav-menu";
import tabs from "./alpinejs/tabs";

const loader = (pageId) => {
    if(pageId === 'cart-page') {
        initCart();
    } else if(pageId === 'lazy-loading-page') {
        intersectionObserver();
    } else if(pageId === 'nav-menu-page') {
        initNavMenu();
    } else if(pageId === 'tabs-page') {
        tabs();
    }
};

export default loader;