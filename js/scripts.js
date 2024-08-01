document.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.getElementById('loading');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 2000); // Simulate loading time

    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission success
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Optionally, clear the form
        contactForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
});
