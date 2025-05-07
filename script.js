/**
 * CVgle - JavaScript pour améliorer l'expérience utilisateur
 * Version: 1.0
 * Auteur: Clément Rondepierre
 */

// DOM loaded handler
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des fonctionnalités
    initSearchFocus();
    initSmoothScroll();
    initAnimations();
    enhanceNavigation();
    initVisibilityObserver();
    
    // Si nous sommes sur une page qui contient des exemples d'emails
    if (document.querySelector('.email-preview')) {
      initEmailPreviews();
    }
  });
  
  /**
   * Ajoute un effet de focus à la barre de recherche
   */
  function initSearchFocus() {
    const searchBar = document.querySelector('.search-bar');
    if (!searchBar) return;
    
    searchBar.addEventListener('focus', () => {
      searchBar.parentElement.classList.add('search-focus');
    });
    
    searchBar.addEventListener('blur', () => {
      searchBar.parentElement.classList.remove('search-focus');
    });
  }
  
  /**
   * Initialise le défilement fluide pour les liens d'ancrage
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Ignore les liens vides ou les liens de contrôle
        if (targetId === '#' || targetId.startsWith('#_')) return;
        
        e.preventDefault();
        
        const target = document.querySelector(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80, // Offset pour le header fixe
            behavior: 'smooth'
          });
          
          // Mise à jour de l'URL sans recharger la page
          history.pushState(null, null, targetId);
        }
      });
    });
  }
  
  /**
   * Améliore la navigation entre les pages avec des transitions
   */
  function enhanceNavigation() {
    // Ajouter une classe au body pour indiquer que la page est prête
    document.body.classList.add('page-loaded');
    
    // Ajouter un gestionnaire pour les liens de navigation
    document.querySelectorAll('a:not([href^="#"])').forEach(link => {
      link.addEventListener('click', function(e) {
        // Ignorer les liens externes et les liens qui ouvrent dans un nouvel onglet
        if (
          this.hostname !== window.location.hostname || 
          this.getAttribute('target') === '_blank' ||
          this.getAttribute('rel') === 'nofollow'
        ) return;
        
        e.preventDefault();
        const target = this.getAttribute('href');
        
        // Ajouter une classe pour l'animation de sortie
        document.body.classList.add('page-transitioning');
        
        // Attendre la fin de l'animation avant de naviguer
        setTimeout(() => {
          window.location.href = target;
        }, 300); // Correspond à la durée de l'animation CSS
      });
    });
  }
  
  /**
   * Initialise les animations pour les sections au défilement
   */
  function initVisibilityObserver() {
    const sections = document.querySelectorAll('.section-card, .detail-section, .experience-item, .education-item, .project-card');
    
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Désinscrire l'élément après qu'il ait été rendu visible
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.1, // 10% de l'élément doit être visible
      rootMargin: '0px 0px -100px 0px' // Déclencher un peu avant que l'élément soit complètement visible
    });
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  /**
   * Ajoute des animations et effet de survol
   */
  function initAnimations() {
    // Animation pour les barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress-fill');
    
    skillBars.forEach(bar => {
      // Stocker la largeur originale
      const width = bar.style.width;
      // Réinitialiser la largeur
      bar.style.width = '0';
      
      // Animer la barre après un court délai
      setTimeout(() => {
        bar.style.transition = 'width 1s ease-in-out';
        bar.style.width = width;
      }, 200);
    });
  }
  
  /**
   * Initialise les effets de survol pour les exemples d'emails
   */
  function initEmailPreviews() {
    document.querySelectorAll('.email-preview').forEach(preview => {
      preview.addEventListener('mouseenter', () => {
        preview.querySelector('.email-overlay').style.opacity = '1';
      });
      
      preview.addEventListener('mouseleave', () => {
        preview.querySelector('.email-overlay').style.opacity = '0';
      });
    });
  }
  
  /**
   * Fonction pour gérer la recherche sur le site
   */
  function handleSearch(e) {
    e.preventDefault();
    const query = document.querySelector('.search-bar').value.toLowerCase();
    
    // Liste de mots-clés pour rediriger vers les sections ou pages
    const keywords = {
      'marketing': 'resultats.html?q=marketing',
      'alternance': 'resultats.html?q=alternance',
      'compétences': 'cv.html#competences',
      'formation': 'cv.html#formations',
      'expérience': 'resultats.html',
      'téléthon': 'pages/telethon.html',
      'galileo': 'pages/galileo.html',
      'freelance': 'pages/freelance.html',
      'contact': 'cv.html#contact',
      'projets': 'cv.html#projets'
    };
    
    // Vérifier si la requête correspond à un mot-clé
    for (const [key, url] of Object.entries(keywords)) {
      if (query.includes(key)) {
        window.location.href = url;
        return;
      }
    }
    
    // Si aucun mot-clé ne correspond, rediriger vers une page de résultats générique
    window.location.href = `resultats.html?q=${encodeURIComponent(query)}`;
  }