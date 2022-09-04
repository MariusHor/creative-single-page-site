// This scrolls to the the About section when clicking the Hero Scroll Button.

const scrollBtn = document.querySelector('.scroll-btn');
const aboutSection = document.querySelector('.about') 

scrollBtn.addEventListener('click', () => {
    aboutSection.scrollIntoView()
})