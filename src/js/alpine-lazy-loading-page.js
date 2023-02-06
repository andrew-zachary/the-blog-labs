import alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';

const intersectionObserver = () => {
    alpine.plugin(intersect);
    alpine.start();
};

export default intersectionObserver;