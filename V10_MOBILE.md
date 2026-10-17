# CONVERGENCE V10 — Expérience mobile

## Constat et décision

V9 : sur iPhone 390 px, le champ de bataille ne faisait que 175 px de haut tandis que le panneau inférieur en utilisait 214. Les mêmes informations et actions étaient répétées dans les panneaux de la page.

V10 : **une interface de jeu à plein écran**, adaptée au pouce. Le moteur Canvas 2D, le moteur audio, les règles, les sauvegardes et les cinq actes restent intacts.

## Portrait

- La page ne défile plus en partie ; le terrain et les commandes sont accessibles simultanément.
- Bandeau supérieur réduit : titre, Son, Pause, vitesse et Menu.
- Aperçu intégral des trois axes pour garder la vision stratégique.
- Vue tactique agrandie dédiée aux actions de proximité. Glisser horizontalement déplace le cadrage pendant 5 s ; l'affichage revient ensuite au suivi automatique des troupes.
- Un toucher dans la vue rapprochée sélectionne l'axe ou place un feu armé à cet emplacement. L'aperçu général accepte aussi le placement.
- Bandeau inférieur réduit à 169 px en mode normal, au lieu de 214 px ; six troupes sur un onglet, cinq capacités sur un second. Grandes cibles tactiles (40–66 px).
- Élan et vague visibles dans le bandeau. Améliorations disponibles par la flèche.
- Menu séparé : règles, recommencer, sélection des actes débloqués ; jeu suspendu tant qu'il est ouvert.
- Lors du placement d'un feu, indice contextuel et commande Annuler, avec espace de terrain réservé.

## Paysage

- Terrain à gauche, commandes à droite, côte à côte.
- Introduction et fenêtres modales limitées à la hauteur d'écran : bouton de lancement atteignable sur iPhone 667 × 375.
- La largeur minimale de 250 px de la colonne est prise en compte pour éviter tout chevauchement de la barre supérieure.

## Continuité et tests

- Branchée et isolée sur `feature/convergence-v10-mobile-ux` avant fusion.
- Tests navigateur Chrome/Puppeteer sur 320×700, 390×844, 430×932, 667×375 et 844×390 ; contrôle ordinateur 1366×768.
- Tests onglets, déploiement, menu des cinq actes, fermeture/reprise, capacité palettes : succès.
- Tests de pose libre des barricades sur aperçu complet et vue tactique, y compris zoom : succès.
- Vérification des 15 familles de sons, extinction, caméra existante et absence d'erreur JavaScript : succès.
- Simulation des cinq actes avant publication.
- Les tests sont réalisés sur Mac avec viewports simulés. La fluidité et les gestes sur iPhone physique restent à confirmer.
