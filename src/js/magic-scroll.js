const loader = () => {

    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };

    const navBtns = document.querySelectorAll('.nav-btn');

    const controller = new ScrollMagic.Controller();

    controller.scrollTo(function (newPos) {
        TweenMax.to(window, 0.5, {scrollTo: {y: newPos}});
    });

    navBtns.forEach((node) => {
        
        node.addEventListener('click', (e) => {

            e.preventDefault();

            navBtns.forEach((node) => node.classList.remove('current'));

            e.target.classList.add('current');

            controller.scrollTo(e.target.getAttribute('href'));
 
        });

    });

    const tween1 = TweenMax.fromTo("#animate1", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "green", top: "50%"});
    const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "0%"});
    scene1.setTween(tween1).addTo(controller);

    const tween2 = TweenMax.fromTo("#animate2", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "blue", top: "50%"});
    const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%"});
    scene2.setTween(tween2).addTo(controller);

    const tween3 = TweenMax.fromTo("#animate3", 0.5, {backgroundColor: "blue", top: "-96px"}, {backgroundColor: "orange", top: "50%"});
    const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "50%"});
    scene3.setTween(tween3).addTo(controller);

    const tween4 = TweenMax.fromTo("#animate4", 0.5, {backgroundColor: "orange", top: "-96px"}, {backgroundColor: "red", top: "50%"});
    const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "50%"});
    scene4.setTween(tween4).addTo(controller);

    const tween5 = TweenMax.fromTo("#animate5", 0.5, {backgroundColor: "red", top: "-96px"}, {backgroundColor: "black", top: "50%"});
    const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "50%"});
    scene5.setTween(tween5).addTo(controller);

};

export default loader;