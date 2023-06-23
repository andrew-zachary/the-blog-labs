import * as Masonry from 'masonry-layout';

const masonry = () => {

    const items = [
        {
            desc:'11- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit officia placeat, tempora atque id reprehenderit?',
        },
        {
            desc:'12- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur a deleniti, quaerat velit saepe non dignissimos quisquam magnam voluptates sunt porro possimus id praesentium?'
        },
        {
            desc:'13- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, libero ipsum. Voluptatum!'
        },
        {
            desc: '14- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias,'
        },
        {
            desc: '15- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, neque placeat ea nostrum ad in, id ipsam rerum architecto asperiores maxime iure assumenda suscipit. Quos voluptatem atque dolores sed vel commodi cumque animi ipsum'
        },
        {
            desc: '16- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aut sint praesentium doloribus unde aperiam eligendi iste enim? Modi, ducimus!'
        },
        {
            desc: '17- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, perspiciatis.'
        },
        {
            desc: '18- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad nulla dolorum optio dolor?'
        },
        {
            desc: '19- Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur a deleniti, quaerat velit saepe non dignissimos quisquam magnam voluptates sunt porro possimus id praesentium.'
        },
        {
            desc: '20- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, quisquam quia.'
        }
    ];

    const list = document.querySelector('.main-list');
    const msry = new Masonry( list, {
        itemSelector: '.main-list_item',
        columnWidth: '.grid-sizer',
        gutter: 0,
        horizontalOrder: true,
    });

    items.forEach((item) => {
        const node = document.createTextNode(item.desc);
        const div = document.createElement("div");
        div.classList.add('main-list_item','text-3xl', 'border', 'border-black');
        div.appendChild(node);
    
        list.appendChild(div);
        msry.appended(div);
    });
    
    msry.layout();
};

export default masonry;