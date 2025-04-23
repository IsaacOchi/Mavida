const menuButton = document.querySelector('.menu-button');
// Toggle sidebar visibility
menuButton.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden');
});