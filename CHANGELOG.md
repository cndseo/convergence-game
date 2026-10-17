# CONVERGENCE — versions

## V3 (17 octobre 2026)

- Un front vivant : compteur de renforts ennemis par axe, avertissement lorsqu'une voie n'est plus défendue, bandeau tactique mobile.
- Actions : barricade temporaire (65 élan, 22 s, 28 s de recharge), dans l'axe sélectionné. Les CRS la fatiguent et la brisent.
- Convergence : lorsque trois groupes différents combattent sur un même axe, bonus de puissance de 18 %.
- Renforts : avertissement toutes les 5 vagues ; fourgon supplémentaire toutes les 9 vagues à partir de l'acte 2.
- Vitesse ×1 / ×2, clavier « F ».
- Améliorations accessibles pendant le jeu depuis « ↑ Troupes » ; la partie est suspendue pendant la consultation. Les niveaux sont sauvegardés dans localStorage.
- Boutons tactiles de chaque axe synchronisés avec l'état réel du jeu.
- Aucun changement à la clé de sauvegarde V1, aux six troupes, ni aux cinq actes.

## Contrôles

- Mobile : choisir un axe dans la barre inférieure, puis toucher une troupe. « ▥ Barricade », « 📣 Chant » et « ✚ Soins » sont les trois pouvoirs. « ↑ Troupes » ouvre les améliorations.
- Ordinateur : Q/W/E = voie ; 1 à 6 = groupe ; F = vitesse ; B = barricade ; U = améliorations ; Espace = pause.

## Contrôles de validation

- Branche isolée avant publication : `feature/convergence-v3-tactical-mobile`.
- Tests navigateur Chrome (MacBook) : 320 / 375 / 390 / 430 / 768 / 1366 px. Aucun débordement horizontal ni erreur JavaScript lors des scénarios interactifs.
- Déploiement, capacité barricade, vitesse ×2, changement d'axe et ouverture/reprise du panneau de progression validés.
- Achat d'amélioration et conservation du niveau après rechargement validés ; partie sans déploiement perdue comme attendu.
- Publication uniquement après validation des tests, sans remplacement des autres dépôts.
