const buildSpace = () => {
    
    const line = document.querySelector('path#line');
    const lineTotalLength = line.getTotalLength();
    line.style.strokeDasharray = lineTotalLength;
    line.style.strokeDashoffset = lineTotalLength;

    const controller = new ScrollMagic.Controller();

    const tween = new TimelineMax()
    .add(TweenMax.fromTo(line, 0.3, {strokeDashoffset: 5307.32568359375, ease: Linear.easeNone}, {strokeDashoffset: 0, ease: Linear.easeNone}));

    const scene = new ScrollMagic
    .Scene({triggerElement: "#trigger1", duration: 2700})
    .setTween(tween);

    scene.addTo(controller);

};

export default buildSpace;