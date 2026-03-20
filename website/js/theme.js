const toggle = document.getElementById('themeToggle');
const icon = toggle.querySelector('.theme-toggle__icon');
const saved = localStorage.getItem('theme');

const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    icon.textContent = theme === 'light' ? '●' : '○';
};

apply(saved || 'dark');

toggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
});
