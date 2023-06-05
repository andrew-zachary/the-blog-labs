const createSlides = (slides) => {

    const controller = new ScrollMagic.Controller();
    controller.scrollTo(function (newPos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newPos}});
    });

    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((node) => {
        
        node.addEventListener('click', (e) => {

            e.preventDefault();

            controller.scrollTo(e.target.getAttribute('href'));
 
        });

    });

    const highlightCurrentNav = (current) => {
        navBtns.forEach((node) => node.classList.remove('current'));
        document.querySelector(current).classList.add('current');
    };

    const buildAnimatedSlide = ({animationTrigger, slideId, fromColor, toColor, fromTxt, toTxt, prevSlide, scrollDuration}) => {

        const content = document.querySelector(slideId).querySelector('span');

        const tween = TweenMax.fromTo(slideId, 0.5, 
        {backgroundColor: fromColor, top: "-96px", 'borderRadius': '100%'}, 
        {backgroundColor: toColor, top: "50%", width: '70%', height: '70%', 'borderRadius': '2%'})
        .eventCallback("onComplete", function() {
            TweenMax.fromTo(`${slideId}-content`, 0.5, {opacity:0}, {opacity:1});
            content.innerText = toTxt;
            content.style.fontSize = "2.8rem";
        });

        const scene = new ScrollMagic.Scene({triggerElement: animationTrigger, duration: scrollDuration})
        .on('enter', () => highlightCurrentNav(`a[href='${animationTrigger}']`))
        .on('progress', ({state}) => {
            if(state === 'BEFORE') {
                highlightCurrentNav(`[href='${prevSlide}']`);
                content.innerText = fromTxt;
                content.style.fontSize = "3.75rem";
            }
        });

        scene.setTween(tween).addTo(controller);
    };

    slides.forEach(slide => {
        buildAnimatedSlide(slide);
    });

};

export default createSlides;