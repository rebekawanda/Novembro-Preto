const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'dark-mode') {
    themeToggleButton.textContent = 'Modo Claro';
  }
}

function toggleTheme() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggleButton.textContent = 'Modo Escuro';
    localStorage.setItem('theme', 'light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggleButton.textContent = 'Modo Claro';
    localStorage.setItem('theme', 'dark-mode');
  }
}

themeToggleButton.addEventListener('click', toggleTheme);
