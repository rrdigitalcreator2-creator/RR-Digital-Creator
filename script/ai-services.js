/* =========================================================
   RR DIGITAL CREATOR
   AI SERVICES PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector("header");

    function headerEffect() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", headerEffect);

    headerEffect();


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    const navLinks =
        document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (!href) return;

        const linkPage =
            href.split("/")
            .pop()
            .toLowerCase();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const anchors =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchors.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
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

            }
        );

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".ai-card, .why-box, .section-heading, .ai-cta"
        );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    if ("IntersectionObserver" in window) {

        const observer =
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
                    threshold: 0.15
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("show");

        });

    }


    /* =====================================================
       AI CARD HOVER
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".ai-card, .why-box"
        );

    cards.forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                this.classList.add(
                    "hover-active"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                this.classList.remove(
                    "hover-active"
                );

            }
        );

    });


    /* =====================================================
       SERVICE CLICK MESSAGE
    ===================================================== */

    const serviceLinks =
        document.querySelectorAll(
            ".service-link"
        );

    serviceLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                const card =
                    this.closest(".ai-card");

                if (!card) return;

                const title =
                    card.querySelector("h3");

                if (title) {

                    console.log(
                        "AI Service Selected: " +
                        title.textContent.trim()
                    );

                }

            }
        );

    });


    /* =====================================================
       HERO IMAGE EFFECT
    ===================================================== */

    const heroImage =
        document.querySelector(
            ".ai-hero-image img"
        );

    if (heroImage) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY < 650) {

                    heroImage.style.transform =
                        "translateY(" +
                        window.scrollY * 0.035 +
                        "px)";

                }

            }
        );

    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    let backToTop =
        document.querySelector(
            ".back-to-top"
        );


    if (!backToTop) {

        backToTop =
            document.createElement("button");

        backToTop.className =
            "back-to-top";

        backToTop.setAttribute(
            "aria-label",
            "Back to top"
        );

        backToTop.innerHTML =
            '<i class="fa-solid fa-arrow-up"></i>';

        document.body.appendChild(
            backToTop
        );

    }


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
       BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn, .btn-outline"
        );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                ripple.classList.add(
                    "ripple"
                );

                const rect =
                    button.getBoundingClientRect();

                ripple.style.left =
                    (
                        event.clientX -
                        rect.left
                    ) + "px";

                ripple.style.top =
                    (
                        event.clientY -
                        rect.top
                    ) + "px";

                button.appendChild(
                    ripple
                );

                setTimeout(
                    function () {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    });


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );


    console.log(
        "RR Digital Creator - AI Services Page Loaded Successfully."
    );

});