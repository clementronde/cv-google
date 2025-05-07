// Script pour la redirection et l'autocomplétion de la barre de recherche

document.addEventListener('DOMContentLoaded', function() {
  // Initialisation
  initAutocomplete();
  setupButtonActions();
  
  // Ajouter la classe pour les animations
  document.body.classList.add('page-loaded');
});

/**
 * Fonction pour gérer l'autocomplétion de la barre de recherche
 */
function initAutocomplete() {
  const searchInput = document.querySelector('input[name="q"]');
  if (!searchInput) return;
  
  const targetText = "meilleur alternant marketing 2025";
  let typingTimer;
  let charIndex = 0;
  let hasStartedTyping = false;
  let isAnimationComplete = false;
  
  // Nous n'utilisons PAS 'readonly' pour permettre de cliquer et d'appuyer sur Entrée
  // Au lieu de ça, nous allons bloquer les modifications via les événements
  
  // Gestion unifiée des événements pour éviter les doublons
  const startTyping = () => {
    if (!hasStartedTyping) {
      hasStartedTyping = true;
      startAutocomplete();
    }
  };
  
  // Gérer le clic sur la barre de recherche
  searchInput.addEventListener('click', startTyping);
  
  // Gérer le focus sur la barre de recherche
  searchInput.addEventListener('focus', startTyping);
  
  // Empêcher la modification du texte tout en permettant la touche Entrée
  searchInput.addEventListener('keydown', function(e) {
    // Permettre la touche Entrée (code 13)
    if (e.keyCode === 13) {
      return true;
    }
    
    // Bloquer toutes les autres touches
    e.preventDefault();
    return false;
  });
  
  // Empêcher les modifications via la fonction input
  searchInput.addEventListener('input', function(e) {
    // Si l'animation est terminée, restaurer le texte cible
    if (isAnimationComplete) {
      e.preventDefault();
      searchInput.value = targetText;
    }
  });
  
  function startAutocomplete() {
    // Réinitialiser l'index et vider complètement l'input
    charIndex = 0;
    searchInput.value = '';
    isAnimationComplete = false;
    
    // Arrêter tout timer précédent pour éviter les doublons
    clearInterval(typingTimer);
    
    // Démarrer l'animation de frappe (30ms = vitesse plus rapide)
    typingTimer = setInterval(() => {
      if (charIndex < targetText.length) {
        searchInput.value += targetText.charAt(charIndex);
        charIndex++;
      } else {
        // Animation terminée
        clearInterval(typingTimer);
        isAnimationComplete = true;
      }
    }, 30); // Vitesse de frappe accélérée (30ms au lieu de 80ms)
  }
  
  // Lancer automatiquement l'autocomplétion après 2 secondes
  let autoStartDelay = setTimeout(() => {
    if (!hasStartedTyping) {
      hasStartedTyping = true;
      startAutocomplete();
    }
  }, 2000); // 2 secondes de délai
  
  // Annuler le démarrage automatique si l'utilisateur clique sur la barre avant
  searchInput.addEventListener('click', () => {
    clearTimeout(autoStartDelay);
  });
  
  // Gestion de la soumission du formulaire
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Assurer que le texte complet est dans l'input
      searchInput.value = targetText;
      
      // Ajouter la transition de sortie
      document.body.classList.add('page-transitioning');
      
      // Rediriger vers la page de résultats
      setTimeout(() => {
        window.location.href = 'resultats.html';
      }, 300);
    });
  }
}

/**
 * Configuration des boutons
 */
function setupButtonActions() {
  // Bouton "J'ai de la chance"
  const luckyButton = document.getElementById('lucky-button');
  if (luckyButton) {
    luckyButton.addEventListener('click', function() {
      document.body.classList.add('page-transitioning');
      setTimeout(() => {
        window.location.href = 'cv.html';
      }, 300);
    });
  }
}