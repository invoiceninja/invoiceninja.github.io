---
extends: _layouts.user_guide
section: content
locale: en
---

# Banking

## Bank Integrations with Yodlee

For enterprise users on our hosted platform, we have integrated with [Yodlee](https://www.yodlee.com), a leading data aggregration platform.

The Yodlee integration links primarily with most of the major US banks, allowing you to link your bank accounts with Invoice Ninja to import your bank transactions for reconciliation.

<div class="video_container">
<x-video src="/assets/videos/banking/banking.mpd" is_dash="true" id="banking-video"></x-video>
</div>

## Credit Card Integrations with GoCardless

We have integrated with [GoCardless](https://gocardless.com), a payments integration platform.

The GoCardless integration allows you to link a credit card account from primarily with most of the major EU banks to import transactions for reconciliation.

## Connecting your accounts

![alt text](/assets/images/banking/bank_connect.png "Bank accounts list")

```bash
Settings > Credit Cards & Banks > Connect
```

Clicking on the connect button with open a new browser window which connects to Yodlee, from this screen you are able to search for your bank and then log into your Bank Account

![alt text](/assets/images/banking/bank_yodlee_connect.png "Find your bank and login")

Once you have successfully authenticated with your bank, you'll be able to select the accounts you wish to link to Invoice Ninja, when this is completed, click save & finish.

Yodlee will give you the opportunity to add more bank accounts from different banks prior to exiting.

![alt text](/assets/images/banking/auto_sync.png "Auto Sync")

<x-info>
Tip: If you wish for Invoice Ninja to automatically sync your transaction, turn on Auto Sync. This can be done for each individual Bank Account.
</x-info>

## Manually Importing Bank Statements

If you prefer to import your data using .csv files from your bank, you can upload these directly into Invoice Ninja.

You can import these from:

```bash
Transactions > Import
```

![transactions import button](/assets/images/transactions/transactions_import_arrow.png)

![transactions import](/assets/images/transactions/transactions_import.png)

You'll need to have created a Bank Account prior to this, so the transactions are linked to the correct bank account.

## Transactions

Once data has been imported into Invoice Ninja, this can be viewed from the Transactions tab in the sidebar.

![alt text](/assets/images/banking/bank_transactions.png "Transactions")

For more details on Transactions, see [Transactions](/en/transactions)

## Bank Rules

To improve your efficiency, you can build a ruleset to match your incoming transactions.

Using a rule set will allow Invoice Ninja to performing the matching and/or conversion of transactions for you.

![alt text](/assets/images/banking/bank_rule_list.png "Bank rule lists")

### Create a Bank Transaction Rule

To create a bank rule navigate to

```bash
Settings > Credit Cards & Banks > Rules
```

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

<x-next url=/en/clients>Clients</x-next>
