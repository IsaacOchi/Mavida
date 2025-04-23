const menuButton = document.querySelectorAll('.menu-button');

// Toggle sidebar visibility
menuButton.forEach((button) => {
    button.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-hidden');
    });
}
);