document.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.getElementById('loading');
    setTimeout(function() {
        loadingScreen.style.display = 'none';
    }, 2000); // Simulate loading time
});
