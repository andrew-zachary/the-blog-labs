import alpine from 'alpinejs';
import collapse from '@alpinejs/collapse';

const initNavMenu = () => {
    alpine.data('navmenu', () => ({
        'open': false
    }));
    alpine.plugin(collapse);
    alpine.start();
};

export default initNavMenu;