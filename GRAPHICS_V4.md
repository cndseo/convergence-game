# CONVERGENCE — Direction graphique V4 (17 octobre 2026)

## Périmètre
Amélioration exclusivement graphique de la V3 : ne pas remplacer le moteur Canvas 2D, les unités, les cinq actes, les capacités, ni la sauvegarde `convergence_street_game_2026_v1`.

## Rendu
- Décors indépendants par acte (rond-point, lycée, centre-ville, pont, place publique).
- Bâtiments à façades, fenêtres, volets, boutiques et balcons, éclairage atmosphérique, sol texturé, passages piétons et mobilier urbain.
- Sprites vectoriels procéduraux articulés : marche, oscillation, visages, équipements distincts des lycéennes, gilets jaunes, génération Z, agriculteurs, infirmières, pompiers et CRS.
- Tracteur et fourgon avec roues en rotation et feux clignotants.
- Particules d'ambiance discrètes, flammes et blessures graphiques absentes.

## Performance et continuité
- La scène statique est dessinée dans un canvas secondaire mis en cache et régénéré seulement au changement d'acte.
- Seuls les personnages, les effets et la sélection d'axe sont animés en temps réel.
- Aucun moteur, CDN, fichier image ou dépendance ajoutés. Usage hors ligne préservé.
- `requestAnimationFrame` suit la vitesse de partie, les animations sont figées quand le jeu est en pause.

## Tests
- Tests Chromium automatisés avec contrôles d'interface sur 320, 375, 390, 430, 768 et 1366 pixels : succès.
- Tests interactifs des cinq actes avec unités et renforts : succès, pas d'erreur JavaScript observée.
- Sélection d'axe, déploiement, barricade, vitesse x2 et panneau d'améliorations : succès.
- V3 reste accessible dans l'historique Git (commit 9d04a62) ; mise en ligne uniquement après tests.
