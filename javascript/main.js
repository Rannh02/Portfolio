document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    // Set initial theme
    htmlElement.setAttribute('data-theme', initialTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Optional: Add a small scale animation to the button on click
        themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 100);
    });

    // Tech Stack Toggle Logic
    const stackToggle = document.getElementById('stackToggle');
    const stackPanel = document.getElementById('stackPanel');
    const arrowIcon = document.getElementById('arrowIcon');

    if (stackToggle && stackPanel) {
        stackToggle.addEventListener('click', () => {
            const isOpen = stackToggle.classList.contains('open');
            
            if (isOpen) {
                stackToggle.classList.remove('open');
                stackPanel.classList.remove('open');
                stackToggle.setAttribute('aria-expanded', 'false');
            } else {
                stackToggle.classList.add('open');
                stackPanel.classList.add('open');
                stackToggle.setAttribute('aria-expanded', 'true');
            }
        });
    }
});
