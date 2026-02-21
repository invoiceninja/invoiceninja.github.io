---
title: "Frequently Asked Questions"
sidebar_position: 3
---
Here you will find answers to many frequently asked questions about Invoice Ninja.

### What is the Client Portal?

- When you send a client an invoice, the email contains a link to view the invoice online in the client portal.
- The client portal is an online self-serve dashboard for your client to see their invoices, make payments, download statements, manage subscriptions, payment methods, and more.
- Client portal access is available for all your clients. You can optionally allow anyone to register as a new client under Settings>Client Portal>Registration.
- If you enable "Client Initiated Payments" under Settings>Payment Settings, you can even allow your clients to make a payment online without you having to send an invoice (you can also set the "Minimum Payment Amount" for client-initiated payments)
- You can see how the client portal looks for your clients by clicking the "Client Portal" option:

![Edit Client portal dropdown hilighted](/assets/images/clients/editclient_clientportalhilighted.png "Edit Client portal dropdown hilighted")

![Client portal](/assets/images/clients/client_portal.png "Client portal")

See [Client Portal](/docs/user-guide/client-portal)

### What is a subdomain?

- The subdomain is used in the client portal to personalize links to match your brand. Ex., https://your-brand.invoicing.co
- Under Settings>Client Portal, you can setup your subdomain.
- Links generated in the system (invoices, quotes, etc.) that are sent to your clients will use the subdomain you have configured.
- If you have multiple companies, you can set a different subdomain for each company. Ex., companya.invoicing.co, companyb.invoicing.co… that way, each company has its own branding and custom link.

![Client portal settings](/assets/images/settings/client_portal_settings.png "Client portal settings")

### How can I accept payments online? What is a payment gateway (AKA, merchant processor)?

- Accepting online payments has never been easier. Invoice Ninja integrates with all the major online payment gateways to let you accept payments in 135+ currencies: [Payment Gateway Integrations](https://invoiceninja.com/payments/)
- In order to accept payments online, you need to integrate your Invoice Ninja account with a "payment gateway."
- See: [Setting Up Payment Gateways](/docs/user-guide/gateways/)

### How do I setup automatic reminders for unpaid invoices?

- Auto-reminders for invoices can be configured under _Settings>Templates & Reminders_

  - You have the options for First, Second, Third, Endless reminders.

    ![Email reminder example](/assets/images/settings/first_invoice_reminder_example.png "Email reminder example")

- Days: Set how many days until the selected 'Schedule' action selected below is triggered
- You can choose these options from the Schedule dropdown:
  - After the invoice date
  - Before the due date
  - After the due date
- Remember to enable 'Send Email' to have the email reminder enabled
- Optionally set late fees here as well

### What is the Payments module?

- Invoice Ninja includes functionality to let you record every payment that you receive on your invoices. This makes it easy to report on invoices, accept partial payments, etc.
- The Payments module records all the INCOMING payments to the system.
- Each payment is linked to an invoice.
- You can apply multiple payments per invoice. Ex., deposits or partial payments.
- The payments module lets you record the amount received, payment date, payment type (the method of payment), a transaction reference, and you can record some notes.
- You also have the option to convert currency when recording the payment. You can select the currency to convert from, and an exchange rate. The exchange rates are updated daily.
- See: [Payments](/docs/user-guide/payments)

### How can I send payment email?

- If you want your clients to receive an automatic email acknowledging payments, this can be configured under _Settings>Online Payments_.

  ![Payment email options](/assets/images/settings/payment_email_options.png "Payment email options")

- You have the options for:
  - Manual Payment Email – this checks the option 'Send Email' by default in the Enter Payment window. You can uncheck it when manually entering a payment if you don't want a receipt sent out.
  - Online Payment Email – when the client pays online, they will be sent a receipt automatically
  - Mark Paid Payment Email – when you mark an invoice as paid, the client will be sent a receipt automatically
- You can customize the design of your receipt email under _Settings>Templates & Reminders_ – select the "Payment" template. There is also a template for "Partial Payment" if the payment made was not for the full invoice amount.
- The payment email by default will include a button to view the invoice for which the payment was made for.

  ![Payment received email template](/assets/images/settings/payment_received_template.png "Payment received email template")

### Is it possible to change a quote into an invoice when my client decides to proceed?

- Yes, this is very easy to do in Invoice Ninja.
- On your quote, simply select "Convert to Invoice"

  ![Convert quote to invoice](/assets/images/quotes/convert_quote_to_invoice.png "Convert quote to invoice")

### How can I charge late fees or percentages for overdue invoices?

- This can be done under _Settings>Templates & Reminders_

  ![First Reminder email template](/assets/images/settings/first_reminder_email_template.png "First Reminder email template")

- You can setup different fee amounts or percentages for each of the three reminder emails. For example, First Reminder may have 5% fee, Second Reminder another 5%, Third Reminder another 5%.

### What is the documents feature?

- The Documents module allows you to upload files to a client, project, or an expense. For example, this may be used for recording disbursements, contracts, or other documentation you need to easily access.
- You can select whether the document you upload is also visible to the client in the client portal.

### I have some clients in different countries. How can I make an invoice in a different currency?

- The default currency selected when making a new client is determined by the "Currency" you set in Settings>Localization>Currency.
- When you Add or Edit a client, you have the option to change the currency for the client.

  ![Client settings additional info - currency](/assets/images/clients/client_additional_info_currency.png "Client settings additional info - currency")

- If your configured [Payment Gateway](/docs/user-guide/gateways) supports the currency, the client will be able to pay in that currency. Payments will record the currency they paid in.
- You are able to report your revenues/payments by currency in the dashboard, and reports.

  ![Dashboard filter by currency](/assets/images/dashboard/dashboard_filter_by_currency.png "Dashboard filter by currency")

- If you have a group of clients that you'd like to bill in a specific currency, or apply other settings to a group of clients, you can use the Groups feature in Invoice Ninja – see: [Group Settings for Client Management](/docs/user-guide/clients/#group-settings-for-client-management)
  - Groups lets you customize any setting or templates (ex. invoice templates) to tailor to your group of clients. For example, if you want a different invoice design or email for your "USD Clients" you can configure that easily with Groups.

### How can I show the currency symbol on invoices/quotes?

- Under _Settings>Localization>Currency Format_, select _Code_. Your currency symbol will show on quotes/invoices (ex. _1,000.00 USD_)

![Currency localization](/assets/images/settings/localization_currency_format_code.png)

### How to Setup Taxes?

- Invoice Ninja supports virtually all forms of charging/recording tax.
- You can even apply 1 to 3 tax rates together.
- Taxes can be setup for invoices and expenses
  - Invoice tax is tax you charge a client
  - Expense tax is tax you recorded that you paid on an expense to a vendor (Ex. purchased equipment and X % was spent on Y tax)
- You'll first want to go to _Settings>Tax Settings>New Tax Rate_, and add your tax name and percentage.
- Then you select the way in which you wish to apply the tax rate to your invoices/expenses by default:
  - Invoice Tax Rates
  - If you do not select a tax rate to apply by default, you will have to select the tax rate manually when creating an invoice/expense.
  - Line-item taxation is also supported. When enabled, this will add column(s) to the invoice for the line item tax rate(s) - you can select one to three line item tax rates.
- You can also toggle whether taxes are inclusive or exclusive.
- You can also set a tax category for your each product. That way, you can report which tax category the tax was charge for based on the products you sold. For example, "Physical Goods", "Tax Exempt"…
- See full instructions and videos for tax configuration: [Taxes](/docs/user-guide/taxes)

### How can I create individual logins to Invoice Ninja for my staff to make invoices and use features, but not see my business's total revenues or reporting?

- You can manage your additional account users under _Settings>User Management_.

  ![User Management](/assets/images/settings/settings_user_management.png "User Management")

- When creating a New Account User, you can go under Permissions and select which areas of the system the user will have access to. If you don't want them to see any reports or analytics, don't check 'View Dashboard' or 'Reports'.

  ![New User](/assets/images/settings/user_management_new_user.png "New User")

- See: [User Management](/docs/user-guide/advanced-settings/#user_management)

### What happens when I email an invoice out to the client?

- When you email an invoice from Invoice Ninja, the client receives an email which allows them to open and view the invoice online, and make a payment.
- The payment can be made in the client portal via your configured payment gateway(s)
- The email is sent according to the "Invoice" template that you can fully customize under _Settings>Templates & Reminders_

  ![Invoice email template](/assets/images/settings/default_invoice_email_template.png "Invoice email template")

- See: [Email Settings](/docs/user-guide/advanced-settings/#email_settings)

### How to make the invoice always included as a PDF attachment in the email?

- Go to _Settings>Email Settings_ and enable "Attach PDF"
  - This will attach a PDF of the invoice into every invoice and reminder email

### How do I customize my invoice or quote design?

- You can customize your invoice, quote, purchase order, and other template designs under _Settings>Invoice Design_.
  - You can change the style, layout, colors, fonts, type of company and client information shown, show custom fields, whether to show a PAID stamp, whether to number pages, hide empty columns, and more.
  - See: [Invoice Design](/docs/user-guide/advanced-settings/#invoice_design)
- Designs can be further tailored to individual clients or groups of clients by using the Client Settings and Groups features
  - See: [Custom Settings Per Client](/docs/user-guide/clients)
  - See: [Group Settings](/docs/user-guide/clients/#group-settings-for-client-management)

### What is the purpose of the User dropdown in invoices/quotes/expenses?

- The _User_ dropdown can be used in multiple ways. It can be used in the reports for tracking (ex. how many expenses assigned to each user), but it can also be used to give a user permission to view/edit an individual record.

### How can I change which columns show in the different modules?

- Every module in Invoice Ninja that stores many records has a table structure (ex. clients, products, invoices, payments, quotes, credits, expenses...), and you can change the number of rows shown per page as well as the columns.
- There is a 'Columns' button at the bottom of the table where you can adjust the columns shown.
- For example, if you want the expense category column to show in the expenses list:

<video width="100%" controls>
  <source src="/assets/videos/faq/add_category_column_to_expenses.mp4" type="video/mp4" />
</video>

- The column change to Expenses (showing Category column) also takes effect in every client's Expenses list page (expenses linked to the client):
  ![Client's expenses](/assets/images/faq/client_example_expenses_linked.png)
