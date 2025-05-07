/**
 * Transitions.js - Gestion des transitions entre les pages
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Marquer que la page est chargée pour les animations d'entrée
    setTimeout(() => {
      document.body.classList.add('page-loaded');
    }, 100);
  
    // Intercepter les clics sur les liens pour les transitions de sortie
    document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
      link.addEventListener('click', function(e) {
        // Ne pas intercepter les liens d'ancrage
        if (this.getAttribute('href').startsWith('#')) return;
        
        // Ne pas intercepter les liens externes
        if (this.hostname !== window.location.hostname) return;
        
        // Empêcher la navigation par défaut
        e.preventDefault();
        
        // Récupérer l'URL cible
        const targetUrl = this.getAttribute('href');
        
        // Ajouter la classe pour l'animation de sortie
        document.body.classList.add('page-transitioning');
        
        // Attendre la fin de l'animation avant de naviguer
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 300);
      });
    });
  
    // Gestion du retour arrière avec les transitions
    window.addEventListener('popstate', function(e) {
      document.body.classList.add('page-transitioning');
      
      setTimeout(() => {
        // Le navigateur gère automatiquement la navigation arrière
        // Cette ligne est là juste pour la cohérence du code
        history.go(0);
      }, 300);
    });
  });