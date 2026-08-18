/*==========================
   Sticky Header
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


/*==========================
   Counter Animation
==========================*/

const counters = document.querySelectorAll(".counter h3");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.innerText.replace("+","");

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / 80);

        if(count < target){

            counter.setAttribute("data-count", count + increment);

            counter.innerText = count + increment + "+";

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});


/*==========================
   Smooth Scroll
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================
   Scroll Reveal Animation
==========================*/

const reveals=document.querySelectorAll(".course,.about,.hero,.footer");

window.addEventListener("scroll",reveal);

function reveal(){

    const windowHeight=window.innerHeight;

    reveals.forEach(item=>{

        const top=item.getBoundingClientRect().top;

        if(top<windowHeight-120){

            item.classList.add("active");

        }

    });

}


/*==========================
   Active Navigation
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        const sectionHeight=section.clientHeight;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


/*==========================
   Back To Top Button
==========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});