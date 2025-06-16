// Script simple pour animations supplémentaires ou interactions

// Exemple : animation bouton "Télécharger" au clic
const downloadBtn = document.querySelector('.btn-primary');

downloadBtn.addEventListener('click', () => {
  downloadBtn.textContent = 'Merci !';
  downloadBtn.style.backgroundColor = '#5b21b6';
  setTimeout(() => {
    downloadBtn.textContent = 'Télécharger l\'app';
    downloadBtn.style.backgroundColor = '#7c3aed';
  }, 2000);
});
