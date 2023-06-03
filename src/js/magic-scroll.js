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

    const highlightCurrent = (current) => {
        navBtns.forEach((node) => node.classList.remove('current'));
        document.querySelector(current).classList.add('current');
    };

    const tween1 = TweenMax.fromTo("#animate1", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "green", top: "50%"});
    const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "0%"});
    scene1.setTween(tween1).addTo(controller);

    const tween2 = TweenMax.fromTo("#animate2", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "blue", top: "50%"});
    const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%"})
    .on('enter', () => highlightCurrent("a[href='#trigger2']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrent("a[href='#trigger1']");
        }
    });
    scene2.setTween(tween2).addTo(controller);

    const tween3 = TweenMax.fromTo("#animate3", 0.5, {backgroundColor: "blue", top: "-96px"}, {backgroundColor: "orange", top: "50%"});
    const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "50%"})
    .on('enter', () => highlightCurrent("a[href='#trigger3']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrent("a[href='#trigger2']");
        }
    });
    scene3.setTween(tween3).addTo(controller);

    const tween4 = TweenMax.fromTo("#animate4", 0.5, 
    {backgroundColor: "orange", top: "-96px", 'borderRadius': '100%'}, 
    {backgroundColor: "red", top: "50%", width: '70%', height: '70%', 'borderRadius': '2%'})
    .eventCallback("onComplete", function() {
        TweenMax.fromTo("#animate4-content", 0.5, {opacity:0}, {opacity:1});
        document.querySelector('#animate4').querySelector('span').innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem facere quia labore earum, quae nihil.";
    });
    const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "50%"})
    .on('enter', () => highlightCurrent("a[href='#trigger4']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrent("a[href='#trigger3']");
            document.querySelector('#animate4').querySelector('span').innerText = "4";
        }
    });
    scene4.setTween(tween4).addTo(controller);

    const tween5 = TweenMax.fromTo("#animate5", 0.5, {backgroundColor: "red", top: "-96px"}, {backgroundColor: "black", top: "50%"});
    const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "50%"})
    .on('enter', () => highlightCurrent("a[href='#trigger5']"))
    .on('progress', ({state}) => {
        if(state === 'BEFORE') {
            highlightCurrent("a[href='#trigger4']")
        }
    });
    scene5.setTween(tween5).addTo(controller);

};

export default loader;