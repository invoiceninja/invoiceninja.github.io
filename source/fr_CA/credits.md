---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

# Avoirs

Un avoir est un document envoyé au client, l'informant qu'un crédit a été accordé à son compte.
Les avoirs sont utilisés pour émettre des crédits échangeables pour un *Produit* spécifique ou pour un montant forfaitaire.
Les crédits peuvent être appliqués aux factures en tant que paiement.

Notez que choisir les bons paramètres de paiement est essentiel pour rendre les crédits intuitifs et utiles à vos clients, voir https://invoiceninja.github.io/fr_CA/basic-settings/#payment_settings.

## Affichage d'un avoir

Il suffit de sélectionner un avoir dans la liste pour voir ses détails.
Dans la disposition mobile, vous serez directement dirigé vers la vue de l'avoir.
Lorsque vous sélectionnez un avoir dans la liste avec une disposition de bureau, l'aperçu de l'avoir apparaîtra sur le côté gauche.

Vous pouvez *Modifier* l'avoir depuis n'importe où dans la vue de l'avoir via un bouton en haut à droite du panneau de visualisation.
Il y a deux boutons en bas du panneau de visualisation : *Voir le PDF* pour charger un PDF de l'avoir directement depuis le portail d'administration, ou *Envoyer l'avoir par e-mail* pour envoyer aux contacts du client un lien pour consulter le PDF de leur avoir disponible depuis le portail client.

Le menu Kebab dans le coin supérieur droit de la vue de l'avoir présente de nombreuses fonctions pour travailler avec ou manipuler l'avoir, qui peuvent varier en fonction de l'état de l'avoir. Vous pouvez changer manuellement le statut du cycle de vie de l'avoir, cloner l'avoir, *Saisir un paiement* contre une facture avec l'avoir sélectionné, et plus encore.

### Aperçu

Des informations générales sur l'avoir peuvent être trouvées dans le panneau d'aperçu.
Le montant total de l'avoir, le crédit restant, à quel client il est attribué, la date de l'avoir et les articles décrivant ce pour quoi l'avoir est destiné.

### Contacts

Ici, vous voyez les contacts de votre client qui sont marqués comme inclus dans l'avoir.
Les contacts inclus recevront une copie des e-mails envoyés et pourront consulter l'avoir depuis le portail client lorsqu'ils se connecteront.

Des liens vers le portail client pour chaque contact respectif inclus sont également disponibles.

### Documents

Téléchargez des images ou des documents pour votre avoir, à inclure pour votre client. Les fichiers téléchargés peuvent être consultés et accessibles par le client via le portail client.

### Historique

Le panneau *Historique* présente un aperçu chronologique des transactions liées à l'avoir et vous montre les modifications apportées au montant total de l'avoir et par quels utilisateurs.

### Activité

Le panneau *Activité* présente un aperçu chronologique de toutes les actions effectuées sur l'avoir, y compris sa création, sa modification, sa suppression, etc., et l'utilisateur qui a effectué l'action.

## Créer ou modifier un avoir

Plusieurs champs sont disponibles lors de la création d'un avoir, et la vue lors de la création ou de

## Création ou modification d'un crédit

Il y a plusieurs champs disponibles lors du remplissage d'un crédit, et la vue lors de la création ou de la modification d'un crédit est présentée différemment selon que vous utilisez la mise en page mobile ou de bureau. Dans la mise en page de bureau, tous les panneaux décrits ci-dessous sont présentés en même temps sur un grand écran et disposés un peu différemment.

<video width="100%" controls>
  <source src="/assets/videos/credits/create_credit.mp4" type="video/mp4">
Votre navigateur ne prend pas en charge la balise vidéo.
</video>

Vous pouvez également créer un crédit directement à partir d'une facture. Par exemple, si vous devez créer un crédit pour une facture entière, au lieu de retaper tout le document, vous pouvez cloner la facture en crédit comme dans l'exemple inclus dans la vidéo ci-dessous :

<video width="100%" controls>
  <source src="/assets/videos/credits/create_credit_from_invoice.mp4" type="video/mp4">
Votre navigateur ne prend pas en charge la balise vidéo.
</video>

### Détails

Le panneau *Détails* comprend les informations les plus basiques sur le crédit :

* **Client** - Vous devez sélectionner un client dans la liste pour attribuer le crédit.
* **Date du crédit** - Générée automatiquement avec la date d'aujourd'hui, c'est simplement la date du crédit.
* **Valide jusqu'à** - Facultativement, vous pouvez spécifier une date de fin de validité du crédit, pour limiter la durée pendant laquelle vous l'honorerez.
* **Numéro de commande** - Facultatif, généralement pour lorsque votre client a un numéro de commande à vous fournir pour ses propres fins de tenue de dossiers.
* **Design** - Choisissez un design de modèle parmi les modèles préfabriqués, ou l'un de vos propres designs personnalisés. Cette option se trouve sous l'onglet *Paramètres* dans la vue de crédit de bureau.
* **Taxe** - Les champs et options de taux de taxe disponibles sont configurés sous *Paramètres* > *Paramètres de taxe*. Ici, vous pouvez spécifier manuellement le(s) taux de taxe appliqué(s) à votre crédit, ou le supprimer complètement. Si vous créez manuellement un crédit à taux fixe pour quelqu'un, vous voudrez peut-être changer le taux de taxe pour rien, une sélection vide.
* **Taux de change** - Facultativement, pour lorsque l'enregistrement de votre client a une autre devise que la vôtre par défaut, vous pourrez spécifier manuellement le taux de change pour calculer automatiquement ce qu'ils devront dans leur propre devise par défaut. Cette option se trouve sous l'onglet *Paramètres* dans la vue de crédit de bureau.

### Contacts

*Contacts* a son propre panneau dans la vue mobile, tandis que dans la vue de bureau, il est affiché directement sous le champ *Client* après avoir sélectionné un client.

Cette section présente simplement une liste de contacts disponibles dans un dossier client et vous permet de cocher ou décocher des contacts pour les inclure ou les exclure du crédit. Les contacts inclus pourront accéder au crédit depuis le portail client et recevront des courriels à propos du crédit lorsqu'ils seront envoyés.

### Articles

Ici, vous voyez une liste des articles inclus dans le crédit. Vous pouvez ajouter un *Produit* au crédit pour votre client ou un simple article pour un crédit à taux fixe. Lorsque vous souhaitez simplement accorder un crédit à taux fixe pour une raison quelconque, laissez le champ *Produit* vide et ajoutez uniquement une *Description* et un *Coût unitaire* de l'article. Chaque article de la liste aura ces champs disponibles :

* **Produit** - Le nom du produit / article en cours d'application. Lorsque vous souhaitez appliquer un taux fixe à un crédit, sans créer un nouveau produit, laissez simplement le champ produit vide.
* **Description** - Une description de l'article. Les descriptions peuvent inclure du code HTML ou du formatage de code Markdown (lorsqu'il est activé dans *Paramètres* > *Gestion des comptes*).
* **Coût unitaire** - Le coût d'un seul produit pour l'article.
* **Quantité** - Le nombre de produits, de dépenses ou d'heures facturables pour une tâche, à multiplier par le coût unitaire de cet article.

### Notes

Tous dans un seul panneau dans la mise en page mobile, ces options ont chacune leur propre onglet en bas de l'écran de crédit lorsqu'elles sont en mise en page de bureau :

* **Conditions de crédit** - Décrivez les termes et conditions pour votre client, en relation avec le crédit.
* **Pied de page du crédit** - Toutes les notes de texte à inclure en bas du crédit. Un bon endroit pour les avertissements.
* **Notes publiques** - Toutes les notes de texte pour ajouter des détails ou du contexte au crédit pour vous et votre client. Un bon endroit pour décrire le service applicable auquel leur crédit est destiné à être appliqué, par exemple.
* **Notes privées** - Notes de texte privées, non imprimées sur le PDF de crédit ou visibles par le client. Ces notes ne peuvent être vues que par les utilisateurs du portail administrateur.

## Cycle de vie d'un crédit

### Brouillon

Le statut Brouillon est le premier statut dans le cycle de vie d'un crédit. Dans ce statut, des modifications peuvent être apportées au crédit et le crédit est complètement caché du client. Les crédits au stade de brouillon sont inactifs jusqu'à ce qu'ils soient envoyés par courriel au client ou marqués comme envoyés.

<x-warning>
Une fois qu'un crédit à l'état de brouillon a été envoyé par courriel/marqué comme envoyé, son statut ne peut plus être modifié en brouillon.
</x-warning>

### Envoyé

Un crédit est marqué comme envoyé lorsqu'il a été envoyé par courriel au client ou marqué comme *Envoyé* dans le panneau d'administration.

**Note** - Un crédit ne peut pas être appliqué à une facture et n'est pas réellement lié au client tant qu'il n'est pas marqué comme *Envoyé*.

### Partiel

Un crédit est marqué comme *Partiel* lorsque une partie du crédit a été appliquée à une facture, mais qu'il en reste encore. Un crédit marqué *Partiel* montrera le solde de crédit restant disponible dans le panneau de vue d'ensemble.

**Note** - Il n'y a pas de moyen de rembourser un paiement de crédit qui a été appliqué à une facture. La seule façon de "retourner" un crédit qui a été appliqué est d'*Inverser* une facture. Si un paiement et un crédit sont appliqués à une facture et que vous voulez rembourser le montant payé, vous devriez rembourser le paiement en premier, puis inverser la facture par la suite. Lorsque vous inversez une facture, le solde restant payé, que ce soit par un crédit ou un paiement, est converti en un *nouveau* crédit.

### Appliqué

Lorsqu'un crédit est marqué comme *Appliqué*, la totalité du solde du crédit a été consommée et appliquée à une ou plusieurs factures sur le compte du client.

### Supprimé

Que se passe-t-il lorsqu'un crédit est supprimé ?

* Statut de crédit défini comme supprimé
* Le numéro de crédit est complété par <b>_deleted</b> afin de permettre la réutilisation des numéros de crédit.
* Si le crédit était précédemment marqué *Partiel*, le solde de crédit restant ne sera plus disponible pour le client, mais cela n'affectera pas les paiements existants qui ont déjà été appliqués aux factures du client.

### Archivé

Archiver un crédit supprime simplement le crédit de la liste des crédits. Archiver un crédit permet de garder vos listes de vues propres et ordonnées.

<x-warning>
Lorsqu'un crédit est archivé, aucune modification ultérieure ne peut être apportée au crédit. Pour modifier le crédit, vous devrez d'abord restaurer le crédit.
</x-warning>

### Restauré

Restaurer un crédit de l'état archivé ou supprimé ramènera le crédit à son état précédent avant l'archivage.

<x-next url=/fr_CA/expenses>Dépenses</x-next>
