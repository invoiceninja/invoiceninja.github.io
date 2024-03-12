---
extends: _layouts.user_guide
section: content
locale: en
---

# Banking

## Bank Integrations with Yodlee

For enterprise users on our hosted platform, we have integrated with [Yodlee](https://www.yodlee.com) a leading data aggregration platform.

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

### Converting a transaction to a expense

![alt text](/assets/images/banking/convert_to_expense.png "Convert a transaction to a expense")

When you click on the transaction row, a side panel will appear as above.

From this panel you are able to assign a Vendor and/or an expense category to this transaction. When you are satisfied, just click on Convert to expense. The system will then process the transaction, convert it to an expense and finally link the expense and transaction together.

### Convert a transaction to a payment

![alt text](/assets/images/banking/convert_to_payment.png "Convert a transaction to a payment")

When you click on the transaction row, a side panel will appear as above.

From this panel you are able to click on a range of invoice which are to be associated with this transaction.

When this has been completed, click on the Create Payment Button. The system will then process the transaction, creating a payment for the full tranasction amount, apply the payment to the associated invoices, and then link the invoice / transaction and payments together.

## Bank Rules

To improve your efficiency, you can build a ruleset to match your incoming transactions.

Using a rule set will allow Invoice Ninja to performing the matching and/or conversion of transactions for you.

### Create a Bank Transaction Rule

![alt text](/assets/images/banking/create_bank_rule.png "Create a bank rule")

To create a bank rule navigate to

```bash
Settings > Back Accounts > Manage Rules
```

![alt text](/assets/images/banking/bank_rule_list.png "Bank rule lists")

You can edit and create rules from this page, simply click on a rule, or the create button to create a new bank rule.

![alt text](/assets/images/banking/create_rule.png "Create bank rule")

When creating a rule there are a number of options to consider:

- Name | The name of the rule
- Match All Rules | This settings means that for the rule to match, all of the subrules must be present for the transaction to be matched or converted.
- Auto Convert | Boolean flag which defines what to do when a transaction rule matches. If set ON the transaction will convert to an invoice or expense.
- Rules | contains one or many configurable rules.
- Vendor | The vendor selector. When a vendor is selected, this vendor will be assigned to the transaction expense.
- Category | The expense category selector. When a categorty is selected, this category will be assigned to the transaction expense.

![alt text](/assets/images/banking/rule_spec.png "Rule specifications")

When creating a rule there are a number of options available.

- Field | The field to search on (Description or Amount)
- Operator - Description | when matching text there are several matching options available

* Contains | The description must contain the value assigned
* Starts with | The description text must start with the value assigned
* Is | The description must exactly match
* Is Empty | The description must be empty

- Operator - Amount | when matching on the transaction amount there are several options available

* < | The amount must be less than the value
* <= | The amount must be less than or equal to the value
* = | The amount must be equal to the value
* > | The amount must be greater than the value
* \>= | The amount must be greater than or equal to the value

- Value | The user assigned value used to compare against.

<x-next url=/en/transactions>Transactions</x-next>
