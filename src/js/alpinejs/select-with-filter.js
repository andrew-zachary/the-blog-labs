import alpine from 'alpinejs';

const selectWithFilter = () => {
    alpine.data('selectWithFilter', () => ({
        'cats': [
            {id: 0, text: 'category 1', value: 'category 1'},
            {id: 1, text: 'category 2', value: 'category 2'},
            {id: 2, text: 'category 3', value: 'category 3'},
            {id: 3, text: 'category 4', value: 'category 4'},
            {id: 4, text: 'category 5', value: 'category 5'},
            {id: 5, text: 'category 11', value: 'category 11'},
            {id: 6, text: 'category 22', value: 'category 22'},
            {id: 7, text: 'category 33', value: 'category 33'},
            {id: 8, text: 'category 44', value: 'category 44'},
            {id: 9, text: 'category 55', value: 'category 55'},
            {id: 10, text: 'category 10', value: 'category 10'},
            {id: 11, text: 'category 20', value: 'category 20'},
            {id: 12, text: 'category 30', value: 'category 30'},
            {id: 13, text: 'category 40', value: 'category 40'},
            {id: 14, text: 'category 50', value: 'category 50'}
        ],
        'filteredCates': [],
        'searchingValue': '',
        'value': 'select cat',
        'open': false,
        init() {

            // watch over the changes of searchingValue and do filtering
            this.$watch('searchingValue', value => {

                const result = [...this.cats.filter( cat => {
                    return cat.text.toLowerCase().includes(value.toLowerCase());
                })];

                this.filteredCates = result.length > 0 ? result : this.cats;

            });
        },
        toggle() {
            this.open = !this.open;

            if(this.open) setTimeout(() => {

                //init filteredCates
                this.filteredCates = this.cats;

                this.$refs.catInput.value = '';
                this.$refs.catInput.focus();
            }, 0);
        },
        selectCat(value) {
            this.value = value;
            this.open = false;
        },
        filtering() {
            this.filtering = [1];
        }
    }));
    alpine.start();
};

export default selectWithFilter;