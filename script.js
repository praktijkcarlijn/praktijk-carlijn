// Simple dropdown menu - just handle link clicks
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.nav-dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        const links = menu.querySelectorAll('a');

        // Close dropdown when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Allow the link to navigate naturally
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
            });
        }
    });
});
