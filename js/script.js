const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('bg-dark');
    darkModeToggle.textContent = 'Light Mode';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('bg-dark');
    const isDark = body.classList.contains('bg-dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    darkModeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

let currentFontSize = 100;
function changeFontSize(action) {
    if (action === 'increase' && currentFontSize < 150) currentFontSize += 10;
    else if (action === 'decrease' && currentFontSize > 80) currentFontSize -= 10;
    document.body.style.fontSize = currentFontSize + "%";
}

document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });

            const navbarCollapse = document.getElementById('navbarNav');
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        }
    });
});