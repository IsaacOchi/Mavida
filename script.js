const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button i');

// Toggle dark mode
themeButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    themeButton.classList.toggle('uil-sun', isDarkMode);
    themeButton.classList.toggle('uil-moon', !isDarkMode);
});

// Toggle sidebar visibility
menuButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
});

// Close sidebar when clicking outside of it
screenOverlay.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});