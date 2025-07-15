// 主題切換
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
});

// 儲存主題偏好
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light');
  }
  createStars();
});

// 星空動畫
function createStars() {
  const stars = document.querySelector('.stars');
  const numStars = 120;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.position = 'absolute';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.background = 'white';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random() * 0.8 + 0.2;
    star.style.boxShadow = `0 0 ${Math.random() * 8 + 2}px white`;
    stars.appendChild(star);
  }
} 