Weather App


CONTEXTE DU PROJET 
Ce projet consiste à adapter une application météo existante afin d’utiliser l’API Open-Meteo à la place d’OpenWeatherMap.
L’application est destinée à afficher les données météo sur des écrans d’information dans les transports en commun.

L'objectif est de :
- Migrer vers l'API Open-Meteo
- Supprimer la recherche de ville utilisateur
- Mettre en place une configuration via fichier JSON
- Rafraîchir automatiquement les données météo
- Conserver la structure existante de l'application

J'ai utilisé Next.js, React, Javascript, HTML/CSS, l'API Open-Meteo, Git/Github

I - récupération des fichiers sources depuis un dépôt Git

Dans le cadre du projet, j’ai commencé par récupéré le code source d'un dépôt Git public contenant l'application météo initiale.
Cette étape m'a permis d'obtenir une base fonctionnelle et de comprendre la structure du projet.

Après la récupération du code, j'ai analysé l'organisation des fichiers, le fonctionnement de l'API interne et la manière dont les données météo étaient affichées, ainsi que les dépendances utilisées. Le but était de comprendre l'environnement avant le de faire les modifications demandées.

II - Création de mon dépôt personnel

Afin de travailler sur ma propre version et ma propre machine, j'ai créé un nouveau dépôt GitHub personnel.
J'ai supprimé la liaison avec le dépôt d'origine et configuré mon projet pour qu'il pointe vers mon propre dépôt.
J'ai ensuite initialisé l'historique Git de mon projet et poussé le code vers mon dépôt.


III - Migration vers l'API Open-Meteo

L'application utilisait au départ OpenWeatherMap donc je l'ai remplacé par Open-Meteo.
J'ai commencé par modifier la requête API puis adapter le format des données reçues.
J'ai modifier l'API interne data pour transformer les données OpenMeteo au format demandé.

IV - Création du fichier config.Json

Pour ne plus utiliser la recherche de ville sur l'application, j'ai commencé par créer un fichier config.json en indiquant la ville, le pays et les coordonnées de la ville déjà prédéfinies. Le but était que l'application utilise ces coordonnées pour récupérer les données météo.


VI - Changement automatique des données

Etant donné que Open-Meteo ne fournit pas les mêmes données que OpenWeatherMap, j'ai adapté plusieurs champs pour maintenir le fonctionnement de l'interface.

VII - Changement automatique des données

Pour une mise à jour des données météo automatiquement toutes les heures, j'ai mis la fonctionnalité en utilisant setInterval dans React.

VIII - Gestion du fuseau horaire

Pour faire correspondre les horaires météo à la ville prédéfinies, utiliser l'offset UTC fourni qui m'a été fourni par Open-Meteo.
Affichage de l'heure locale, le lever du soleil, du coucher du soleil.

IX - Gestion du mode jour / nuit

Utiliser is-day venant de l'APU pour que l'interface s'adapte automatiquement.




i

