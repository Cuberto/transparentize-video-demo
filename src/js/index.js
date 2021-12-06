import SmoothScrollbar from 'smooth-scrollbar';
import ScrollTriggerPlugin from 'vendor/smooth-scrollbar/ScrollTriggerPlugin';
import SoftScrollPlugin from 'vendor/smooth-scrollbar/SoftScrollPlugin';
import gsap from "gsap";

// GSAP ScrollTrigger & Soft Edges plugin for SmoothScroll
SmoothScrollbar.use(ScrollTriggerPlugin, SoftScrollPlugin);

// Init smooth scrollbar
const view = document.getElementById('view-main');
const scrollbar = SmoothScrollbar.init(view, {
    renderByPixels: false,
    damping: 0.075
});

// Main animation
(function () {
    const container = document.querySelector('.cb-demo');
    const bg = container.querySelector('.cb-demo-bg');
    const preview = container.querySelector('.cb-demo-preview');
    const overlay = container.querySelector('.cb-demo-overlay');

    const tl = new gsap.timeline({
        scrollTrigger: {
            trigger: container,
            pin: true,
            pinType: "transform",
            end: "700%",
            scrub: true
        }
    });

    // Scale scene
    // tl.from(preview, {
    //     scale: 0.7,
    //     duration: 3
    // }, 0);

    // First color set
    tl.to(bg, {
        background: "#1d3557",
        duration: 1
    }, 0);

    tl.to(overlay, {
        background: "#0000FF",
        duration: 1
    }, 1);

    tl.to(bg, {
        background: "#4A3D57",
        duration: 1
    }, 2);

    tl.to(overlay, {
        background: "#AAD5A9",
        duration: 1
    }, 2);

    tl.to(bg, {
        background: "#2E3034",
        duration: 1
    }, 3);

    tl.to(overlay, {
        background: "#00ff00",
        duration: 1
    }, 3);

})();