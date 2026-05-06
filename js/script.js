document.addEventListener('DOMContentLoaded', () => {
    const darkModeBtn = document.getElementById('darkModeToggle');
    const fontIncrease = document.getElementById('fontIncrease');
    const fontDecrease = document.getElementById('fontDecrease');
    let currentFontSize = 100;

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('bg-dark');
    }

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('bg-dark');
        const isDark = document.body.classList.contains('bg-dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    fontIncrease.addEventListener('click', () => {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            document.documentElement.style.fontSize = currentFontSize + '%';
        }
    });

    fontDecrease.addEventListener('click', () => {
        if (currentFontSize > 75) {
            currentFontSize -= 10;
            document.documentElement.style.fontSize = currentFontSize + '%';
        }
    });
});

window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('bg-dark');
        }
    }
});

setTimeout(() => { myFunction(); }, 1000);