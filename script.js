// DOM elements
const darkModeToggle = document.getElementById('darkModeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize dark mode
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Dark mode toggle functionality
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Mobile menu toggle functionality
mobileMenuToggle.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        mobileMenuToggle.innerHTML = '☰';
    } else {
        mobileMenu.style.display = 'block';
        mobileMenuToggle.innerHTML = '✕';
    }
});

// Handle window resize for mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.style.display = 'none';
        mobileMenuToggle.innerHTML = '☰';
    }
});

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        formSuccess.style.display = 'block';
        contactForm.style.display = 'none';
        
        // Reset form and hide success message after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            formSuccess.style.display = 'none';
            contactForm.style.display = 'block';
        }, 3000);
    });
}