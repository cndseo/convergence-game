# CONVERGENCE V8 — Ville vivante et blocages positionnables

Date : 17 octobre 2026.
Projet : cndseo/convergence-game
Branche de travail : feature/convergence-v8-living-city
Version conservée : V6 commit 5aaeca1 (historique Git).
La V7 locale a été intégrée à la V6 par fusion contrôlée et résolution des conflits. Aucun projet tiers modifié.

## Fonctionnalités

- Civils, journalistes, spectateurs et papiers flottants en arrière-plan. Figurants non combattants, non ciblables.
- Fourgons CRS toutes les cinq vagues (jusqu'à un renfort supplémentaire aux actes avancés), gyrophares visuels et reflets.
- Nuages de fumée stratifiés pour les feux fictifs, ambiance d'éclairage et météo existante conservée.
- Fond sonore WebAudio synthétique, désactivé par défaut, contrôlable par Son : non / oui.
- Répartition des vagues par un directeur de jeu simple, basée sur l'avancement sur les trois voies.
- Deux obstacles en feu posables à une position X libre sur la voie choisie, même lorsque la caméra est agrandie.
- Durées 30 secondes (palettes) et 20 secondes (poubelle), avec durabilité. Le jeu arrête alliés et adversaires devant un obstacle existant. Les unités ne ciblent pas à travers le blocage.
- Caméra V6, six catégories d'unités, cinq actes, améliorations, capacités V5 et sauvegardes locales conservés.

## Tests automatisés (MacBook Chrome / Puppeteer, non tests matériels iPhone)

- Syntaxe JS : OK.
- Affichage et commandes à 320, 375, 390, 430, 768 et 1366 px : succès, aucune erreur JavaScript.
- Zoom et changement d'axe : succès à 320, 390, 430 et 1366 px.
- Placement par toucher à X=209 environ et placement en zoom sur une autre voie : succès à 320, 390, 430 et 768 px.
- Collision de toutes les unités des deux camps avec un feu à X=700 pendant neuf secondes : succès à 390 et 768 px ; positions ennemies au bord du feu, positions alliées en retrait.
- Les cinq actes peuvent démarrer et simuler renforts et affrontements : succès sans erreur JavaScript.
- Bouton Son on/off : succès sur les deux formats.
- Site public à contrôler après publication pour confirmer l'identité du fichier et relancer les tests.

Les simulations valident la logique et l'affichage. La fluidité sur un appareil iPhone physique et l'équilibrage de longues parties demandent encore un contrôle utilisateur.
