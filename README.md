Weather App

<img width="1020" height="599" alt="Capture d’écran 2026-02-11 à 03 24 21" src="https://github.com/user-attachments/assets/d8c4dfb1-84af-4a4a-bab2-c1a4ca573bb5" />


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

Afin de travailler sur ma propre versione et ma propre machine, j'ai créé un nouveau dépôt GitHub personnel.
J'ai supprimé la liaison avec le dépôt d'origine et configuré mon projet pour qu'il pointe vers mon propre dépôt.
J'ai ensuite initialisé l'historique Git de mon projet et poussé le code vers mon dépôt.
Le but était de :
- Suivre les modifications du code
- Sauvegarder les différentes étapes du développement
- Travailler à partir d'un projet existant
- Maintenir un historique clair des évolutions
- Faciliter la livraison du projet via GitHub

III - Migration vers l'API Open-Meteo

L'application utilisait initialement OpenWeatherMap donc je l'ai remplacé par Open-Meteo. J'ai commencé par modifier la requête API, adapter le format des données reçues, maintenir la compabilité avec l'interface existance.

IV - Création du fichier config.Json

Pour ne plus utiliser la recherche de ville sur l'application, j'ai commencé par créer un fichier config.json en indiquant la ville, le pays et les coordonnées de la ville déjà prédéfinies. Le but était que l'application utilise ces coordonnées pour récupérer les données météo.

V - Migration de OpenWeatherMap à Open-Meteo

J'ai adapté plusieurs champs pour maintenir le fonctionnement de l'interface et construit la migration vers Open-Meteo.

VI - Changement automatique des données

Afin de respecter les contraintes du projet, les données météo sont mises à jour automatiquement toutes les heures.
Cette fonctionnalité a été faite avec setInterval dans React.





