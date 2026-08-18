/* =========================================================
   RR DIGITAL CREATOR
   DIGITAL MARKETING PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       HEADER SCROLL EFFECT
    ===================================================== */

    const header = document.querySelector("header");

    function headerScroll() {

        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", headerScroll);

    headerScroll();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#" ||
                targetId.length < 2
            ) {
                return;
            }

            const target = document.querySelector(targetId);

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

    const revealElements = document.querySelectorAll(
        ".dm-card, .process-box, .section-heading, .dm-hero-text, .dm-hero-image, .dm-cta"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });


    if ("IntersectionObserver" in window) {

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
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    /* =====================================================
       DIGITAL MARKETING CARD HOVER
    ===================================================== */

    const cards = document.querySelectorAll(
        ".dm-card, .process-box"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.classList.add("hover-active");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("hover-active");
        });

    });


    /* =====================================================
       SERVICE LINK CLICK
    ===================================================== */

    const serviceLinks =
        document.querySelectorAll(".service-link");

    serviceLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const card = this.closest(".dm-card");

            if (card) {

                const serviceName =
                    card.querySelector("h3");

                if (serviceName) {

                    console.log(
                        "Selected Service: " +
                        serviceName.textContent.trim()
                    );

                }

            }

        });

    });


    /* =====================================================
       HERO IMAGE PARALLAX EFFECT
    ===================================================== */

    const heroImage =
        document.querySelector(".dm-hero-image img");

    if (heroImage) {

        window.addEventListener("scroll", function () {

            const scrollPosition = window.scrollY;

            if (scrollPosition < 700) {

                heroImage.style.transform =
                    `translateY(${scrollPosition * 0.04}px)`;

            }

        });

    }


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();

    const navigationLinks =
        document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        const href =
            link.getAttribute("href");

        if (!href) return;

        const linkPage =
            href.split("/").pop().toLowerCase();

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    /* =====================================================
       COUNTER ANIMATION
       
       HTML example:
       <span class="counter-number"
             data-target="500">0</span>
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter-number");

    function animateCounter(counter) {

        const target =
            parseInt(
                counter.getAttribute("data-target")
            );

        if (isNaN(target)) return;

        let current = 0;

        const duration = 1500;

        const startTime = performance.now();

        function updateCounter(currentTime) {

            const progress =
                Math.min(
                    (currentTime - startTime) / duration,
                    1
                );

            current =
                Math.floor(
                    progress * target
                );

            counter.textContent = current;

            if (progress < 1) {

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target + "+";

            }

        }

        requestAnimationFrame(updateCounter);

    }


    if (counters.length > 0) {

        if ("IntersectionObserver" in window) {

            const counterObserver =
                new IntersectionObserver(
                    function (entries, observer) {

                        entries.forEach(function (entry) {

                            if (entry.isIntersecting) {

                                animateCounter(
                                    entry.target
                                );

                                observer.unobserve(
                                    entry.target
                                );

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

    }


    /* =====================================================
       BACK TO TOP BUTTON
    ===================================================== */

    let backToTop =
        document.querySelector(".back-to-top");


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

        document.body.appendChild(backToTop);

    }


    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


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
            ".btn, .btn-outline, .service-link"
        );

    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement("span");

                ripple.classList.add("ripple");

                const rect =
                    button.getBoundingClientRect();

                ripple.style.left =
                    (event.clientX - rect.left) + "px";

                ripple.style.top =
                    (event.clientY - rect.top) + "px";

                button.appendChild(ripple);

                setTimeout(function () {

                    ripple.remove();

                }, 600);

            }
        );

    });


    /* =====================================================
       CONTACT FORM VALIDATION
    ===================================================== */

    const contactForm =
        document.querySelector("#contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                const requiredFields =
                    contactForm.querySelectorAll(
                        "[required]"
                    );

                let isValid = true;


                requiredFields.forEach(
                    function (field) {

                        if (
                            field.value.trim() === ""
                        ) {

                            field.classList.add(
                                "input-error"
                            );

                            isValid = false;

                        } else {

                            field.classList.remove(
                                "input-error"
                            );

                        }

                    }
                );


                if (!isValid) {

                    event.preventDefault();

                    alert(
                        "Please fill in all required fields."
                    );

                }

            }
        );

    }


    /* =====================================================
       REMOVE INPUT ERROR WHILE TYPING
    ===================================================== */

    const inputs =
        document.querySelectorAll(
            "input, textarea"
        );

    inputs.forEach(function (input) {

        input.addEventListener(
            "input",
            function () {

                if (
                    this.value.trim() !== ""
                ) {

                    this.classList.remove(
                        "input-error"
                    );

                }

            }
        );

    });


    /* =====================================================
       PAGE LOADED
    ===================================================== */

    document.body.classList.add(
        "page-loaded"
    );

});