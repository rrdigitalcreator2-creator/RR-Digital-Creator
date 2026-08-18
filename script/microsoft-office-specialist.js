/* =========================================================
   RR DIGITAL CREATOR
   MICROSOFT OFFICE SPECIALIST SERVICES
   JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("mobile-active");

            const icon = menuToggle.querySelector("i");

            if (mainNav.classList.contains("mobile-active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close menu after clicking a link */

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("mobile-active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }



    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector(".site-header");

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

    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                const target = document.querySelector(targetId);

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

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".intro-image, " +
        ".intro-text, " +
        ".course-card, " +
        ".feature-box, " +
        ".process-card, " +
        ".audience-card, " +
        ".hero-content, " +
        ".hero-image"
    );


    const revealObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });



    /* =====================================================
       SERVICE CARD STAGGER ANIMATION
    ===================================================== */

    const serviceCards = document.querySelectorAll(
        ".course-card"
    );

    serviceCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.08}s`;

    });



    /* =====================================================
       FEATURE CARD STAGGER ANIMATION
    ===================================================== */

    const featureCards = document.querySelectorAll(
        ".feature-box"
    );

    featureCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });



    /* =====================================================
       PROCESS CARD STAGGER ANIMATION
    ===================================================== */

    const processCards = document.querySelectorAll(
        ".process-card"
    );

    processCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });



    /* =====================================================
       AUDIENCE CARD STAGGER ANIMATION
    ===================================================== */

    const audienceCards = document.querySelectorAll(
        ".audience-card"
    );

    audienceCards.forEach(function (card, index) {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    });



    /* =====================================================
       BUTTON CLICK EFFECT
    ===================================================== */

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .header-btn, .course-link"
    );


    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("button-clicked");

            setTimeout(() => {

                this.classList.remove("button-clicked");

            }, 250);

        });

    });



    /* =====================================================
       CONTACT BUTTON
    ===================================================== */

    const quoteButtons = document.querySelectorAll(
        'a[href="contact.html"]'
    );


    quoteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Redirecting to Contact Page..."
            );

        });

    });



    /* =====================================================
       IMAGE LOAD EFFECT
    ===================================================== */

    const images = document.querySelectorAll("img");


    images.forEach(function (image) {

        image.addEventListener("load", function () {

            image.classList.add("image-loaded");

        });

    });



    /* =====================================================
       ESC KEY - CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (
                mainNav &&
                mainNav.classList.contains("mobile-active")
            ) {

                mainNav.classList.remove(
                    "mobile-active"
                );

                if (menuToggle) {

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        }

    });



    /* =====================================================
       WINDOW RESIZE
    ===================================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 850) {

            if (mainNav) {

                mainNav.classList.remove(
                    "mobile-active"
                );

            }

            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    console.log(
        "RR Digital Creator - Microsoft Office Services Loaded Successfully."
    );

});