let lastScrollTop = 0;
const navbar = document.querySelector('.glass-nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Toggle the "at-top" state for the glass background
    if (scrollTop <= 10) {
        navbar.classList.add('at-top');
    } else {
        navbar.classList.remove('at-top');
    }

    // Hide/Show logic
    if (Math.abs(lastScrollTop - scrollTop) <= 5) return;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        navbar.classList.add('nav-hidden');
    } else {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});

// Initialize on load
window.dispatchEvent(new Event('scroll'));
