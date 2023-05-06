---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

# Factures

Les dossiers de factures comportent de nombreux détails et vous permettent de facturer vos clients pour des *Produits*, des *Tâches* ou des *Dépenses*. Vous pouvez joindre des documents ou des images aux factures, que le client peut consulter depuis le portail client. Les dossiers de factures conservent un historique des modifications apportées et des utilisateurs qui les ont effectuées, afin d'augmenter la responsabilisation au sein de votre entreprise.

<video width="100%" controls>
  <source src="/assets/videos/invoices/create_invoice.mp4" type="video/mp4">
Votre navigateur ne prend pas en charge la balise vidéo.
</video>

## Consulter une facture

Pour consulter une facture, sélectionnez-la dans la liste. Les détails de la facture apparaîtront dans la mise en page mobile ou sur le côté droit dans la mise en page de bureau. À partir de là, vous pouvez modifier la facture en cliquant sur le bouton "Modifier" dans le coin supérieur droit.

Au bas du panneau, vous pouvez également afficher la facture en PDF ou l'envoyer par courriel au client.

De plus, le menu Kebab dans le coin supérieur droit offre diverses options pour gérer la facture, telles que modifier son statut, la dupliquer ou la consulter depuis le portail client.

### Aperçu

Dans le panneau d'aperçu, vous verrez des informations générales sur la facture. Le montant de la facture, le solde dû, tout montant payé, le client auquel elle est attribuée, la date de la facture et tout produit ou tâche inclus dans la facture.

### Contacts

Ici, vous voyez les contacts de votre client qui sont inclus dans la facture. Les contacts inclus recevront une copie des courriels envoyés et pourront consulter la facture depuis le portail client lorsqu'ils se connectent.

Des liens vers le portail client pour chaque contact respectif inclus sont également disponibles.

### Documents

Téléchargez des images ou des documents sur votre facture, à inclure pour votre client. Les fichiers téléchargés peuvent être consultés et accessibles par le client via le portail client.

### Historique

Le panneau *Historique* présente un aperçu chronologique des transactions liées à la facture et vous montre les modifications apportées au montant total de la facture et par quels utilisateurs.

### Activité

Le panneau *Activité* présente une vue chronologique de toutes les actions effectuées sur la facture, y compris quand elle a été créée, modifiée, payée, remboursée, annulée, etc., ainsi que l'utilisateur qui a effectué l'action.

## Création ou modification d'une facture

Plusieurs champs sont disponibles lors du remplissage d'une facture, et la vue lors de la création ou de la modification d'une facture est légèrement différente en fonction de la disposition mobile ou de la disposition de bureau. Dans la disposition de bureau, tous les panneaux décrits ci-dessous sont présentés en même temps sur un grand écran et disposés différemment.

### Détails

Le panneau *Détails* inclut les informations les plus élémentaires sur la facture :

* **Client** - Vous devez sélectionner un client dans la liste pour appliquer votre facture.
* **Date de la facture** - Générée automatiquement avec la date d'aujourd'hui, est simplement la date de la facture.
* **Date d'échéance** - Éventuellement, vous pouvez inclure une date d'échéance ultérieure pour le paiement de la facture. Si aucune date d'échéance n'est spécifiée, le montant total est dû immédiatement.
* **Partiel/Dépôt** - Éventuellement, spécifiez un paiement partiel ou un dépôt requis sur la facture, avec sa propre date d'échéance, distincte et due avant la date d'échéance de la facture pour le montant total de la facture.
* **Numéro de PO** - Éventuellement, généralement pour quand votre client a un numéro de commande de produit à fournir pour ses propres fins de tenue de dossiers.
* **Remise** - Entrez un montant de remise à appliquer à la facture, soit en pourcentage, soit en montant fixe.
* **Design** - Choisissez un modèle de conception parmi les modèles prédéfinis ou l'un de vos propres conceptions personnalisées. Cette option se trouve sous l'onglet *Paramètres* dans la vue de facture de bureau.
* **Taux de change** - Éventuellement, pour quand le dossier de votre client a une autre devise que la vôtre par défaut, vous pourrez spécifier manuellement le taux de change pour calculer automatiquement ce qu'ils devront dans leur propre devise par défaut. Cette option se trouve sous l'onglet *Paramètres* dans la vue de facture de bureau.
* **Facturation automatique activée** - Lorsqu'elle est activée, le(s) contact(s) du client recevront automatiquement un e-mail pour le paiement de leur facture. Par défaut, les actions de facturation automatique seront effectuées à la date d'échéance de la facture, comme spécifié sous *Paramètres* > *Paramètres de paiement*. Cette option se trouve sous l'onglet *Paramètres* dans la vue de facture de bureau.

<x-info>
Les champs de date supportent l'ajout et la soustraction de jours. Par exemple, si vous entrez `+10`, la date sera définie à dix jours dans le futur et si vous entrez `-10`, la date sera définie à dix jours dans le passé.
</x-info>

### Contacts

*Contacts* a son propre panneau dans la vue mobile, tandis que dans la vue de bureau, il est affiché directement sous le champ *Client* après avoir sélectionné un client.

Cette section présente simplement une liste des contacts disponibles dans un dossier de client et vous permet de cocher ou de décocher des contacts pour les inclure ou les exclure de la facture. Les contacts inclus pourront accéder à la facture depuis le portail client et recevront des e-mails concernant la facture lorsqu'ils seront envoyés.

### Éléments

Ici, vous voyez une liste des articles de ligne inclus dans la facture. Vous pouvez ajouter des *Produits*, des *Tâches* ou des *Dépenses* à la facture pour facturer votre client. Chaque article de la liste aura ces champs disponibles :

* **Produit** - Le nom du produit, de la tâche ou de l'article de dépense appliqué.
* **Description** - Une description de l'article de ligne. Les descriptions peuvent inclure du code HTML ou du formatage de code Markdown (lorsque activé sous *Paramètres* > *Gestion de compte*).
* **Coût unitaire** - Le coût d'un seul produit ou dépense, ou le taux horaire d'une tâche pour l'article de ligne.
* **Quantité** - Le nombre de produits, de dépenses ou d'heures facturables pour une tâche, à multiplier par le coût unitaire de cet article de ligne.

### Notes

Tous sous un panneau dans la disposition mobile, ces options ont chacune leurs propres onglets en bas de l'écran de facture lors de la disposition de bureau :

* **Termes de la facture** - Décrivez les conditions pour votre client, telles qu'elles se rapportent à la facture.
* **Pied de page de la facture** - Toutes les notes textuelles à inclure en bas de la facture. Un bon endroit pour les avertissements moins importants.
* **Notes publiques** - Toutes les notes textuelles pour ajouter des détails ou un contexte à la facture pour vous et votre client. Un bon endroit pour les notes de service ou un résumé des travaux effectués pour le client.
* **Notes privées** - Notes textuelles privées, non imprimées sur le PDF de la facture ou visibles par le client. Ces notes ne peuvent être vues que par les utilisateurs du portail d'administration.

## Cycle de vie d'une facture

### Brouillon

Le statut de Brouillon est le premier statut dans le cycle de vie d'une facture. Dans ce statut, des modifications peuvent être apportées à la facture et la facture est complètement cachée au client. Une facture brouillon n'affecte pas le grand livre et ne modifie pas le solde du client. Les factures en brouillon sont inactives jusqu'à ce qu'elles soient envoyées par courriel au client ou marquées comme envoyées.

<x-warning>
Une fois qu'une facture brouillon a été envoyée/marquée comme envoyée, son statut ne peut pas être changé en brouillon.
</x-warning>

### Envoyée

Une facture est marquée comme envoyée lorsqu'elle a été envoyée par courriel au client ou marquée comme *envoyée* dans le panneau d'administration.

Lorsque le statut de la facture est modifié en Envoyée, le solde du client augmente du montant du *solde de la facture*.

### Partielle

Un statut de facture partielle signifie qu'un paiement a été appliqué à la facture, mais qu'il reste un solde impayé sur la facture.

### Payée

Un statut de facture payée signifie qu'un paiement complet a été appliqué à la facture. Le *solde de la facture* sera de 0.

### Annulée

Une facture peut être annulée dans les conditions suivantes :

* La facture est marquée comme Envoyée, Partielle ou Payée (c.-à-d. qu'un montant de paiement a été appliqué ou que la facture est active)

Lorsqu'une facture est annulée, le *solde de la facture* est mis à zéro et le statut mis à jour à **Annulée**, le *solde du client* est également ajusté à la baisse. Si des paiements ont été appliqués à la facture, ceux-ci resteront liés à la facture.

### Supprimée

Une facture peut être marquée comme supprimée si les conditions suivantes sont remplies :

* La facture a un statut d'Envoyée / Brouillon / Payée / Partielle.

Que se passe-t-il lorsque l'on supprime une facture ?

Si la facture a un solde impayé, afin d'équilibrer le grand livre, nous effectuons d'abord une **Annulation** de la facture avant de procéder à la suppression.

* Statut de la facture défini sur supprimé
* Le numéro de facture est complété par **_supprimée** afin de permettre la réutilisation des numéros de facture.

<x-warning>
Important ! Si une facture a un solde impayé ou si des paiements ont été appliqués à celle-ci, la facture est annulée, puis supprimée.
</x-warning>

### Annulée

Une facture peut être annulée dans les conditions suivantes :

* La facture est marquée comme Envoyée, Partielle ou Payée (c.-à-d. qu'un montant de paiement a été appliqué à la facture)

Lorsqu'une facture est annulée, le paiement/les paiements qui ont été appliqués à la facture ont un crédit généré en leur faveur. Le grand livre est également ajusté comme suit :

* Le montant payé par le client à ce jour est réduit de la somme calculée de (solde de la facture - montant de la facture).
* Un crédit est généré pour les paiements appliqués à la facture (solde de la facture - montant de la facture). L'enregistrement de paiement d'origine qui était lié à la facture sera désormais lié à un nouvel enregistrement de crédit.
* Toute valeur de crédit qui a été appliquée comme paiement à la facture est alors convertie en un nouvel enregistrement de crédit.
* Le solde du client est réduit du solde de la facture.
* Le solde de la facture est enfin mis à zéro.
* Le statut de la facture est défini sur Annulée.

Lorsqu'une facture a été annulée, les relations de paiement précédentes sont déliées et ne peuvent pas être restaurées.

### Archivée

Archiver une facture consiste simplement à la supprimer de la vue de la liste des factures. Archiver une facture permet de garder vos vues de liste propres et bien rangées et n'affecte pas le grand livre / le solde du client.

<x-warning>
Lorsqu'une facture est archivée, aucune modification ultérieure ne peut être apportée à la facture. Pour modifier la facture, vous devrez d'abord la restaurer.
</x-warning>

### Restaurée

Restaurer une facture depuis l'état archivé ou supprimé ramènera la facture à son état précédent avant l'archivage.

<x-next url=/fr_CA/payments>Paiements</x-next>
