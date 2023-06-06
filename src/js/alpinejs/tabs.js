import alpine from 'alpinejs';

const tabs = () => {
    alpine.data('tabs', () => ({
        'current': 1,
        changeTab(current) {
            this.current = current;
        }
    }));
    alpine.start();
};

export default tabs;