import alpine from 'alpinejs';

const selectWithFilter = () => {
    alpine.data('selectWithFilter', () => ({
        'value': 'select cat',
        'open': false,
        toggle() {
            this.open = !this.open;
        },
        selectCat(value) {
            this.value = value;
            this.open = false;
        }
    }));
    alpine.start();
};

export default selectWithFilter;