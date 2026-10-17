# CONVERGENCE V8 — ville vivante et barricades libres

Build sur branche `feature/convergence-v8-living-city`, à partir de la V6 publiée et en intégrant les améliorations V7 précédemment uniquement locales.

## Changements

- Journalistes, passants et observateurs décoratifs animés sur les trottoirs ; pas de statut de combattant ni de ciblage.
- Reflets de gyrophares bleus/rouges sur les fourgons CRS ; renforts de véhicules toutes les cinq vagues et, en acte avancé, deuxième fourgon.
- Fumée stratifiée, braises, lueurs et papiers flottants ; respect des préférences de mouvement réduit pour la caméra héritée.
- Ambiance sonore synthétique WebAudio silencieuse par défaut, activée par le bouton Son uniquement.
- Répartition des vagues CRS dirigée légèrement vers les voies où la mobilisation progresse ; pas d'intelligence externalisée.
- Feux de palettes et poubelles : l'utilisateur choisit l'emplacement d'un toucher/clic sur l'une des trois chaussées (avec conversion de coordonnées au zoom). Annulation clavier Échap.
- Obstacle incandescent : contrôle du passage des **deux camps**, même quand aucun autre adversaire n'est proche ; durée 30 s (palettes) / 20 s (poubelles), résistance temporaire jusqu'à épuisement ou extinction. Pas de tirs au travers de l'obstacle.
- Tous les cinq actes, six troupes, améliorations existantes, capacité de caméra V6 et sauvegardes conservées. Aucun nouveau CDN ni dépendance.

## Contrôles tests

En cours : syntaxe JS, tests de navigation, mobile 320/390/430 et PC ; placement X libre et dans chaque voie, impossibilité de traverser, extinction et reprise, chargement du jeu public.
