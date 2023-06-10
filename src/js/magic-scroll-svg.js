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

        if(progress >= 0.044444444444444446) {
            animatedDots.dot0.play();
        } else if(progress <= 0.044444444444444446) {
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

        if(progress >= 0.4888888888888889) {
            animatedDots.dot3.play();
        } else if(progress <= 0.4888888888888889) {
            animatedDots.dot3.reverse();
        }

        if(progress >= 0.7555555555555555) {
            animatedDots.dot4.play();
        } else if(progress <= 0.7555555555555555) {
            animatedDots.dot4.reverse();
        }

        if(progress >= 0.8888888888888888) {
            animatedDots.dot5.play();
        } else if(progress <= 0.8888888888888888) {
            animatedDots.dot5.reverse();
        }

        if(progress >= 0.9966666666666667) {
            animatedDots.dot6.play();
        } else if(progress <= 0.9966666666666667) {
            animatedDots.dot6.reverse();
        }

    });

    const tween = TweenMax.fromTo(line, 0.3, {strokeDashoffset: 5307.32568359375, ease: Linear.easeNone}, {strokeDashoffset: 0, ease: Linear.easeNone});
    scene.setTween(tween);

    const controller = new ScrollMagic.Controller();
    scene.addTo(controller);

};

export default buildSpace;