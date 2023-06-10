const buildSpace = () => {

    const dots = document.querySelectorAll('g.dots');
    const animatedDots = {};
    dots.forEach( (dot, index) => {
        animatedDots[`dot${index}`] = TweenMax.to(dot, 0.3, {opacity: 1}).pause();
    });
    
    const line = document.querySelector('path#line');
    const lineTotalLength = line.getTotalLength();
    line.style.strokeDasharray = lineTotalLength;
    line.style.strokeDashoffset = lineTotalLength;

    const scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 2700})
    .on('progress', ({progress}) => {

        if(progress >= 0.01) {
            animatedDots.dot0.play();
        } else if(progress <= 0.01) {
            animatedDots.dot0.reverse();
        }

        if(progress >= 0.13333333333333333) {
            animatedDots.dot1.play();
        } else if(progress <= 0.13333333333333333) {
            animatedDots.dot1.reverse();
        }

        if(progress >= 0.3111111111111111) {
            animatedDots.dot2.play();
        } else if(progress <= 0.3111111111111111) {
            animatedDots.dot2.reverse();
        }

        if(progress >= 0.45) {
            animatedDots.dot3.play();
        } else if(progress <= 0.45) {
            animatedDots.dot3.reverse();
        }

        if(progress >= 0.55) {
            animatedDots.dot4.play();
        } else if(progress <= 0.55) {
            animatedDots.dot4.reverse();
        }

        if(progress >= 0.7) {
            animatedDots.dot5.play();
        } else if(progress <= 0.7) {
            animatedDots.dot5.reverse();
        }

        if(progress >= 0.85) {
            animatedDots.dot6.play();
        } else if(progress <= 0.85) {
            animatedDots.dot6.reverse();
        }

        if(progress >= 0.98) {
            animatedDots.dot7.play();
        } else if(progress <= 0.98) {
            animatedDots.dot7.reverse();
        }

    });

    const tween = TweenMax.to(line, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone});
    scene.setTween(tween);

    const controller = new ScrollMagic.Controller();
    scene.addTo(controller);

};

export default buildSpace;