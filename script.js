// Dropdown menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.nav-dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Toggle dropdown on click
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            
            // Close other dropdowns
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close dropdown when a link is clicked
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Handle keyboard navigation
        toggle.addEventListener('keydown', function(e) {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.setAttribute('aria-expanded', !isExpanded);
            } else if (e.key === 'Escape' && isExpanded) {
                toggle.setAttribute('aria-expanded', 'false');
            } else if (e.key === 'ArrowDown' && isExpanded) {
                e.preventDefault();
                const firstLink = links[0];
                if (firstLink) firstLink.focus();
            }
        });

        // Handle arrow keys in dropdown menu
        links.forEach((link, index) => {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextLink = links[index + 1];
                    if (nextLink) nextLink.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (index === 0) {
                        toggle.focus();
                    } else {
                        links[index - 1].focus();
                    }
                } else if (e.key === 'Escape') {
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.focus();
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdownToggles.forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
            });
        }
    });
});
