const buildSpace = () => {
    
    const line = document.querySelector('path#line');
    const lineTotalLength = line.getTotalLength();
    line.style.strokeDasharray = lineTotalLength + 700;
    line.style.strokeDashoffset = lineTotalLength + 700;

    const controller = new ScrollMagic.Controller();

    const tween = new TimelineMax()
    .add(TweenMax.to(line, 2, {strokeDashoffset: 0, ease: Linear.easeNone}));

    const scene = new ScrollMagic
    .Scene({triggerElement: "#trigger1", duration: 2700})
    .setTween(tween);

    scene.addTo(controller);

};

export default buildSpace;