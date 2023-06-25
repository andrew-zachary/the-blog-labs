import * as Masonry from 'masonry-layout';

const fetchingProducts = {
    _value: {
        busy: false,
        page: 1
    },
  
    get value() {
      return this._value;
    },
  
    set value(newValue) {
      this._value = {...this._value, newValue};
    }
};

const list = document.querySelector('.main-list');
const msry = new Masonry( list, {
    itemSelector: '.main-list_item',
    columnWidth: '.grid-sizer',
    gutter: 0,
    horizontalOrder: true,
});

const init = () => {

    // first products load
    loadProducts();

    window.addEventListener('scroll', () => {
        
        let { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if(clientHeight + scrollTop >= scrollHeight) {
            loadProducts();
        }

    });

};

const loadProducts = async() => {

    if(fetchingProducts.value.busy) return;
    fetchingProducts.value.busy = true;

    const skip = 10 * fetchingProducts.value.page;
    const res = await (await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,price,thumbnail,description`)).json();

    await createMasonry(res.products);

    fetchingProducts.value.busy = false;
    fetchingProducts.value.page++;
};

const createMasonry = async(products) => {

    // hide the spinner if no more products
    if(products.length === 0) {
        document.querySelector('.spinner').style.display = 'none';
    } else {
        document.querySelector('.spinner').style.display = 'flex';
    }

    const imagePromises = [];

    products.forEach((item) => {

        const img = new Image();
        img.src = item.thumbnail;
        img.classList.add(
            'mx-auto'
        );

        const imgPromise = new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
        imagePromises.push(imgPromise);

        const title = document.createElement('h1');
        title.innerText = item.title;
        title.classList.add(
            'mt-6',
            'font-bold',
            'capitalize'
        );

        const price = document.createElement('h2');
        price.innerText = `$${item.price}.99`;
        price.classList.add(
            'mt-6',
            'text-7xl',
            'font-bold',
            'capitalize'
        );

        const description = document.createElement('p');
        description.innerText = item.description;
        description.classList.add(
            'mt-6',
            'text-4xl',
            'capitalize'
        );

        const innerDiv = document.createElement("div");
        innerDiv.classList.add(
            'border',
            'border-black',
            'rounded-xl',
            'p-2'
        );
        innerDiv.appendChild(img);
        innerDiv.appendChild(title);
        innerDiv.appendChild(price);
        innerDiv.appendChild(description);

        const otterDiv = document.createElement("div");
        otterDiv.classList.add(
            'main-list_item',
            'overflow-hidden',
            'text-3xl', 
            'p-4',
        );
        otterDiv.appendChild(innerDiv);
    
        list.appendChild(otterDiv);
        msry.appended(otterDiv);

    });

    await Promise.all(imagePromises);
    msry.layout();
    msry.layout();
    
};

export default init;