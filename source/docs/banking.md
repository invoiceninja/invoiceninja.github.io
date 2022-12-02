---
extends: _layouts.user_guide 
section: content
---

# Banking

## Bank Integrations with Yodlee

For enterprise users on our hosted platform, we have integrated with (Yodlee)[https://www.yodlee.com/] a leading data aggregration platform.

Yodlee integration with most of the major global banks, allowing you to link your bank accounts with Invoice Ninja to import your bank transactions for reconciliation.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/_sIfIr7QUHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Connecting your accounts

![alt text](/assets/images/banking/bank_connect.png "Link your bank accounts with Invoice Ninja")

```bash
Settings > Bank Accounts > Connect
```

Clicking on the connect button with open a new browser window which connects to Yodlee, from this screen you are able to search for your bank and then log into your Bank Account

![alt text](/assets/images/banking/bank_yodlee_connect.png "Find your bank and login")

Once you have successfully authenticated with your bank, you'll be able to select the accounts you wish to link to Invoice Ninja, when this is completed, click save & finish.

Yodlee will give you the opportunity to add more bank accounts from different banks prior to exiting.

![alt text](/assets/images/banking/auto_sync.png "Auto Sync")

<x-info>
Tip: If you wish for Invoice Ninja to automatically sync your transaction, turn on Auto Sync, this can be done for each individual Bank Account.
</x-info>

## Importing Bank Statements

If you prefer to import your data using .csv files from your bank, you can upload these directly into Invoice Ninja

You can import these from

```bash
Settings > Import | Export > Bank Transactions
```

You'll need to have created a Bank Account prior to this, so the transactions are linked to the correct bank account.

## Transactions

Once data has been imported into Invoice Ninja, this can be viewed from the Transactions tab in the sidebar.

![alt text](/assets/images/banking/bank_transactions.png "Bank Transactions")

## Transaction Status

A transaction can appear in three states

- Unmatched
- Matched
- Converted

### Unmatched

A transaction that is unmatched is a transaction that has yet to be processed or categorized. When a transaction is created in the system, its first status is unmatched.

### Matched

A transaction that is matched means that Invoice Ninja has calculated (based on a set of rules) the correct matching for this particular transaction. In the matched state, the transaction can be Converted (to either an expense or payment) or it can be recategorized manually.

### Converted

A transaction that is converted means that either Invoice Ninja or a user has matched and converted the transaction into either an Expense or Payment. The details and linked objects can be viewed by clicking onto the transaction.

## Creating a transaction

![alt text](/assets/images/banking/add_edit_transaction.png "Add/Edit a Transaction")

A transaction can be manually created or updated. 

### Fields

- Type | Withdrawal which relates to an expense or Deposit which refers to income
- Date | The date of the transaction
- Amount | The amount of the transaction
- Currency | The currency of the transaction
- Bank Account | The bank account to associate the transactio with
- Description | The description of the transaction

### Converting a transaction to an expense



<x-next url=/docs/clients>Clients</x-next>