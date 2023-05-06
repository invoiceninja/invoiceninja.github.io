---
extends: _layouts.user_guide
section: content
locale: fr_CA
---

# Fournisseurs

Le module Fournisseurs vous permet de gérer une liste de fournisseurs auprès desquels votre organisation achète des biens ou des services à des fins professionnelles. Vous pouvez saisir toutes les informations de contact et de facturation nécessaires pour chaque fournisseur et suivre les achats individuels grâce aux dossiers de dépenses liés au dossier fournisseur correspondant. La gestion des dossiers fournisseurs est essentielle pour une gestion efficace de votre entreprise ou organisation.

## Vue du module fournisseur

Lorsque vous sélectionnez le module Fournisseurs dans le menu de navigation situé sur le côté gauche du portail d'administration, vous accédez à une vue en tableau de tous les enregistrements de fournisseurs actuels. La vue en tableau vous permet de trier les fournisseurs par types de colonnes, d'ajouter/supprimer des colonnes et de filtrer pour afficher les fournisseurs archivés ou supprimés. Vous pouvez également créer de nouveaux fournisseurs depuis cet écran. Chaque fournisseur dans le tableau aura un menu kebab à gauche de son entrée dans le tableau, où vous pouvez gérer l'enregistrement du fournisseur ou effectuer des actions telles que modifier, créer de nouveaux enregistrements de dépenses, archiver et supprimer.

## Consultation d'un fournisseur

Pour voir les détails d'un fournisseur, sélectionnez-le dans le tableau ou la vue liste. Le panneau d'aperçu apparaîtra avec 3 onglets. Le haut de l'écran comporte un bouton "Modifier" qui vous emmène à l'écran de modification du fournisseur et un menu kebab avec des options pour effectuer une action sur l'enregistrement du fournisseur. Le bas du panneau d'aperçu comporte deux boutons, "Nouvelle dépense" et "Archiver", qui vous permettent de créer un nouvel enregistrement de dépense lié au fournisseur ou d'archiver le fournisseur et de le masquer de la vue tableau par défaut.

### Vue d'ensemble

Le onglet aperçu du fournisseur affiche des informations générales sur le fournisseur.

* La valeur totale de toutes les dépenses de ce fournisseur est affichée en haut.  
* Les notes privées et publiques sont mises en évidence et précédées d'un symbole de cadenas pour les notes privées et d'une lettre "i" dans un petit cercle pour les notes publiques.
* Une liste de boutons interactifs multifonctionnels permet de lier l'utilisateur, les dossiers de dépenses et les dossiers de dépenses récurrentes attribués au fournisseur.

### Détails
L'onglet détails contient une liste d'autres informations spécifiques sur le fournisseur, telles que leur site Web, leurs coordonnées, leur adresse de facturation et plus encore. Cliquer sur n'importe lequel de ces éléments répertoriés copiera la valeur de l'élément dans votre presse-papiers.

### Documents

Ici, vous pouvez téléverser des fichiers tels que des images, des documents et plus encore pour les lier à votre enregistrement de fournisseur. Cela sera principalement pour vos besoins dans le portail d'administration cependant.

## Création et édition d'un fournisseur

Créer et modifier un fournisseur dans la disposition de bureau vous amènera à un nouvel écran avec tous les champs disponibles présentés en une seule vue. Sur la disposition mobile, il est divisé en sections à onglets, de manière similaire à la façon dont ils apparaissent dans la disposition de bureau, comme suit :

### Détails

* **Nom** - Entrez le nom de votre fournisseur ici.
* **Numéro** - Il s'agit d'un numéro généré pour vos besoins de tenue de dossiers afin d'identifier différents fournisseurs dans le système. Personnalisez les motifs de numérotation sous *Paramètres* > *Numéros Générés*.
* **Numéro d'identification** - Un champ optionnel et générique pour les numéros d'identification d'entreprise, le cas échéant.
* **Numéro de TVA** - Un champ facultatif pour enregistrer les numéros de "Taxe sur la valeur ajoutée" pour des pays comme ceux de l'Union européenne qui exigent de suivre cela à des fins fiscales.
* **Site web** - Le site web de votre fournisseur peut être saisi ici.
* **Téléphone** - Un numéro de téléphone de contact principal pour le fournisseur.

### Contacts

Vous pouvez ajouter autant de contacts que vous le souhaitez à un enregistrement de fournisseur, pour représenter des individus ou des services avec lesquels vous pourriez avoir besoin de communiquer à un moment donné auprès du fournisseur.

* **Prénom** et **Nom de famille** - Un prénom et un nom de famille pour une personne, ou entrez simplement un nom de département en tant que prénom.
* **Courriel** - L'adresse courriel privilégiée pour le contact.
* **Téléphone** - Le numéro de téléphone privilégié pour le contact.

### Notes
* **Monnaie** - Vous pouvez inclure une note sur la monnaie préférée du fournisseur, si vous le souhaitez. Les nouveaux enregistrements de dépenses liés au fournisseur seront automatiquement renseignés avec ce choix de monnaie.
* **Notes publiques** - Les notes publiques pourraient être implémentées à l'avenir ou être incluses dans des modèles personnalisés pour les factures et autres enregistrements. C'est un bon emplacement pour des descriptions générales d'un fournisseur.
* **Notes privées** - Uniquement visibles par les utilisateurs du portail d'administration, vous pouvez utiliser ce champ pour laisser des commentaires privés sur un fournisseur pour vous-même et vos collègues.

### Adresse

Les détails de l'adresse de facturation de votre fournisseur peuvent être saisis ici à des fins de conservation des documents.

* **Rue** - Le numéro de rue et le nom de rue.
* **Apt/Suite** - Numéro d'appartement ou de suite.
* **Ville**
* **État ou Province**
* **Code Postal**
* **Pays**

<x-next url=/fr_CA/purchase-orders>Ordres de Achat</x-next>

