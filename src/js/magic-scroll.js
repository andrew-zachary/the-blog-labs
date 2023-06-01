const loader = () => {

    console.log(Circ);

    const controller = new ScrollMagic.Controller();

    const tween1 = TweenMax.fromTo("#animate1", 0.5, {backgroundColor: "green", top: "-150%"}, {backgroundColor: "green", top: "100%"});
    const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "100%"});
    scene1.setTween(tween1).addTo(controller);

    const tween2 = TweenMax.fromTo("#animate2", 0.5, {backgroundColor: "green", top: "-96px"}, {backgroundColor: "blue", top: "100%"});
    const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "100%"});
    scene2.setTween(tween2).addTo(controller);

    const tween3 = TweenMax.fromTo("#animate3", 0.5, {backgroundColor: "blue", top: "-96px"}, {backgroundColor: "yellow", top: "100%"});
    const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "100%"});
    scene3.setTween(tween3).addTo(controller);

    const tween4 = TweenMax.fromTo("#animate4", 0.5, {backgroundColor: "yellow", top: "-96px"}, {backgroundColor: "red", top: "100%"});
    const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "100%"});
    scene4.setTween(tween4).addTo(controller);

    const tween5 = TweenMax.fromTo("#animate5", 0.5, {backgroundColor: "red", top: "-300%"}, {backgroundColor: "white", top: "50%"});
    const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "150%"});
    scene5.setTween(tween5).addTo(controller);

};

export default loader;