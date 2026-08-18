/* =========================================================
   RR DIGITAL CREATOR
   VIDEO PRODUCTION PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector("header");

    function headerScrollEffect() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", headerScrollEffect);

    headerScrollEffect();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const smoothLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId === "#" ||
                targetId === ""
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================================
       SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".video-card, .process-box, .section-heading, .video-hero-content, .video-hero-image, .cta-content"
        );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================================
       SERVICE CARD STAGGER ANIMATION
    ===================================================== */

    const serviceCards =
        document.querySelectorAll(".video-card");

    serviceCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });


    /* =====================================================
       PROCESS CARD STAGGER ANIMATION
    ===================================================== */

    const processCards =
        document.querySelectorAll(".process-box");

    processCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });


    /* =====================================================
       PLAY BUTTON
    ===================================================== */

    const playButton =
        document.querySelector(".play-icon");

    if (playButton) {

        playButton.addEventListener(
            "click",
            function () {

                /*
                 * Yahan baad mein aap YouTube video,
                 * MP4 video ya video popup add kar sakti hain.
                 */

                alert(
                    "Video preview will be available soon!"
                );

            }
        );

    }


    /* =====================================================
       SERVICE LINK EFFECT
    ===================================================== */

    const serviceLinks =
        document.querySelectorAll(
            ".service-link"
        );

    serviceLinks.forEach(function (link) {

        link.addEventListener(
            "mouseenter",
            function () {

                const icon =
                    this.querySelector("i");

                if (icon) {
                    icon.style.transform =
                        "translateX(5px)";
                }

            }
        );


        link.addEventListener(
            "mouseleave",
            function () {

                const icon =
                    this.querySelector("i");

                if (icon) {
                    icon.style.transform =
                        "translateX(0)";
                }

            }
        );

    });


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    const backToTop =
        document.createElement("div");

    backToTop.className =
        "back-to-top";

    backToTop.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(backToTop);


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop();

    const navLinks =
        document.querySelectorAll(
            "nav ul li a"
        );

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       BUTTON CLICK EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .btn-outline"
        );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                this.style.transform =
                    "scale(0.97)";

                setTimeout(() => {

                    this.style.transform = "";

                }, 120);

            }
        );

    });


    /* =====================================================
       HERO IMAGE PARALLAX EFFECT
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".video-hero-image"
        );

    window.addEventListener(
        "scroll",
        function () {

            if (!heroImage) return;

            const scrollPosition =
                window.scrollY;

            if (scrollPosition < 650) {

                heroImage.style.transform =
                    `translateY(${scrollPosition * 0.04}px)`;

            }

        }
    );


    /* =====================================================
       CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "RR Digital Creator - Video Production Page Loaded Successfully!"
    );

});