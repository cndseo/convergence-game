# CONVERGENCE V11 — Raccourcis tactiles et gestes intuitifs

Date : 17 octobre 2026. Dépôt : `cndseo/convergence-game`.

## Conception

Amélioration limitée à l'ergonomie du joueur mobile, en préservant le moteur Canvas 2D, le scénario, les sauvegardes, les troupes, les cinq actes et les sons V9.

- Un **bouton Renvoyer** apparaît dans le bandeau de la vue tactique après le premier déploiement, avec icône et coût de la dernière troupe. Répète le déploiement sur la voie actuellement sélectionnée en un toucher. Désactivé si l'élan disponible est insuffisant.
- Vue tactique : **balayer verticalement** change de voie (vers le haut = voie suivante ; vers le bas = précédente). **Balayer horizontalement** déplace le cadrage sans changer de voie.
- Après une action collective instantanée (chant, soins, barricade), retour automatique à l'onglet Troupes sur mobile. Pour les feux, retour après placement ; Annuler retourne aux troupes.
- Nombre de capacités actuellement accessibles affiché à côté d'**Actions**.
- Messages contextuels très courts (voie choisie, troupe envoyée, blocage posé, action activée), automatiquement masqués en deux secondes ; ils n'interceptent pas les gestes.
- L'interface et les raccourcis de l'ordinateur restent inchangés.

## Tests locaux automatisés dans Chrome/Puppeteer

- Six viewports : 320×700, 390×844, 430×932, 667×375, 844×390 et 1366×768.
- Portrait : un déploiement puis rappel de la même unité ; vérification du nombre d'unités.
- Glissement vertical : sélection de la voie suivante ; glissement horizontal : sélection inchangée.
- Badge d'actions disponibles ; retour aux troupes après chant.
- Placement de feux sur aperçu général et vue rapprochée, collisions et conditions de création sur plusieurs formats.
- Quinze catégories audio toujours opérationnelles avec son désactivé par défaut.
- Les cinq actes chargent et exécutent leurs simulations sans exception JavaScript.

Vérification sur iPhone physique encore à faire. Aucun changement destructeur, aucune dépendance externe ajoutée.
