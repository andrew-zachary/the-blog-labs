import alpine from 'alpinejs';

const initNavMenu = () => {
    alpine.data('navmenu', () => ({
        'collapse': true
    }));
    alpine.start();
};

export default initNavMenu;