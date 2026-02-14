---
title: "Commandes d'achat"
sidebar_position: 18
---
# Commandes d'achat

Une commande d'achat (CA) est un document juridiquement contraignant qu'un acheteur utilise pour demander des biens ou des services à un fournisseur. Elle sert d'offre officielle pour acheter des articles spécifiques à un prix spécifié et est généralement utilisée par les entreprises dans le processus d'approvisionnement. La CA comprend des détails tels que le type, la quantité et le coût des produits ou services demandés, ainsi que les termes de livraison ou de paiement pertinents.

Une fois qu'un fournisseur accepte la CA, elle devient un contrat liant l'acheteur et le vendeur.

## Création d'une commande d'achat

![alt text](/assets/images/purchase_orders/purchase_order1.png "Création d'une commande d'achat.")

La création d'une commande d'achat a un flux de travail similaire à la création d'une facture. Avant de créer une commande d'achat, un fournisseur doit être présent dans le système. Un fournisseur peut être créé directement à partir de la page de commande d'achat ou via l'onglet Fournisseur.

### Détails

Le panneau *Détails* comprend les informations les plus basiques sur la commande d'achat :

* **Fournisseur** - Vous devez sélectionner un fournisseur dans la liste pour appliquer votre commande d'achat.
* **Date** - Générée automatiquement avec la date du jour, est simplement la date de la commande d'achat.
* **Valide Jusqu'au** - Facultativement, vous pouvez spécifier une date de fin jusqu'à laquelle la commande d'achat est valable, pour limiter la durée pendant laquelle vous l'honorerez.
* **Partiel/Dépôt** - Facultativement, spécifiez un paiement partiel ou un dépôt requis sur la commande d'achat, avec sa propre date d'échéance, séparée de celle de la commande d'achat pour le montant total de la commande d'achat.
* **Remise** - Entrez un montant de remise à appliquer à la commande d'achat, soit en pourcentage, soit en montant forfaitaire.
* **Design** - Choisissez un modèle de conception parmi les modèles préfabriqués ou l'un de vos propres modèles personnalisés. Cette option se trouve sous l'onglet *Paramètres* dans la vue de la commande d'achat sur bureau.

La commande d'achat peut être décorée de termes supplémentaires dans la section Termes.

### Articles

Ici, vous voyez une liste des éléments de ligne inclus dans la commande d'achat. Vous pouvez ajouter des *produits* à la commande d'achat pour facturer votre fournisseur. Chaque élément de la liste aura ces champs disponibles:

* **Produit** - Le nom de l'article appliqué.
* **Description** - Une description de l'élément de ligne. Les descriptions peuvent inclure du code HTML ou une mise en forme de code Markdown (lorsqu'elle est activée sous *Paramètres* > *Gestion du compte*).
* **Coût unitaire** - Le coût d'un seul produit pour l'élément de ligne.
* **Quantité** - Le nombre de produits à multiplier par le coût unitaire de cet élément de ligne.

### Notes

Tout sous un panneau dans la disposition mobile, ces options ont chacune leurs propres onglets en bas de l'écran de commande d'achat en mode bureau :

* **Conditions de la commande d'achat** - Décrivez toutes les conditions pour votre fournisseur, telles qu'elles se rapportent à la commande d'achat.
* **Pied de page de la commande d'achat** - Toutes les notes textuelles à inclure en bas de la commande d'achat. Un bon endroit pour les avertissements moins importants.
* **Notes publiques** - Toutes les notes textuelles pour ajouter des détails ou du contexte à la commande d'achat pour vous et votre fournisseur. Un bon endroit pour les notes de service ou un résumé du travail effectué pour le fournisseur.
* **Notes privées** - Notes textuelles privées, non imprimées sur le PDF de la commande d'achat ou visibles par le fournisseur. Ces notes ne peuvent être vues que par les utilisateurs du portail administrateur.

### Documents

Téléchargez des images ou des documents pour votre commande d'achat, à inclure pour votre fournisseur. Ils peuvent être attachés dans l'e-mail qui est envoyé au fournisseur.


## Cycle de vie d'une commande d'achat

### Brouillon

Le statut de brouillon est le premier statut dans le cycle de vie d'une commande d'achat. À ce stade, des modifications peuvent être apportées à la commande d'achat et la commande d'achat est complètement cachée au fournisseur. Les commandes d'achat en attente sont inactives jusqu'à ce qu'elles soient envoyées par courriel au fournisseur ou marquées comme envoyées.

:::warning
Une fois qu'une commande d'achat en attente a été envoyée/marquée comme envoyée, son statut ne peut pas être changé en brouillon.
:::

### Envoyé

Une commande d'achat est marquée comme envoyée lorsqu'elle a été envoyée par courriel au fournisseur ou marquée comme *envoyée* dans le panneau d'administration.

### Accepté

![alt text](/assets/images/purchase_orders/purchase_order2.png "Création d'une commande d'achat.")

Lorsqu'une commande d'achat est **acceptée** par le fournisseur, son statut passe à accepté. Le fournisseur peut effectuer cette action via le portail du fournisseur. Le fournisseur peut également être invité à accepter des conditions supplémentaires et à déposer une signature pour cette commande d'achat pendant le processus d'acceptation.

### Réception

Lorsque les biens ont été reçus, l'administrateur peut marquer la commande d'achat comme étant acceptée. À ce stade, si la gestion des stocks est activée, les niveaux de stock des produits/SKU sont incrémentés.

### Annulé

Si la commande d'achat est annulée, elle est placée dans un état annulé.

### Supprimé

Une commande d'achat peut être marquée comme supprimée si les conditions suivantes sont remplies :

* La commande d'achat a un statut envoyé/brouillon.

Que se passe-t-il lorsqu'une commande d'achat est supprimée ?

* le statut de la commande d'achat est défini sur supprimé
* Le numéro de la commande d'achat est suffixé par **_deleted** pour permettre la réutilisation des numéros de commande d'achat.

### Archivé

L'archivage d'une commande d'achat supprime simplement la commande d'achat de la vue de liste des commandes d'achat. L'archivage d'une commande d'achat permet de garder vos vues de liste propres et ordonnées.

:::warning
Lorsqu'une commande d'achat est archivée, aucune modification ultérieure ne peut être apportée à la commande d'achat. Pour modifier la commande d'achat, vous devrez d'abord la restaurer.
:::

### Restauré

La restauration d'une commande d'achat à partir de l'état archivé ou supprimé ramènera la commande d'achat à son état précédent avant l'archivage.
