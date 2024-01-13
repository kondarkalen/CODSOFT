const wrapper = document.querySelector('.container-wrapper');
gsap.to(wrapper, { overflow: "hidden" });
gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".section-container section");
let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".section-container",
        pin: true,
        scrub: 1,
        end: "+=2000"
    }
})
sections.forEach(section => {
    let text = section.querySelectorAll('.animate');
    gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.2,
        scrollTrigger: {
            trigger: section,
            start: "left center",
        }
    })
})
const mask = document.querySelector('.mask');
gsap.to(mask, {
    left: "110%",
    scrollTrigger: {
        trigger: ".section-container",
        containerAnimation: scrollTween,
        start: "top left",
        scrub: 1,
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const bioSection = document.querySelector('.full-bio');
    const bioHeadings = document.querySelectorAll('.bio h5, .bio p');
    const bioAnimation = gsap.timeline({ defaults: { ease: 'power2.out' } })
    bioAnimation.from(bioHeadings, { y: -50, opacity: 0, stagger: 0.2, duration: 0.8 });
    ScrollTrigger.create({
        trigger: bioSection,
        start: 'top 80%',
        end: 'bottom 20%',
        animation: bioAnimation,
        scrub: true,
        markers: false
    });
});

var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement: "#section1"
})
    .setTween("#bg img", {
        opacity: 0.45
    })
    .addTo(controller);
scene = new ScrollMagic.Scene({
    triggerElement: "#section2"
})
    .setTween("#bg img", {
        width: "800px",
        height: "600px",
        maxWidth: "1200px",
        top: "40%",
        left: "80%",
        opacity: 0.32,
    })
    .addTo(controller);

scene = new ScrollMagic.Scene({
    triggerElement: "#section8"
})
    .setTween("#bg img", {
        opacity: 0
    })
    .addTo(controller);

let revealContainers = document.querySelectorAll('.reveal');
revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let t1 = gsap.timeline({
        scrollTrigger: {
            trigger: container,
        }
    });
    t1.set(container, { autoAlpha: 1 });
    t1.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
    });
    t1.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
    });
});
let h2_p = document.querySelectorAll('.translate-x');
gsap.from(h2_p, {
    x: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".hobbies",
        start: "left center",
    }
})
Splitting();
let cursor = document.querySelector('.cursor'),
    cursorText = cursor.querySelectorAll('.char');
let radius = 40;
window.addEventListener('load', () => {
    rounded(radius);
})
const rounded = (radius) => {
    for (let i = 0; i < cursorText.length; i++) {
        let rotation = i * (360 / cursorText.length);
        gsap.set(cursorText[i], {
            transformOrigin: `0px ${radius}px`,
            x: radius,
            rotate: rotation
        });
        gsap.set(cursor, { transformOrigin: "centre centre", rotation: 0, width: radius * 2, height: radius * 2 });
    }
    let rotate = gsap.timeline({ repeat: -1 })
    rotate.to(cursor, { rotation: 360, duration: 5, ease: "none" })
}
const sectionquote = document.querySelector('.section-quote');
sectionquote.addEventListener("mouseenter", () => {
    gsap.to(cursor, { scale: 1, opacity: 1 })
});
sectionquote.addEventListener('mouseleave', () => {
    gsap.to(cursor, { scale: 0, opacity: 0 })
});
sectionquote.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { left: e.x - radius, top: e.y - radius })
});