---
title: "Services bancaires"
sidebar_position: 4
---
# Services bancaires

## Intégrations bancaires avec Yodlee

Pour les utilisateurs d'entreprise sur notre plateforme hébergée, nous avons intégré [Yodlee](https://www.yodlee.com), une plateforme leader en agrégation de données.

Yodlee s'intègre avec la plupart des grandes banques mondiales, vous permettant de lier vos comptes bancaires à Invoice Ninja pour importer vos transactions bancaires à des fins de rapprochement.

<iframe class="video" src="https://www.youtube.com/embed/_sIfIr7QUHA" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Connecter vos comptes

![alt text](/assets/images/banking/bank_connect.png "Liez vos comptes bancaires à Invoice Ninja")

```bash
Paramètres > Comptes bancaires > Connecter
```

En cliquant sur le bouton de connexion, une nouvelle fenêtre de navigateur s'ouvrira et se connectera à Yodlee. À partir de cet écran, vous pourrez rechercher votre banque et vous connecter à votre compte bancaire.

![alt text](/assets/images/banking/bank_yodlee_connect.png "Trouvez votre banque et connectez-vous")

Une fois que vous vous êtes authentifié avec succès auprès de votre banque, vous pourrez sélectionner les comptes que vous souhaitez lier à Invoice Ninja. Lorsque cela est terminé, cliquez sur Enregistrer et Terminer.

Yodlee vous donnera la possibilité d'ajouter d'autres comptes bancaires de différentes banques avant de quitter.

![alt text](/assets/images/banking/auto_sync.png "Synchronisation automatique")

:::info
Astuce: Si vous souhaitez qu'Invoice Ninja synchronise automatiquement vos transactions, activez la synchronisation automatique. Ceci peut être fait pour chaque compte bancaire individuellement.
:::

## Importer des relevés bancaires

Si vous préférez importer vos données à l'aide de fichiers .csv de votre banque, vous pouvez les télécharger directement dans Invoice Ninja.

Vous pouvez les importer à partir de

```bash
Paramètres > Importer | Exporter > Transactions bancaires
```

Vous devrez avoir créé un compte bancaire avant cela, afin que les transactions soient liées au bon compte bancaire.

## Transactions

Une fois que les données ont été importées dans Invoice Ninja, elles peuvent être consultées à partir de l'onglet Transactions dans la barre latérale.

![alt text](/assets/images/banking/bank_transactions.png "Transactions bancaires")

## Statut des transactions

Une transaction peut apparaître dans trois états

- Non appariée
- Appariée
- Convertie

### Non appariée

Une transaction non appariée est une transaction qui n'a pas encore été traitée ou catégorisée. Lorsqu'une transaction est créée dans le système, son premier statut est non apparié.

### Appariée

Une transaction appariée signifie qu'Invoice Ninja a calculé (en fonction d'un ensemble de règles) la correspondance correcte pour cette transaction particulière. Dans l'état apparié, la transaction peut être convertie (en dépense ou en paiement) ou peut être re-catégorisée manuellement.

### Convertie

Une transaction convertie signifie qu'Invoice Ninja ou un utilisateur a apparié et converti la transaction en dépense ou en paiement. Les détails et les objets liés peuvent être consultés en cliquant sur la transaction.

## Créer une transaction

![alt text](/assets/images/banking/add_edit_transaction.png "Ajouter/Modifier une transaction")

Une transaction peut être créée ou mise à jour manuellement.

### Champs

- Type | Retrait qui se rapporte à une dépense ou Dépôt qui se rapporte à un revenu
- Date | La date de la transaction
- Montant | Le montant de la transaction
- Devise | La devise de la transaction
- Compte bancaire | Le compte bancaire à associer à la transaction
- Description | La description de la transaction

### Convertir une transaction en dépense

![alt text](/assets/images/banking/convert_to_expense.png "Convertir une transaction en dépense")

Lorsque vous cliquez sur la ligne de transaction, un panneau latéral apparaîtra comme ci-dessus.

Dans ce panneau, vous pouvez attribuer un fournisseur et/ou une catégorie de dépenses à cette transaction. Lorsque vous êtes satisfait, cliquez simplement sur Convertir en dépense. Le système traitera alors la transaction, la convertira en dépense et liera enfin la dépense et la transaction ensemble.

### Convertir une transaction en paiement

![alt text](/assets/images/banking/convert_to_payment.png "Convertir une transaction en paiement")

Lorsque vous cliquez sur la ligne de transaction, un panneau latéral apparaîtra comme ci-dessus.

Dans ce panneau, vous pouvez cliquer sur une série de factures qui doivent être associées à cette transaction.

Une fois cela terminé, cliquez sur le bouton Créer un paiement. Le système traitera alors la transaction, créera un paiement pour le montant total de la transaction, appliquera le paiement aux factures associées, puis liera la facture, la transaction et les paiements ensemble.

## Règles bancaires

Pour améliorer votre efficacité, vous pouvez créer un ensemble de règles pour faire correspondre vos transactions entrantes.

Utiliser un ensemble de règles permettra à Invoice Ninja d'effectuer l'appariement et/ou la conversion des transactions pour vous.

### Créer une règle de transaction bancaire

![alt text](/assets/images/banking/create_bank_rule.png "Créer une règle bancaire")

Pour créer une règle bancaire, accédez à

```bash
Paramètres > Comptes bancaires > Gérer les règles
```

![alt text](/assets/images/banking/bank_rule_list.png "Liste des règles bancaires")

Vous pouvez modifier et créer des règles à partir de cette page, il suffit de cliquer sur une règle ou sur le bouton Créer pour créer une nouvelle règle bancaire.

![alt text](/assets/images/banking/create_rule.png "Créer une règle bancaire")

Lors de la création d'une règle, il y a plusieurs options à considérer :

- Nom | Le nom de la règle
- Faire correspondre toutes les règles | Ce paramètre signifie que pour que la règle corresponde, toutes les sous-règles doivent être présentes pour que la transaction soit appariée ou convertie.
- Conversion automatique | Indicateur booléen qui définit quoi faire lorsqu'une règle de transaction correspond. Si activé, la transaction sera convertie en facture ou en dépense.
- Règles | contient une ou plusieurs règles configurables.
- Fournisseur | Le sélecteur de fournisseur. Lorsqu'un fournisseur est sélectionné, ce fournisseur sera attribué à la dépense de la transaction.
- Catégorie | Le sélecteur de catégorie de dépenses. Lorsqu'une catégorie est sélectionnée, cette catégorie sera attribuée à la dépense de la transaction.

![alt text](/assets/images/banking/rule_spec.png "Spécifications de la règle")

Lors de la création d'une règle, plusieurs options sont disponibles.

- Champ | Le champ sur lequel effectuer la recherche (Description ou Montant)
- Opérateur - Description | lors de la correspondance du texte, plusieurs options de correspondance sont disponibles

* Contient | La description doit contenir la valeur attribuée
* Commence par | Le texte de la description doit commencer par la valeur attribuée 
* Est | La description doit correspondre exactement
* Est vide | La description doit être vide

- Opérateur - Montant | lors de la correspondance du montant de la transaction, plusieurs options sont disponibles

* < | Le montant doit être inférieur à la valeur
* <= | Le montant doit être inférieur ou égal à la valeur
* = | Le montant doit être égal à la valeur
* > | Le montant doit être supérieur à la valeur
* \>= | Le montant doit être supérieur ou égal à la valeur

- Valeur | La valeur attribuée par l'utilisateur utilisée pour comparer.
