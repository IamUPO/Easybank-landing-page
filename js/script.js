document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.hamburger-menu input');
    const navContainer = document.querySelector('.nav-item-container');

    // Toggle nav-container when checkbox is clicked
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            navContainer.classList.add('nav-open');
        } else {
            navContainer.classList.remove('nav-open');
        }
    });
});