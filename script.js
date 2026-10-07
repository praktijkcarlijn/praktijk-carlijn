// Dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (!dropdownToggle || !dropdownMenu) return;
    
    // Toggle dropdown on button click
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            dropdownMenu.classList.remove('show');
        }
    });
    
    // Close dropdown when clicking a link
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function() {
            dropdownMenu.classList.remove('show');
        });
    });
});
