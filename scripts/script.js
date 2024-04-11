const container = document.querySelector(".container");
const sections = document.querySelectorAll(".container section");
const mask = document.querySelector(".mask");


const moveButton = document.querySelector('#moveContentButton');
let contentMoved = false;

moveButton.addEventListener('click', () => {
    if (!contentMoved) {
        sections[0].style.transform = 'translateX(-50%)';
        sections[1].style.transform = 'translateX(-50%)'; // Verschiebt den Inhalt nach links
        contentMoved = true;
    } else {
        container.style.transform = 'translateX(0)'; // Setzt den Inhalt zurück
        contentMoved = false;
    }
});

// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     end: "+=3000",
//     //snap: 1 / (sections.length - 1),
//     markers: true,
//   }
// });

// console.log(1 / (sections.length - 1))

//Progress bar animation

// gsap.to(mask, {
//   width: "100%",
//   scrollTrigger: {
//     trigger: ".wrapper",
//     start: "top left",
//     scrub: 1
//   }
// });

// // whizz around the sections
// sections.forEach((section) => {
//   // grab the scoped text
//   let text = section.querySelectorAll(".anim");
  
//   // bump out if there's no items to animate
//   if(text.length === 0)  return 
  
//   // do a little stagger
//   gsap.from(text, {
//     y: -130,
//     opacity: 0,
//     duration: 2,
//     ease: "elastic",
//     stagger: 0.1,
//     scrollTrigger: {
//       trigger: section,
//       containerAnimation: scrollTween,
//       start: "left center",
//       markers: true
//     }
//   });
// });
