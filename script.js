// Dropdown menu: click/tap toggle with keyboard support
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    function setOpen(dropdown, open) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        dropdown.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    dropdowns.forEach(function(dropdown) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        toggle.addEventListener('click', function() {
            setOpen(dropdown, !dropdown.classList.contains('open'));
        });
        dropdown.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                setOpen(dropdown, false);
                toggle.focus();
            }
        });
    });

    document.addEventListener('click', function(e) {
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                setOpen(dropdown, false);
            }
        });
    });
});
