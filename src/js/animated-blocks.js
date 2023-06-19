const animatedBlocks = () => {
    
    const abColBlocks = document.querySelectorAll('.ab-col-blocks');
    const getBlockPosition = (target) => {
        return target.classList.contains('ab-col-top') ? 'nextElementSibling' : 'previousElementSibling';
    };

    abColBlocks.forEach( block => {
        block.addEventListener('mouseenter', (e) => {
            let blockPosition = '';

            blockPosition = getBlockPosition(e.target);

            e.target.style.height = '600px';
            e.target[blockPosition].style.height = 0;
            e.target[blockPosition].querySelector('.logo').style.opacity = 0;
        });
    });

    abColBlocks.forEach( block => {
        block.addEventListener('mouseleave', (e) => {
            let blockPosition = '';

            blockPosition = getBlockPosition(e.target);

            e.target.style.height = '300px';
            e.target[blockPosition].style.height = '300px';
            e.target[blockPosition].querySelector('.logo').style.opacity = 1;
        });
    });

};

export default animatedBlocks;