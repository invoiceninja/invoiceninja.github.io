---
extends: _layouts.user_guide
section: content
locale: fr_CA
---

# Tâches

Les *Tâches* représentent des petits ou moyens travaux ou services effectués pour un client, et sont parfaitement adaptées pour les services rendus avec un taux horaire. Les tâches vous permettent de suivre votre temps sur le travail, avec des fonctions de type chronomètre intégrées dans vos tâches, et vous pouvez suivre et enregistrer les heures sur autant de périodes de dates et d'heures que vous en avez besoin. Vous pouvez attribuer des tâches à un projet, afin de garder une trace des différents travaux impliqués, ou les laisser en tant que petits travaux autonomes. Les tâches peuvent être ajoutées à la facture d'un client individuellement ou en groupe lorsque vous créez une facture à partir de l'enregistrement du projet lui-même. Les tâches vous permettent également d'attribuer un utilisateur du portail administratif, afin de maintenir la responsabilité et la responsabilisation pour le travail associé.

Le module *Tâches* est puissant, surtout lorsqu'il est utilisé en combinaison avec les Projets et les Dépenses, et très utile pour toute entreprise de services.

## Aperçu

Le module Tâches vous permet de gérer et d'organiser facilement vos tâches dans l'application logicielle.

### Vue en tableau

- Par défaut, le module Tâches s'ouvre sur la vue en tableau, où vous pouvez voir toutes les tâches disponibles.
- Personnalisez les colonnes et triez les tâches dans la liste selon vos besoins.
- Utilisez le bouton 'Colonnes' en bas à droite de l'écran pour ajouter ou supprimer des colonnes du tableau.
- Filtrer les tâches par leur statut: "Actif", "Archivé", "Supprimé", "Facturé", "Enregistré" et "En cours".

### Vue en tableau de bord

- Le module Tâches offre également un mode de visualisation alternatif, la vue en tableau de bord.
- Utilisez la vue en tableau de bord pour visualiser vos tâches actives de manière très visuelle.
- Les tâches sont triées en listes verticales par leur statut et apparaissent comme des notes collées à un tableau.
- Passez la souris sur une note de tâche pour afficher, modifier ou supprimer la tâche.
- Cliquez directement sur la note de tâche pour modifier rapidement le nom de la tâche.
- Appuyez et maintenez une note pour la faire glisser et la déposer dans une autre colonne de statut, changeant ainsi rapidement et facilement le statut de la tâche.

Avec le module Tâches, vous pouvez facilement gérer votre travail et rester organisé. Essayez-le dès aujourd'hui!

<x-warning>
Notez que la vue en tableau de bord des *Tâches* ne présente pas les tâches facturées et payées, elle ressemble plutôt à un tableau de "liste de choses à faire" pour visualiser et gérer votre travail en cours, plutôt qu'une vue d'historique complète, pour laquelle la vue en tableau est mieux adaptée.
</x-warning>

## Affichage d'une tâche

- Sélectionnez une tâche dans la liste ou la vue en tableau, ou cliquez sur "Voir" pour une tâche dans la vue en tableau de bord des tâches pour afficher le panneau Tâches.
- En haut du panneau Tâches, vous verrez le numéro de tâche et un bouton "Modifier".
- Utilisez le menu kebab pour des options contextuelles afin de manipuler et gérer votre enregistrement de tâche.
- Au bas du panneau Tâches, vous aurez deux gros boutons pour les fonctions communes.
- Le premier bouton de fonction change en fonction de l'état de la tâche, soit "Démarrer", "Arrêter" ou "Reprendre", qui démarrera respectivement et créera une ligne de date/heure dans l'enregistrement de tâche pour commencer à suivre les heures facturables pour le travail, arrêtera le chronomètre et remplira l'heure de fin avec l'heure actuelle, ou reprendra le chronométrage de la tâche avec une autre ligne de date/heure dans l'enregistrement de tâche.
- Le deuxième bouton "Facturer la tâche" créera automatiquement un nouvel enregistrement de facture rempli avec la tâche en cours pour le client assigné à cette tâche.

Avec le panneau Tâches, vous pouvez facilement visualiser et gérer vos tâches et rester organisé. Essayez-le dès aujourd'hui!

### Aperçu

L'onglet Aperçu dans le panneau Tâches vous fournit toutes les informations générales sur une tâche, y compris la durée, la valeur et le statut.

- Consultez la durée de la tâche et le "Montant" ou la valeur du travail enregistré jusqu'à présent en haut de l'onglet.
- Voir le statut de la tâche et vérifier si c'est une note privée ou publique.
- Les notes sont mises en évidence et précédées d'une icône de cadenas pour les notes privées et d'une icône avec un cercle autour de la lettre "i" pour les notes publiques, qui seront incluses automatiquement dans les factures générées.
- Un détail des dates et heures de travail saisies dans l'enregistrement de la tâche est également affiché.
- Cliquez sur les boutons interactifs pour accéder à des listes ou des vues filtrées de clients liés, de projets, de statuts de tâches ou d'utilisateurs.

### Documents

Ici, vous pouvez télécharger des fichiers tels que des images, des documents et plus encore afin de donner à votre client un accès à ces fichiers depuis le portail client.

## Création et modification d'une tâche

Lors de la création ou de la modification d'une tâche dans la disposition de bureau, vous passerez complètement de la vue en tableau/liste à une vue "Modifier la tâche" ou "Nouvelle tâche", avec tous les champs disponibles visibles. Sur une disposition mobile, le comportement est similaire, mais les champs disponibles sont divisés en deux onglets.

### Détails

* **Client** - Attribuez un client à lier à la tâche. Lorsque vous facturez la tâche, cela attribuera automatiquement la facture à ce client.
* **Projet** - Attribuez éventuellement la tâche à un projet disponible. Ce faisant, la tâche sera automatiquement attribuée au même client que le projet, et lorsque vous sélectionnez un client, les projets disponibles seront filtrés par ceux qui sont attribués au client que vous avez sélectionné. Sélectionner un projet remplacera le taux de tâche par défaut par le taux de tâche défini dans l'enregistrement du projet.
* **Numéro de tâche** - Bien que vous puissiez modifier manuellement ce champ, la meilleure pratique est de laisser ce champ vide et de laisser les politiques de numéros générés remplir le numéro de tâche.
* **Taux** - Automatiquement, ce champ utilisera le taux de taxe global par défaut ou, de manière plus autoritaire, le taux de tâche du projet auquel il a été attribué. Vous pouvez également spécifier manuellement un taux de tâche en remplissant vous-même le champ.
* **Statut** - Sélectionnez un statut de tâche. Les statuts de tâche sont une petite partie du cycle de vie de la tâche et aident à trier vos tâches à des fins organisationnelles. Vous pouvez sélectionner l'un des statuts de tâche prédéfinis ou créer vos propres statuts de tâche sous *Paramètres* > *Paramètres des tâches*.
* **Description** - Créez une description pour votre tâche, qui sera incluse dans la description de l'article de la tâche lorsque vous créez une facture à partir de vos tâches ou projets.

## Suivi du temps

La fonction de suivi du temps vous permet de suivre facilement les heures facturables de votre travail sur une tâche pour le client.

### Entrées de temps

- Affichez une liste de dates et d'heures principalement explicite.
- Entrez ou modifiez manuellement les entrées de date et d'heure.
- Utilisez le bouton de lecture/arrêt pour démarrer et arrêter le chronomètre.
- Démarrer le chronomètre crée une nouvelle ligne dans la liste avec la date et l'heure de début actuelles.
- Arrêter le chronomètre remplira l'"Heure de fin", qui calcule la durée.
- Sinon, vous pouvez définir manuellement la durée, qui calculera votre heure de fin pour vous.
- Si une entrée dans la liste des heures n'a pas encore d'heure de fin, l'enregistrement de la tâche est considéré comme ayant le statut En cours et vous verrez la durée de la tâche changer chaque seconde lors de la visualisation de la tâche, pendant qu'elle suit la progression.

## Cycle de vie d'une tâche

Les tâches ont un cycle de vie unique, avec la possibilité de créer des statuts personnalisés et de prendre en charge plusieurs statuts pour aider à trier et gérer les tâches tout en reflétant leurs états actuels.

### Statut de tâche manuel ou *Enregistré*

Un statut de tâche défini manuellement est celui que vous sélectionnez ou configurez, comme l'un des statuts de tâche préconfigurés (Retard, Terminé, En cours ou Prêt à faire) ou un statut personnalisé que vous avez créé dans *Paramètres* > *Paramètres des tâches*. Ces statuts servent principalement à la tenue de dossiers et aident à trier et visualiser vos tâches actives. Les tâches avec un statut défini manuellement sont considérées comme *Enregistrées* si elles n'ont pas été facturées et ne sont pas actuellement dans un état *En cours*.

### En cours

Une tâche en cours est une tâche qui suit actuellement les heures facturables sur l'horloge.

* Une tâche entre automatiquement dans un statut *En cours* lorsqu'elle contient une ligne pour la date/l'heure avec une heure de début saisie, mais sans durée ni heure de fin encore saisies.

* Une tâche en cours affichera toujours un temps mobile pour sa *Durée* pour aider à suivre le travail actif effectué pour cette tâche.
* Lorsqu'une tâche est dans l'état en cours, elle sera présentée dans le tableau comme "En cours", mais elle a techniquement toujours le statut de tâche défini manuellement, et lorsque vous regardez la vue du tableau des tâches, vous la verrez triée en tant que telle, avec une icône "lecture" à côté pour représenter qu'elle est dans un état en cours.
* Que vous remplissiez manuellement l'*Heure de fin* ou la *Durée* de la ligne ouverte sur un enregistrement de tâche, ou que vous arrêtiez la tâche pour remplir automatiquement ces champs, la tâche en cours reviendra à un état *Enregistré* et apparaîtra dans le tableau avec le statut de tâche défini manuellement.

### Facturé

Une tâche est dans un état facturé après que la tâche a été ajoutée à une facture. Une tâche dans l'état de facturation n'apparaît plus dans la vue du tableau, car elle est considérée comme terminée. Lors de la consultation d'une tâche qui a été facturée, il y aura un lien vers la facture à laquelle elle a été attribuée.

### Archivé

Les tâches archivées sont masquées de toutes les vues par défaut. Les tâches archivées sont toujours considérées comme disponibles et peuvent être facturées. Vous pouvez changer vos filtres de vue pour voir les tâches archivées, et vous pouvez "Restaurer" une tâche archivée pour la ramener à son état précédent.

### Supprimé

Une tâche supprimée est désormais masquée de toutes les vues par défaut et n'est plus considérée comme disponible. Les tâches supprimées ne peuvent pas être ajoutées aux factures, modifiées ou facturées. Vous pouvez changer vos filtres de vue pour voir les tâches supprimées et vous pouvez "Restaurer" un enregistrement de tâche supprimée pour le ramener à son état précédent.

<x-next url=/fr_CA/transactions>Transactions</x-next>
