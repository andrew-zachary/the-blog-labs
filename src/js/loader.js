import initCart from "./alpinejs/cart-page";
import intersectionObserver from "./alpinejs/lazy-loading-page";
import initNavMenu from "./alpinejs/nav-menu";
import tabs from "./alpinejs/tabs";
import selectWithFilter from "./alpinejs/select-with-filter";

const loader = (pageId) => {
    if(pageId === 'cart-page') {
        initCart();
    } else if(pageId === 'lazy-loading-page') {
        intersectionObserver();
    } else if(pageId === 'nav-menu-page') {
        initNavMenu();
    } else if(pageId === 'tabs-page') {
        tabs();
    } else if(pageId === 'select-with-filter') {
        selectWithFilter();
    }
};

export default loader;