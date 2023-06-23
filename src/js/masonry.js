import * as Masonry from 'masonry-layout';

const masonry = () => {

    const list = document.querySelector('.list');
    const msry = new Masonry( list, {
        itemSelector: '.list-item',
        columnWidth: '.grid-sizer',
        gutter: 0,
        horizontalOrder: true,
    });

    const node = document.createTextNode("11- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur a deleniti, quaerat velit saepe non dignissimos quisquam magnam voluptates sunt porro possimus id praesentium?");
    const para = document.createElement("div");
    para.classList.add('list-item','text-3xl', 'bg-yellow-500');
    para.appendChild(node);

    list.appendChild(para);
    msry.appended(para);
    msry.layout();
};

export default masonry;