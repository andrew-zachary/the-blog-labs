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

    const imagePromises = [];

    products.forEach((item) => {

        const img = new Image();
        img.src = item.thumbnail;

        const imgPromise = new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });

        imagePromises.push(imgPromise);

        const h1 = document.createElement('h1');
        h1.innerText = item.title;

        const p = document.createElement('p');
        p.innerText = item.description;

        const div = document.createElement("div");
        div.classList.add('main-list_item','text-3xl', 'border', 'border-black');
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p);
    
        list.appendChild(div);
        msry.appended(div);

    });

    await Promise.all(imagePromises);
    msry.layout();
    msry.layout();
    
};

export default init;