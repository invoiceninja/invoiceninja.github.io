[[toc]]

## Lifecycle of an invoice

### Draft

<p>A draft invoice are hidden from the clients with the invoice amount / balance not applied to the ledger. Draft invoices are inactive until either emailed to the client or marked as sent.</p>

::: warning
Once a draft invoice has been emailed/marked as sent its status cannot be changed back to draft.
:::

### Sent

<p>An invoice is marked as sent when it has been emailed to the client or Marked as <b>sent</b> in the admin panel</p>

<p>When the invoice status is changed to Sent, the client balance increases by the invoice.balance amount</p>

### Partial

### Paid

### Cancelled

### Deleted

### Reversed

### Archived


### Deleting / Reversing / Cancelling an invoice

#### Deleting an invoice

<p>An invoice can be marked as deleted if the following conditions have been met</p>

* The invoice is marked as Sent / Draft.
* The invoice does not have any payments applied to it.

<p>What happens when an invoice is deleted?</p>

* Invoice balance set to 0
* Client balance is reduced by the invoice balance
* Invoice status set to deleted

#### Reversing an invoice

<p>An invoice can be reversed under the following conditions</p>

* The invoice is marked as Partial or Paid (ie. some payment amount has been applied)

<p>When an invoice is reversed the payment/s that have been applied to the invoice have a credit generated against them. The ledger is also adjusted as follows:</p>

* The client paid to date amount is reduced by the calculated amount of (invoice balance - invoice amount).
* A credit is generated for the payments applied to the invoice (invoice balance - invoice amount).
* The client balance is reduced by the invoice balance.
* The invoice balance is finally set to 0.
* The invoice status is set to Reversed.

<p>When an invoice has been reversed, the previous payments relationships are broken and cannot be restored.</p>

#### Cancelling an invoice

<p>An invoice can be cancelled under the following conditions</p>

* The invoice is marked as Partial or Paid (ie. some payment amount has been applied)

<p>When an invoice is cancelled the invoice balance is set to zero and the status updated to <b>Cancelled</b> If payments have been applied to the invoice these will remain linked to the invoice.</p>