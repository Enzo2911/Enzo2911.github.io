const TextSpan= document.querySelectorAll('h1 span');
const Ligne1G = document.querySelector('.lignehautgauche .l1');
const Ligne2G = document.querySelector('.lignehautgauche .l2');
const Ligne1D = document.querySelector('.lignehautdroite .l2');
const Ligne2D = document.querySelector('.lignehautdroite .l2');

/* pluus tard x=) dabord fixe css :)
window.addEventListener('load', () => {

    const timeline = gsap.timeline({ paused: true });

    timeline
    .staggerFrom(TextSpan, 1, {top: -20, opacity: 0, ease: "power2.out"}, 0,3)
    .from(Ligne1, 1, {width: 0, ease:"power2.out"}, '-=1');

    timeline.play();

}) */