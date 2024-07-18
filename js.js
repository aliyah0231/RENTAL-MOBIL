document.addEventListener('DOMContentLoaded', () => {
    const Menu = document.getElementById('Menu');
    const navbarNav = document.querySelector('.navbar-nav');

    Menu.addEventListener('click', () => {
        navbarNav.classList.toggle('active');
        Menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navbarNav.contains(event.target) && !Menu.contains(event.target)) {
            navbarNav.classList.remove('active');
            Menu.classList.remove('active');
        }
    });

    document.querySelectorAll('.navbar-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
                    behavior: 'smooth'
                });
                navbarNav.classList.remove('active');
                Menu.classList.remove('active');
            }
        });
    });

});
