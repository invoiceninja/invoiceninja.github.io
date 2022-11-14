---
extends: _layouts.user_guide
section: content
---

# Transactions

## Overview

Invoice Ninja has integrated with leading data provider [Yodlee](https://www.yodlee.com/) to access bank data feeds. Yodlee provides global access to most major banks and allows you to connect your bank accounts with Invoice Ninja for the automatic reconcilation of payments and expenses.

## Bank Accounts

```bash
Settings > Bank Accounts
```

You can view and add bank accounts in the settings section of the application

![alt text](/assets/images/transactions/bank_account_list.png "Bank Accounts")

For enterprise hosted users, you can use the Connect Accounts button to add / update and remove accounts from Invoice Ninja.

Clicking on this button will take you to the Yodlee platform which will allow you to securely authenticate with your bank, from there can you can select the bank accounts you wish to link with Invoice Ninja.

Once you have connected your bank account you have to option to enable automatic syncing where Invoice Ninja will perform rolling data syncs to keep all of your transactions up to date.

It is also possible to manually create a bank account and transactions, you can also import bank statements which are in CSV format ( Settings > Import | Export ) 

## Transaction List

The transactions overview displays all of your transactions and their status.

![alt text](/assets/images/transactions/transaction_list.png "Transaction Overview")

* **Account Type** - Defines the type of account the transaction is linked to, possible options include Bank, Credit Card, Savings Account.
* **Status** - Defines the status of the transaction.
 - Unmatched - A new transaction that needs to be matched to a Invoice or Expense
 - Matched - A transaction that (based on predefined rules) has been matched to a Invoice or Expense
 - Completed - A transaction that has been matched AND linked to a Invoice or Expense
* Deposit - The amount of income for the transaction.
* Withdrawal - The amount of the expense for the transaction.
* Date - The Date of the transaction.
* Description - The description of the transaction.
* Invoices - The linked invoices (visible when completed)
* Expenses - The linked expenses (visible when completed)

## Create a manual transaction

To create a manual transaction click on the Create button

![alt text](/assets/images/transactions/new_transaction.png "Create a manual transaction")

Select a Type:

 - Deposit for income
 - Withdrawal for expenses

Enter the Date of the transaction
The amount
Select the currency of the transaction
Select the bank account to link the transaction to
Enter a description. For auto matching, if you enter the invoice number we will automatically find and match the related invoice.

## Matching Transactions

When you click on a transaction a second window pane will open which will show you the matching options:

### Invoice Matching.

To match one or more invoices to a transaction you can use the search dialog to find your invoice, or simply scroll through the list and check one of more invoice to link to the transaction.

![alt text](/assets/images/user_guide/invoice_match.png "Match a invoice")

To finalize, click on the Convert To Payment button. This will create the matching payment for the invoice/s and will also update the status of the invoices to paid

### Expense Matching.

When matching expenses you are able to assign the Vendor and/or a expense category

![alt text](/assets/images/user_guide/expense_match.png "Match a expense")


<x-next url=/docs/vendors>Vendors</x-next>