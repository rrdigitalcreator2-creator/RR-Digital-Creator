/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*==============================
      SCROLL REVEAL
==============================*/

const revealElements = document.querySelectorAll(
".card, .title, .cta"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==============================
      ACTIVE MENU
==============================*/

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


/*==============================
      SMOOTH SCROLL
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
      CARD HOVER EFFECT
==============================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/*==============================
      BACK TO TOP
==============================*/

const topButton = document.createElement("button");

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*==============================
      LOADING ANIMATION
==============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==============================
      BUTTON RIPPLE
==============================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        let x = e.clientX - e.target.offsetLeft;

        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        ripple.style.left = x + "px";

        ripple.style.top = y + "px";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});