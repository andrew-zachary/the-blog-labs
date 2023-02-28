import initCart from "./alpinejs/cart-page";
import intersectionObserver from "./alpinejs/lazy-loading-page";

const loader = (pageId) => {
    if(pageId === 'cart-page') {
        initCart();
    } else if(pageId === 'lazy-loading-page') {
        intersectionObserver();
    }
};

export default loader;