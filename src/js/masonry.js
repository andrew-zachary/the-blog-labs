import * as Masonry from 'masonry-layout';

let msry = null;

const loadProducts = async() => {
    const res = await (await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail,description')).json();
    return res.products;
};

const createMasonry = async() => {

    const imagePromises = [];
    const products = await loadProducts();

    const list = document.querySelector('.main-list');
    msry = new Masonry( list, {
        itemSelector: '.main-list_item',
        columnWidth: '.grid-sizer',
        gutter: 0,
        horizontalOrder: true,
    });

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

export { createMasonry };