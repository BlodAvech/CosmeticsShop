document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggle.innerHTML = '<img src="img/icons/day-mode.png"> Day Mode';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggle.innerHTML = '<img src="img/icons/night-mode.png"> Night Mode';
        }
        localStorage.setItem('theme', theme);
    }
});