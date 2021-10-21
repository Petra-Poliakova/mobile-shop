"use strict";
//Language dopdown menu
const selectMenu = document.querySelector(".dropdown-menu");
const dropDownArea = document.querySelector(".dropdown-area");
const closeArea = document.querySelector("body");

selectMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (dropDownArea.classList.contains("hidden")) {
    dropDownArea.classList.remove("hidden");
    dropDownArea.style.transform = "scale(1)";
  } else {
    dropDownArea.classList.add("hidden");
    dropDownArea.style.transform = "scale(0)";
  }
});

//Primary responsive menu
const dropdownMenu = document.querySelector(".primary-dropdown");
const dropdownItem = document.querySelector(".dropdown-nav-menu");
const dropdownBtnClose = document.querySelector(".closeBtn");

const closeMenu = function () {
  dropdownItem.classList.add("hidden");
  dropdownItem.style.height = "0px";
};

dropdownMenu.addEventListener("click", function (e) {
  e.preventDefault();
  if (dropdownItem.classList.contains("hidden")) {
    dropdownItem.classList.remove("hidden");
    dropdownItem.style.height = "300px";
  } else {
    closeMenu();
  }
});

dropdownBtnClose.addEventListener("click", function (e) {
  e.preventDefault();
  closeMenu();
});
//Search responsive button
const btnSearch = document.querySelector(".search-responsive");
const modulSearch = document.querySelector(".resp-search-modal");
const btnSearchClose = document.querySelector(".btn-search-close");

btnSearch.addEventListener("click", function (e) {
  e.preventDefault();
  modulSearch.classList.remove("hidden");
  modulSearch.style.opacity = 1;
});
btnSearchClose.addEventListener("click", function () {
  modulSearch.classList.add("hidden");
  modulSearch.style.opacity = 0;
});

//Sign In form
const showSigninForm = document.querySelector(".show-singIn");
const signinForm = document.querySelector(".signin-form");
const overlay = document.querySelector(".overlay");
const btnCloseForm = document.querySelector(".btn-form-close");

showSigninForm.addEventListener("click", function (e) {
  e.preventDefault();
  signinForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseForm.addEventListener("click", function () {
  signinForm.classList.add("hidden");
  overlay.classList.add("hidden");
});

//Sticky navigation
function stickyNav() {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".headerNav");
  const navHeight = headerNav.getBoundingClientRect().height;
  console.log(navHeight);

  const stickyNavs = function (entries) {
    const [entry] = entries;

    if (!entry.isIntersecting) headerNav.classList.add("sticky");
    else headerNav.classList.remove("sticky");
  };
  const headerObserver = new IntersectionObserver(stickyNavs, {
    root: null,
    threshold: 0,
    rootMargin: `-${2 * navHeight}px`,
  });

  headerObserver.observe(header);
}
stickyNav();

//Carousel Fade Slide
let slideIndex = 0;

function Slider() {
  const carouselSlide = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  for (let i = 0; i < carouselSlide.length; i++) {
    carouselSlide[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > carouselSlide.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  carouselSlide[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  setTimeout(Slider, 3000);
}
Slider();

//Product slider
function productSlider() {
  const itemSlide = document.querySelectorAll(".item-card");
  const nextProduct = document.querySelector(".next");
  const prevProduct = document.querySelector(".prev");
  let widthSlide = document.querySelector(".item-card").offsetWidth;
  let maxSlide = itemSlide.length;
  let slidePosition = 0;

  itemSlide.forEach(
    (slide) =>
      (slide.style.transform = `translateX(${widthSlide * slidePosition}px)`)
  );
  const goItemSlide = function (slides) {
    itemSlide.forEach(
      (slide) =>
        (slide.style.transform = `translateX(${-widthSlide * slides}px)`)
    );
  };
  nextProduct.addEventListener("click", function () {
    if (slidePosition === maxSlide - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    goItemSlide(slidePosition);
  });

  prevProduct.addEventListener("click", function () {
    if (slidePosition === 0) {
      slidePosition = maxSlide - 1;
    } else {
      slidePosition--;
    }
    goItemSlide(slidePosition);
  });
}
productSlider();
//Revealing element
const sections = document.querySelectorAll(".reveal-section");
const optionSection = {
  root: null,
  threshold: 0.25,
};
const callbackSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("reveal-section--hide");
      observer.unobserve(entry.target);
    }
  });
};

const observerSection = new IntersectionObserver(
  callbackSection,
  optionSection
);

sections.forEach(function (section) {
  observerSection.observe(section);
  section.classList.add("reveal-section--hide");
});
