const body = document.body;
const slides = document.querySelectorAll('.slide');
const previousArrow = document.getElementById('previous');
const nextArrow = document.getElementById('next');

let activeSlide = 0;

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove('active');
    slides[activeSlide].classList.add('active');
  });
}

nextArrow.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide >= slides.length - 1) {
    activeSlide = 0;
  }
  setBgForBody();
  setActiveSlide();
});

previousArrow.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgForBody();
  setActiveSlide();
});

// Set Background For Body
function setBgForBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

setBgForBody();
