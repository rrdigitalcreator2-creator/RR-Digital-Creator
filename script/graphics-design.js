// ==========================================
// RR DIGITAL CREATOR
// GRAPHIC DESIGNING PAGE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // MOBILE MENU
    // ==========================================

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", function () {

            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");

        });

    }


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    e.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ==========================================
    // SCROLL REVEAL ANIMATION
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".service-card, .design-card, .portfolio-item, .feature-box, .section-title"
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


    // ==========================================
    // PORTFOLIO IMAGE PREVIEW
    // ==========================================

    const portfolioImages = document.querySelectorAll(
        ".portfolio-item img, .design-card img"
    );

    portfolioImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const imageSource = this.getAttribute("src");

            if (!imageSource) return;

            const preview = document.createElement("div");

            preview.className = "image-preview";

            preview.innerHTML = `
                <div class="preview-content">

                    <button class="preview-close">
                        <i class="fa-solid fa-xmark"></i>
                    </button>

                    <img src="${imageSource}" alt="Graphic Design Preview">

                </div>
            `;

            document.body.appendChild(preview);

            setTimeout(function () {
                preview.classList.add("active");
            }, 10);


            // Close Button

            const closeButton =
                preview.querySelector(".preview-close");

            closeButton.addEventListener("click", function () {

                preview.classList.remove("active");

                setTimeout(function () {
                    preview.remove();
                }, 300);

            });


            // Close by clicking outside

            preview.addEventListener("click", function (e) {

                if (e.target === preview) {

                    preview.classList.remove("active");

                    setTimeout(function () {
                        preview.remove();
                    }, 300);

                }

            });

        });

    });


    // ==========================================
    // SERVICE CARD HOVER
    // ==========================================

    const serviceCards = document.querySelectorAll(
        ".service-card, .design-card, .portfolio-item"
    );

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.classList.add("hovered");

        });

        card.addEventListener("mouseleave", function () {

            this.classList.remove("hovered");

        });

    });


    // ==========================================
    // GET STARTED / CONTACT BUTTON
    // ==========================================

    const contactButtons = document.querySelectorAll(
        ".contact-btn, .get-started, .quote-btn"
    );

    contactButtons.forEach(function (button) {

        button.addEventListener("click", function (e) {

            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {

                e.preventDefault();

                contactSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ==========================================
    // BACK TO TOP BUTTON
    // ==========================================

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


    // ==========================================
    // ACTIVE NAVIGATION
    // ==========================================

    const currentPage =
        window.location.pathname.split("/").pop();

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        }

    });


    // ==========================================
    // COUNTER ANIMATION
    // ==========================================

    const counters = document.querySelectorAll(".counter-number");

    counters.forEach(function (counter) {

        const target =
            parseInt(counter.getAttribute("data-target"));

        if (isNaN(target)) return;

        let current = 0;

        const speed = 30;

        function updateCounter() {

            if (current < target) {

                current += Math.ceil(target / 80);

                if (current > target) {
                    current = target;
                }

                counter.textContent = current + "+";

                setTimeout(updateCounter, speed);

            } else {

                counter.textContent = target + "+";

            }

        }

        updateCounter();

    });


    // ==========================================
    // YEAR AUTOMATICALLY UPDATE
    // ==========================================

    const yearElement =
        document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});


// ==========================================
// BUTTON RIPPLE EFFECT
// ==========================================

document.addEventListener("click", function (e) {

    const button =
        e.target.closest(".btn, .btn2, button");

    if (!button) return;

    const ripple =
        document.createElement("span");

    ripple.className = "ripple";

    button.appendChild(ripple);

    setTimeout(function () {

        ripple.remove();

    }, 600);

});