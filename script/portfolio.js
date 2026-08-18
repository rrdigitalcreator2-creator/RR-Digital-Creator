/* =========================================
   RR DIGITAL CREATOR
   PORTFOLIO + CERTIFICATE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       PORTFOLIO FILTER
    ========================================= */

    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            portfolioItems.forEach(function (item) {

                if (
                    filterValue === "all" ||
                    item.classList.contains(filterValue)
                ) {

                    item.style.display = "block";

                    setTimeout(function () {
                        item.classList.add("show");
                    }, 50);

                } else {

                    item.classList.remove("show");

                    setTimeout(function () {
                        item.style.display = "none";
                    }, 250);

                }

            });

        });

    });


    /* =========================================
       CREATE LIGHTBOX
    ========================================= */

    const lightbox = document.createElement("div");

    lightbox.className = "image-lightbox";

    lightbox.innerHTML = `
        <div class="lightbox-content">

            <button class="lightbox-close" aria-label="Close">
                &times;
            </button>

            <button class="lightbox-prev" aria-label="Previous">
                &#10094;
            </button>

            <img class="lightbox-image" src="" alt="Preview">

            <button class="lightbox-next" aria-label="Next">
                &#10095;
            </button>

            <div class="lightbox-caption"></div>

        </div>
    `;

    document.body.appendChild(lightbox);


    /* =========================================
       LIGHTBOX ELEMENTS
    ========================================= */

    const lightboxImage =
        lightbox.querySelector(".lightbox-image");

    const lightboxClose =
        lightbox.querySelector(".lightbox-close");

    const lightboxPrev =
        lightbox.querySelector(".lightbox-prev");

    const lightboxNext =
        lightbox.querySelector(".lightbox-next");

    const lightboxCaption =
        lightbox.querySelector(".lightbox-caption");


    /* =========================================
       COLLECT PORTFOLIO + CERTIFICATE IMAGES
    ========================================= */

    let galleryImages = [];

    const portfolioImages =
        document.querySelectorAll(".portfolio-item img");

    const certificateImages =
        document.querySelectorAll(".certificate-card img");


    portfolioImages.forEach(function (img) {

        galleryImages.push({
            src: img.src,
            title: img.alt || "Portfolio Project"
        });

    });


    certificateImages.forEach(function (img) {

        galleryImages.push({
            src: img.src,
            title: img.alt || "Certificate"
        });

    });


    let currentIndex = 0;


    /* =========================================
       OPEN LIGHTBOX
    ========================================= */

    function openLightbox(index) {

        if (galleryImages.length === 0) {
            return;
        }

        currentIndex = index;

        lightboxImage.src =
            galleryImages[currentIndex].src;

        lightboxCaption.textContent =
            galleryImages[currentIndex].title;

        lightbox.classList.add("active");

        document.body.classList.add("lightbox-open");

    }


    /* =========================================
       CLOSE LIGHTBOX
    ========================================= */

    function closeLightbox() {

        lightbox.classList.remove("active");

        document.body.classList.remove("lightbox-open");

        setTimeout(function () {

            lightboxImage.src = "";

        }, 300);

    }


    /* =========================================
       NEXT IMAGE
    ========================================= */

    function nextImage() {

        if (galleryImages.length === 0) {
            return;
        }

        currentIndex++;

        if (currentIndex >= galleryImages.length) {
            currentIndex = 0;
        }

        lightboxImage.src =
            galleryImages[currentIndex].src;

        lightboxCaption.textContent =
            galleryImages[currentIndex].title;

    }


    /* =========================================
       PREVIOUS IMAGE
    ========================================= */

    function previousImage() {

        if (galleryImages.length === 0) {
            return;
        }

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = galleryImages.length - 1;
        }

        lightboxImage.src =
            galleryImages[currentIndex].src;

        lightboxCaption.textContent =
            galleryImages[currentIndex].title;

    }


    /* =========================================
       PORTFOLIO IMAGE CLICK
    ========================================= */

    portfolioImages.forEach(function (img, index) {

        img.style.cursor = "pointer";

        img.addEventListener("click", function () {

            openLightbox(index);

        });

    });


    /* =========================================
       CERTIFICATE IMAGE CLICK
    ========================================= */

    certificateImages.forEach(function (img, index) {

        const galleryIndex =
            portfolioImages.length + index;

        img.style.cursor = "pointer";

        img.addEventListener("click", function () {

            openLightbox(galleryIndex);

        });

    });


    /* =========================================
       CERTIFICATE OVERLAY CLICK
    ========================================= */

    const certificateOverlays =
        document.querySelectorAll(".certificate-overlay");

    certificateOverlays.forEach(function (overlay, index) {

        overlay.addEventListener("click", function (event) {

            event.preventDefault();
            event.stopPropagation();

            const galleryIndex =
                portfolioImages.length + index;

            openLightbox(galleryIndex);

        });

    });


    /* =========================================
       CLOSE BUTTON
    ========================================= */

    lightboxClose.addEventListener("click", function () {

        closeLightbox();

    });


    /* =========================================
       NEXT BUTTON
    ========================================= */

    lightboxNext.addEventListener("click", function () {

        nextImage();

    });


    /* =========================================
       PREVIOUS BUTTON
    ========================================= */

    lightboxPrev.addEventListener("click", function () {

        previousImage();

    });


    /* =========================================
       CLICK OUTSIDE IMAGE TO CLOSE
    ========================================= */

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });


    /* =========================================
       ESC / ARROW KEYS
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (!lightbox.classList.contains("active")) {
            return;
        }

        if (event.key === "Escape") {

            closeLightbox();

        }

        if (event.key === "ArrowRight") {

            nextImage();

        }

        if (event.key === "ArrowLeft") {

            previousImage();

        }

    });


    /* =========================================
       TOUCH / SWIPE SUPPORT
    ========================================= */

    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener("touchstart", function (event) {

        touchStartX = event.changedTouches[0].screenX;

    });


    lightbox.addEventListener("touchend", function (event) {

        touchEndX = event.changedTouches[0].screenX;

        handleSwipe();

    });


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;

        if (Math.abs(swipeDistance) < 50) {
            return;
        }

        if (swipeDistance < 0) {

            nextImage();

        } else {

            previousImage();

        }

    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const pageLinks =
        document.querySelectorAll('a[href^="#"]');

    pageLinks.forEach(function (link) {

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

});