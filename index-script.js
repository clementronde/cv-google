// Script pour la redirection et l'autocomplétion de la barre de recherche avec effet de machine à écrire

document.addEventListener('DOMContentLoaded', function() {
  // Initialisation
  initTypewriterEffect();
  setupButtonActions();
  
  // Ajouter la classe pour les animations
  document.body.classList.add('page-loaded');
});
//** Configuration des actions des boutons */
function setupButtonActions() {
  const downloadCvButton = document.getElementById('download-cv');
  if (downloadCvButton) {
    downloadCvButton.addEventListener('click', function(e) {
      e.preventDefault(); // Empêcher le comportement par défaut
      
      // Envoi d'un event Google Analytics
      if (typeof gtag === 'function') {
        gtag('event', 'telechargement_cv', {
          'event_category': 'Candidature',
          'event_label': 'CV PDF',
          'value': 1
        });
      }
      
      // Vérifier d'abord si le fichier existe
      const cvPath = 'assets/Images/CV_Clement_Rondepierre_Alternance_M2.pdf';
      
      // Méthode 1: Téléchargement direct (la plus simple)
      const link = document.createElement('a');
      link.href = cvPath;
      link.download = 'CV_Clement_Rondepierre.pdf';
      link.target = '_blank'; // Ouvrir dans un nouvel onglet si le téléchargement échoue
      
      // Ajouter au DOM temporairement
      document.body.appendChild(link);
      
      // Déclencher le téléchargement
      link.click();
      
      // Nettoyer
      document.body.removeChild(link);
      
      // Debug: afficher un message dans la console
      console.log('Tentative de téléchargement du CV depuis:', cvPath);
    });
  } else {
    console.error('Bouton de téléchargement du CV non trouvé');
  }
}
/**
 * Fonction pour gérer l'effet de machine à écrire avec multiples phrases
 */
function initTypewriterEffect() {
  const searchInput = document.querySelector('input[name="q"]');
  if (!searchInput) return;
  
  // Liste des phrases à afficher en rotation
  const phrases = [
    "meilleur alternant marketing digital 2025",
    "meilleur alternant Data Analyst 2025",
    "profil idéal pour alternance web 2025",
    "alternant compétent en SEO et analytics",
    "CV créatif et innovant"
  ];
  
  let currentPhraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimer;
  let hasStartedTyping = false;
  
  // Délais pour les différentes phases d'animation
  const typingDelay = 50;      // Délai entre chaque caractère lors de l'écriture
  const deletingDelay = 30;    // Délai entre chaque caractère lors de la suppression
  const pauseBeforeDelete = 2000; // Pause avant de commencer à supprimer
  const pauseBeforeType = 500;  // Pause avant de commencer à écrire une nouvelle phrase
  
  // Gérer le clic sur la barre de recherche
  searchInput.addEventListener('click', startTyping);
  
  // Gérer le focus sur la barre de recherche
  searchInput.addEventListener('focus', startTyping);
  
  // Empêcher la modification du texte par l'utilisateur
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
    e.preventDefault();
    // Restaurer le texte actuel
    updateInputText();
  });
  
  function startTyping() {
    if (!hasStartedTyping) {
      hasStartedTyping = true;
      typeLoop();
    }
  }
  
  function updateInputText() {
    const currentPhrase = phrases[currentPhraseIndex];
    if (isDeleting) {
      searchInput.value = currentPhrase.substring(0, charIndex);
      searchInput.classList.add('typing-animation');
    } else {
      searchInput.value = currentPhrase.substring(0, charIndex);
      searchInput.classList.add('typing-animation');
    }
  }
  
  function typeLoop() {
    const currentPhrase = phrases[currentPhraseIndex];
    let typingSpeed = isDeleting ? deletingDelay : typingDelay;
    
    // Effacer le timer existant
    clearTimeout(typingTimer);
    
    // Mise à jour du texte
    updateInputText();
    
    // Logique pour avancer ou reculer dans le texte
    if (!isDeleting) {
      // Phase d'écriture
      if (charIndex < currentPhrase.length) {
        charIndex++;
        typingTimer = setTimeout(typeLoop, typingSpeed);
      } else {
        // Texte complètement écrit, attendre avant de commencer à effacer
        isDeleting = true;
        typingTimer = setTimeout(typeLoop, pauseBeforeDelete);
      }
    } else {
      // Phase d'effacement
      if (charIndex > 0) {
        charIndex--;
        typingTimer = setTimeout(typeLoop, typingSpeed);
      } else {
        // Texte complètement effacé, passer à la phrase suivante
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        // Pause avant de commencer à écrire la nouvelle phrase
        typingTimer = setTimeout(typeLoop, pauseBeforeType);
      }
    }
  }
  
  // Lancer automatiquement l'effet de machine à écrire après 1 seconde
  let autoStartDelay = setTimeout(() => {
    if (!hasStartedTyping) {
      hasStartedTyping = true;
      typeLoop();
    }
  }, 1000);
  
  // Annuler le démarrage automatique si l'utilisateur clique sur la barre avant
  searchInput.addEventListener('click', () => {
    clearTimeout(autoStartDelay);
  });
  
  // Gestion de la soumission du formulaire
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Rediriger avec le texte actuel
      document.body.classList.add('page-transitioning');
      
      // Rediriger vers la page de résultats
      setTimeout(() => {
        window.location.href = 'resultats.html';
      }, 300);
    });
  }
}


