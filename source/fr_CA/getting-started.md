---
extends: _layouts.self_host
section: content
locale: fr_CA
---

# Pour commencer

## Aperçu

Invoice Ninja est une application de facturation qui rend l'envoi de factures et la réception des paiements simples et faciles. Notre dernière version est une réécriture à partir de zéro de notre populaire application de facturation qui s'appuie sur l'ensemble des fonctionnalités existantes et ajoute une large gamme de fonctionnalités et d'améliorations demandées par la communauté.

## Architecture

L'application est divisée en trois parties principales : le backend/API et les deux portails d'administration.

### Backend - API

#### Développeur principal : [David Bomba](https://twitter.com/deadbeefx0)

- Framework : [Laravel](https://laravel.com)
- Code : [GitHub](https://github.com/invoiceninja/invoiceninja/tree/v5-stable)
- API : [Docs](https://api-docs.invoicing.co/)

### Portail administratif - Bureau & Mobile

#### Développeur principal : [Hillel Coren](https://twitter.com/hillelcoren)

- Cadre de travail : [Flutter](https://flutter.dev)
- Code : [GitHub](https://github.com/invoiceninja/admin-portal)
- Démo : [demo.invoiceninja.com](https://demo.invoiceninja.com)

### Portail administrateur - Web

#### Développeur principal : [Benjamin Beganović](https://twitter.com/beganovichhh)

- Cadre de travail : [React](https://reactjs.org)
- Code : [GitHub](https://github.com/invoiceninja/ui)

## Performance

Pour les gros comptes ou les comptes avec de nombreux utilisateurs, nous recommandons d'utiliser l'application web. Les applications pour bureau/téléphone mobile chargent toutes les données de l'entreprise lors de la première connexion, ce qui les rend très rapides à naviguer, mais peut causer des problèmes avec les gros comptes. L'application web charge les données à la demande, ce qui permet de mieux gérer les gros comptes.

## Notions de base de l'application

L'interface principale est divisée en trois parties : le menu de navigation latéral, la liste (ou tableau) et l'aperçu. La\n disposition peut être personnalisée selon vos besoins en utilisant une combinaison des icônes situées en bas de l'écran et des options dans Paramètres > Paramètres de l'appareil.","19":"Dans de nombreux cas dans l'application, un simple tapotement effectuera une action, tandis qu'un tapotement prolongé offrira un raccourci vers une action secondaire courante.\nPar exemple, taper sur l'option 'Clients' dans la barre latérale chargera la vue des clients, tandis que la maintenir enfoncée en créera un nouveau client.\nCe modèle est utilisé dans toute l'application.

Deux autres exemples sont que vous pouvez appuyer longuement sur une facture dans le tableau de bord pour accéder directement à l'écran de modification, et appuyer longuement sur le bouton de modification dans les tables démarre la sélection multiple et sélectionne l'enregistrement.

Certains champs (tels que la date et l'heure) prennent en charge la saisie abrégée et fournissent un aperçu de la valeur sélectionnée. Par exemple, vous pouvez entrer le 4 avril dans le champ de date en tapant `404` et `1.5` dans un champ d'heure sera converti en une heure et demie.

La version de l'application (c'est-à-dire `v5.1.56-A47`) est composée de deux parties : la version de l'API et la version du Portail Administrateur. Dans ce cas, la version de l'API est `5.1.56` et la version du PA est `47`. Le `A` dénote la plateforme, dans ce cas Android.

<x-info>
Astuce : Vous pouvez accéder directement à la section pertinente de la documentation en utilisant l'icône du point d'interrogation dans le coin inférieur gauche de l'application.
</x-info>

## Débogage des problèmes

Si vous rencontrez des problèmes, vous pouvez nous contacter directement dans l'application en utilisant l'icône de support dans le coin inférieur gauche de l'écran. Si vous utilisez l'application Web, vous pouvez appuyer sur /update?secret=`YOUR-SECRET-HERE` pour effectuer différentes optimisations back-end. Si vous utilisez l'application mobile, il peut être utile de désinstaller l'application puis de la réinstaller.

Votre `secret` fait partie du fichier .env.
