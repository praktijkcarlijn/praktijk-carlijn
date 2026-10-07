// Dropdown menu - works on every page with click AND hover
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    function closeAll() {
        document.querySelectorAll('.dropdown-menu.show').forEach(function (m) {
            m.classList.remove('show');
        });
        document.querySelectorAll('.nav-dropdown-toggle').forEach(function (t) {
            t.setAttribute('aria-expanded', 'false');
        });
    }

    // Only use hover on devices with a real mouse; on phones a tap would open and close at once
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    dropdowns.forEach(function (dropdown) {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');
        if (!toggle || !menu) return;

        toggle.setAttribute('aria-haspopup', 'true');
        toggle.setAttribute('aria-expanded', 'false');

        // Click to toggle
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            // With a mouse the menu is already open from hovering, so a click keeps it open
            const isOpen = menu.classList.contains('show') && !canHover;
            closeAll();
            if (!isOpen) {
                menu.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
            }
        });

        if (canHover) {
            // Hover to open
            dropdown.addEventListener('mouseenter', function () {
                menu.classList.add('show');
                toggle.setAttribute('aria-expanded', 'true');
            });

            // Hover to close
            dropdown.addEventListener('mouseleave', function () {
                menu.classList.remove('show');
                toggle.setAttribute('aria-expanded', 'false');
            });
        }

        // Links inside the menu navigate normally
        menu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                e.stopPropagation();
                closeAll();
            });
        });
    });

    // Close when clicking outside or pressing Escape
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-dropdown')) closeAll();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAll();
    });
});
