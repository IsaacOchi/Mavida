const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');
const themeButton = document.querySelector('.theme-button i');

// Check for dark mode preference in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    themeButton.classList.replace('uil-moon', 'uil-sun');
} else {
    themeButton.classList.replace('uil-sun', 'uil-moon');
}

// Toggle dark mode
themeButton.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'enabled' : 'disabled');
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