const loader = () => {

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

    const buildAnimatedSlide = ({animationTrigger, slideId, fromColor, toColor, fromTxt, toTxt, prevSlide}) => {
        const animate4Content = document.querySelector(slideId).querySelector('span');
        const tween4 = TweenMax.fromTo(slideId, 0.5, 
        {backgroundColor: fromColor, top: "-96px", 'borderRadius': '100%'}, 
        {backgroundColor: toColor, top: "50%", width: '70%', height: '70%', 'borderRadius': '2%'})
        .eventCallback("onComplete", function() {
            TweenMax.fromTo(`${slideId}-content`, 0.5, {opacity:0}, {opacity:1});
            animate4Content.innerText = toTxt;
            animate4Content.style.fontSize = "2.8rem";
        });
        const scene4 = new ScrollMagic.Scene({triggerElement: animationTrigger, duration: "50%"})
        .on('enter', () => highlightCurrentNav(`a[href='${animationTrigger}']`))
        .on('progress', ({state}) => {
            if(state === 'BEFORE') {
                highlightCurrentNav(`[href='${prevSlide}']`);
                animate4Content.innerText = fromTxt;
                animate4Content.style.fontSize = "3.75rem";
            }
        });
        scene4.setTween(tween4).addTo(controller);
    };

    const tween1 = TweenMax.fromTo("#animate1", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "green", top: "50%"});
    const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "0%"});
    scene1.setTween(tween1).addTo(controller);

    const tween2 = TweenMax.fromTo("#animate2", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "blue", top: "50%"});
    const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%"})
    .on('enter', () => highlightCurrentNav("a[href='#trigger2']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrentNav("a[href='#trigger1']");
        }
    });
    scene2.setTween(tween2).addTo(controller);

    const tween3 = TweenMax.fromTo("#animate3", 0.5, {backgroundColor: "blue", top: "-96px"}, {backgroundColor: "orange", top: "50%"});
    const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "50%"})
    .on('enter', () => highlightCurrentNav("a[href='#trigger3']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrentNav("a[href='#trigger2']");
        }
    });
    scene3.setTween(tween3).addTo(controller);

    // build animated slide 4
    buildAnimatedSlide({
        animationTrigger: '#trigger4', 
        slideId: '#animate4', 
        fromColor: 'orange', 
        toColor: 'red',
        fromTxt: '4',
        toTxt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel impedit dignissimos nisi vitae non.',
        prevSlide: '#trigger3'
    });

    const tween5 = TweenMax.fromTo("#animate5", 0.5, {backgroundColor: "red", top: "-96px"}, {backgroundColor: "black", top: "50%"});
    const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "50%"})
    .on('enter', () => highlightCurrentNav("a[href='#trigger5']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrentNav("a[href='#trigger4']")
        }
    });
    scene5.setTween(tween5).addTo(controller);

};

export default loader;