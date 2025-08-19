"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener("click", function (e) {
  // scrolling
  // const s1cords = section1.getBoundingClientRect();
  // window.scrollTo(s1cords.left + window.scrollX, s1cords.top + window.scrollY);

  // window.scrollTo({
  //   left: s1cords.left + window.scrollX,
  //   top: s1cords.top + window.scrollY,
  //   behavior: "smooth",
  // });

  // Modern method to scroll to an element
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page navigation、
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log("LINK");
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

///////////////////////////////////////
// event delegation
// 1. Add event listener to common  element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

///////////////////////////////////////
// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause: 没有点击到 tab 元素，直接返回
  if (!clicked) return;

  // Remove active class from all tabs and content areas
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active"),
  );

  // Active tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Parsing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

///////////////////////////////////////
// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener("scroll", function (e) {
//   console.log(window.scrollY);
//
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
// Sticky navigation: Intersection Observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };
//
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) observer.unobserve(entry.target);
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// ------------------------------ Select、Create and Delete Elements ------------------------------//
// // select elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
//
// const header = document.querySelector(".header");
// const allSection = document.querySelectorAll(".section");
// console.log(allSection);
//
// document.getElementById("section--1");
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);
//
// console.log(document.getElementsByClassName("btn"));
//
// // create and insert elements
// // .insertAdjacentHTML
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// // message.textContent =
// //   "We use cookied for improved for improved functionality and analytics.";
// message.innerHTML =
//   "We use cookied for improved for improved functionality and analytics.<button class='btn'>Got it!</button>";
//
// header.prepend(message);
// // header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);
//
// // Delete elements
// document.querySelector(".btn").addEventListener("click", function () {
//   message.remove();
// });

// ------------------------------ Style、Attribute and Class ------------------------------//
// // styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";
//
// console.log(message.style.color);
// console.log(message.style.backgroundColor);
//
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).backgroundColor);
// console.log(getComputedStyle(message).height);
//
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + "px";
//
// document.documentElement.style.setProperty("--color-primary", "orangered");
//
// // Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.src);
// console.log(logo.getAttribute("src"));
// console.log(logo.alt);
// console.log(logo.className);
//
// logo.alt = "Beautiful minimalist logo";
//
// // Non-standard attributes
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Banlist");
//
// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));
//
// // Data attributes
// console.log(logo.dataset.versionNumber);
//
// // classes
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c");
//
// // Don't use this method, because it will override all classes
// logo.className = "dd";

// ------------------------------ Smooth Scrolling ------------------------------//
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");
//
// btnScrollTo.addEventListener("click", function (e) {
//   const s1cords = section1.getBoundingClientRect();
//   console.log(s1cords);
//   console.log(e.target.getBoundingClientRect());
//   console.log("Current scroll (X/Y)", window.scrollX, window.scrollY);
//
//   console.log(
//       "height/width",
//       document.documentElement.clientHeight,
//       document.documentElement.clientWidth,
//   );
//
//   // scrolling
//   // window.scrollTo(s1cords.left + window.scrollX, s1cords.top + window.scrollY);
//
//   // window.scrollTo({
//   //   left: s1cords.left + window.scrollX,
//   //   top: s1cords.top + window.scrollY,
//   //   behavior: "smooth",
//   // });
//
//   // Modern method to scroll to an element
//   section1.scrollIntoView({ behavior: "smooth" });
// });

// ------------------------------ Add && Remove Scrolling ------------------------------//
// const h1 = document.querySelector("h1");
//
// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading :D");
// };
// h1.addEventListener("mouseenter", alertH1);
//
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);
// // h1.onmouseover = function (e) {
// //   alert("addEventListener: Great! You are reading the heading :D");
// // };

// ------------------------------ Event Propagation ------------------------------//
// // Random color generator --- rgb format
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());
//
// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);
//
//   // Stop event propagation
//   // e.stopPropagation();
// });
//
// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
//   console.log(this === e.currentTarget);
// });
//
// document.querySelector(".nav").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     this.style.backgroundColor = randomColor();
//     console.log("NAV", e.target, e.currentTarget);
//   },
//   // true,
// );

// ------------------------------ DOM Traversal ------------------------------//
// const h1 = document.querySelector("h1");
//
// // Going downwards: child
// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.children);
// h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orangered";
//
// // Going upwards: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);
//
// h1.closest(".header").style.background = "var(--gradient-secondary)";
// h1.closest("h1").style.background = "var(--gradient-primary)";
//
// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
//
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = "scale(0.5)";
//   }
// });
