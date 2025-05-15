// Fonction pour gérer la traduction du site
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner les drapeaux de langue
  const flagLinks = document.querySelectorAll('.language-flags a');
  
  // Dictionnaire de traduction
  const translations = {
    'fr': {
      // En-tête
      'search-input': 'Meilleur alternant marketing de 2025',
      'search-meta': 'Environ 6 résultats en <span class="highlight">(0,30 secondes)</span>',
      'search-tabs-all': 'Tous',
      'search-tabs-images': 'Images',
      'search-tabs-videos': 'Vidéos',
      'search-tabs-products': 'Produits',
      'search-tabs-news': 'Actualités',
      'search-tabs-more': 'Plus',
      
      // Expériences professionnelles
      'professional-path': 'Parcours Professionel',
      'freelance-title': 'Freelance',
      'freelance-description': '2025 – Réalisation de site wordpress, optimisation et améliorations de site existant en performance et SEO. Mise en place de campagnes meta ads, stratégie social média.',
      'galileo-title': 'Alternant Webmarketeur digital',
      'galileo-description': 'Septembre 2024 – Décembre 2024 | Optimisations, créations et améliorations du netlinking des articles de blog pour améliorer le SEO du site. Réalisations d\'AB Testing UX pour optimiser le parcours client. Rapport Google Analytics et Google Search Console et propositions d\'améliorations.',
      'telethon-title': 'Alternant Intégrateur / Routeur emailing',
      'telethon-description': '2022 – 2024 | Intégration HTML CSS et routage de l\'ensemble des emails de fidélisation de l\'AFM Téléthon, suivi de campagne à la performance. Mise en place de triggers, landing page, personnalisation régionalisée d\'emailing. Analyse et études des différentes campagnes.',
      
      // Formations
      'academic-path': 'Parcours universitaire',
      'master-title': 'Master Data Customer eXperience - Digital Campus',
      'master-description': '2024 - 2026 | En deux ans, j\'aurai l\'occasion d\'améliorer mes connaissances en analyse de données, Datavisualisation et marketing digital. J\'aurai aussi l\'opportunité de développer des compétences en UX, CX et de consolider mes acquis en gestion de projet.',
      'bachelor-title': 'Bachelor chef de projet digital',
      'bachelor-description': '2022 - 2024 | Apprentissage de la conception de dispositifs digitaux dans des objectifs de notoriétés, de promotions et de développement d\'une marque. En trois ans j\'ai pu me former aux techniques du marketing et du web-marketing, du design et de la vidéo.',
      'dut-title': 'DUT génie civil construction durable',
      'dut-description': '2021 - 2022 | Pendant plus d\'un an j\'ai pu améliorer mes compétences en anglais (passage du TOEIC), gestion de multiples projets de construction, coordination des équipes, suivi strict des échéanciers, expérience en collaboration transversale.',
      
      // Compétences
      'skills-title': 'Compétences :',
      'data-customer-experience': 'Data Customer Experience',
      'data-customer-description': 'Analyse de données, visualisation, CRM, parcours client, UX/UI design, analytics, automatisation, personnalisation, segmentation client, optimisation de conversion.',
      'data-analytics-tools': 'Maîtrise des outils d\'analyse comme Google Analytics, Looker Studio et Hotjar',
      'data-dashboard': 'Expérience dans la création de tableaux de bord et la visualisation de données',
      'data-insights': 'Capacité à transformer les données en insights actionnables',
      'webmarketing': 'WebMarketing',
      'webmarketing-description': 'SEO, SEM, publicité en ligne, stratégie de contenu, email marketing, marketing d\'affiliation, analytics web, médias sociaux, automatisation marketing.',
      'webmarketing-certifications': 'Certifications Google Analytics et Google Ads',
      'webmarketing-campaigns': 'Gestion de campagnes publicitaires sur Meta et Google',
      'webmarketing-conversion': 'Expérience en optimisation de la conversion et A/B testing',
      'design-communication': 'Design Communication',
      'design-communication-description': 'Design graphique, identité visuelle, communication digitale, storytelling, gestion de projet, production de contenu, stratégies de marque.',
      'design-adobe': 'Maîtrise des logiciels Adobe (Photoshop, Illustrator, InDesign)',
      'design-supports': 'Conception et réalisation de supports de communication print et web',
      'design-strategies': 'Élaboration de stratégies de communication multicanal',
      
      // Profil
      'profile-description': 'Si vous êtes tombés ici, c\'est que mon SEO est optimal.<br>Je suis à la recherche d\'une alternance dans le domaine du marketing digital.<br>Si vous êtes intéressés par ma fiche google, je reste joignable pour répondre à vos questions.',
      'age': 'Âge :',
      'age-value': '23 ans',
      'telephone': 'Téléphone :',
      'mail': 'Mail :',
      'linkedin': 'LinkedIn :',
      'address': 'Adresse :',
      'address-value': '18 rue d\'Aguesseau, 92100 Boulogne-billancourt',
      'available-button': 'Disponible à partir de septembre 2025',
      'certifications': 'Certifications :',
      'google-analytics': 'Google Analytics 4',
      'google-ads': 'Google ads 2024',
      'voir-plus': 'voir + de compétences',
      'translate-text': 'Traduire cette page :',
      'view-projects': 'Voir mes projets',
      'wikipedia': 'Wikipédia',
      'rating': '5,0',
      'reviews': '3 avis',
      
      // Footer
      'footer-country': 'France',
      'formation': 'Formation',
      'experiences': 'Expériences',
      'projets': 'Projets',
      'availability-footer': '🎓 Disponible pour une alternance en marketing digital',
      'contact': 'Contact'
    },
    'en': {
      // En-tête
      'search-input': 'Best marketing intern of 2025',
      'search-meta': 'About 6 results in <span class="highlight">(0.30 seconds)</span>',
      'search-tabs-all': 'All',
      'search-tabs-images': 'Images',
      'search-tabs-videos': 'Videos',
      'search-tabs-products': 'Products',
      'search-tabs-news': 'News',
      'search-tabs-more': 'More',
      
      // Expériences professionnelles
      'professional-path': 'Professional Experience',
      'freelance-title': 'Freelancer',
      'freelance-description': '2025 - WordPress website development, optimization and improvement of existing sites in performance and SEO. Implementation of meta ads campaigns, social media strategy.',
      'galileo-title': 'Digital Marketing Intern',
      'galileo-description': 'September 2024 - December 2024 | Optimization, creation and improvement of blog article backlinking to enhance the site\'s SEO. UX A/B Testing to optimize customer journey. Google Analytics and Google Search Console reporting with improvement proposals.',
      'telethon-title': 'Email Marketing Intern',
      'telethon-description': '2022 - 2024 | HTML CSS integration and routing of all AFM Telethon loyalty emails, campaign performance monitoring. Implementation of triggers, landing pages, and regionalized email personalization. Campaign analysis and studies.',
      
      // Formations
      'academic-path': 'Education',
      'master-title': 'Master\'s Degree in Data Customer Experience - Digital Campus',
      'master-description': '2024 - 2026 | Over two years, I will improve my knowledge in data analysis, data visualization and digital marketing. I will also have the opportunity to develop skills in UX, CX and consolidate my project management abilities.',
      'bachelor-title': 'Bachelor\'s Degree in Digital Project Management',
      'bachelor-description': '2022 - 2024 | Learning the design of digital solutions for brand awareness, promotion and development objectives. Over three years, I trained in marketing and web-marketing techniques, design and video production.',
      'dut-title': 'Associate\'s Degree in Sustainable Civil Engineering',
      'dut-description': '2021 - 2022 | For over a year, I improved my English skills (TOEIC certification), managed multiple construction projects, coordinated teams, followed strict schedules, and gained experience in cross-functional collaboration.',
      
      // Compétences
      'skills-title': 'Skills:',
      'data-customer-experience': 'Data Customer Experience',
      'data-customer-description': 'Data analysis, visualization, CRM, customer journey, UX/UI design, analytics, automation, personalization, customer segmentation, conversion optimization.',
      'data-analytics-tools': 'Proficiency with analytics tools like Google Analytics, Looker Studio, and Hotjar',
      'data-dashboard': 'Experience in creating dashboards and data visualization',
      'data-insights': 'Ability to transform data into actionable insights',
      'webmarketing': 'Digital Marketing',
      'webmarketing-description': 'SEO, SEM, online advertising, content strategy, email marketing, affiliate marketing, web analytics, social media, marketing automation.',
      'webmarketing-certifications': 'Google Analytics and Google Ads certifications',
      'webmarketing-campaigns': 'Management of advertising campaigns on Meta and Google',
      'webmarketing-conversion': 'Experience in conversion optimization and A/B testing',
      'design-communication': 'Design & Communication',
      'design-communication-description': 'Graphic design, visual identity, digital communication, storytelling, project management, content production, brand strategies.',
      'design-adobe': 'Proficiency with Adobe software (Photoshop, Illustrator, InDesign)',
      'design-supports': 'Design and production of print and web communication materials',
      'design-strategies': 'Development of multi-channel communication strategies',
      
      // Profil
      'profile-description': 'If you landed here, it means my SEO is optimal.<br>I am looking for an internship in digital marketing.<br>If you are interested in my Google profile, I remain available to answer your questions.',
      'age': 'Age:',
      'age-value': '23 years old',
      'telephone': 'Phone:',
      'mail': 'Email:',
      'linkedin': 'LinkedIn:',
      'address': 'Address:',
      'address-value': '18 rue d\'Aguesseau, 92100 Boulogne-billancourt, France',
      'available-button': 'Available from September 2025',
      'certifications': 'Certifications:',
      'google-analytics': 'Google Analytics 4',
      'google-ads': 'Google Ads 2024',
      'voir-plus': 'see more skills',
      'translate-text': 'Translate this page:',
      'view-projects': 'View my projects',
      'wikipedia': 'Wikipedia',
      'rating': '5.0',
      'reviews': '3 reviews',
      
      // Footer
      'footer-country': 'France',
      'formation': 'Education',
      'experiences': 'Experience',
      'projets': 'Projects',
      'availability-footer': '🎓 Available for a digital marketing internship',
      'contact': 'Contact'
    },
    'es': {
      // En-tête
      'search-input': 'Mejor pasante de marketing de 2025',
      'search-meta': 'Aproximadamente 6 resultados en <span class="highlight">(0,30 segundos)</span>',
      'search-tabs-all': 'Todo',
      'search-tabs-images': 'Imágenes',
      'search-tabs-videos': 'Vídeos',
      'search-tabs-products': 'Productos',
      'search-tabs-news': 'Noticias',
      'search-tabs-more': 'Más',
      
      // Expériences professionnelles
      'professional-path': 'Experiencia Profesional',
      'freelance-title': 'Freelance',
      'freelance-description': '2025 - Desarrollo de sitios WordPress, optimización y mejoras de sitios existentes en rendimiento y SEO. Implementación de campañas de anuncios Meta, estrategia de redes sociales.',
      'galileo-title': 'Pasante de Marketing Digital',
      'galileo-description': 'Septiembre 2024 - Diciembre 2024 | Optimización, creación y mejora de enlaces para artículos de blog para mejorar el SEO del sitio. Pruebas A/B de UX para optimizar el recorrido del cliente. Informes de Google Analytics y Google Search Console con propuestas de mejora.',
      'telethon-title': 'Pasante de Marketing por Email',
      'telethon-description': '2022 - 2024 | Integración HTML CSS y enrutamiento de todos los correos electrónicos de fidelización de AFM Telethon, seguimiento del rendimiento de las campañas. Implementación de disparadores, páginas de destino y personalización de correos electrónicos por región. Análisis y estudios de campañas.',
      
      // Formations
      'academic-path': 'Formación Académica',
      'master-title': 'Máster en Experiencia de Datos del Cliente - Digital Campus',
      'master-description': '2024 - 2026 | Durante dos años, mejoraré mis conocimientos en análisis de datos, visualización de datos y marketing digital. También tendré la oportunidad de desarrollar habilidades en UX, CX y consolidar mis habilidades en gestión de proyectos.',
      'bachelor-title': 'Licenciatura en Gestión de Proyectos Digitales',
      'bachelor-description': '2022 - 2024 | Aprendizaje del diseño de soluciones digitales para objetivos de notoriedad, promoción y desarrollo de marca. Durante tres años, me formé en técnicas de marketing y marketing web, diseño y producción de video.',
      'dut-title': 'Título de Técnico Superior en Ingeniería Civil Sostenible',
      'dut-description': '2021 - 2022 | Durante más de un año, mejoré mis habilidades en inglés (certificación TOEIC), gestioné múltiples proyectos de construcción, coordiné equipos, seguí plazos estrictos y adquirí experiencia en colaboración multifuncional.',
      
      // Compétences
      'skills-title': 'Habilidades:',
      'data-customer-experience': 'Experiencia de Datos del Cliente',
      'data-customer-description': 'Análisis de datos, visualización, CRM, recorrido del cliente, diseño UX/UI, analítica, automatización, personalización, segmentación de clientes, optimización de conversión.',
      'data-analytics-tools': 'Competencia con herramientas de análisis como Google Analytics, Looker Studio y Hotjar',
      'data-dashboard': 'Experiencia en la creación de cuadros de mando y visualización de datos',
      'data-insights': 'Capacidad para transformar datos en perspectivas accionables',
      'webmarketing': 'Marketing Digital',
      'webmarketing-description': 'SEO, SEM, publicidad en línea, estrategia de contenido, email marketing, marketing de afiliación, analítica web, redes sociales, automatización de marketing.',
      'webmarketing-certifications': 'Certificaciones de Google Analytics y Google Ads',
      'webmarketing-campaigns': 'Gestión de campañas publicitarias en Meta y Google',
      'webmarketing-conversion': 'Experiencia en optimización de conversión y pruebas A/B',
      'design-communication': 'Diseño y Comunicación',
      'design-communication-description': 'Diseño gráfico, identidad visual, comunicación digital, storytelling, gestión de proyectos, producción de contenidos, estrategias de marca.',
      'design-adobe': 'Competencia con software Adobe (Photoshop, Illustrator, InDesign)',
      'design-supports': 'Diseño y producción de materiales de comunicación impresos y web',
      'design-strategies': 'Desarrollo de estrategias de comunicación multicanal',
      
      // Profil
      'profile-description': 'Si has llegado hasta aquí, significa que mi SEO es óptimo.<br>Estoy buscando una pasantía en marketing digital.<br>Si estás interesado en mi perfil de Google, estoy disponible para responder a tus preguntas.',
      'age': 'Edad:',
      'age-value': '23 años',
      'telephone': 'Teléfono:',
      'mail': 'Correo:',
      'linkedin': 'LinkedIn:',
      'address': 'Dirección:',
      'address-value': '18 rue d\'Aguesseau, 92100 Boulogne-billancourt, Francia',
      'available-button': 'Disponible a partir de septiembre 2025',
      'certifications': 'Certificaciones:',
      'google-analytics': 'Google Analytics 4',
      'google-ads': 'Google Ads 2024',
      'voir-plus': 'ver más habilidades',
      'translate-text': 'Traducir esta página:',
      'view-projects': 'Ver mis proyectos',
      'wikipedia': 'Wikipedia',
      'rating': '5,0',
      'reviews': '3 reseñas',
      
      // Footer
      'footer-country': 'Francia',
      'formation': 'Formación',
      'experiences': 'Experiencias',
      'projets': 'Proyectos',
      'availability-footer': '🎓 Disponible para una pasantía en marketing digital',
      'contact': 'Contacto'
    }
  };

  // Fonction pour traduire la page
  function translatePage(language) {
    // Stocker la langue sélectionnée dans localStorage
    localStorage.setItem('preferred_language', language);
    
    const trans = translations[language];
    if (!trans) return;
    
    // Traduire la barre de recherche
    document.getElementById('search-input').value = trans['search-input'];
    
    // Traduire les méta-informations de recherche
    const searchMeta = document.querySelector('.search-meta');
    if (searchMeta) searchMeta.innerHTML = trans['search-meta'];
    
    // Traduire les onglets de recherche
    const searchTabs = document.querySelectorAll('.search-tabs li a');
    if (searchTabs.length >= 6) {
      searchTabs[0].textContent = trans['search-tabs-all'];
      searchTabs[1].textContent = trans['search-tabs-images'];
      searchTabs[2].textContent = trans['search-tabs-videos'];
      searchTabs[3].textContent = trans['search-tabs-products'];
      searchTabs[4].textContent = trans['search-tabs-news'];
      searchTabs[5].textContent = trans['search-tabs-more'];
    }
    
    // Traduire les expériences professionnelles
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
      const meta = item.querySelector('.item-meta');
      const link = item.querySelector('.item-link');
      const description = item.querySelector('.item-description');
      
      if (meta && meta.textContent.includes('Parcours Professionel')) {
        meta.textContent = trans['professional-path'];
      }
      
      if (link && link.textContent.includes('Freelance')) {
        link.textContent = trans['freelance-title'];
        if (description) description.textContent = trans['freelance-description'];
      } else if (link && link.textContent.includes('Webmarketeur')) {
        link.textContent = trans['galileo-title'];
        if (description) description.textContent = trans['galileo-description'];
      } else if (link && link.textContent.includes('Intégrateur')) {
        link.textContent = trans['telethon-title'];
        if (description) description.textContent = trans['telethon-description'];
      }
    });
    
    // Traduire les formations
    const educationItems = document.querySelectorAll('.education-item');
    educationItems.forEach(item => {
      const meta = item.querySelector('.item-meta');
      const link = item.querySelector('.item-link');
      const description = item.querySelector('.item-description');
      
      if (meta && meta.textContent.includes('Parcours universitaire')) {
        meta.textContent = trans['academic-path'];
      }
      
      if (link && link.textContent.includes('Master Data')) {
        link.textContent = trans['master-title'];
        if (description) description.textContent = trans['master-description'];
      } else if (link && link.textContent.includes('Bachelor')) {
        link.textContent = trans['bachelor-title'];
        if (description) description.textContent = trans['bachelor-description'];
      } else if (link && link.textContent.includes('DUT')) {
        link.textContent = trans['dut-title'];
        if (description) description.textContent = trans['dut-description'];
      }
    });
    
    // Traduire les compétences
    const skillsTitle = document.querySelector('.faq-section h2');
    if (skillsTitle) skillsTitle.textContent = trans['skills-title'];
    
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      const questionSpan = item.querySelector('.faq-question span');
      const answerParagraph = item.querySelector('.faq-answer p');
      const answerList = item.querySelectorAll('.faq-answer ul li');
      
      if (index === 0 && questionSpan) {
        questionSpan.textContent = trans['data-customer-experience'];
        if (answerParagraph) answerParagraph.textContent = trans['data-customer-description'];
        if (answerList.length >= 3) {
          answerList[0].textContent = trans['data-analytics-tools'];
          answerList[1].textContent = trans['data-dashboard'];
          answerList[2].textContent = trans['data-insights'];
        }
      }
      else if (index === 1 && questionSpan) {
        questionSpan.textContent = trans['webmarketing'];
        if (answerParagraph) answerParagraph.textContent = trans['webmarketing-description'];
        if (answerList.length >= 3) {
          answerList[0].textContent = trans['webmarketing-certifications'];
          answerList[1].textContent = trans['webmarketing-campaigns'];
          answerList[2].textContent = trans['webmarketing-conversion'];
        }
      }
      else if (index === 2 && questionSpan) {
        questionSpan.textContent = trans['design-communication'];
        if (answerParagraph) answerParagraph.textContent = trans['design-communication-description'];
        if (answerList.length >= 3) {
          answerList[0].textContent = trans['design-adobe'];
          answerList[1].textContent = trans['design-supports'];
          answerList[2].textContent = trans['design-strategies'];
        }
      }
    });
    
    // Traduire la description du profil
    const description = document.querySelector('.profile-card .description');
    if (description) description.innerHTML = trans['profile-description'];
    
    // Traduire les informations de contact
    const contactInfos = document.querySelectorAll('.contact p strong');
    contactInfos.forEach(info => {
      if (info.textContent.includes('Âge')) {
        info.textContent = trans['age'];
        const textNode = info.nextSibling;
        if (textNode) textNode.nodeValue = " " + trans['age-value'];
      }
      else if (info.textContent.includes('Téléphone')) info.textContent = trans['telephone'];
      else if (info.textContent.includes('Mail')) info.textContent = trans['mail'];
      else if (info.textContent.includes('LinkedIn')) info.textContent = trans['linkedin'];
      else if (info.textContent.includes('Adresse')) {
        info.textContent = trans['address'];
        const textNode = info.nextSibling;
        if (textNode) textNode.nodeValue = " " + trans['address-value'];
      }
    });
    
    // Traduire les liens Wikipedia
    const wikiLink = document.querySelector('.wikipedia-link');
    if (wikiLink) wikiLink.textContent = trans['wikipedia'];
    
    // Traduire les avis
    const rating = document.querySelector('.rating span:first-child');
    if (rating) rating.textContent = trans['rating'];
    
    const reviews = document.querySelector('.rating a');
    if (reviews) reviews.textContent = trans['reviews'];
    
    // Traduire le bouton de disponibilité
    const availabilityButton = document.querySelector('.availability-button button');
    if (availabilityButton) availabilityButton.textContent = trans['available-button'];
    
    // Traduire les certifications
    const certificationTitle = document.querySelector('.certifications h4');
    if (certificationTitle) certificationTitle.textContent = trans['certifications'];
    
    const certificationBadges = document.querySelectorAll('.certification-badge span');
    if (certificationBadges.length >= 2) {
      certificationBadges[0].textContent = trans['google-analytics'];
      certificationBadges[1].textContent = trans['google-ads'];
    }
    
    // Traduire le lien "voir plus"
    const voirPlus = document.querySelector('.voir-plus');
    if (voirPlus) voirPlus.textContent = trans['voir-plus'];
    
    // Traduire le texte de traduction
    const translateText = document.querySelector('.translation-links p');
    if (translateText) translateText.textContent = trans['translate-text'];
    
    // Traduire le bouton de projets
    const viewProjects = document.querySelector('.view-projects-btn');
    if (viewProjects) viewProjects.textContent = trans['view-projects'];
    
    // Traduire le footer
    const footerTop = document.querySelector('.footer-top');
    if (footerTop) footerTop.textContent = trans['footer-country'];
    
    const footerLinks = document.querySelectorAll('.footer-bottom a');
    footerLinks.forEach(link => {
      if (link.textContent.includes('Formation')) link.textContent = trans['formation'];
      else if (link.textContent.includes('Expériences')) link.textContent = trans['experiences'];
      else if (link.textContent.includes('Projets')) link.textContent = trans['projets'];
      else if (link.textContent.includes('Contact')) link.textContent = trans['contact'];
    });
    
    // Traduire le message de disponibilité dans le footer
    const footerAvailability = document.querySelector('.footer-center span');
    if (footerAvailability) footerAvailability.textContent = trans['availability-footer'];
    
    // Mettre en évidence le drapeau de la langue active
    document.querySelectorAll('.language-flags a').forEach(flag => {
      flag.classList.remove('active');
      const flagImg = flag.querySelector('img');
      if ((language === 'fr' && flagImg.src.includes('fr-flag')) ||
          (language === 'en' && flagImg.src.includes('en-flag')) ||
          (language === 'es' && flagImg.src.includes('es-flag'))) {
        flag.classList.add('active');
      }
    });
    
    // Animation visuelle pour indiquer que la traduction a été effectuée
    document.querySelectorAll('.search-item, .profile-card, .faq-section').forEach(item => {
      item.classList.add('translated-element');
      setTimeout(() => {
        item.classList.remove('translated-element');
      }, 1000);
    });
  }
  
  // Fonction pour détecter la langue du navigateur
  function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('es')) return 'es';
    return 'fr'; // Langue par défaut
  }
  
  // Ajouter les événements de clic aux drapeaux
  flagLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const langImg = this.querySelector('img');
      const langSrc = langImg.src;
      
      // Déterminer la langue en fonction de l'image du drapeau
      let language = 'fr'; // Par défaut
      if (langSrc.includes('en-flag')) {
        language = 'en';
      } else if (langSrc.includes('es-flag')) {
        language = 'es';
      }
      
      // Appliquer la traduction
      translatePage(language);
      
      // Animation visuelle pour indiquer que la traduction a été effectuée
      document.body.classList.add('translation-active');
      setTimeout(() => {
        document.body.classList.remove('translation-active');
      }, 1000);
    });
  });
  
  // Vérifier si une langue préférée est stockée, sinon détecter la langue du navigateur
  const savedLanguage = localStorage.getItem('preferred_language') || detectBrowserLanguage();
  if (savedLanguage) {
    translatePage(savedLanguage);
  }
});