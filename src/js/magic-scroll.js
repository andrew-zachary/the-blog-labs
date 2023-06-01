const loader = () => {

    const controller = new ScrollMagic.Controller();

    const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "100%"});
    scene1.setTween("#animate1", 0.5, {backgroundColor: "green", top: "100%"}).addTo(controller);

    const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "100%"});
    scene2.setTween("#animate2", 0.5, {backgroundColor: "green", top: "100%"}).addTo(controller);

    const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3", duration: "100%"});
    scene3.setTween("#animate3", 0.5, {backgroundColor: "green", top: "100%"}).addTo(controller);

    const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4", duration: "100%"});
    scene4.setTween("#animate4", 0.5, {backgroundColor: "green", top: "100%"}).addTo(controller);

    const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5", duration: "100%"});
    scene5.setTween("#animate5", 0.5, {backgroundColor: "green", top: "100%"}).addTo(controller);

};

export default loader;