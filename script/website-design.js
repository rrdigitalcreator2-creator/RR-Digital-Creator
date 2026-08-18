/* =========================================
   RR DIGITAL CREATOR
   WEBSITE DESIGNING PAGE JS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

        // Close menu when clicking a link
        const navLinks = document.querySelectorAll("nav a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                nav.classList.remove("active");
                menuToggle.classList.remove("active");

            });

        });
    }


    /* =========================================
       HEADER SCROLL EFFECT
    ========================================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (header) {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }
        }

    });


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       SERVICE CARD ANIMATION
    ========================================= */

    const serviceCards = document.querySelectorAll(
        ".service-card, .website-card, .feature-card, .course"
    );

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.classList.add("hover-active");

        });

        card.addEventListener("mouseleave", function () {

            this.classList.remove("hover-active");

        });

    });


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-title, .service-card, .website-card, .feature-card, .about-content, .about-image"
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
            threshold: 0.15
        }
    );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================================
       COUNTER ANIMATION
    ========================================= */

    const counters = document.querySelectorAll(".counter-number");

    function startCounter(counter) {

        const target = parseInt(
            counter.getAttribute("data-target")
        );

        let current = 0;

        const increment = Math.ceil(target / 100);

        function updateCounter() {

            current += increment;

            if (current >= target) {

                counter.textContent = target + "+";

            } else {

                counter.textContent = current;

                requestAnimationFrame(updateCounter);

            }

        }

        updateCounter();
    }


    if (counters.length > 0) {

        const counterObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        startCounter(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );

        counters.forEach(function (counter) {

            counterObserver.observe(counter);

        });

    }


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {

        const linkPage = link
            .getAttribute("href")
            .split("/")
            .pop();

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    /* =========================================
       BACK TO TOP BUTTON
    ========================================= */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       CONTACT / QUOTE BUTTON
    ========================================= */

    const quoteButtons = document.querySelectorAll(
        ".quote-btn, .get-started, .start-project"
    );

    quoteButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================================
       SERVICE BUTTONS
    ========================================= */

    const serviceButtons =
        document.querySelectorAll(".service-btn");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            const card = this.closest(
                ".service-card, .website-card"
            );

            if (card) {

                const title =
                    card.querySelector("h3, h2");

                if (title) {

                    console.log(
                        "Selected Service: " +
                        title.textContent
                    );

                }

            }

        });

    });


    /* =========================================
       TILT EFFECT FOR PREMIUM CARDS
    ========================================= */

    const tiltCards = document.querySelectorAll(
        ".service-card, .website-card"
    );

    tiltCards.forEach(function (card) {

        card.addEventListener("mousemove", function (e) {

            const rect = card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });


        card.addEventListener("mouseleave", function () {

            card.style.transform = "";

        });

    });


    /* =========================================
       FORM VALIDATION
    ========================================= */

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (e) {

            const requiredFields =
                form.querySelectorAll("[required]");

            let valid = true;

            requiredFields.forEach(function (field) {

                if (!field.value.trim()) {

                    valid = false;

                    field.classList.add("input-error");

                } else {

                    field.classList.remove("input-error");

                }

            });


            if (!valid) {

                e.preventDefault();

                alert(
                    "Please fill in all required fields."
                );

            }

        });

    });


    /* =========================================
       GOLD BUTTON RIPPLE EFFECT
    ========================================= */

    const buttons = document.querySelectorAll(
        ".btn, .btn2, .service-btn"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                (e.clientX - rect.left) + "px";

            ripple.style.top =
                (e.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(function () {

                ripple.remove();

            }, 600);

        });

    });


    /* =========================================
       PAGE LOADED
    ========================================= */

    document.body.classList.add("page-loaded");

});