const main = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');

main.classList.remove('main-nac--nojs');

main.addEventListener('click', function (event) {
  if (event.target.closest('.main-nav__toggle')) {
    if (main.classList.contains("main-nav--closed")) {
      main.classList.remove("main-nav--closed");
      main.classList.add("main-nav--opened");
    }
    else {
      main.classList.add("main-nav--closed");
      main.classList.remove("main-nav--opened");
    }
  }
})