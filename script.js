// Mobile Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Typing Effect in Hero
const typingText = ["Web Developer", "Software Engineer", "Problem Solver"];
let i = 0, j = 0;
let currentText = '', isDeleting = false;
const typingSpeed = 100;

function type(){
  const target = document.getElementById('typing');
  if(i >= typingText.length) i = 0;
  if(!isDeleting && j <= typingText[i].length){
    currentText = typingText[i].substring(0, j++);
    target.textContent = currentText;
  } else if(isDeleting && j >= 0){
    currentText = typingText[i].substring(0, j--);
    target.textContent = currentText;
  }

  if(j === typingText[i].length){ isDeleting = true; setTimeout(type, 1000); return; }
  if(isDeleting && j === 0){ isDeleting = false; i++; }
  setTimeout(type, typingSpeed);
}
type();

// Scroll Reveal Effect
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('show');
    }
  });
});

