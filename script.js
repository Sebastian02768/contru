const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contactForm');
const cardsContainer = document.getElementById('cardsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('open');
});

contactForm.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Gracias por tu solicitud. Pronto nos pondremos en contacto.');
	contactForm.reset();
});

prevBtn.addEventListener('click', () => {
	const maxIndex = cardsContainer.children.length - 1;
	currentIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
	updateCarousel();
});

nextBtn.addEventListener('click', () => {
	const maxIndex = cardsContainer.children.length - 1;
	currentIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
	updateCarousel();
});

function updateCarousel() {
	const offset = -(currentIndex * 100);
	cardsContainer.style.transform = `translateX(${offset}%)`;
}
