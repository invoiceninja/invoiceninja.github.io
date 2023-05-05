---
extends: _layouts.user_guide
section: content
---

# Citations

Les enregistrements de devis sont utilisés pour donner à vos clients un aperçu précis de ce à quoi un devis pourrait ressembler pour les produits et/ou services demandés. Les devis peuvent être générés en PDF, consultés dans le portail client par le client, et s'ils sont acceptés, ils peuvent être convertis directement en devis. À moins qu'il ne soit converti en facture, les devis n'ont aucun effet sur le solde ou le grand livre d'un client.

Visionner, modifier ou créer un devis est pratiquement identique à celui d'un devis.

Les enregistrements de devis prennent en charge de nombreux détails et vous permettent de facturer vos clients pour des *Produits*, *Tâches* ou *Frais*. Vous pouvez joindre des documents ou des images aux devis, que le client peut consulter depuis le portail client. Les enregistrements de devis conservent un historique des modifications effectuées, ainsi que les utilisateurs ayant effectué ces modifications, afin d'accroître la responsabilité au sein de votre entreprise.

## Voir une Citation

Il suffit de sélectionner une citation de la liste, et vous verrez les détails de la citation, dans la disposition mobile, vous serez dirigé directement vers la vue de la citation, dans une disposition de bureau, la vue apparaîtra sur le côté droit.

De n'importe où dans la vue du devis, vous aurez la possibilité de *Modifier* le devis à partir d'un bouton en haut à droite du panneau de visualisation. Vous pouvez utiliser deux boutons en bas du panneau de visualisation : *Voir PDF* pour charger directement un PDF du devis depuis le portail d'administration, ou *Envoyer le devis par courriel* pour envoyer aux contacts du client un lien pour afficher et accepter leur devis depuis le portail client.","8":"Le menu Kebab dans le coin supérieur droit de la vue du devis présente de nombreuses fonctions pour travailler avec ou manipuler le devis, qui peuvent varier en fonction de l'état du devis. Vous pouvez changer manuellement le statut du cycle de vie du devis, cloner le devis, le consulter directement depuis le portail client, et plus encore.

### Aperçu

À partir du panneau de vue d'ensemble, vous verrez des informations générales sur le devis. Le montant du devis, le solde restant dû, le client auquel il est attribué, la date du devis et tous les produits ou tâches inclus dans le devis.

### Contacts

Ici, vous voyez les contacts de votre client qui sont indiqués comme inclus dans le devis. Les contacts inclus recevront une copie des courriels envoyés et pourront consulter le devis depuis le portail client lorsqu'ils se connectent.

Également disponibles sont des liens vers le portail client pour chaque contact respectif inclus.

### Documents

Téléchargez des images ou des documents pour votre devis, à inclure pour votre client. Les fichiers téléchargés peuvent être consultés et accessibles par le client via le portail client.

### Histoire

Le panneau *Historique* présente un aperçu chronologique des transactions liées au devis, et vous montre les modifications apportées au montant total du devis, ainsi que les utilisateurs ayant effectué ces modifications.

### Activité

Le panneau *Activité* présente un aperçu chronologique de toutes les actions effectuées sur le devis, y compris quand il a été créé, modifié, supprimé, etc, et quel utilisateur a effectué l'action.

## Création ou modification d'un devis

Il existe plusieurs champs disponibles lors de la saisie d'un devis, et la vue lors de la création ou de la modification d'un devis est légèrement différente selon que vous utilisez la disposition mobile ou la disposition de bureau. Dans la disposition de bureau, tous les panneaux décrits ci-dessous sont présentés en même temps sur un grand écran et disposés un peu différemment.

### Détails

### Contacts

*Contacts* a son propre panneau dans la vue mobile, tandis que dans la vue de bureau, ceci est affiché directement sous le champ *Client* après avoir sélectionné un client.

Cette section présente simplement une liste de contacts disponibles à partir d'un dossier client et vous permet de cocher ou décocher des contacts pour les inclure ou les exclure du devis. Les contacts inclus pourront accéder au devis depuis le portail client et recevoir des courriels à propos du devis lorsqu'ils sont envoyés.

### Articles

Ici, vous voyez une liste des éléments de ligne inclus dans le devis. Vous pouvez ajouter des *Produits*, des *Tâches* ou des *Dépenses* au devis pour facturer votre client. Chaque élément de la liste aura ces champs disponibles :

* **Produit** - Le nom du produit, de la tâche ou de la ligne de dépense à appliquer.
* **Description** - Une description de l'élément. Les descriptions peuvent inclure du code HTML ou du formatage de code Markdown (lorsqu'il est activé dans *Paramètres* > *Gestion de compte*).
* **Coût unitaire** - Le coût d'un seul produit ou dépense, ou le taux horaire d'une tâche pour l'élément.
* **Quantité** - Le nombre de produits, de dépenses ou d'heures facturables pour une tâche, à multiplier par le coût unitaire de cet élément.

### Notes

Tout sous un seul panneau dans la disposition mobile, ces options ont chacune leur propre onglet au bas de l'écran de devis lorsqu'elles sont en disposition de bureau :

* **Termes du devis** - Décrivez tous les termes ou conditions pour votre client, en ce qui concerne le devis.
* **Pied de page du devis** - Toutes les notes de texte à inclure en bas du devis.  Un bon endroit pour les avertissements moins importants.
* **Notes publiques** - Des notes de texte pour ajouter des détails ou du contexte au devis pour vous et votre client.  Un bon endroit pour les notes de service, ou un résumé du travail effectué pour le client.
* **Notes privées** - Notes de texte privées, non imprimées sur le PDF du devis ni visibles par le client.  Ces notes ne peuvent être vues que par les utilisateurs du portail d'administration.

## Cycle de vie d'une citation

### Brouillon

Le statut Brouillon est le premier statut dans le cycle de vie d'un devis. Dans ce statut, des modifications peuvent être apportées au devis et le devis est complètement caché au client. Les devis brouillons sont inactifs jusqu'à ce qu'ils soient envoyés par courriel au client ou marqués comme envoyés.

<x-warning>
Une fois qu'un devis à l'état de brouillon a été envoyé par courriel/marqué comme envoyé, son statut ne peut pas être remis à l'état de brouillon.
</x-warning>

### Envoyé

Un devis est marqué comme envoyé lorsqu'il a été envoyé par courriel au client ou marqué comme *envoyé* dans le panneau d'administration.

### Supprimé

Une citation peut être marquée comme supprimée si les conditions suivantes ont été remplies

* La soumission a un statut de Envoyé / Brouillon.

Qu'arrive-t-il lorsqu'une citation est supprimée?

* Statut de devis défini sur supprimé
* Le numéro de devis est complété avec **_supprimé** afin de permettre la réutilisation des numéros de devis.

### Archivé

Archiver une citation supprime simplement la citation de la vue de la liste des citations. Archiver une citation permet de garder vos vues de liste propres et ordonnées.

<x-warning>
Lorsqu'un devis est archivé, aucune modification supplémentaire ne peut être apportée au devis. Pour modifier le devis, vous devrez d'abord Restaurer le devis.
</x-warning>

### Restauré

Restaurer un devis depuis l'état d'archivage ou de suppression le ramènera à son état précédent avant l'archivage."}

<x-next url=/docs/payment-links>Liens de paiement</x-next>"

