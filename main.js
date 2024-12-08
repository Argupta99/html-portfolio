const sideMenu = document.querySelector('#sideMenu');
function openMenu () {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

  // Select elements
const themeToggle = document.getElementById('themeToggle');
const rootElement = document.documentElement;

// Check and apply saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

// Function to enable light mode
function enableLightMode() {
  rootElement.classList.remove('dark');
  rootElement.classList.add('light');
  document.body.style.background = 'linear-gradient(to right, #fbcfe8, #f472b6, #fbcfe8)';
  localStorage.setItem('theme', 'light');
}

// Function to enable dark mode
function enableDarkMode() {
  rootElement.classList.remove('light');
  rootElement.classList.add('dark');
  document.body.style.background = '#11001F';
  localStorage.setItem('theme', 'dark');
}

// Toggle between themes
themeToggle.addEventListener('click', () => {
  if (rootElement.classList.contains('dark')) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

