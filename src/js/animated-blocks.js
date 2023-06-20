// import Swiper JS
import Swiper, { Navigation } from 'swiper';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const animatedBlocks = () => {
    
    // init blocks ------------------------------------------------->
    const abColBlocks = document.querySelectorAll('.ab-col-blocks');
    const getBlockPosition = (target) => {
        return target.classList.contains('ab-col-top') ? 'nextElementSibling' : 'previousElementSibling';
    };

    abColBlocks.forEach( block => {
        block.addEventListener('mouseenter', (e) => {
            let blockPosition = '';

            blockPosition = getBlockPosition(e.target);

            e.target.style.height = '600px';
            e.target.querySelector('.car').style.opacity = 1;
            e.target[blockPosition].style.height = 0;
            e.target[blockPosition].querySelector('.logo').style.opacity = 0;
        });
    });

    abColBlocks.forEach( block => {
        block.addEventListener('mouseleave', (e) => {
            let blockPosition = '';

            blockPosition = getBlockPosition(e.target);

            e.target.style.height = '300px';
            e.target.querySelector('.car').style.opacity = 0;
            e.target[blockPosition].style.height = '300px';
            e.target[blockPosition].querySelector('.logo').style.opacity = 1;
        });
    });
    // init blocks ------------------------------------------------->
    
    // create swiper ----------------------------------------------->
    const swiper = new Swiper('.swiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    // create swiper ----------------------------------------------->

};

export default animatedBlocks;