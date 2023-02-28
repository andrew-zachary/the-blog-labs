import alpine from 'alpinejs';

const initCart = () => {
    alpine.data('products', () => ({
        items: [
            {id:1, name:'this is product 1', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:10},
            {id:2, name:'product 2', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:20},
            {id:3, name:'product 3', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:30},
            {id:4, name:'product 4', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:40},
            {id:5, name:'product 5', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:50},
            {id:6, name:'product 6', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:10},
            {id:7, name:'product 7', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:20},
            {id:8, name:'product 8', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:30},
            {id:9, name:'product 9', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:40},
            {id:10, name:'product 10', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:50},
            {id:11, name:'product 11', desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nihil vitae est cupiditate, praesentium ipsam.', price:10},
        ]
    }));

    alpine.store('cart', {
        items: [],
        total: 0,
        count: 0,
        add(newItem) {

            const cartItem = this.items.find(item => item.id === newItem.id);

            if(!cartItem) {
                this.items.push({...newItem, count: 1, total: newItem.price });
                this.total += newItem.price;
                this.count += 1;
            } else
                this.items = this.items.map((item) => {
                    if(item.id !== newItem.id) return item;
                    item.count += 1;
                    item.total = item.price * item.count;
                    this.total += item.price;
                    this.count += 1;
                    return item;
                });

        },
        remove(id) {

            const cartItem = this.items.find(item => item.id === id);

            if(cartItem.count > 1)
                this.items = this.items.map((item) => {
                    if(item.id !== id) return item;
                    item.count -= 1;
                    item.total = item.price * item.count;
                    this.total -= item.price;
                    this.count -= 1;
                    return item;
                });
            else if(cartItem.count === 1) {
                this.items = this.items.filter((item) => item.id !== id);
                this.total -= cartItem.price;
                this.count -= 1;
            }
        }
    });

    alpine.data('cart_container', () => ({
        open: false,
        submitted: false,
        init() {
            this.$watch('$store.cart.count', () => {
                this.$refs.cartBox.classList.remove('animate__jello');
                setTimeout(() => this.$refs.cartBox.classList.add('animate__jello'), 0);
            });
        },
        toggle() {
            this.open = !this.open;
            if(this.open) {
                document.body.style.overflow = 'hidden'; 
            } else {
                document.body.style.overflow = 'auto';
            }
        },
        submit() {
            this.submitted = true;
        }
    }));

    alpine.start();
};

export default initCart;