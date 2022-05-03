//Background Animation
const tl = gsap.timeline({
    defaults: {duration: 1, ease: "Power3.easeOut"},
})

tl.fromTo(
    ".gradient-bg",
    { scale: 1, borderRadius: "0rem"},
    {
        scale:"0.98",
        borderRadius:"1rem",
        delay: 0.35,
        duration: 2.5,
        zIndex:1, //to fix the z-index
        ease: "elastic.out(1.5,1)"
    }
)

//Text Animation
const textrev = gsap.timeline()

textrev.from(".home-text *", 1, {
    y:100,
    ease: "power4.out",
    delay: 1.5,
    opacity: 0,
    skewY: 15,
    stagger: {
        amount: 0.1
    }
})

textrev.from(".info-text *", 1, {
    y:100,
    ease: "power4.out",
    delay: 0.4,
    skewY: 15,
    stagger: {
        amount: 0.1
    }
})