// Script amélioré pour la redirection et l'animation du bouton
// Compatible avec le script et l'animation existants

document.addEventListener('DOMContentLoaded', function() {
  // Vérifier si nous sommes sur la page d'index
  const isIndexPage = window.location.pathname === '/' || 
                      window.location.pathname.includes('index.html') || 
                      window.location.pathname === '/index';
  
  if (isIndexPage) {
    // Configuration
    const timeBeforeRedirect = 12000; // 12 secondes avant redirection
    const startPulseAfter = 4000;     // 4 secondes avant début du pulse
    const searchButton = document.querySelector('button[type="submit"]');
    const searchInput = document.getElementById('search-input');
    const searchForm = document.getElementById('search-form');
    
    // 1. Ajouter les styles pour l'animation de pulse
    const addPulseStyles = function() {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse-button {
          0% {
            box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.7);
            transform: scale(1);
          }
          
          70% {
            box-shadow: 0 0 0 10px rgba(66, 133, 244, 0);
            transform: scale(1.05);
          }
          
          100% {
            box-shadow: 0 0 0 0 rgba(66, 133, 244, 0);
            transform: scale(1);
          }
        }
        
        .pulse-animation {
          animation: pulse-button 1.5s infinite !important;
          background-color: #f1f5fe !important;
          border-color: #4285f4 !important;
          color: #4285f4 !important;
        }
        
        /* Tooltip au-dessus du bouton */
        .search-button-tooltip {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 4px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
          pointer-events: none;
          z-index: 100;
        }
        
        .search-button-tooltip::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
        }
        
        .show-tooltip {
          opacity: 1;
          visibility: visible;
        }
      `;
      document.head.appendChild(style);
    };
    
    // 2. Fonction pour créer le tooltip
    const createTooltip = function() {
      const tooltip = document.createElement('div');
      tooltip.className = 'search-button-tooltip';
      tooltip.textContent = 'Cliquez pour voir mon CV en détail';
      
      const buttons = document.querySelector('.buttons');
      if (buttons) {
        buttons.style.position = 'relative';
        buttons.appendChild(tooltip);
        
        // Montrer le tooltip après un délai
        setTimeout(() => {
          tooltip.classList.add('show-tooltip');
          
          // Cacher le tooltip après 4 secondes
          setTimeout(() => {
            tooltip.classList.remove('show-tooltip');
          }, 4000);
        }, startPulseAfter + 1000);
      }
    };
    
    // 3. Fonction pour animer le bouton
    const animateButton = function() {
      if (searchButton) {
        setTimeout(() => {
          searchButton.classList.add('pulse-animation');
          createTooltip();
        }, startPulseAfter);
      }
    };
    
    // 4. Fonction pour rediriger automatiquement après un certain temps
    const setupAutoRedirect = function() {
      // Timer pour la redirection automatique
      const redirectTimer = setTimeout(() => {
        // Transition de page
        document.body.classList.add('page-transitioning');
        
        // Rediriger vers la page de résultats après l'animation
        setTimeout(() => {
          window.location.href = 'resultats.html';
        }, 300);
      }, timeBeforeRedirect);
      
      // Arrêter la redirection si l'utilisateur interagit avec la page
      const stopRedirectOnInteraction = function() {
        clearTimeout(redirectTimer);
        document.removeEventListener('click', stopRedirectOnInteraction);
        document.removeEventListener('keydown', stopRedirectOnInteraction);
        document.removeEventListener('scroll', stopRedirectOnInteraction);
      };
      
      document.addEventListener('click', stopRedirectOnInteraction);
      document.addEventListener('keydown', stopRedirectOnInteraction);
      document.addEventListener('scroll', stopRedirectOnInteraction);
    };
    
    // 5. Initialiser les fonctionnalités
    addPulseStyles();
    animateButton();
    setupAutoRedirect();
    
    // 6. S'assurer que le script existant fonctionne toujours
    // En complément au comportement existant, assurons-nous que le bouton de recherche
    // redirige vers resultats.html quand on clique dessus
    if (searchButton && !searchButton.getAttribute('data-has-click-listener')) {
      searchButton.setAttribute('data-has-click-listener', 'true');
      searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ajouter la classe de transition
        document.body.classList.add('page-transitioning');
        
        // Rediriger après l'animation
        setTimeout(() => {
          window.location.href = 'resultats.html';
        }, 300);
      });
    }
  }
});