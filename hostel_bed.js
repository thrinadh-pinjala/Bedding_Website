document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('li a[href="#dark-light"]');
    const body = document.body;

    darkModeToggle.addEventListener('click', (event) => {
        event.preventDefault();
        body.classList.toggle('dark-mode');
    });

    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.close-menu');
    const navItems = document.querySelector('.nav-items');

    menu.addEventListener('click', () => {
        navItems.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navItems.classList.remove('active');
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const addedMessage = document.createElement('div');
            addedMessage.classList.add('added-message');
            addedMessage.textContent = 'Item added to cart!';
            button.parentElement.appendChild(addedMessage);

            setTimeout(() => {
                addedMessage.remove();
            }, 2000);
        });
    });
});
