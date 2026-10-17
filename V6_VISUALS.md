# CONVERGENCE V6 — Rendu cinématique (17 octobre 2026)

## Livrable
Mise à niveau du rendu existant sans changement de moteur ni de règles. Code dans `index.html`, rendu Canvas 2D procédural hors ligne.

### Graphismes
- Façades avec maçonnerie, vitrines en retrait, profondeur des ombres et éclairage de commerces.
- Bitume détaillé : fissures, joints, gouttières, grilles d'évacuation, reflets discontinus.
- Nouveau passage météo : pluie stylisée aux actes du lycée et du pont, poussière dans les autres actes.
- Halo lumineux du feu et des véhicules, braises animées, colorimétrie et vignettage léger.
- Personnages avec coutures des vêtements, protections, genouillères, boucliers et équipements rehaussés.
- Couche de décor statique conservée en cache ; nouveaux détails principalement dessinés une fois par acte.

### Lisibilité et commandes
- Nouveau bouton `◎ Vue proche`, accessible sur iPhone et ordinateur.
- Zoom progressif 1,72×. Sur un front étendu, la caméra suit d'abord la troupe de gauche, puis le point de rencontre.
- Le choix d'axe sur le canvas fonctionne en vue rapprochée grâce à la conversion correcte des coordonnées de la caméra.
- Raccourci clavier : `V` pour basculer entre vue générale et vue proche.
- Préférence de réduction des animations prise en compte pour le mouvement de caméra.
- Les six unités, les cinq actes, les sauvegardes existantes et toutes les capacités V5 sont conservés.

### Tests exécutés avant fusion
- Tests de commandes, déploiement, vitesse, barricade et panneau d'améliorations sur 320, 375, 390, 430, 768 et 1 366 px : succès.
- Feu de palettes, poubelle en feu, escouades CRS minimum trois, LBD, mobile et interface : succès sur 320, 390, 430 et 768 px.
- Zoom 1,72× et retour 1×, sélection d'axe dans la caméra, aucun débordement : succès sur 320, 390, 430 et 1 366 px.
- Les cinq actes démarrent avec plusieurs unités et renforts, sans exception JavaScript.
- Essais effectués dans Chrome avec viewport simulé, **pas** sur les appareils physiques.
