---
title: "Transactions"
sidebar_position: 24
---
# Transactions

## Aperçu

Invoice Ninja s'est associé avec [Yodlee](https://www.yodlee.com), un fournisseur de données de premier plan, pour accéder aux flux de données bancaires. Ce partenariat permet aux utilisateurs d'Invoice Ninja dans le monde entier d'accéder aux principales banques et de connecter leurs comptes bancaires pour une réconciliation automatique des paiements et des dépenses.

## Comptes bancaires

```bash
Paramètres > Comptes bancaires
```

```
Vous pouvez afficher et ajouter des comptes bancaires dans la section des paramètres de l'application.
```

![texte alternatif](/assets/images/transactions/bank_account_list.png "Comptes bancaires")

Pour les utilisateurs hébergés en entreprise, le bouton Connecter les comptes vous permet d'ajouter, de mettre à jour et de supprimer des comptes de Invoice Ninja. En cliquant sur ce bouton, vous serez dirigé vers la plateforme Yodlee où vous pourrez vous authentifier en toute sécurité avec votre banque et sélectionner les comptes que vous souhaitez lier à Invoice Ninja.

Une fois votre compte bancaire connecté, vous avez la possibilité d'activer la synchronisation automatique, ce qui maintiendra toutes vos transactions à jour. Si vous préférez, vous pouvez également créer manuellement des comptes bancaires et des transactions, ou importer des relevés bancaires au format CSV (Paramètres > Importer | Exporter).

## Liste des transactions

L'aperçu des transactions affiche toutes vos transactions et leur statut.

![texte alternatif](/assets/images/transactions/transaction_list.png "Aperçu des transactions")

* **Type de compte** - Définit le type de compte auquel la transaction est liée, les options possibles incluent Banque, Carte de crédit, Compte d'épargne.
* **Statut** - Définit le statut de la transaction.
 - Non appariée - Une nouvelle transaction qui doit être appariée à une facture ou une dépense
 - Appariée - Une transaction qui (selon des règles prédéfinies) a été appariée à une facture ou une dépense
 - Terminée - Une transaction qui a été appariée ET liée à une facture ou une dépense
* Dépôt - Le montant des revenus pour la transaction.
* Retrait - Le montant de la dépense pour la transaction.
* Date - La date de la transaction.
* Description - La description de la transaction.
* Factures - Les factures liées (visibles lorsqu'elles sont terminées)
* Dépenses - Les dépenses liées (visibles lorsqu'elles sont terminées)

## Créer une transaction manuelle

Pour créer une transaction manuelle, cliquez sur le bouton Créer

![texte alternatif](/assets/images/transactions/new_transaction.png "Créer une transaction manuelle")

Sélectionnez un type :

```
- Dépôt pour revenus
- Retrait pour dépenses
```

Entrez la date de la transactionLe montant
Sélectionnez la devise de la transaction
Sélectionnez le compte bancaire auquel lier la transaction
Entrez une description. Pour l'appariement automatique, si vous saisissez le numéro de facture, nous trouverons et apparierons automatiquement la facture associée.

## Transactions correspondantes

Lorsque vous cliquez sur une transaction, un second volet s'ouvrira et vous montrera les options correspondantes :

### Correspondance de factures.
Pour associer une ou plusieurs factures à une transaction, vous pouvez utiliser la boîte de dialogue de recherche pour trouver votre facture, ou simplement faire défiler la liste et cocher une ou plusieurs factures à lier à la transaction.

![texte alternatif](/assets/images/user_guide/invoice_match.png "Associez une facture")

Pour finaliser, cliquez sur le bouton Convertir en paiement. Ceci créera le paiement correspondant pour la ou les factures et mettra également à jour le statut des factures en tant que payées.

### Correspondance des dépenses.

Lors de la correspondance des dépenses, vous pouvez attribuer le fournisseur et/ou une catégorie de dépenses

![texte alternatif](/assets/images/user_guide/expense_match.png "Faire correspondre une dépense")
