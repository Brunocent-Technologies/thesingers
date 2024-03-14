// Check if the user has a preferred theme stored in local storage
let currentTheme = localStorage.getItem("theme") || "light";

// Apply the current theme to the document root element
document.documentElement.setAttribute("data-theme", currentTheme);

// Apply the current theme to the body
document.body.classList.add(currentTheme);

// Get the theme switcher checkbox element
const checkbox = document.getElementById("themeSwitcher");

// Set the initial state of the theme switcher checkbox
if (currentTheme === "dark") {
  checkbox.checked = true;
}

// Function to toggle between light and dark themes
function toggleTheme() {
  // Toggle the current theme variable
  currentTheme = currentTheme === "light" ? "dark" : "light";

  // Update the theme attribute on the document root element
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Toggle the "dark-theme" class on the body
  document.body.classList.toggle("dark-theme", currentTheme === "dark");

  // Store the theme preference in local storage
  localStorage.setItem("theme", currentTheme);
}

// Event listener for the theme switcher checkbox
checkbox.addEventListener("change", toggleTheme);

// Toggle mobile menu visibility
document.getElementById("mobileMenuBtn").addEventListener("click", function () {
  var mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.style.display =
    mobileMenu.style.display === "block" ? "none" : "block";
});
//  hero slider

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500, 
    disableOnInteraction:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  fade: true,
  autoplay: {
    delay: 2500, 
    disableOnInteraction:true,
  },
  centerSlides: true,
  grabCursor: true, 
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".mybtn-next",
    prevEl: ".mybtn-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640:{
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1024:{
      spaceBetween: 20,
    },
    1200:{
      slidesPerView: 3,
      spaceBetween: 25,
    }
  } 
});


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.style.backgroundColor = window.scrollY > 0 ? "#fff" : "transparent";
});

// JavaScript for Login Page 

const container = document.getElementById('container1');
const registerBtn = document.getElementById('register1');
const loginBtn = document.getElementById('login1');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

var swiper = new Swiper(".myTestimonial", {
  slidesPerView: 2,
  spaceBetween: 30,
  fade: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});