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
            
            const isOpen = dropdown.classList.contains('open');
            
            // Close other dropdowns
            document.querySelectorAll('.nav-dropdown.open').forEach(openDropdown => {
                openDropdown.classList.remove('open');
                openDropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current dropdown
            if (!isOpen) {
                dropdown.classList.add('open');
                toggle.setAttribute('aria-expanded', 'true');
            } else {
                dropdown.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close dropdown when a link is clicked
        const links = menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                dropdown.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Handle keyboard navigation
        toggle.addEventListener('keydown', function(e) {
            const isOpen = dropdown.classList.contains('open');
            
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            } else if (e.key === 'Escape' && isOpen) {
                dropdown.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
            } else if (e.key === 'ArrowDown' && isOpen) {
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
                    dropdown.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.focus();
                }
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
                dropdown.classList.remove('open');
                dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
            });
        }
    });
});
