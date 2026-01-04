document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button and navbar
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    // Add click event to toggle button
    navToggle.addEventListener('click', function() {
        // Toggle the 'open' class on the navbar
        navbar.classList.toggle('open');
        
        // Change the icon based on menu state
        const icon = this.querySelector('i');
        if (navbar.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            // Prevent scrolling when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            // Re-enable scrolling when menu is closed
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.navbar nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Only for mobile view
                navbar.classList.remove('open');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !navToggle.contains(event.target)) {
            if (navbar.classList.contains('open') && window.innerWidth <= 768) {
                navbar.classList.remove('open');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset styles when resizing to desktop view
            navbar.classList.remove('open');
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            document.body.style.overflow = '';
        }
    });
});
