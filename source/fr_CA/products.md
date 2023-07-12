---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

# Produits

## Création de produits

Il existe plusieurs façons de créer un produit, notamment :

* Portail Admin > Nouveau Produit
* Portail Admin > Paramètres > Importer | Exporter > Importer des documents .CSV pour la création ou l'importation de produits en lots.
* Saisir manuellement les informations d'un nouveau produit sur une nouvelle ligne d'une facture ou d'un devis. Notez que lors de l'utilisation de cette méthode, la *quantité* du produit utilisée dans la première facture sera définie comme la *Quantité par défaut* pour ce produit.
* En tant que développeur, vous pouvez créer des appels API pour créer, mettre à jour, supprimer, exporter ou effectuer des actions en masse sur des produits, en utilisant les références API de la documentation d'API Invoice Ninja (https://api-docs.invoicing.co/). Les modèles pour Integratomat et d'autres n'ont pas encore été implémentés.

Les produits peuvent également être utilisés pour représenter des services rendus. Par exemple, vous pourriez avoir une entrée de produit pour des appels de service, avec un prix fixé à votre taux horaire, et utiliser la quantité de produit pour représenter les heures facturables.

## Visualisation des produits

Vous pouvez visualiser les produits dans le portail d'administration d'Invoice Ninja en allant dans le module Produits dans le menu de navigation de gauche. Vous pouvez également exporter les produits sous forme de fichier CSV à l'aide de l'API ou de la fonction Exporter sous Paramètres, pour les analyser dans une application externe.

### Vue d'ensemble

Le panneau *Vue d'ensemble* présente une mise en page très simple, avec le prix du produit en gros caractères en haut, suivi de la description du produit en dessous.

### Documents

Le volet Documents vous permet de télécharger et de visualiser des documents liés au produit. Ces fichiers ne sont accessibles que via le portail d'administration (ou le portail client si les documents clients sont activés). Cette fonction est utile pour télécharger une signalisation de produit, des descriptions de produit détaillées ou des documents techniques.

Notez que les documents téléchargés sont enregistrés dans le répertoire "public/storage" dans une structure de dossiers utilisant des noms de dossier hachés pour correspondre à l'entrée du produit, donc sauvegardez ce répertoire avec votre base de données pour conserver vos documents joints.

### Fonctions

Il y a quelques fonctions disponibles à partir du mode d'affichage de produit qui permettent de manipuler rapidement le produit que vous consultez.

* **Modifier** - Le bouton *Modifier* situé dans le coin supérieur droit du panneau vous permet de modifier les détails du produit, tels que le nom du produit, la description, le prix et la quantité par défaut.  
* **Nouvelle facture** - Ce bouton en bas du panneau créera une nouvelle facture et vous amènera à une page de *Nouvelle facture*, avec le produit que vous consultez comme article et la quantité par défaut pour cet article déjà saisie.
* **Cloner** - Ce bouton vous amènera à un écran *Nouveau produit*, avec exactement les mêmes détails de produit que le produit que vous consultez, vous permettant de cloner facilement votre produit et d'effectuer les modifications nécessaires avant de l'enregistrer en tant que nouveau produit.

## Modifier un produit

Il n'y a que quelques champs qui s'appliquent à un produit :

* **Produit** - C'est le nom du produit lui-même, qui apparaîtra sur les factures.
* **Description** - La description du produit, qui apparaîtra sur les factures.  **Notez** que la génération PDF des factures et des devis traitera tout formatage HTML que vous utilisez ici. De plus, lorsque l'option *Activer Markdown* est activée dans *Paramètres* > *Gestion de compte*, vous pourrez entrer du texte en Markdown dans les descriptions de produit, et il apparaîtra formaté dans vos factures, devis, etc.
* **Prix** - Le prix standard de votre produit.
* **Quantité par défaut** - La quantité par défaut est utilisée automatiquement lorsque le produit est ajouté à une facture ou à un devis.

## Suivi d'inventaire

Si vous gérez une entreprise qui stocke des produits, le suivi des niveaux d'inventaire est un élément important de la gestion d'entreprise. Dans Invoive Ninja, le suivi des stocks est super simple.

![texte alternatif](/assets/images/products/track_inventory_settings.png "Suivi d'inventaire")

Il suffit d'activer la fonctionnalité Suivi d'inventaire dans le panneau de configuration. Vous pouvez également ajouter des notifications lorsqu'un produit atteint un seuil, vous recevrez un courriel vous informant du niveau de stock actuel. Pour un contrôle plus précis, vous pouvez affecter directement des seuils au produit lui-même.

![texte alternatif](/assets/images/products/inventory_tracking_product.png "Vue d'ensemble du produit")

Pour voir les niveaux de stock actuels, il suffit de consulter le produit.

Vous pouvez également combiner le module de bon de commande pour mettre à jour automatiquement votre niveau d'inventaire, voir <a href="/fr_CA/purchase_order"> Bon de commande</a> pour plus d'informations.

<x-next url=/fr_CA/purchase_orders>Bon de commande</x-next>
