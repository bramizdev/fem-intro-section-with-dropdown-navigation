'use strict';

const $ = (selector) => document.querySelector(selector);

const $backdrop = $('.backdrop');
const $mobileNavigation = $('.header__nav-container');
const $mobileMenuBtn = $('.header__menu');
const $mobileCloseMenuBtn = $('.close__mobile');

const openMenu = (button) => {
  $backdrop.classList.add('backdrop__open');
  $mobileNavigation.classList.add('mobile__open');
  button.setAttribute('aria-expanded', true);
};

const closeMenu = (button) => {
  $backdrop.classList.remove('backdrop__open');
  $mobileNavigation.classList.remove('mobile__open');
  button.setAttribute('aria-expanded', false);
};

$mobileMenuBtn.addEventListener('click', (e) => {
  const button = e.target.closest('.header__menu');
  openMenu(button);
});

[$mobileCloseMenuBtn, $backdrop].forEach((el) =>
  el.addEventListener('click', () => {
    closeMenu($mobileMenuBtn);
  })
);

$mobileNavigation.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__nav-list-btn')) return;
  const button = e.target.closest('.header__nav-list-btn');
  const ariaExpanded =
    button.getAttribute('aria-expanded') === 'false' ? true : false;
  button.setAttribute('aria-expanded', ariaExpanded);
  const parentElement = e.target.closest('.header__nav-list-item');
  const dropdown = parentElement.querySelector('.dropdown');
  dropdown.classList.toggle('dropdown__open');
});

$mobileNavigation.addEventListener('click', (e) => {
  if (!e.target.classList.contains('nav__link')) return;
  closeMenu($mobileMenuBtn);
});
