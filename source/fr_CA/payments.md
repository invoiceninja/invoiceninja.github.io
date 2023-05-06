---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

# Paiements

Les enregistrements de paiement sont automatiquement générés lorsque les paiements sont traités à partir du portail client ou lorsque qu'une facture est marquée comme payée. Lorsqu'une facture est marquée comme payée, un enregistrement de paiement pour le montant total est créé et étiqueté comme "Entrée manuelle".

Il y a quatre états possibles pour un enregistrement de paiement : "Non appliqué" pour les paiements qui n'ont pas été affectés à une facture, "Partiellement non appliqué" pour les paiements avec un crédit restant, "Payé" pour les paiements qui ont été entièrement appliqués à une facture et "Remboursé" pour les paiements qui ont été retournés au client. Notez que tout montant remboursé doit avoir été appliqué à une facture en premier lieu.

Il est important de noter que les enregistrements de paiement ne sont pas imprimés ou émis au client, mais plutôt une facture est marquée comme "Payée" lorsqu'il y a un enregistrement de paiement associé.

## Afficher un paiement

Le panneau de visualisation de paiement affiche un aperçu de l'état de paiement, de la facture à laquelle il a été appliqué, du montant appliqué, de la date de paiement, de la référence de transaction et de toutes les notes privées. Vous pouvez modifier l'enregistrement de paiement en utilisant le bouton "Modifier" dans le coin supérieur droit et utiliser le menu Kebab pour l'archiver ou le supprimer.

En bas du panneau, vous pouvez appliquer ou rembourser un paiement. Gardez à l'esprit qu'un paiement peut être appliqué à plusieurs factures lorsqu'il est entré manuellement dans le portail d'administration. De plus, des remboursements partiels sont autorisés, mais seuls les montants de paiement "Appliqués" peuvent être remboursés.

## Modifier un paiement

Voici les champs disponibles lors de la modification d'un paiement pour ajouter des détails à vos enregistrements :

* **Numéro de paiement** - Les numéros de paiement sont générés automatiquement pour trier vos enregistrements. Les règles de génération de numéros peuvent être consultées ou modifiées sous *Paramètres* > *Numéros générés*.
* **Date de paiement** - La date du paiement, qui est généralement automatiquement remplie avec la date actuelle.
* **Type de paiement** - Une liste déroulante permettant de sélectionner un type de paiement, tel que l'argent comptant, le chèque, la carte de crédit, etc.
* **Référence de transaction** - Un numéro de référence de transaction pour un paiement par débit/crédit peut être saisi ici, ou une explication simple sur la transaction pour donner des détails sur la façon dont elle a été enregistrée.
* **Notes privées** - Des notes privées visibles uniquement depuis le portail d'administration, pour toute raison pour laquelle vous pourriez avoir besoin d'ajouter des détails supplémentaires à l'enregistrement de paiement à des fins de comptabilité ou d'audit.
* **Convertir la devise** - Lorsqu'elle est activée, cette section vous permet de sélectionner une devise fournie par le client lorsqu'elle ne correspond pas à votre propre devise. Le taux de change doit être spécifié manuellement par vous, et il sera utilisé pour calculer automatiquement le montant converti pour vous.

## Saisir un paiement

Lors de la saisie manuelle d'un paiement, tous les champs ci-dessus s'appliquent, en plus de ceux ci-dessous.

* **Client** - Vous devez d'abord spécifier le client à partir duquel le paiement est effectué.
* **Montant** - Vous devez spécifier le montant du paiement.
* **Facture** - Sélectionnez une facture dans une liste recherchable des factures disponibles pour le client qui ont un solde dû.
* **Appliqué** - Apparaissant après la sélection d'une facture, le montant appliqué à la facture, généré automatiquement. Tout paiement en trop par le client est appliqué à son dossier de client pour les factures futures.
* **Envoyer un e-mail** - Activé par défaut, désactivez-le pour sauter l'envoi d'un e-mail au client pour le notifier de son paiement.

## Cycle de vie d'un paiement

### Non appliqué

Si un paiement est créé, attribué à un client et doté d'une valeur supérieure à 0 (zéro), mais non attribué ou lié à une facture, le paiement est marqué comme *Non appliqué*.

### Partiel

Vous pouvez appliquer un paiement à plusieurs factures. Si le montant du paiement est supérieur au solde de la facture, le paiement sera marqué comme "Partiellement appliqué" et le solde restant peut être appliqué à une autre facture. Vous pouvez voir le solde restant d'un paiement partiel en affichant les détails du paiement.

### Terminé

Les paiements *Terminés* sont entièrement appliqués à une ou plusieurs factures et n'ont aucune valeur restante.

### Remboursé

Lorsque vous visualisez un paiement, vous pouvez utiliser le menu en forme de kebab dans le coin supérieur droit du panneau de visualisation pour le rembourser. Le paiement sera désormais délié de toutes les factures auxquelles il avait été appliqué.

### Annulé et supprimé

Que se passe-t-il lorsqu'un paiement est supprimé?

* Statut de paiement défini comme supprimé
* Le numéro de paiement est suivi de <b>_supprimé</b> afin de permettre la réutilisation des numéros de paiement.
* Si le paiement avait précédemment été marqué comme *Partiel* ou *Terminé*, le solde de paiement restant ne sera plus disponible pour le client et sera délié de toutes les factures auxquelles il avait été précédemment lié.

### Archivé

L'archivage d'un paiement permet simplement de le supprimer de la liste des paiements. Cela permet de garder vos listes de paiements propres et organisées.

<x-warning>
Lorsqu'un paiement est archivé, aucune modification ultérieure ne peut être apportée au paiement. Pour modifier le paiement, vous devrez d'abord le *restaurer*.
</x-warning>

### Restauré

Restaurer un paiement à partir de l'état archivé ou supprimé ramènera le paiement à son état précédent avant l'archivage.

## Apple Pay, Google Pay & Microsoft Pay
À l'heure actuelle, pour payer avec Apple, Google ou Microsoft Pay, une carte de crédit doit déjà être configurée dans votre navigateur. Ce n'est pas une préférence d'Invoice Ninja, mais un choix de plateforme.

**Safari sur bureau**:

- Safari sur Mac fonctionnant sous macOS Sierra ou ultérieur
- Un iPhone (l'iPad n'est pas encore pris en charge) avec une carte de crédit configurée dans Wallet. Plus d'informations peuvent être trouvées sur le [site de support d'Apple](https://support.apple.com/en-us/HT204681).

**Safari sur mobile**:

- iOS 10.1 ou ultérieur
- Une carte configurée dans l'application Wallet

**Google Chrome**: 

- [Une carte de crédit enregistrée](https://support.google.com/chrome/answer/142893?co=GENIE.Platform%3DDesktop&hl=fr)

**Microsoft Edge**:

- Microsoft Edge 16.16299 ou plus récent
- [Une carte de crédit enregistrée](https://support.microsoft.com/en-us/help/4026594/microsoft-account-add-update-remove-credit-cards-and-other-ways-to-pay)

<x-next url=/fr_CA/products>Produits</x-next>
