---
extends: _layouts.user_guide 
section: content
---

# Clients

<video width="100%" controls>
  <source src="/assets/videos/clients/create_client.mp4" type="video/mp4">
Votre navigateur ne prend pas en charge la balise vidéo.
</video>

## Créer des Clients

Il y a plusieurs façons pour un client d'être créé, notamment :

* Clients > + Client
* Paramètres > Importer | Exporter > Importation CSV des clients
* Portail client (si l'enregistrement des clients est activé dans Paramètres > Portail client)
* Intégrateur API : Zapier, Integromat, APISync, ou appels API manuels développés en utilisant la [Documentation API](https://api-docs.invoicing.co/).

Un "Client" peut représenter une personne ou une entreprise. Si seulement les informations de contact sont définies, le nom du contact sera utilisé comme nom d'affichage du client. Si le nom du client est défini, alors il sera utilisé à la place.

Il y a trois différents champs d'identifiants client :

* **$client.id** : Généré automatiquement et utilisé par l'API (par exemple, 7WR07SC)
* **$client.number**: Généré automatiquement et peut être configuré dans Paramètres > Numéros générés (par exemple, 0001)
* **$client.id_number**: Champ standard qui peut être utilisé pour stocker le numéro du client issu d'un autre système

## Visualisation des Clients

Pour afficher un client, sélectionnez-en un dans la liste des clients sur le panneau des clients, ou en y accédant à partir d'une facture, d'un projet, d'une tâche ou d'une transaction associée.

### Aperçu

Le panneau de synthèse présente un aperçu rapide du paiement à ce jour, le solde impayé d'un client, des notes publiques et privées sur le client, suivi d'une liste de boutons interactifs pour voir une liste filtrée par client pour n'importe quelle catégorie.

Vous pouvez choisir parmi **Groupes, Factures, Paiements, Factures récurrentes, Devis, Crédits, Projets, Tâches ou Dépenses**. Passez votre souris sur l'une de ces catégories, et l'icône se transformera en un symbole "plus"; il s'agit d'un bouton cliquable pour créer une nouvelle facture, devis, paiement, etc. Sur les appareils mobiles, vous pouvez toucher et maintenir n'importe où sur le bouton pour créer un nouvel élément, au lieu de consulter une liste filtrée par client.

Le lien **Portail client** en bas vous amènera dans un nouvel onglet ou une nouvelle fenêtre de navigateur, pour voir le portail client directement. Le bouton "Paramètres" en bas vous amènera aux **Paramètres du client** où vous pourrez modifier et configurer des règles spécifiques au client, des modèles, des comportements, etc.

Le bouton du menu kebab dans le coin supérieur droit de ce panneau a également plusieurs de ces fonctions et est disponible sur chaque onglet.

### Détails

Ce panneau présente une vue des contacts répertoriés dans une entrée de client, et inclut des liens directs vers la page du portail client en tant que ces contacts.

### Documents

Le panneau *Documents* offre la possibilité de téléverser des documents et de visualiser les documents que vous avez liés au client. Ces fichiers téléversés sont accessibles via le portail administrateur, ou via le portail client pour que vos clients puissent les consulter eux-mêmes. Une façon utile d'utiliser la fonctionnalité de téléversement de documents est de téléverser des documents de conditions d'utilisation, des contrats ou d'autres fichiers que vous aimeriez partager avec le client pour toute autre raison.

**Notez** que les documents téléchargés sont enregistrés dans le répertoire "public\/storage" dans une structure de dossiers utilisant des noms de dossiers hachés pour correspondre à l'entrée du produit, alors sauvegardez ce répertoire avec votre base de données pour préserver vos documents joints.

### Grand livre

Le panneau *Grand livre* offre un aperçu chronologique des activités transactionnelles liées au client, pour suivre les entrées et sorties de trésorerie liées au client. Le *Grand livre* met en évidence les débits et crédits sur le compte du client. Les objets dans le *Grand livre* sont des liens de raccourci, et cliquer dessus vous amènera à l'enregistrement ou à la transaction qu'ils décrivent.

### Activité

Le panneau *Activité* fournit un aperçu chronologique des activités non transactionnelles liées au client. Alors que le panneau *Grand livre* suit les crédits et débits sur le compte du client, le panneau *Activité* suit l'historique des nouveaux enregistrements ou des modifications d'enregistrements sur le dossier du client, ou des factures, devis, etc. qui sont liés au client, et qui sont les utilisateurs du portail d'administration ayant effectué ces actions. Le panneau *Activité* est utile pour la responsabilité au sein de votre entreprise, et pour surveiller qui a fait quoi, et quand.

### Journaux du système
Le panneau *Journaux du système* offre un aperçu chronologique de l'activité du serveur backend liée à votre client, comme par exemple la génération de PDF pour le client, ainsi que les résultats de succès ou d'échec de ces requêtes.

## Modification des Clients

Vous pouvez modifier vos clients en double-cliquant sur un client dans la liste du module *Client*, ou en affichant un client et en utilisant le bouton *Modifier* dans le coin supérieur droit du panneau. Sur mobile, vous verrez une liste d'onglets dans le menu du haut, pour différentes sections permettant de modifier les données du client. Sur un ordinateur de bureau, vous n'aurez peut-être pas besoin de naviguer entre les onglets, car la vue par défaut permet de voir tous les champs sur un seul panneau.

La plupart des informations dans un formulaire d'ajout ou de modification de client sont entièrement facultatives, et certaines sont générées automatiquement. Vos propres pratiques commerciales devraient dicter le type de données que vous collectez auprès de vos clients.

### Détails

* **Nom** - Nom du client, peut être le nom d'un individu, d'un groupe, d'une organisation ou d'une entreprise. Si un nom n'est pas choisi, mais qu'une entrée de contact avec un prénom/nom est fournie, le nom du premier contact sera utilisé comme nom du client.
* **Numéro** - Ce numéro est généré automatiquement par Invoice Ninja, à des fins de suivi. Au lieu de modifier les numéros manuellement, nous vous suggérons de modifier le comportement des numéros générés dans *Paramètres* > *Numéros générés* > *Clients*.
* **Numéro d'identification** - Le champ du numéro d'identification est facultatif. Vous pouvez l'utiliser pour référencer le numéro d'identification d'un client tel qu'il se rapporte à votre entreprise, comme un numéro d'identification de membre.
* **Numéro de TVA** - Le champ du numéro de TVA est un numéro d'identification de taxe sur la valeur ajoutée qui s'applique principalement aux pays de l'Union européenne qui doivent parfois suivre cela à des fins fiscales.
* **Site Web** - Le site Web de votre client, facultatif et pour référence.
* **Téléphone** - Numéro de téléphone de contact principal pour le client, l'organisation ou l'entreprise, distinct de tout numéro de téléphone de contact individuel au sein de l'entrée du client.

### Contacts

Chaque *client* a une liste de *contacts*, ce qui vous permet d'ajouter autant de *contacts* que vous le souhaitez pour représenter un *client* donné. Lorsque vous consultez un client, vous pouvez voir les contacts existants dans le panneau "Détails". Lorsque vous modifiez un contact, ils seront répertoriés dans le panneau *Contacts*.","35":"Depuis le portail administrateur, vous verrez le bouton *Ajouter un second contact* pour ajouter une nouvelle entrée de contact à la liste. Vous ne pouvez ajouter de nouveaux *contacts* à un *client* que depuis le portail administrateur. Les clients ne peuvent pas ajouter plus de *contacts* à leur entrée *client* depuis le portail client eux-mêmes.

* **Prénom et Nom** - Détails du nom pour le contact individuel. Invoice Ninja utilise automatiquement les informations sur le nom du premier contact pour renseigner le nom du client s'il n'est pas fourni.
* **Courriel** - Adresse courriel associée au client, et utilisée comme identifiant de connexion pour le portail client.
* **Téléphone** - Pour référence, informations sur le numéro de téléphone du contact individuel.

### Notes

* **Notes publiques** - Toutes les notes publiques concernant le client, les notes publiques sont généralement incluses sur toutes les factures, devis ou autres documents futurs générés pour le client.
* **Notes privées** - Les notes privées sont tous les commentaires sur le client qui ne seront jamais visibles que par les utilisateurs sur le portail d'administration.
* **Taille** - Utilisé pour décrire la taille d'un client qui représente une organisation, une école ou une entreprise.
* **Industrie** - Ajoutez une description supplémentaire à vos clients pour décrire le type d'industrie dans laquelle ils sont impliqués.

### Paramètres

* **Devise** - Devise par défaut à appliquer aux factures et paiements pour ce client.
* **Langue** - La langue préférée de votre client. Les factures et autres documents seront générés dans la langue préférée du client.
* **Conditions de paiement des factures** - Définissez une durée par défaut pour les conditions de paiement des factures, si vous avez convenu d'arrangements de paiement avec votre client de manière régulière.
* **Devis valable jusqu'au** - Définissez une durée par défaut pour les devis donnés à votre client pour lesquels vous honorerez le prix indiqué dans vos devis.
* **Taux horaire des tâches** - Définissez un taux horaire par défaut pour les *Tâches* effectuées pour le client.
* **Envoyer des rappels** - Activez ou désactivez les rappels par courriel au client pour des choses telles que les factures impayées. Réglez des règles précises pour le comportement des rappels par courriel sous *Paramètres* > *Modèles & Rappels*.

### Adresse de facturation

Les champs d'information d'adresse standard sont disponibles ici pour saisir une adresse de facturation pour vos clients. Cette information est généralement également incluse sur toutes les factures et autres documents pour le client.

### Adresse de livraison", "44": "Tout comme l'adresse de facturation, des champs d'information d'adresse standard sont disponibles ici pour saisir une adresse de livraison pour vos clients. De plus, vous pouvez utiliser le bouton *Copier facturation* ci-dessous ces champs, pour simplement copier les informations d'adresse de facturation dans les champs d'adresse de livraison également.

## Contacts et le portail client

*Contacts* ont chacun leur propre profil dans le portail client, se connectant avec les courriels que vous leur attribuez, permettant à chaque contact de définir son propre mot de passe et ses paramètres ou détails personnels sur le portail client, indépendamment du *client* qu'ils représentent.

Lorsqu'un individu s'inscrit lui-même sur le portail client, son nom et son courriel seront ajoutés en tant que données de *contact* sous un nouveau *client*. Après s'être connecté, ils auront la possibilité de modifier les détails de leur *client* dans le menu "Profil", tels que le nom de l'entreprise et les informations de contact.

Les adresses e-mail pour les *contacts* sont considérées comme authentiques. Par exemple, si une personne tente de s'inscrire elle-même alors qu'elle est déjà incluse en tant que *contact* pour une autre entrée *client*, le portail d'inscription forcera cette personne à soumettre de nouveau ses informations personnelles en utilisant une nouvelle adresse e-mail, ou à faire retirer son adresse e-mail de l'autre liste *client*.

## Paramètres de groupe pour la gestion des clients

Si plusieurs clients partagent les mêmes paramètres, par exemple, la même devise ou les paramètres de rappel par courriel, vous pouvez créer un groupe dans *Paramètres* > *Groupes* pour appliquer un ensemble standard de paramètres à un grand groupe de clients.

Pour la plupart des paramètres, l'application vérifiera d'abord si le client a une valeur en place, sinon elle vérifiera si le client appartient à un groupe et si ce groupe définit une valeur. Enfin, elle utilisera la valeur par défaut définie au niveau de l'entreprise.

L'avantage d'utiliser des groupes est que si, à l'avenir, vous devez modifier les paramètres, vous pouvez les modifier en un seul endroit plutôt que de devoir mettre à jour plusieurs clients individuellement. Sans groupes, la mise à jour en bloc des paramètres des clients nécessiterait d'utiliser l'API ou un intégrateur.

## Champs personnalisés

Parfois, vous avez besoin de champs supplémentaires pour fournir des informations supplémentaires à vos clients. Avec Invoice Ninja, vous pouvez ajouter jusqu'à 4 champs personnalisés pour le client et également pour chaque contact du client.

Pour créer un champ personnalisé, accédez à Paramètres > Champs personnalisés. Des fonctionnalités avancées, notamment la possibilité d'inclure ces champs personnalisés dans le PDF de la facture en utilisant les espaces réservés :

### Espaces réservés pour le client

```
$client.personnalisé1
$client.personnalisé2
$client.personnalisé3
$client.personnalisé4
```

### Marqueurs de contact

\```
$contact.personnalisé1
$contact.personnalisé2
$contact.personnalisé3
$contact.personnalisé4
\```

<x-next url=/docs/credits>Crédits<\/x-next>

