const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');

const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
};

apply(saved || 'light');

toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
});
