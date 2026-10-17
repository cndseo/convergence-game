# CONVERGENCE V9 — Bruitages sonores (17 octobre 2026)

## Principes
- Amélioration incrémentale du dépôt `cndseo/convergence-game`. V8 conservée dans l'historique Git ; aucun changement aux règles, aux sauvegardes ni aux cinq actes.
- Bruitages synthétisés **en local** avec WebAudio : aucun téléchargement, banque sonore externe ni dépendance.
- Audio **désactivé par défaut**. Le bouton « Son : non / oui » sert d'activation explicite (nécessaire sur iOS) et coupe les sons en cours lors de la désactivation.
- Mixage global limité avec compresseur WebAudio et limiteurs de fréquence pour éviter de superposer trop de sons, y compris quand il y a de nombreuses unités.

## Bruitages ajoutés
- Sirène de fourgon CRS (modulation en fréquence), arrivées d'escouades et pas.
- Bruits discrets de foule et chants collectifs.
- Feu de palettes / poubelle enflammée : crépitements et souffle.
- Obstacles, barricades : bruit sourd, bouclier : choc métallique, affrontements : percussions.
- LBD simulé : percussion brève, lacrymogènes : souffle filtré, grenades d'encerclement simulées : grondement sourd.
- Arrivée de troupes, soins et musique brève de victoire ou de défaite.

## Tests
- Syntaxe JavaScript chargée et vérifiée sur Chrome/Puppeteer.
- Activation du son et état WebAudio `running` après interaction réelle.
- Vérification de 15 familles de sons + absence de lecture à l'état muet.
- Contrôles automatisés d'interface sur 320, 390, 430, 768, 1366 px, sans erreurs JavaScript ni débordement horizontal.
- Test complémentaire du fondu de coupure/réactivation et des cinq actes avant publication.
- Essais réalisés en simulateur Chrome ; la restitution acoustique reste à confirmer sur iPhone physique.
