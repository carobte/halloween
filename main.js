// script.js
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const pumpkin = document.getElementById('pumpkin');

// Alternar modo oscuro
toggleDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Interactividad con la calabaza
pumpkin.addEventListener('click', () => {
  alert('¡Boo! 🎃 ¡Feliz Halloween!');
});
