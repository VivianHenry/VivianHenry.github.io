/*Tab control in About section*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

/*Side menu for mobile devices*/
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

/*Scroll reveal animation*/
ScrollReveal({
    reset: true,
    distance: "40px",
    duration: 1500,
    delay: 100
});  /*Handles refreshing*/

ScrollReveal().reveal(".head, .header-text", {origin: "top"});
ScrollReveal().reveal(".titles", {origin: "left"});
ScrollReveal().reveal(".about-col-1, .about-col-2, .domains-list, .timeline-item.left, .timeline-item.right, .work-list, .certifications-list, .socials", {origin: "bottom"});


/*Typing animation for the home screen*/
const typed = new Typed(".multiple-lines-animation", {
    strings: ["Data Analyst", "Software Developer", "Product Manager"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})