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