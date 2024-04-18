
// // script.js
// document.addEventListener('DOMContentLoaded', function() {
//     // Setze die Breite des initialen Viewports auf 200
//     //window.scrollTo(window.innerWidth, 0);
//     console.log("done")
// });
const container = document.querySelector('.container-test');
const pages = document.querySelectorAll(".page");
const moveButtonRight = document.querySelector('#moveContentButtonRight');
const moveButtonLeft = document.querySelector('#moveContentButtonLeft');
const moveButtonBackToRight = document.querySelector('#moveContentBackToRight');
const moveButtonBackToLeft = document.querySelector('#moveContentBackToLeft');
const wrapper = document.querySelector(".wrapper");
let contentMovedRight = false;
let contentMovedLeft = false;

const skillsPage = document.querySelector(".skills-page");
const startPage = document.querySelector(".start-page");
const projectsPage = document.querySelector(".projects-page");

let startPageHeight = startPage.offsetHeight + "px";

skillsPage.style.display = "block";
projectsPage.style.display = "block";

let skillsPageHeight = skillsPage.offsetHeight + "px";
let projectsPageHeight = projectsPage.offsetHeight + "px";

skillsPage.style.display = "none";
projectsPage.style.display = "none";

moveButtonRight.addEventListener('click', () => {
    projectsPage.style.display = "block";
    wrapper.style.height = projectsPageHeight;
    setTimeout(function(){
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.transform = 'translateX(-100%)';
        }
    }, 10);
});

moveButtonBackToRight.addEventListener('click', () => {
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.transform = 'translateX(0)';
    }
    wrapper.style.height = startPageHeight;
    wrapper.style.overflow = "initial";
    setTimeout(function(){
        skillsPage.style.display = "none";
    }, 800);
});

moveButtonLeft.addEventListener('click', () => {
    skillsPage.style.display = "block";
    wrapper.style.height = skillsPageHeight;
    wrapper.style.overflow = "hidden";
    setTimeout(function(){
        for (let i = 0; i < pages.length; i++) {
            pages[i].style.transform = 'translateX(100%)';
        }
    }, 10);
});

moveButtonBackToLeft.addEventListener('click', () => {
    wrapper.style.height = startPageHeight;
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.transform = 'translateX(0)';
    }
    setTimeout(function(){
        projectsPage.style.display = "none";
    }, 800);
});