/* Inicio carousel*/
const INTERVAL = 900;

var firstTime = true;
  

const myCarouselElement = document.querySelector('#por-que')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: INTERVAL * 10,
  touch: true,
  ride: true
});

carousel.cycle();

const atras = () => {
  // Select the wrapper element
  const wrapper = document.querySelector('#por-que');
  // Calculate 100vw in pixels
  const scrollAmount = window.innerWidth;
  
  // Scroll horizontally by 100vw to the left, smoothly
  wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

const delante = () => {
  // Select the wrapper element
  const wrapper = document.querySelector('#por-que');
  // Calculate 100vw in pixels
  const scrollAmount = window.innerWidth;
  
  // Scroll horizontally by 100vw to the right, smoothly
  wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
/*Fin carousel*/