---
extends: _layouts.user_guide
section: content
---

# Dépenses

Le module *Dépenses* vous permet de gérer et de suivre les dépenses liées à votre organisation, qu'il s'agisse de biens ou de services. Les enregistrements de dépenses prennent également en charge la facturation à vos clients, vous permettant ainsi de transférer les coûts directement via vos factures. Une utilisation efficace du module de dépenses peut vous aider à suivre et à surveiller la trésorerie de votre organisation et à vous tenir informé de vos impôts.

## Vue du module de dépenses
Lorsque vous sélectionnez le module *Dépenses* à partir du menu de navigation situé sur le côté gauche de l'écran, par défaut, vous serez dirigé vers la vue en tableau listant et classant tous les enregistrements de dépenses disponibles.

À partir de la vue tableau, vous pouvez trier les enregistrements de dépenses en fonction des différentes colonnes en haut du tableau. Avec le bouton *Colonnes* situé en bas à droite de la vue tableau, vous pouvez ajouter/supprimer des colonnes du tableau. Vous pouvez utiliser les boutons *filtre* et *statut* situés en bas à gauche pour modifier les enregistrements visibles répertoriés. Un menu kebab à gauche de chaque entrée dans le tableau affiche une liste d'actions de gestion disponibles que vous pouvez effectuer sur un enregistrement de dépense, telles que modifier, cloner vers un nouvel enregistrement de dépense, facturer la dépense ou la cloner vers un nouvel enregistrement de dépense récurrente.

## Consulter une dépense

Cliquez simplement sur une entrée du tableau pour afficher le panneau de prévisualisation de ce relevé de dépenses.

Vous pouvez utiliser le bouton "Modifier" en haut du panneau d'aperçu pour modifier l'enregistrement de la dépense. Vous pouvez utiliser le menu kebab dans le coin supérieur droit du panneau pour voir une liste des actions de gestion qui peuvent être prises à l'encontre de l'enregistrement de la dépense, comme facturer la dépense, cloner l'enregistrement de la dépense ou le supprimer. Au bas du panneau d'aperçu de la dépense, vous trouverez deux boutons pour "Facturer la dépense" et "Cloner". Facturer la dépense créera un nouvel enregistrement de facture avec les détails de la dépense automatiquement saisis comme élément de ligne sur la facture. Cloner créera un nouvel enregistrement de dépense avec les mêmes détails que l'enregistrement de dépense existant, pour la date d'aujourd'hui.

Le panneau de prévisualisation d'un enregistrement de dépense contient tous les détails concernant l'enregistrement, répartis en deux sections à onglets, comme suit:

### Aperçu

Ici, vous pouvez voir le coût total de la dépense et l'état de la dépense en haut. Des boutons interactifs multifonctionnels dans une liste vous connecteront au fournisseur, au client, au projet, à l'utilisateur et à la facture liés à l'enregistrement des dépenses. Les notes publiques et privées apparaissent en surbrillance, précédées d'une icône de cadenas pour indiquer une note privée ou d'un petit "i" dans un cercle pour indiquer une note publique. Le bas de l'onglet Aperçu affiche la date de la dépense, le taux de taxe et les informations de paiement pour quand et comment votre organisation a payé le fournisseur.

### Documents
L'onglet Documents permet de téléverser des fichiers tels que des documents, des images et plus encore afin de vous permettre de les partager avec le client lorsqu'ils sont joints à une facture (si activé) ou avec d'autres utilisateurs du portail d'administration.

## Création et Édition d'une Dépense

Dans la disposition pour ordinateur de bureau, la modification ou la création d'un enregistrement de dépense vous mènera à un nouvel écran où tous les champs disponibles seront affichés en même temps. Dans la disposition pour mobile, la modification ou la création d'un enregistrement de (expense record) ouvrira un autre écran avec des onglets, organisés de manière similaire à leur apparence dans la disposition pour ordinateur de bureau, comme décrit ci-dessous :

<video width="100%" controls>
  <source src="/assets/videos/expenses/create_expense.mp4" type="video/mp4">
Votre navigateur ne supporte pas la balise vidéo.
</video>



### Notes

* **Notes publiques** - Utilisez ce champ pour décrire la dépense. Lors de la création d'une facture pour un client à partir d'un enregistrement de dépense, les notes publiques sont incluses dans la description de l'élément de ligne pour la dépense.
* **Notes privées** - La valeur de ce champ est uniquement visible par les utilisateurs du portail administrateur, vous pouvez donc l'utiliser pour prendre des notes pour vous-même et vos collègues concernant l'enregistrement de la dépense.

### Paramètres

* **Doit être facturé** - Activez ceci pour marquer une dépense comme facturable à un client. Les dépenses avec la facturation activée peuvent être incluses dans les factures des clients et lorsque vous créez une facture à partir d'un projet auquel la dépense facturable est liée. Lorsqu'un enregistrement de dépense a la facturation activée, son statut du cycle de vie passera à *En attente* jusqu'à ce qu'il soit facturé et payé, après quoi il sera automatiquement modifié à nouveau en *Payé*.
* **Marquer comme payé** - Activez ceci pour indiquer que votre organisation a payé le fournisseur pour cette dépense. Ceci n'est *pas* pour indiquer un paiement de la part d'un client.
  * **Type de paiement** - Sélectionnez le type de paiement que votre organisation a utilisé pour payer le fournisseur.
  * **Date** - Entrez la date à laquelle votre organisation a payé le fournisseur.
  * **Référence de la transaction** - Entrez un code ou un numéro de référence de transaction, le cas échéant.
* **Convertir la devise** - Si la dépense est facturée dans une devise autre que votre devise par défaut, l'activation de cette option vous permet de définir la devise que vous préférez utiliser pour payer, ainsi qu'un taux de change, pour calculer combien la dépense coûte dans votre devise préférée.

Je suis désolé, mais il n'y a pas de texte en anglais à traduire dans cette entrée. Veuillez fournir le texte en anglais pour que je puisse le traduire en fr-CA.

Notez que lorsque vous consultez vos rapports, les dépenses seront classées par la devise de la dépense / du fournisseur, et non par la devise sélectionnée sous "Convertir la devise". Si vous souhaitez consolider vos totaux de profit et de perte sous une seule devise, vous devez sélectionner votre propre devise pour chaque enregistrement de dépense et utiliser le montant converti pour le montant de la dépense, en laissant toute référence à une devise étrangère hors des détails de l'enregistrement.

</x-warning>
* **Ajouter des documents à la facture** - Activez cette fonctionnalité pour inclure les documents liés à une dépense, avec les documents joints à la facture lorsque vous créez une facture à partir de l'enregistrement de la dépense.
* **Saisir les taxes** - Configurez plus en détail comment la dépense est taxée pour vous.
  * **Par taux** ou **Par montant** - Changez entre taux ou montant pour modifier le champ *Taxe* (sous l'onglet détails) d'une taxe basée sur un pourcentage, à une taxe forfaitaire personnalisée.
  * **Taxes incluses** - Activez cette option si les taxes sont incluses dans le coût de la dépense, plutôt qu'exclusives. Par exemple : Une taxe exclusive est appliquée sur le dessus du coût de la dépense, comme ceci : 100 + 10% = 110 $ au total (100 + 10). Une taxe incluse est lorsque les taxes sont déduites du montant facturé par le fournisseur et incluses dans le montant de votre dépense, plutôt que d'être ajoutées au-dessus de ce que vous payez au fournisseur, comme ceci : 100 + 10% = 100 $ au total (90,91 +9,09).

## Cycle de vie d'une dépense

Le texte suivant décrit le cycle de vie d'un enregistrement de dépense

### Connecté

Un état par défaut d'une dépense est *Enregistrée*, lorsqu'une dépense est créée. Une dépense est marquée enregistrée que vous ayez signalé ou non que vous avez payé le fournisseur pour la dépense.

### En attente

Une dépense qui a *Doit être facturée* activé, la rendant facturable à un client, passe automatiquement à un état *En attente*.

### Facturé

Un enregistrement de dépense est automatiquement modifié en *Facturé* après que la dépense a été ajoutée à une facture client. Notez qu'une dépense est marquée *Facturée* simplement en étant sur une facture, et son état ne change pas si la facture a été payée ou non par le client. L'onglet aperçu du panneau de prévisualisation de l'enregistrement de dépense vous liera à la facture à laquelle la dépense est attachée.

### Archivé

Un enregistrement de dépense peut être archivé manuellement, ce qui le cache simplement de la vue dans le tableau ou la liste des dépenses actives. Les détails des dépenses archivées sont toujours inclus dans les rapports. Vous pouvez afficher les dépenses archivées en modifiant les filtres dans la vue du tableau, et vous pouvez utiliser la fonction "Restaurer" pour ramener une dépense archivée à son état précédent.

### Supprimé

Un enregistrement de dépense peut être supprimé manuellement, ce qui le retirera de la vue et le supprimera également de tous les rapports. Les enregistrements de dépenses supprimés peuvent être consultés en modifiant vos filtres lors de la visualisation du tableau ou de la liste des dépenses, et l'utilisation de la fonction "Restaurer" peut ramener l'enregistrement de dépense supprimé à son état précédent.

<x-next url=/docs/invoices>Factures</x-next>"

