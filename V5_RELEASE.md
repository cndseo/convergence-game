# CONVERGENCE V5 — gameplay et graphismes
Date : 17 octobre 2026.
Source : V4 commit 99f4d30. Branche : feature/convergence-v5-fires-crs-squads.

## Changements
- Gilets jaunes : capacité « Feu de palettes » (90 élan, 24 secondes, recharge 35 secondes). Un gilet jaune vivant est requis sur l'axe sélectionné.
- Génération Z : capacité « Poubelle en feu » (65 élan, 16 secondes, recharge 24 secondes). Une unité Génération Z vivante est requise sur l'axe.
- Les feux de palettes et les poubelles gênent temporairement les CRS, possèdent une durabilité et expirent ; aucune instruction réelle d'incendie.
- Les unités CRS apparaissent par escouades de trois. 5 profils : CRS de ligne (boucliers, matraques), mobiles, LBD, lacrymogènes (nuages ralentissant les personnages), encerclement (zone de désorientation stylisée).
- Véhicule de renfort distinct. Rééquilibrage de la fréquence des escouades pour conserver le jeu jouable et éviter d'accumuler trop de personnages sur mobile.
- Sprites vectoriels 2D et équipement plus détaillés, flammes animées, fumées, halos de chaleur et nuages de gaz ; rendu Canvas 2D existant conservé.
- Deux rangées de capacités sur mobile, sans débordement horizontal.
- Sauvegardes et six troupes manifestantes de la V4 conservées ; aucun service externe ajouté.

## Commandes
Mobile : sélectionner la voie, envoyer gilets jaunes ou Gen Z, puis toucher Palettes / Poubelle.
Ordinateur : P pour palettes, N pour poubelle. Les commandes historiques sont conservées.

## Validation
- Syntaxe JavaScript validée par Node.
- Régression V4 Chrome/Puppeteer sur six largeurs : 320, 375, 390, 430, 768 et 1366 pixels.
- Tests spécifiques : les deux capacités, conditions préalables, arrivée par trois, profils LBD, rendu et affichage des commandes.
- À valider sur la version publiée en reprenant ces tests.
