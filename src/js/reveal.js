/* eslint-disable max-len */
/* eslint-disable require-jsdoc */

//  Reveal Animation
let elementsFadeInLeft;
let elementsFadeUp;

window.addEventListener('load', (event) => {
  elementsFadeUp = document.querySelectorAll('.fade-up');

  createObserver();
}, false);

function createObserver() {
  const options = {
    root: null,
    rootMargin: '100px',
    threshold: 0.4,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  function handleIntersect(entries) {
    const mql = window.matchMedia('(max-width: 62em)');
    const navMenu = document.querySelector('.nav__menu');
    const navItems = document.querySelectorAll('.nav__item');
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('reveal');
          return;
        }, index * 150);
      } 
      /* else {
        entry.target.classList.remove('reveal'); // Activate to make the animation active on scroll-up as well
      }*/
    });
  }
  elementsFadeUp.forEach((elementFadeUp) => {
    observer.observe(elementFadeUp);
  });
}

