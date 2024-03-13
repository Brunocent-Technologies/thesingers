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
  effect: "fade",
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
  slidesPerView: 4,
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
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
      slidesPerView: 3,
      spaceBetween: 18,
    },
    1024:{
      spaceBetween: 20,
    },
    1200:{
      slidesPerView: 4,
      spaceBetween: 25,
    }
  } 
});


window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.style.backgroundColor = window.scrollY > 0 ? "#fff" : "transparent";
});