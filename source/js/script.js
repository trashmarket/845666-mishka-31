const main = document.querySelector('.main-nav');
const toggle = document.querySelector('.main-nav__toggle');
const site_items_collection = document.querySelectorAll(".site-list__item a");
console.log(site_items_collection);

let i = 0;

main.classList.remove('main-nac--nojs');

main.addEventListener('click', function (event) {
  if (event.target.closest('.main-nav__toggle')) {
    if (main.classList.contains("main-nav--closed")) {
      main.classList.remove("main-nav--closed");
      main.classList.add("main-nav--opened");

       i = 0;
      for (i; i < site_items_collection.length; i++) {
        site_items_collection[i].style.padding = "26px 0";
      }
    }
    else {
       i = 0;
      for (i; i < site_items_collection.length; i++) {
        site_items_collection[i].style.padding = "0px 0";
      }
      main.classList.add("main-nav--closed");
      main.classList.remove("main-nav--opened");
    }
  }
});

//Text content
window.addEventListener("resize", resize);

let widthWindow = document.documentElement.clientWidth;
let hrefList = document.querySelectorAll('.nav-additionally__item a');

if (widthWindow >= 1200) {
  hrefList[0].textContent = 'Новые поступления';
  hrefList[1].textContent = 'Распродажа';
} else {
  hrefList[0].textContent = 'Каталог товаров';
  hrefList[1].textContent = 'Вязание на заказ';
}

function resize () {
   widthWindow = document.documentElement.clientWidth;

  if (widthWindow >= 1200) {
    hrefList[0].textContent = 'Новые поступления';
    hrefList[1].textContent = 'Распродажа';

    
    for (let i = 0; i < site_items_collection.length; i++) {
      if (i == 0) {
        site_items_collection[i].style.padding = "32px 36px 32px 0";
      }
      if ( i == 1) {
        site_items_collection[i].style.padding = "32px 0 32px 35px";
      }
    }

  } else {
    hrefList[0].textContent = 'Каталог товаров';
    hrefList[1].textContent = 'Вязание на заказ';
  }

  if (widthWindow >= 740 && widthWindow < 1100) {
    i = 0;
    for (i; i < site_items_collection.length; i++) {
      site_items_collection[i].style.padding = "32px 0 32px 87px";
    }
  } 
  if (widthWindow < 740 ) {
    
    i = 0;
    for (i; i < site_items_collection.length; i++) {
      site_items_collection[i].style.padding = "0";
    }
  }
}