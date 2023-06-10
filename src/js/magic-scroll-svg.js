const buildSpace = () => {

    const dot1 = document.querySelector('g#dot-1');
    const dot1Tween = TweenMax.to(dot1, 0.3, {opacity: 1}).pause();
    
    const line = document.querySelector('path#line');
    const lineTotalLength = line.getTotalLength();
    line.style.strokeDasharray = lineTotalLength;
    line.style.strokeDashoffset = lineTotalLength;

    const controller = new ScrollMagic.Controller();

    const tween = TweenMax.fromTo(line, 0.3, {strokeDashoffset: 5307.32568359375, ease: Linear.easeNone}, {strokeDashoffset: 0, ease: Linear.easeNone});

    const scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2700})
    .on('progress', ({progress}) => {

        if(progress >= 0.044444444444444446) {
            dot1Tween.play();
        } else if(progress <= 0.044444444444444446) {
            dot1Tween.reverse();
        }

    })
    .setTween(tween);

    scene.addTo(controller);

};

export default buildSpace;