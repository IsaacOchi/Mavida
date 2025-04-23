const menuButton = document.querySelectorAll('.menu-button');
const screenOverlay = document.querySelector('.screen-overlay');

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