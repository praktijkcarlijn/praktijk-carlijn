// Dropdown menu functionality for mobile and keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    navDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Prevent default link behavior on the toggle
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
        });

        // Close menu when a link is clicked
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menu.style.opacity = '0';
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            const menus = document.querySelectorAll('.dropdown-menu');
            menus.forEach(menu => {
                menu.style.opacity = '0';
            });
        }
    });
});
