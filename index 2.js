/* TOP-UP BUTTON */
const topBtn =
document.getElementById("topBtn");

window.onscroll = function(){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else{
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
};

const words =[
    "Web developer",
    "Programmer",
    "CSE Student",
    "Frontend Learner"
];

let wordIndex = 0;
let charIndex = 0;
let typing = true;

const typingText = 
document.getElementById("typing");

function typeEffect() {
    const currentWord = 
    words[wordIndex];

    if(typing) {
        typingText.textContent = 
        currentWord.substring(0,charIndex++);
        if (charIndex > currentWord.length){
            typing = false;
            setTimeout(typeEffect , 
                1200);
            return;
        }
    }else{
        typingText.textContent = currentWord.substring(0,charIndex--);
        if (charIndex <0){
            typing = true;
            wordIndex = (wordIndex + 1)% words.length;
        }
    }
    setTimeout(typeEffect, typing ? 100 : 50);
}
typeEffect();




/* SCROLL REVEAL */
const reveals =
document.querySelectorAll(".reveal");
function revealSections(){
    reveals.forEach((section) =>{
        const windowHeight = 
        window.innerHeight;
        const sectionTop = 
        section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });
}
window.addEventListener("scroll" , revealSections);
revealSections();





/* */
const section = 
document.querySelectorAll("section");
const navLinks = 
document.querySelectorAll("nav a");

window.addEventListener ("scroll" , () => {
    let current = "";

    revealSections.forEach(section => {
        const sectionTop = 
        HTMLTableSectionElement.offsetTop - 150;

        if(pageYOffset >= sectioTop) {
            current = 
            section.getAttribute("id");
        }
    }); navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") ==="#"
    + current) {
        link.classList.add("active");
    }
    });
});






const navlinks = 
document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click" , 
        function () {
            navlinks.forEach(item =>
                item.classList.remove("active"));

                this.classList.add("active");
        });
});




const form = 
document.querySelector(".contact-form");
form.addEventListener("submit" , 
    function(e) {
        e.preventDefault();

        alert("Thank you for contacting me! I will get back to you soon.");

        form.reset();
    });






/* LOADER AND SPINNER 
window.addEventListener("load" , ()
=> {
    const loader = 
    document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    } , 500);
}); */


/* DARK-MODE 
const themButton = 
document.getElementById("themeButton");

themeButton.addEventListener("click" , () =>{
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeButton.innerHTML = "Light Mode";
    }
    else{
        themeButton.innerHTML = "Dark Mode"
    }
}); */




/* const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }
    });

    navLinks.forEach(function (link) {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

}); */