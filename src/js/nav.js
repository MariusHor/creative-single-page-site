/* eslint-disable require-jsdoc */
const navItems = document.querySelectorAll('.nav__item');
const navMenu = document.querySelector('.nav__menu');
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body');
const mql = window.matchMedia('(max-width: 62em)');
elementsFadeInLeft = document.querySelectorAll('.fade-in-left');


hamburger.addEventListener('click', () => {
  setTimeout(() => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
    setHamburgerMenuState();
    addAriaHiddenAttr(mql);
    setTimeout(() => {
      addRevealToNavItems();
    }, 1000);
  }, 400);
});


// Function to set Hamburger Menu state, expanded or not.

function setHamburgerMenuState() {
  if (navMenu.classList.contains('active')) {
    hamburger.setAttribute('aria-expanded', 'true');
  } else if (!navMenu.classList.contains('active')) {
    hamburger.setAttribute('aria-expanded', 'false');
  }
}


// Function to add/remove ariaHidden atribute on nav links depending on device view.

function addAriaHiddenAttr(event) {
  const links = document.querySelectorAll('.nav__itemlink');

  // eslint-disable-next-line max-len
  if ((navMenu.classList.contains('active') && event.matches) || !event.matches) {
    for (const link of links) {
      link.ariaHidden = 'false';
      link.removeAttribute('tabindex', '-1');
    }
  } else if (event.matches) {
    for (const link of links) {
      link.ariaHidden = 'true';
      link.setAttribute('tabindex', '-1');
    }
  }
}

mql.addListener(addAriaHiddenAttr);
addAriaHiddenAttr(mql);

// Function to add Reveal class on nav links when mobile menu is active.

  function addRevealToNavItems() {
    const navMenu = document.querySelector('.nav__menu');
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((item, index) => {
      if (navMenu.classList.contains('active')) {
        setTimeout(() => {
          item.classList.add('reveal');
          return;
        }, index * 250);
      } else if (!navMenu.classList.contains('active')) {
        for (const item of navItems) {
          item.classList.remove('reveal');
        }
      }
    });
  }

  // Function to remove Fade-in-left class from nav links on desktop view.

  function removeNavItemClass(event) {
    const navItems = document.querySelectorAll('.nav__item');
    navItems.forEach((item) => {
      if (!event.matches) {
          item.classList.remove('fade-in-left');
      } else item.classList.add('fade-in-left');
    });
  }

  mql.addListener(removeNavItemClass);
  removeNavItemClass(mql);

