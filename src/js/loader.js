import initCart from "./alpine-cart-page";
import intersectionObserver from "./alpine-lazy-loading-page";

const loader = (pageId) => {
    if(pageId === 'cart-page') {
        initCart();
    } else if(pageId === 'lazy-loading-page') {
        intersectionObserver();
    }
};

export default loader;