---
extends: _layouts.user_guide
section: content
---

# Dépenses récurrentes

Le module *Dépenses récurrentes* vous permet de planifier des rapports de dépenses répétés de manière similaire aux factures récurrentes. Vous pouvez utiliser cela pour générer automatiquement des enregistrements pour les services d'abonnement de votre organisation, ou les achats réguliers de fournitures.

<x-warning>

Notez qu'au moment de la rédaction de cet article (01/oct/2021), les dépenses récurrentes peuvent être liées à des projets et des clients, mais la facturation d'une dépense récurrente n'a pas encore été mise en œuvre. Un développement ultérieur du module de dépenses récurrentes est prévu dans un avenir proche.

</x-warning>

## Module des dépenses récurrentes

Le module des dépenses récurrentes, situé dans le menu de navigation gauche, affiche une vue tabulaire de tous les enregistrements de dépenses disponibles. Vous pouvez trier et filtrer les enregistrements en utilisant les options situées en haut et en bas du tableau. Le bouton Colonnes vous permet d'ajouter ou de supprimer des colonnes, et les boutons de filtre et de statut vous permettent de modifier les enregistrements visibles. Chaque entrée dans le tableau dispose d'un menu kebab qui propose des options de gestion de l'enregistrement, telles que la modification et le clonage.

## Consultation d'une dépense récurrente

Pour afficher un enregistrement de dépense récurrente, cliquez simplement dessus dans le tableau. Le panneau de prévisualisation apparaîtra, où vous pourrez modifier l'enregistrement en utilisant le bouton "Modifier" ou le gérer à l'aide du menu kebab. Les options incluent le clonage ou la suppression de l'enregistrement. Vous avez également la possibilité de Démarrer/Arrêter le cycle de facturation récurrent et de cloner l'enregistrement vers une nouvelle dépense récurrente. Le bouton "Cloner en récurrent" créera un nouvel enregistrement de dépense récurrente avec les mêmes détails que l'original, vous permettant d'apporter des modifications avant de sauvegarder.

### Aperçu

L'onglet Aperçu de l'enregistrement de dépenses récurrentes affiche le coût total et l'état de la dépense en haut. Des boutons interactifs dans une liste vous permettent de consulter le fournisseur, le client, le projet, l'utilisateur et la facture liés. Les notes publiques et privées sont distinguées par une icône de verrou pour les notes privées et un «i» dans un cercle pour les notes publiques. Le bas de l'onglet indique la date de début, la fréquence, les cycles restants et la dernière date de paiement de la dépense récurrente.

### Documents

L'onglet Documents permet de télécharger des fichiers tels que des documents, des images et plus encore afin de vous permettre de les partager avec le client lorsqu'ils sont joints à une facture (lorsque activé) ou avec d'autres utilisateurs du portail d'administration.

### Horaire

Une liste simple de dates futures pour le cycle de la dépense récurrente est présentée ici.

## Création et modification d'une dépense récurrente

Dans la disposition de bureau, modifier ou créer une dépense récurrente vous amènera à un nouvel écran avec tous les champs disponibles affichés en même temps. Dans la disposition mobile, modifier ou créer une dépense récurrente ouvrira un autre écran avec des onglets, organisés de manière similaire à leur apparence dans la disposition de bureau, comme décrit ci-dessous :

### Notes

* **Notes publiques** - Utilisez ce champ pour décrire la dépense récurrente. Lors de la création d'une facture pour un client à partir d'une dépense récurrente, les notes publiques sont incluses dans la description de l'élément de ligne pour la dépense récurrente.
* **Notes privées** - La valeur de ce champ n'est visible que par les utilisateurs du portail administrateur, vous pouvez donc l'utiliser pour prendre des notes pour vous-même et vos collègues concernant l'enregistrement de la dépense récurrente.

### Paramètres

* **Devrait être facturé** - Activez ceci pour marquer une dépense récurrente comme facturable à un client. Les dépenses récurrentes avec la facturation activée peuvent être incluses dans les factures des clients, et lorsque vous créez une facture à partir d'un projet auquel la dépense facturable est liée. Lorsqu'une dépense récurrente a la facturation activée, son statut de cycle de vie changera.
* **Marquer comme payé** - Activez ceci pour indiquer que votre organisation a payé en dernier le fournisseur pour la dépense récurrente.
  * **Type de paiement** - Sélectionnez le type de paiement que votre organisation a utilisé pour payer le fournisseur.
  * **Date** - Entrez la date à laquelle votre organisation a payé le fournisseur.
  * **Référence de transaction** - Entrez un code ou un numéro de référence de transaction, si applicable.
* **Convertir la devise** - Si la dépense récurrente est facturée dans une devise autre que votre propre devise par défaut, l'activer vous permet de définir la devise que vous préférez utiliser pour payer, et un taux de change, pour calculer combien la dépense récurrente a coûté dans votre devise préférée.


<x-warning>

Note: Veuillez ignorer les balises HTML telles que `<x-warning>` lors de la traduction.

Notez que lorsque vous consultez vos rapports, les dépenses récurrentes seront catégorisées par la devise de la dépense/fournisseur, et non par la devise sélectionnée sous l'option "Convertir la devise". Si vous souhaitez consolider vos totaux de profits et pertes sous une seule devise, vous devez sélectionner votre propre devise pour chaque dépense récurrente et utiliser le montant converti pour le montant de la dépense, en laissant de côté toute référence à une devise étrangère dans les détails de l'enregistrement.

* **Ajouter des documents à la facture** - Activez cette fonctionnalité pour inclure tous les documents joints à une dépense récurrente, avec les documents joints à la facture lorsque vous créez une facture à partir de l'enregistrement de la dépense récurrente.
* **Saisir les taxes** - Configurez comment la dépense récurrente vous est taxée de manière plus détaillée.
  * **Par taux** ou **Par montant** - Changez entre le taux ou le montant pour modifier le champ *Tax* (sous l'onglet détails) d'une taxe basée sur un pourcentage, à une taxe forfaitaire personnalisée.
  * **Taxes inclusives** - Activez cette option si les taxes sont incluses dans le coût de la dépense, plutôt qu'exclusives. Par exemple : La taxe exclusive est appliquée en plus du coût de la dépense, comme ceci : 100 + 10% = 110 $ au total (100 + 10). La taxe inclusive est lorsque les taxes sont déduites du montant facturé par le fournisseur et incluses dans le montant de votre dépense, plutôt que d'être ajoutées en plus de ce que vous payez au fournisseur, comme ceci : 100 + 10% = 100 $ au total (90,91 + 9,09).

<x-next url=/docs/recurring-invoices>Factures récurrentes</x-next>

