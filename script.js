// Dropdown menu functionality for mobile and keyboard navigation
document.addEventListener('DOMContentLoaded', function() {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    function setOpen(dropdown, open) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        dropdown.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    navDropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');

        toggle.addEventListener('click', function() {
            setOpen(dropdown, !dropdown.classList.contains('is-open'));
        });

        dropdown.addEventListener('mouseenter', () => setOpen(dropdown, true));
        dropdown.addEventListener('mouseleave', () => setOpen(dropdown, false));

        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                setOpen(dropdown, false);
                toggle.focus();
            }
        });

        dropdown.addEventListener('focusout', function(e) {
            if (!dropdown.contains(e.relatedTarget)) {
                setOpen(dropdown, false);
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        navDropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                setOpen(dropdown, false);
            }
        });
    });
});
