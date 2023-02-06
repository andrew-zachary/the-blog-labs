import initCart from "./alpine-cart-page";

const loader = (pageId) => {
    if(pageId === 'cart-page') {
        initCart();
    }
};

export default loader;