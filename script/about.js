/*==============================
        STICKY HEADER
==============================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});


/*==============================
      SCROLL ANIMATION
==============================*/

const reveals = document.querySelectorAll(

".about-company, .box, .mission, .counter-grid div"

);

window.addEventListener("scroll", reveal);

function reveal(){

    let windowHeight = window.innerHeight;

    reveals.forEach(item=>{

        let top = item.getBoundingClientRect().top;

        if(top < windowHeight-120){

            item.classList.add("show");

        }

    });

}

reveal();


/*==============================
      COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".counter-grid h2");

const speed=150;

counters.forEach(counter=>{

const animate=()=>{

const target=+counter.innerText.replace("+","");

const count=+counter.innerText.replace("+","");

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment+"+";

setTimeout(animate,20);

}else{

counter.innerText=target+"+";

}

}

counter.innerText="0+";

animate();

});


/*==============================
      IMAGE HOVER EFFECT
==============================*/

const image=document.querySelector(".about-image img");

if(image){

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.05)";

image.style.transition=".5s";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});

}


/*==============================
      BACK TO TOP
==============================*/

const topBtn=document.createElement("button");

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

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*==============================
      ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

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


/*==============================
      PAGE LOADED
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*==============================
      BUTTON RIPPLE EFFECT
==============================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

let x=e.clientX-e.target.offsetLeft;

let y=e.clientY-e.target.offsetTop;

let ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});