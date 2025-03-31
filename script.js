window.addEventListener("DOMContentLoaded", () => {
    smoothScroll();
    navigationToggle();
    mainPage();
    skewAnimation();
    btnAniamtion()
    worksStaggerAnimation();
    projectStaggerAnimation();
    footerAnimation();
})

function footerAnimation() {
    let hover = document.querySelector(".lower");
    hover.addEventListener("mouseover", () => {
        gsap.to(".lower h1", {
            left: "15%"
        })
        gsap.to(".go", {
            background: "#fff"
        })
        gsap.to(".upper h1 span", {
            y: -115,
        })
    })
    hover.addEventListener("mouseleave", () => {
        gsap.to(".lower h1", {
            left: "-20%"
        })
        gsap.to(".go", {
            background: "#D0F034"
        })
        gsap.to(".upper h1 span", {
            y: 0,
        })
    })
}

// Projects Stagger Animation
function projectStaggerAnimation() {
    gsap.from(".stagger", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".page5",
            start: "0% bottom",
            end: "0% 60%",
            scrub: 1
        }
    })
}

// Navigation Bar
function navigationToggle() {
    let links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(link => {
                link.classList.remove("active");
            })
            link.classList.add("active")
        })
    })
}

// Stagger Animation for works
function worksStaggerAnimation() {
    gsap.from(".table .tab", {
        opacity: 0,
        stagger: "0.5",
        scrollTrigger: {
            trigger: ".table",
            start: "-100% 80%",
            end: "-100% 20%",
            scrub: true
        }
    })
    gsap.from(".projects #head", {
        opacity: 0.5,
        scrollTrigger: {
            trigger: ".projects",
            start: "-50% 70%",
            end: "-50% 0%",
            scrub: true
        }
    })
}

// Skew Animation
function skewAnimation() {
    let aboutCard = document.querySelector(".about-card");
    gsap.from(aboutCard, {
        rotate: "5deg",
        transform: "skew(0deg, 6deg)",
        scrollTrigger: {
            trigger: aboutCard,
            start: "top 95%",
            end: "top 40%",
            scrub: 1
        }
    })
}

// Button Hover Animation
function btnAniamtion() {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(btn => {
        let icon = btn.querySelector(".icon")
        let text = btn.querySelector(".btnText")
        btn.addEventListener("mouseover", () => {
            gsap.to(btn, {
                background: "#D0F034", delay: 0.1,
                onStart: () => {
                    gsap.to(icon, {
                        background: "white",
                        rotate: "90deg",
                        x: 90
                    })
                    gsap.to(text, {
                        x: -50
                    })
                }
            })
        })
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, {
                background: "linear-gradient(90deg, #454545, #222222)",
                delay: 0.1,
                onStart: () => {
                    gsap.to(icon, {
                        background: "D0F034",
                        rotate: "00deg",
                        x: 0
                    })
                    gsap.to(text, {
                        x: 0
                    })
                }
            })
        })
    })
}

// Main Page Animation
function mainPage() {
    gsap.to(document.documentElement, {
        '--width': '100%',
        scrollTrigger: {
            trigger: ".mask",
            start: "-70% top",
            end: "-70% top",
            scrub: 1
        }
    });

    gsap.to(".page1", {
        height: "50vh",
        scrollTrigger: {
            trigger: ".page1",
            start: "top top",
            end: "80% top",
            scrub: 1
        }
    })

    gsap.to(".page1 .main-area .text-container .mask", {
        scale: 1.1,
        y: "10vh",
        scrollTrigger: {
            trigger: ".page1 .main-area .text-container .mask",
            start: "top 20%",
            end: "80% top",
            scrub: 1
        }
    })

    gsap.to(".page1 .main-area img", {
        scale: 1.2,
        y: "20vh",
        scrollTrigger: {
            trigger: ".page1 .main-area .text-container .mask",
            start: "top 20%",
            end: "80% top",
            scrub: 1
        }
    })

}

// Smooth Scroll
function smoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
}