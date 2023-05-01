---
extends: _layouts.user_guide 
section: content
---

# Configurações Avançadas

<h2 id=invoice_design>Design de Fatura</h2>

Essas configurações governam a personalização do design e layout padrão do documento usado por padrão em novas faturas, cotações e créditos.

### Configurações Gerais

#### Personalizar e Visualizar

Este botão leva você a um editor de código de modelo muito avançado, com um gerador de visualização ao vivo. As instruções para esses recursos podem ser encontradas em <a href="https://invoiceninja.github.io/docs/custom-fields/">Personalizações de PDF</a>. Você pode visualizar os modelos de design de fatura aqui, antes de selecionar um para usar permanentemente.

#### Configurações de Modelo

* **Design de Fatura** - Selecione um modelo de design padrão para faturas.

* **Design de Cotação** - Selecione um modelo de design padrão para cotações.

* **Design de Crédito** - Selecione um modelo de design padrão para créditos.

* **Layout da Página** - Escolha configurar seus documentos em modo retrato ou paisagem.

* **Tamanho da Página** - Pré-formata as renderizações em PDF de suas entidades para serem mais adequadas a determinados tamanhos de página de impressora. Normalmente, selecione o tamanho de página mais comum A4, o padrão, a menos que você tenha requisitos de impressão específicos em casa.

* **Tamanho da Fonte** - Ajuste o tamanho da fonte padrão de acordo com sua preferência. Padrão 7.

* **Fonte Primária** - Padrão Roboto. Uma fonte personalizada padrão para modelos de documentos.

* **Fonte Secundária** - Padrão Roboto. Uma fonte personalizada secundária padrão para modelos de documentos.

* **Cor Primária** - Padrão #0c45a3. Uma cor personalizada padrão usada por modelos de documentos.

* **Cor Secundária** - Padrão #7081e0. Uma cor personalizada secundária padrão usada por modelos de documentos.

* **Colunas Vazias** - Padrão Mostrar. Opcionalmente, oculte colunas na lista de itens que não possuem valores para preencher.

### Detalhes do Cliente, Detalhes da Empresa, Detalhes da Fatura, etc.

Uma lista personalizável de dados que preenchem seções de seus documentos, com os dados inseridos no registro associado.

* **Adicionar Campo** - Selecione a partir de uma lista de valores de detalhes de registro disponíveis, para incluir na seção do registro em novos documentos.

* **Redefinir** - O botão na parte inferior redefine a lista de itens para seus valores padrão.

A seguir, está uma lista das seções incluídas em vários documentos, faturas, cotações, créditos, e cada item na lista tem sua própria guia no menu de configurações de Design de Fatura, para personalizar os valores que serão apresentados em seus documentos gerados.

* **Detalhes do Cliente** - Os campos adicionados e removidos aqui afetam a seção de seus documentos que imprimem valores de registro do cliente.

* **Detalhes da Empresa** - Os campos adicionados e removidos aqui afetam a seção de seus documentos que imprimem valores de registro da empresa.

* **Endereço da Empresa** - O endereço da empresa é frequentemente apresentado em outro local na página, então é separado em sua própria seção aqui também.

* **Detalhes da Fatura** - Esses campos preenchem valores do próprio registro de fatura, para criar a seção que descreve qual fatura é essa.

* **Detalhes da Cotação** - Esses campos preenchem valores do próprio registro de cotação, para criar a seção que descreve qual cotação é essa.

* **Detalhes do Crédito** - Esses campos preenchem valores do próprio registro de crédito, para criar a seção que descreve qual crédito é esse.

* **Colunas de Produto** - Uma lista detalhada de colunas para incluir das entradas de detalhes do produto, para quaisquer itens de produto incluídos em sua fatura, cotação ou crédito.

* **Colunas de Tarefa** - Uma lista detalhada de colunas para incluir das entradas de detalhes da tarefa, para quaisquer itens de tarefa incluídos em sua fatura, cotação ou crédito.

* **Campos Totais** - Uma lista de todos os valores contábeis, com tanto ou tão pouco detalhe quanto você desejar apresentá-lo em suas faturas.

<h2 id=custom_fields>Campos Personalizados</h2>

As opções de Campos Personalizados controlam até 4 campos personalizados para incluir em todos os registros de entidade, para descrever as entidades que podem ser mostradas em seu PDF e transações documentadas, ou mantidas apenas para registros administrativos. Você pode usar esses campos para adicionar detalhes sobre uma licença de bebidas para sua própria empresa, detalhes sobre associações para clientes ou certificações de seus funcionários atribuídos a tarefas, ou outros detalhes.

Existem 5 opções diferentes para tipos de campo, independentemente do tipo de registro a que o campo personalizado se aplica. Em cada caso, você selecionará um tipo de campo à direita, e o valor que você inserir à esquerda representará o nome desse campo personalizado em formulários e na interface do usuário do administrador.

Para incluir um campo personalizado, basta dar um nome ao campo. Sem um nome de campo, ele não aparecerá em seus registros de entidade. Para remover um campo personalizado, basta excluir completamente o nome do campo.

* **Texto de Linha Única** - Aceita simplesmente uma linha de texto arbitrário para uma entrada.

* **Texto de Múltiplas Linhas** - Aceita várias linhas de texto arbitrário, mais adequado para notas mais detalhadas.

* **Alternar** - Este campo é adequado para declarações verdadeiras / falsas ou estados sim / não. Alternar personalizado para status de associação / licença ativa, opt-in do funcionário para turnos noturnos ou valor de caixa de seleção para produtos em estoque.

* **Dropdown** - Isso gera um campo com um menu suspenso para selecionar em uma lista, e você será imediatamente solicitado a apresentar uma lista separada por vírgulas de valores para preencher o menu suspenso.

* **Data** - Um campo de data solicita um valor de data e, na interface do usuário do administrador, até apresentará um widget para seleção de data para ajudar a formatar o valor do campo. Bom para datas de validade de licenças / certificados, data de fabricação do produto, etc.

Cada um desses 5 tipos de campo pode ser atribuído a até 4 campos personalizados por tipo de entidade, selecionáveis nas guias na parte superior da página de configurações de Campos Personalizados.

* **Empresa** - Esses campos personalizados se aplicam ao registro da empresa, como o da sua empresa especificamente.

* **Clientes** - Esses campos personalizados se aplicam a um registro de cliente ou aos registros de contato individual aninhados em um registro de cliente.

* **Produtos** - Esses campos se aplicam a cada registro de produto, para descrever melhor os itens em seu inventário.

* **Faturas** - Além de ter 4 opções de campo personalizado para seus registros de fatura, você também pode adicionar um campo de sobretaxa. O nome do campo é inserido aqui e você seleciona se deseja ou não aplicar imposto. O mesmo imposto aplicado a toda a fatura, caso contrário, está isento dele. Do portal do administrador, você verá o novo campo de sobretaxa listado em todas as faturas acima das opções de queda de impostos, e ele esperará que você atribua um valor em dólares arbitrário para cobrar do cliente.

* **Pagamentos** - Campos personalizados que aparecem nos registros de pagamento.

* **Fornecedores** - Campos personalizados para ajudar a descrever ainda mais os fornecedores de sua empresa, como seus termos de crédito com eles.

* **Despesas** - Adicione mais detalhes aos seus registros de despesas com campos personalizados para uma categoria de imposto de suas despesas para ajudar no final do ano.

* **Usuários** - Esses campos personalizados adicionam detalhes aos registros de conta de usuário para usuários registrados no portal do administrador. Este seria um bom lugar para colocar detalhes do funcionário se você planeja usar o sistema de tarefas ou tem muitos usuários para gerenciar.

<h2 id=generated_numbers>Números Gerados</h2>

Os números gerados contêm uma coleção de variáveis que permitem personalização muito refinada de números gerados para qualquer entidade na aplicação.

### Configurações

![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")

A guia de configurações contém as opções mais gerais que se aplicam à geração de números. As outras guias fornecem opções mais específicas que se aplicam exclusivamente a cada tipo de entidade. As regras aqui se aplicam amplamente a todos os tipos de entidade.

* **Preenchimento de Número** - O menu suspenso de preenchimento de número indica quantos zeros à esquerda você deseja antes de cada número. O preenchimento padrão é de 3 zeros à esquerda, ou seja, 0001, 0002, 0003.

* **Gerar Número** - A opção de gerar número permite personalizar QUANDO o número é aplicado, existem duas configurações; Quando

# Reset Counter
Generated counters can be reset at a variety of frequencies. It is important to note that in order to reset the counter, you must combine enough unique variables to ensure that the generated counter will still be unique. For example - if you use an annual reset counter for new entities, it would be a perfect addition to include the year at the beginning of the invoice number.

## Clients, Invoices, Recurring Invoices, Payments, etc.

![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Client generated numbers")

The various entity records available that generated numbers apply to, are all listed with their own tabs at the top, for you to customize the behaviours of the number generation for each respective entity type.

* **Number Pattern** - Single line text field you can manually edit to finely tune your generated numbers. Create a rule that outlines how new numbers will be generated.

```bash
{$date:y}-{$counter}
```

This example of a number pattern will produce a number like this, for the 9th count in 2021: 2021-0009

Care to ensure you are adding enough unique data to the number patterns if you are using the *Reset Counter* feature, to prevent counter collisions.

* **Number Counter** - The number counter is manually editable, but you can create counter collisions if you're not careful. The number counter for any given entity type states the progress of the number counter for that entity.

Also, at the bottom you will see some useful information to help you customize your *Number Pattern* more effectively. The large button **View Date Formats** links to a page with a PHP style guide. Below that, every entity type has it's own list of variables that can be used to add further customization to the *Number Pattern*.

## Email Settings

These settings govern the behavior, appearance, and other settings for emails sent by Invoice Ninja software on behalf of your company.

* **Reply-To Name** - Specify a *reply-to name* to put at the top of your automated emails, such as to forward support requests to the appropriate contact.
* **Reply-To Email** - Specify the *reply-to email* of the user clients should contact for support.
* **BCC Email** - Blind Carbon Copy (BCC) email gets sent to a comma separated list of your specified email addresses. BCC contact email addresses cannot be seen by any of the recipients of the email messages.
* **Email Design** - Select a design template for the appearance of your emails.
* **Email Signature** - Include a signature message along with all of your company email messages. Multiple lines of text here for you to enter your custom signature. HTML tags are respected here for formatting your email signature.
* **Send Time** - Any scheduled reminders for the day will get sent at this time.
* **Attach PDF** - Turning on this switch will send invoices as PDFs attached to your emails. By default, your emails all have links to view the documents on the client portal, but it may be preferable to send the PDF directly.
* **Attach Documents** - When enabled, any files included in the *Documents* tab of the invoice, or other record, are attached to your emails to the clients. Otherwise they can be viewed through the link on the client portal.
* **Attach UBL** - International standard Universal Business Language (UBL). UBL documents are XML business documents such as purchase orders and invoices. Enabling this feature attaches an XML document along with the PDF invoice. Normally all the XML information is embedded in the PDF but some users prefer or cannot read the embedded XML data in a PDF.

## Client Portal

These settings govern the behavior, function, and presentation of the Client Portal.

There are four tabs in this setting panel, with unique features in each of them to cover.

### Settings

These settings control the basic or general function and behavior of the client portal.

* **Client Portal** - Enable or disable the client portal. Disabling it will send all links to the client portal to a page that says the application has been blocked by the administrator. Generally enabled by default.
* **Tasks** - Disabled by default. Enable it to present a tab on the left hand side for clients, to view Tasks that are assigned to them, whether invoiced or not. Clients can see the tasks in a list, with columns for the task description, project name, status, and total duration. This can allow clients to see your company's progress on tasks for them so far, and give them an overview of your project work for them.
* **Client Registration** - Enabling this will allow new users to register themselves, and generate their own client entries in your database through a registration link on the client portal.
* **Document Upload** - Enable allowing your clients to upload documents to the server, which will be attached as documents to their own client records. In the client portal, they will see the option to drag and drop or click to upload files with a large button across the screen under the Documents tab.
* **Storefront** - Enables API access to create invoices automatically. After enabling, it will generate a company key, or API key to be used by your own or another third party's apps to perform invoice creation, and act as an automated storefront for your company's products or services.
* **Terms of Service** - Custom, multi-line text field will be presented as your terms of service, in a discrete, clickable link at the bottom of every page of the client portal.
* **Privacy Policy** - Another custom, multi-line text field will be presented as your Privacy Policy, in a discrete, clickable link at the bottom of every page of the client portal, right next to the Terms of Service.

### Authorization

These settings govern authorization, accountability, and authentication features for the client portal and client's invoices.

* **Password Protect Invoices** - Disabled by default. When enabled, clients will be asked to set a password the first time they view their invoices. From now on they will need to enter this password.
* **Invoice Terms Checkbox** - Prompts the client to accept the invoice terms when making a payment for an invoice in the client portal.
* **Quote Terms Checkbox** - Prompts the client to accept the quote terms when confirming the quote in the client portal.
* **Invoice Signature** - Require client to provide their signature on the screen with a mouse or touch screen, when paying an invoice on the client portal.
* **Quote Signature** - Require client to provide their signature on the screen with a mouse or touch screen, when confirming a quote on the client portal.
* **Show on PDF** - Show the client's signature on the invoice/quote PDF after it has been signed.

### Messages

These are messages to be presented to clients at various screens of the client portal.

* **Dashboard** - From the dashboard page, the client will be greeted by this message.
* **Unpaid Invoice** - When viewing an unpaid invoice, the client will see this message.
* **Paid Invoice** - Client will see this message when viewing a paid invoice.
* **Unapproved Quote** - Client will be greeted by this message when opening a quote that is pending approval.

### Customize

Here we can customize the appearance of the client portal a little more.

* **Header** - Multi-line text value to be presented with a solid bar on its own row at the top of every page in the client portal.
* **Footer** - Multi-line text value to be presented with a solid bar on its own row at the bottom of every page in the client portal.
* **Custom CSS** - Enter your own custom CSS code to replace the stock CSS code of the client portal.
* **Custom JavaScript** - Enter any custom JavaScript code you would like to embed on the client portal also here.

## Templates & Reminders

Here we have one *edit* tab with some depth for control, and a *preview* tab, to see our changes. This allows us to customize the messages that get included with your invoice, quote, payment, or reminder emails.

* **Template** - A drop down select menu to choose the email template we are going to modify. Invoices, quotes, payments, reminders 1, 2, 3, etc. **Reminders** are going to have more depth to customize, and their unique options will appear when you select a reminder template. See below.

# Invoice Ninja Email Template

This document provides information on how to customize and personalize email templates in Invoice Ninja.

## Subject

The subject line of an invoice email defaults to "New invoice $number from $company.name", with values sourced from your company data and records per message. You can select different values from the menus below, according to your template category, to further customize the message in your email template subject lines.

## Body

The default message body for an invoice email is:

```
<p>To view your invoice for $amount, click the link below.</p><div class="center">$view_link</div>
```

The email message body accepts basic HTML formatting for additional customization, and like with the subject, you may also add other values to your body message, by selecting from the appropriate list of values below.

The categories below are tabs to select values to customize and personalize your message templates with, select the tabs to see the values ($amount, $due_date, etc) available for your template to get the relevant values in your messages. Invoice and Quote template types have a slightly different set of available values, populating from the original invoice, or quote respectively.

The values below are mostly self-explanatory. **Invoice / Quote** tab offers values populated from the relevant invoice or quote being emailed about. **Client** tab offers values populated from the relevant client entry. **Contact** tab offers values relevant for the first contact selected in the invoice record. **Company** tab offers values from your own company record, to present information about your own company. **User** tab offers values that represent the logged in user representing your company, who is sending the email message. You can see what the values look like in an example message under the *Preview* tab.

### Reminder Templates

When you select a reminder from the template list at the top of the edit tab, you will see new options appear specific to the reminders.

* **First, Second, and Third Reminders**
  * **Days** - A simple integer is accepted here for the number of days before sending the reminder email.
  * **Schedule** - When to send the email reminder, offset by the number of days chosen.   
    *After the invoice date* - Reminder sent days after the invoice date.
    *Before the due date* - Reminder sent days before the invoice due date.
    *After the due date* - Reminder sent days after the invoice due date.
  * **Send Email** - An on/off toggle switch, to enable sending emails automatically for this reminder message.
  * **Late Fee Amount** - Enter a dollar value for a flat late fee charge.
  * **Late Fee Percent** - Enter a percent value to apply a late fee rate as a percent of the remaining balance.

* **Endless Reminders**
  * **Send Email** - An on/off toggle switch, to enable sending emails automatically for this reminder message.
  * **Frequency** - A drop down menu to select the frequency of sending automated, endless reminder emails, once first, second, and third reminders are exhausted.

## Group Settings

Group settings is another category with a lot of depth, but most of the topics are covered exactly already because Group settings is mostly about enabling specific basic or advanced settings on a per-group basis, allowing you to build unique experiences for certain collections of clients.

The first step is to create a group, which is very simple, and only requires a group name. Create a group with the "+" icon in the top left corner of the group settings panel. Give it a name and click "Save".

Select your group. You will see an *Overview* tab and a *Documents* tab. From the *Documents* tab you can upload files like most other Documents tabs, they will not be seen anywhere other than the admin portal. The *Overview* tab has two options, an interactive Clients button, where you can view a list of clients in the group, or add clients to the group, and a *Configure Settings* button.

Note: To remove a client from a group, it is easiest to edit the client directly and change their group or remove it.

### Configure Settings

Customize any options here to override the regular settings for each respective category, or leave a field blank to use the regular settings.

* **Company Details** - Configure a custom company profile for the client group. This includes custom invoice terms, footers, and autobill settings.
* **Localization** - Configure a custom localization for your clients in other countries/time zones, or using different languages, currencies, etc.
* **Payment Settings** - Change autobill, and over/under payment permissions for the group. Configure payment gateways for the group.
* **Task Settings** - Set specific task rate, and rule for presentation of tasks in the client portal, for the group.
* **Invoice Design** - Custom invoice design templates, specific to the group.
* **Generated Numbers** - Use a unique number counter and set of numbering rules for the group, apart from the rest of your clients.
* **Email Settings** - Change the default generic settings for emails sent out to group members by Invoice Ninja.
* **Client Portal** - Customize the client portal, exclusively for group members.
* **Templates & Reminders** - Have special rules for templates & reminders for your group, personalize your messages further, or be more or less restrictive about late payments with certain groups.
* **Payment links** - View and edit general, and group-specific payment link settings.
* **Workflow Settings** - Change some of the admin portal UI workflow settings when interacting with invoices or quotes from client's group.

## Payment Links

There are three views to the Payment links panel. The payment link list, viewing a payment link, and creating or editing a payment link.

From the payment link list you can select existing payment links to view, or edit them. You can also add new payment links with the "+" character in the top left corner of the payment links list panel.

When viewing a payment link you will see the initial cost of the payment link service at the top. Below it, is a link you can copy and share to clients, or post on your storefront, which prompts clients to pay for, and setup the selected payment link, which creates the invoice and payment records for you when they do that. Finally you will see links to filtered lists of invoices, or recurring invoices that are directly related to your payment link.

When you edit a payment link there are three tabs with unique features to control the payment links with.

### Overview

* **Name** - The name of your monthly payment link, presentable to clients.
* **Group** - Assign payment links to groups, to allow group members to switch between payment links available exclusively to them based on their group membership. Payment links not assigned to a group, will be visible to users who are not in a group only. Use this to make special payment link models available to certain VIP clients, or etc.
* **Products** - A searchable, and selectable drop down list of available products from the company. These products are issued as a one-time purchase on the payment link model. For example, a setup service fee.
* **Recurring Products** - Also a searchable, and selectable drop down list of available products. These products will appear on recurring invoices, for example, as the regular payment link fee.

### Settings

* **Frequency** - A drop down selection list to choose a regular interval to charge the clients for this payment link model.
* **Auto bill**
  * *Enabled* - A user a payment will be automatically attempted if a payment method is stored on file.
  * *Enabled by default* - The client will be given the option to allow payment methods to be stored with the radio box selected.
  * *Disabled by default* - The client will be given the option to allow payment methods to be stored with the radio box unselected.
  * *Disabled* - No option is given, and auto billing is disabled.
* **Promo Code** - An optional promo code to reward the client if they enter the correct code at checkout.
* **Promo Discount** - Select from the drop down menu on the right, either "Percent" or "Amount" to discount the client by a flat rate, or percentage of the invoice amount for that period. On the left, in the text field, enter the rate to discount by.
* **Return URL** - Manually specify a URL to return the clients to when they are finished paying for and setting up their payment link.

# InvoiceNinja Settings

## Payment Link Settings

* **Allow Query Overrides** - This toggle switch enables API calls to the backend to override payment link requests, in order to append additional information to the payment link requests automatically when the client interacts with your storefront's website or app.
* **Allow Plan Changes** - Allow clients who are on this payment link, the option to manually switch payment link models. Different payment links available to change to, must be assigned to the same group. Note, you can allow switching off of payment link A onto payment link B, and disallow switching off of payment link B, by not enabling *Allow Plan Changes* for payment link B only.
* **Allow Cancellation** - Allow clients to manually request payment link cancellations from the client portal. When enabled, optionally set a time window for clients to qualify for a refund on their payment link.
* **Trial Enabled** - When enabled, the initial "Pay Now" button becomes a "Start Free Trial" button with no demand for payment details at the time of trial beginning. When enabled, you should select a *Trial Duration* below in the newly spawned drop down menu. Otherwise the trials will be indefinite.
* **Per Seat Enabled** - Toggle on or off to enable a maximum capacity, or seat limit for the payment link. When enabled, enter a number on the single text line spawned below, to specify the number of maximum seats.

### Webhook

Webhooks allow your web based applications to communicate with each other. These settings here, govern rules for outgoing webhooks when payment links are signed up for by clients.

* **Webhook URL** - Enter the URL of the web service you wish to send your notification to.
* **REST Method** - A drop down menu to select POST, or PUT.
  * **POST** - When you want to create a new entry, or record.
  * **PUT** - Use PUT to modify an entry or record. The PUT functionality will cause the original entry or record to be fully replaced with the new incoming data.

Below you can set as many Key-Value header pairs as you like. This is a JSON payload,

* **Header Key** - Enter the appropriate HTTP header as per available headers for InvoiceNinja's JSON API.
* **Header Value** - Enter the value to be assigned to this custom HTTP header.

## Workflow Settings

A few settings to automate behaviors for handling invoices and quotes with.

### Invoices

* **Auto Email** - Enabled by default, will automatically send emails to clients when a recurring invoice is created for them.
* **Auto Archive** - Disabled by default, will automatically archive invoice records when they are fully paid.
* **Lock Invoices** - Automatically lock invoices to prevent changes:
  * **Off** - Disable this feature.
  * **When Sent** - Lock invoice after it has been sent to the client.
  * **When Paid** - Lock invoice only after the client has fully paid off the invoice.

### Quotes

* **Automatically Convert** - Enabled by default. Automatically convert the quote you sent into an invoice, after the client has approved the quote.
* **Auto Archive** - Disabled by default. Automatically archive quotes, after they have been successfully converted into invoices.

## User Management

There are three views to the User Management panel. The users list, viewing a user, and creating or editing a user, and their permissions in the admin portal.

When viewing a user, you see their email address at the top, which is used to sign into the admin portal with. Below, you can see a list of buttons for all the client, invoice, quote, task, etc, records that the user has created, or been assigned. The buttons will open user-filtered lists of the records for each respective category.

When at the edit user pane, you will see three tabs to customize user settings with:

### Details

* **First Name** - The user's first name.
* **Last Name** - The user's last name.
* **Email** - The user's email address. Mandatory for the user to log in with. When the user's account is first created, they will get an email from the InvoiceNinja server to verify their email address and log in.
* **Phone** - Optionally add a phone number to your user entries for reference.

### Notifications

A full list of events is shown here, for when an invoice, quote, payment, or credit has any sort of action taken, such as being created, being viewed, expiring, successful or failed payment, etc.

Enable email notifications to the user for any number of these events. Choose a notification behavior for each event as preferred:

* **None** - No notifications will be sent for this event.
* **Owned by User** - Only when the event occurs to a record owned by the user, will the notification be sent.
* **All Records** - Notify the user whenever this event occurs regardless of who owns the record.

### Permissions

* **Administrator** - an on/off switch to elevate the user to Administrator level privileges.
  * When disabled, a list of permission categories appears below, which the user will be subjected to. Grant, or deny permissions to create, edit, or view any record category here; clients, invoices, quotes, tasks, vendors, products, etc.

[next page](/docs/custom-fields)