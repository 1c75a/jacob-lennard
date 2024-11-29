const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Change icon based on the current theme
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️'; // Sun icon for light mode
    } else {
        themeToggle.textContent = '🌙'; // Moon icon for dark mode
    }
});
