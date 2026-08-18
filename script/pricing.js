/*=====================================
        STICKY HEADER
=====================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/*=====================================
        ACTIVE NAVIGATION
=====================================*/

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


/*=====================================
        SMOOTH SCROLL
=====================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=====================================
        SCROLL REVEAL
=====================================*/

const reveals = document.querySelectorAll(
".price-card, .faq-box, .section-title, .cta"
);

function revealAnimation(){

    const windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);

revealAnimation();


/*=====================================
        CARD HOVER
=====================================*/

const cards = document.querySelectorAll(".price-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        if(card.classList.contains("popular")){

            card.style.transform="scale(1.05)";

        }else{

            card.style.transform="translateY(0) scale(1)";

        }

    });

});


/*=====================================
        FAQ ACCORDION
=====================================*/

const faqItems = document.querySelectorAll(".faq-box");

faqItems.forEach(item=>{

    const answer = item.querySelector("p");

    answer.style.display="none";

    item.addEventListener("click",()=>{

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            faqItems.forEach(box=>{

                box.querySelector("p").style.display="none";

            });

            answer.style.display="block";

        }

    });

});


/*=====================================
        BACK TO TOP
=====================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=====================================
        BUTTON RIPPLE
=====================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const circle=document.createElement("span");

        circle.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        circle.style.left=(e.clientX-rect.left)+"px";

        circle.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});


/*=====================================
        LOADING
=====================================*/

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});


/*=====================================
        CURRENT YEAR
=====================================*/

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}