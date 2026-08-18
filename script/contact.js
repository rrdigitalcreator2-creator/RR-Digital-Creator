/*====================================================
        RR DIGITAL CREATOR - CONTACT PAGE JS
====================================================*/

document.addEventListener("DOMContentLoaded", function () {


    /*====================================================
                HEADER SCROLL EFFECT
    ====================================================*/

    const header = document.querySelector("header");

    function headerScroll() {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", headerScroll);


    /*====================================================
                CONTACT FORM
    ====================================================*/

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const phone = document.getElementById("phone").value.trim();

            const subject = document.getElementById("subject").value.trim();

            const message = document.getElementById("message").value.trim();


            /*------------------------------------------
                    BASIC VALIDATION
            ------------------------------------------*/

            if (name === "") {

                showMessage(
                    "Please enter your full name.",
                    "error"
                );

                return;

            }


            if (email === "") {

                showMessage(
                    "Please enter your email address.",
                    "error"
                );

                return;

            }


            if (!validateEmail(email)) {

                showMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            if (phone === "") {

                showMessage(
                    "Please enter your phone number.",
                    "error"
                );

                return;

            }


            if (subject === "") {

                showMessage(
                    "Please enter the subject.",
                    "error"
                );

                return;

            }


            if (message === "") {

                showMessage(
                    "Please write your message.",
                    "error"
                );

                return;

            }


            /*------------------------------------------
                    SUCCESS MESSAGE
            ------------------------------------------*/

            showMessage(
                "Thank you! Your message has been submitted successfully.",
                "success"
            );


            /*------------------------------------------
                    WHATSAPP MESSAGE
            ------------------------------------------*/

            const whatsappMessage =
                "Hello RR Digital Creator,%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Email: " + encodeURIComponent(email) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Subject: " + encodeURIComponent(subject) + "%0A" +
                "Message: " + encodeURIComponent(message);


            /*------------------------------------------
                OPEN WHATSAPP AFTER SHORT DELAY
            ------------------------------------------*/

            setTimeout(function () {

                window.open(
                    "https://wa.me/923715885011?text=" +
                    whatsappMessage,
                    "_blank"
                );

            }, 1200);


            /*------------------------------------------
                    RESET FORM
            ------------------------------------------*/

            contactForm.reset();

        });

    }


    /*====================================================
                EMAIL VALIDATION
    ====================================================*/

    function validateEmail(email) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailPattern.test(email);

    }


    /*====================================================
                MESSAGE BOX
    ====================================================*/

    function showMessage(message, type) {

        const oldMessage =
            document.querySelector(".form-message");

        if (oldMessage) {

            oldMessage.remove();

        }


        const messageBox =
            document.createElement("div");

        messageBox.className =
            "form-message " + type;

        messageBox.textContent =
            message;


        const form =
            document.getElementById("contactForm");


        if (form) {

            form.insertBefore(
                messageBox,
                form.firstChild
            );

        }


        setTimeout(function () {

            messageBox.remove();

        }, 5000);

    }


    /*====================================================
                FAQ ACCORDION
    ====================================================*/

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(function (item) {

        const question =
            item.querySelector("h3");

        const answer =
            item.querySelector("p");


        if (question && answer) {

            answer.style.display = "none";


            question.style.cursor =
                "pointer";


            question.addEventListener(
                "click",
                function () {

                    const isOpen =
                        answer.style.display === "block";


                    /* Close all other answers */

                    faqItems.forEach(
                        function (otherItem) {

                            const otherAnswer =
                                otherItem.querySelector("p");

                            if (
                                otherAnswer &&
                                otherItem !== item
                            ) {

                                otherAnswer.style.display =
                                    "none";

                            }

                        }
                    );


                    if (isOpen) {

                        answer.style.display =
                            "none";

                    } else {

                        answer.style.display =
                            "block";

                    }

                }
            );

        }

    });


    /*====================================================
                SCROLL REVEAL ANIMATION
    ====================================================*/

    const animatedElements =
        document.querySelectorAll(
            ".info-box, .contact-form, " +
            ".contact-details, .faq-item, " +
            ".newsletter, .map"
        );


    function revealElements() {

        const windowHeight =
            window.innerHeight;


        animatedElements.forEach(
            function (element) {

                const position =
                    element.getBoundingClientRect().top;


                if (position <
                    windowHeight - 80) {

                    element.classList.add(
                        "show"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        revealElements
    );

    revealElements();


    /*====================================================
                BACK TO TOP BUTTON
    ====================================================*/

    const topButton =
        document.createElement("button");


    topButton.className =
        "top-btn";


    topButton.innerHTML =
        '<i class="fas fa-arrow-up"></i>';


    topButton.setAttribute(
        "aria-label",
        "Back to top"
    );


    document.body.appendChild(
        topButton
    );


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                topButton.classList.add(
                    "show"
                );

            } else {

                topButton.classList.remove(
                    "show"
                );

            }

        }
    );


    topButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /*====================================================
                NEWSLETTER FORM
    ====================================================*/

    const newsletter =
        document.querySelector(
            ".newsletter form"
        );


    if (newsletter) {

        newsletter.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const emailInput =
                    newsletter.querySelector(
                        "input[type='email']"
                    );


                if (!emailInput) {

                    return;

                }


                const email =
                    emailInput.value.trim();


                if (!validateEmail(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }


                alert(
                    "Thank you for subscribing to RR Digital Creator!"
                );


                emailInput.value = "";

            }
        );

    }


    /*====================================================
                SMOOTH INTERNAL LINKS
    ====================================================*/

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });


    /*====================================================
                PHONE NUMBER CLICK
    ====================================================*/

    const phoneLinks =
        document.querySelectorAll(
            ".phone-link"
        );


    phoneLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                console.log(
                    "Calling RR Digital Creator..."
                );

            }
        );

    });


    /*====================================================
                PAGE LOADED
    ====================================================*/

    console.log(
        "RR Digital Creator Contact Page Loaded Successfully!"
    );

});