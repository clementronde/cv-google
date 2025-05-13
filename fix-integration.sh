#!/bin/bash
# Script de correction et déploiement pour l'intégration React dans HTML
# Ce script résout les problèmes d'intégration et vérifie les ressources

# Couleurs pour les messages
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonctions d'affichage
function success() { echo -e "${GREEN}✅ $1${NC}"; }
function error() { echo -e "${RED}❌ $1${NC}"; }
function warning() { echo -e "${YELLOW}⚠️ $1${NC}"; }
function info() { echo -e "${BLUE}ℹ️ $1${NC}"; }

# Vérifier la structure
echo "=== VÉRIFICATION DE LA STRUCTURE DES PROJETS ==="
ROOT_DIR=$(pwd)
PAGES_DIR="$ROOT_DIR/pages"
MY_DASHBOARD="$ROOT_DIR/my-dashboard"
DIST_DIR="$PAGES_DIR/dist"
ASSETS_DIR="$PAGES_DIR/assets"

# Vérifier les chemins principaux
[ -d "$PAGES_DIR" ] && success "Le dossier pages existe" || error "Le dossier pages n'existe pas"
[ -d "$MY_DASHBOARD" ] && success "Le dossier my-dashboard existe" || error "Le dossier my-dashboard n'existe pas"
[ -d "$DIST_DIR" ] || warning "Le dossier dist n'existe pas encore (sera créé au build)"

# Vérifier le fichier freelance.html
if [ -f "$PAGES_DIR/freelance.html" ]; then
    success "Le fichier freelance.html existe"
    # Vérifier si dashboard-root est présent
    if grep -q "dashboard-root" "$PAGES_DIR/freelance.html"; then
        success "L'élément #dashboard-root est présent dans freelance.html"
    else
        error "L'élément #dashboard-root n'est pas présent dans freelance.html"
    fi
    
    # Vérifier les balises CSP
    if grep -q "Content-Security-Policy" "$PAGES_DIR/freelance.html"; then
        success "La directive CSP est présente"
    else
        warning "La directive CSP n'est pas présente - React pourrait être bloqué"
    fi
else
    error "Le fichier freelance.html n'existe pas"
fi

# Vérifier vite.config.js
VITE_CONFIG="$MY_DASHBOARD/vite.config.js"
if [ -f "$VITE_CONFIG" ]; then
    success "Le fichier vite.config.js existe"
    # Vérifier la configuration base
    if grep -q "base: './" "$VITE_CONFIG"; then
        success "La configuration 'base: './' est présente"
    else
        error "La configuration 'base: './' est manquante dans vite.config.js"
    fi
    
    # Vérifier la configuration outDir
    if grep -q "outDir" "$VITE_CONFIG" && grep -q "pages/dist" "$VITE_CONFIG"; then
        success "La configuration outDir pointe vers pages/dist"
    else
        error "La configuration outDir est incorrecte dans vite.config.js"
    fi
else
    error "Le fichier vite.config.js n'existe pas"
fi

# Vérifier les images manquantes
echo ""
echo "=== VÉRIFICATION DES RESSOURCES MANQUANTES ==="

# Créer le dossier assets s'il n'existe pas
if [ ! -d "$ASSETS_DIR" ]; then
    info "Création du dossier assets pour les images"
    mkdir -p "$ASSETS_DIR"
fi

# Liste des images manquantes
MISSING_RESOURCES=(
    "meta.png"
    "sea.svg"
    "analytics.svg"
    "seo.svg"
    "website.svg"
    "social.svg"
    "testimonial1.jpg"
    "client-logo1.png"
    "strategy.svg"
    "testimonial2.jpg"
    "testimonial3.jpg"
    "guarantee-badge.png"
    "success-icon.png"
    "hubspot.png"
    "linkedin.svg"
    "github.svg"
    "twitter.svg"
    "visibility.svg"
    "conversion.svg"
    "roi.svg"
    "data.svg"
    "pattern.png"
)

# Compte des fichiers manquants
MISSING_COUNT=0

# Vérifier chaque ressource
for resource in "${MISSING_RESOURCES[@]}"; do
    if [ ! -f "$ASSETS_DIR/$resource" ]; then
        warning "Ressource manquante: $resource"
        
        # Créer un placeholder SVG pour les images SVG
        if [[ "$resource" == *.svg ]]; then
            info "Création d'un placeholder SVG pour $resource"
            echo '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                <rect width="100" height="100" fill="#f0f0f0"/>
                <text x="50" y="50" font-family="Arial" font-size="10" text-anchor="middle">'"$resource"'</text>
            </svg>' > "$ASSETS_DIR/$resource"
        fi
        
        # Créer un placeholder PNG pour les images PNG/JPG
        if [[ "$resource" == *.png || "$resource" == *.jpg ]]; then
            info "Un placeholder sera nécessaire pour $resource"
        fi
        
        MISSING_COUNT=$((MISSING_COUNT + 1))
    else
        success "Ressource présente: $resource"
    fi
done

# Vérifier le script manquant
if [ ! -f "$ASSETS_DIR/responsive-script.js" ]; then
    warning "Script manquant: responsive-script.js"
    info "Création d'un script de remplacement"
    echo "// Responsive script placeholder
console.log('responsive-script.js chargé');" > "$ASSETS_DIR/responsive-script.js"
fi

# Bilan des ressources manquantes
echo ""
echo "=== BILAN DES RESSOURCES ==="
if [ $MISSING_COUNT -gt 0 ]; then
    warning "$MISSING_COUNT ressources sont manquantes"
    info "Pour corriger ces erreurs 404, vous pouvez:"
    info "1. Ajouter les fichiers manquants dans le dossier pages/assets"
    info "2. Modifier les chemins dans freelance.html pour pointer vers le bon dossier"
    info "3. Utiliser les placeholders créés pour les tests"
else
    success "Toutes les ressources sont présentes"
fi

# Build React
echo ""
echo "=== BUILD DU PROJET REACT ==="
if [ -d "$MY_DASHBOARD" ]; then
    cd "$MY_DASHBOARD"
    
    # Vérifier si npm est installé
    if command -v npm &> /dev/null; then
        info "Lancement du build React..."
        npm run build
        
        if [ $? -eq 0 ]; then
            success "Build React terminé avec succès"
        else
            error "Erreur lors du build React"
        fi
    else
        error "npm n'est pas installé ou accessible"
    fi
    
    cd "$ROOT_DIR"
else
    error "Impossible d'accéder au dossier my-dashboard"
fi

# Lancer un serveur local
echo ""
echo "=== LANCEMENT D'UN SERVEUR LOCAL ==="
if command -v npx &> /dev/null; then
    info "Démarrage d'un serveur local..."
    info "Ouvrez http://localhost:3000/pages/freelance.html dans votre navigateur"
    
    # Lancer le serveur avec npx serve
    cd "$ROOT_DIR"
    info "Appuyez sur Ctrl+C pour arrêter le serveur"
    npx serve .
else
    warning "npx n'est pas installé, impossible de lancer un serveur local"
    info "Pour installer npx: npm install -g npx"
    info "Puis exécutez: npx serve ."
fi