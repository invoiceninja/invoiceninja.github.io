---
extends: _layouts.user_guide
section: content
locale: en
---

# Taxes

## Manual Taxes

Taxes can be configured manually by following the step [here](/en/basic-settings/#tax_settings) where you can manually define the tax names, rates and how they are applied.

## US Sales Tax calculations

In Invoice Ninja v5.6 we introduce the ability to perform automatic tax calculations, let us provide a brief introduction to help you understand sales tax calculations in the United States.

Sales tax in the U.S. is a consumption tax imposed by the government on the sale of goods and services. It's usually calculated as a percentage and added to the price of a product or service at the point of sale. Unlike some countries where a value-added tax (VAT) is utilized, in the U.S., there is no national sales tax. Instead, sales tax is levied at the state, county, and sometimes even at the municipal level, making it somewhat complex.

This means that the sales tax can vary significantly from one location to another, not just from state to state, but even within a state. For example, in one city, the total sales tax might be 6%, while in another, it might be 9%. Some states, like Oregon and Delaware, don't impose any sales tax at all.

Products and services can also be taxed differently. For instance, some states tax groceries, while others don't. Similarly, some states offer tax holidays, specific times during the year when sales tax is not charged on certain items.

To accurately calculate sales tax, it's important to know:

- The precise location of the sale (the "nexus").
- The type of product or service being sold.
- The current tax rate in that location.
- Invoice Ninja can simplify this process for you by automating the sales tax calculation. It identifies the appropriate tax rate based on the 'ship-to' address on the invoice, and applies it to the taxable items in your invoice. It stays updated with the current tax rates across different locations, ensuring that your invoices are always compliant with the most recent tax laws.

Remember, managing sales tax correctly is not only good for your business operations, but it's also a legal obligation. Having the ability to automatically calculate sales tax will save you time, reduce errors, and ensure that you're collecting the correct amount of tax on each sale, which is crucial for your business's tax reporting and remittance.

## Configure US tax calculations

If you are a hosted Invoice Ninja client with a Pro or Enterprise plan, you can turn on tax calculations with these steps:

### Turn on Calculate Taxes

```bash
Settings > Tax Settings
```

![Turn on tax calculations](/assets/images/taxes/enable_taxes.png)

Navigate to Settings > Tax Settings and turn the Calculate Taxes switch on. A new section will appear for further configuration. It is important to select the Seller (your) subregion, this will be a US state where your business is registered for tax purposes.

![Seller subregion](/assets/images/taxes/seller_subregion.png)

Beneath this is a range of regions where automatic tax calculations are supported. Each section provides additional granularity for where you wish to collect tax. 

![Tax rate configuration](/assets/images/taxes/tax_rate_config.png)

There are essentially two options here, the first is to collect taxes in all states (Tax All), or you can choose Tax Selected and select which states to collect tax by clicking on the Show option which will expose all states. Mark the checkboxes of the states you wish to collect taxes from and then save.

### Update your products

The way sales tax is applied can vary significantly based on the type of goods or services being sold. This is because each state can set its own rules about what is taxable and what isn't. For instance, tangible personal property is usually taxable, but certain types of items like groceries, prescription medicines, and clothing might be exempt from sales tax in some states.

When it comes to services, the rules can get a bit more complex. Some states tax all services, some tax only certain services, while others don't tax services at all. For instance, repair and maintenance services might be taxed in one state, but not in another. Similarly, professional services such as legal or consulting services may be exempt in some states, but taxable in others.

To handle the range of tax possibilities you can assign tax categories to your products.

The available tax categories are as follows:

- Physical Goods
- Digital Products
- Services
- Shipping
- Tax Exempt
- Reduced Tax
- Override Tax
- Zero Rated
- Reverse Tax (Use Tax)

#### Physical Goods

Sales tax on physical goods, also known as tangible personal property, is one of the most common forms of sales tax in the United States. The majority of states charge sales tax on the purchase of physical goods, such as electronics, furniture, and vehicles. However, what is considered taxable can vary from state to state. Certain physical goods like groceries, prescription medicines, and sometimes clothing may be exempted or taxed at a reduced rate in some states. Select this category for physical goods that are taxable.

#### Digital Products

Sales tax on digital products is an evolving area in U.S. tax law, reflecting the increasing shift towards a digital economy. Digital products can include anything from e-books, music and video downloads, to software and digital subscriptions. 

Some states may tax digital goods exactly the same way as physical goods, others may tax only certain types of digital goods, while some states do not tax digital goods at all. For instance, an e-book might be taxed in one state, but could be tax-exempt in another. The tax might also depend on whether the digital good is considered a service or a product, and whether it's delivered on a tangible medium like a DVD or CD.

#### Services

Sales tax on services can be a complex area of taxation in the United States. Unlike tangible goods, which are usually taxable, services are taxed differently across states. Some states tax all services, others tax only specific services, and some do not tax services at all.

For example, professional services such as consulting, legal, and accounting services may be exempt from sales tax in some states, while they are taxable in others. Similarly, personal services like haircuts, repairs and maintenance, or fitness training may be treated differently depending on the state.

#### Tax Exempt

Sales tax exemptions are an important part of the tax landscape in the United States. An exemption means that certain goods or services are not subject to sales tax. The specifics of what products and services are tax-exempt can vary significantly from one state to another.

Common tax-exempt items often include groceries and prescription medicines, as many states aim to reduce the tax burden on essential items. Clothing is another category that is sometimes exempt or taxed at a lower rate, especially in states like Pennsylvania and Minnesota.

#### Reduced Tax

In addition to standard and exempt tax rates, many states in the United States also implement reduced tax rates for certain types of goods or services. These reduced rates are generally applied to make essential items more affordable or to stimulate certain sectors of the economy.

Reduced tax rates can also apply to certain types of services. For instance, some states might apply a lower tax rate to educational services, medical services, or public transportation.

#### Override Tax

In some circumstances you may wish to override the tax rate on certain products that are outside the typical sales tax scope. When selected an Override Tax category, you can also select the tax (if any) that you wish to apply to the product.

#### Zero Rated

Zero-rated tax items are a unique category in the world of sales tax. While it might seem similar to tax-exempt items, there is a crucial difference. When an item is zero-rated, it technically remains taxable, but at a rate of 0%. The key advantage here is that while the end consumer doesn't pay any tax on these goods or services, the businesses involved in the supply chain may still reclaim input taxes (if applicable), something that is not allowed for tax-exempt items.

However, it's important to note that the concept of zero-rated goods is more commonly associated with countries that use a Value Added Tax (VAT) system, such as those in the European Union or Canada. In these systems, certain essential goods like food or books are often zero-rated to reduce the cost burden on consumers, while still allowing businesses to claim back VAT they've paid on inputs.

In the United States, which uses a sales tax system rather than VAT, the concept of zero-rating doesn't apply in the same way. Instead, states usually categorize goods and services as either taxable, exempt, or taxable at a reduced rate.

#### Reverse Tax (Use Tax)

The concept of "reverse tax" is often used in the context of "use tax". In the United States, a use tax is typically a type of tax charged to consumers who purchase goods or services from outside their home state for use in their home state, and where no sales tax has been charged.

Essentially, use tax is the counterpart to sales tax and is designed to discourage consumers from buying out-of-state in order to avoid sales tax. It also helps to level the playing field between in-state retailers (who have to charge sales tax) and out-of-state retailers (who often don't).

The rate of use tax is generally the same as the sales tax that would have been charged if the purchase had been made in-state. Therefore, if you buy an item tax-free from an online retailer located in another state, but you use the item in your home state, you're usually responsible for paying use tax to your state.

Keep in mind, it's typically the buyer's responsibility to calculate, report, and remit use tax to the appropriate tax authority. This can get complicated for businesses making numerous out-of-state purchases. However, some states require larger businesses or those with a significant presence (nexus) in the state to charge use tax at the point of sale, effectively reversing the normal taxation process, hence the term "reverse tax".

![Tax Exempt Product](/assets/images/taxes/exempt_product_tax.png)

### Tax Exemptions

In the realm of sales tax, tax exemptions are specific scenarios where sales tax does not have to be paid on certain goods, services, or transactions. These exemptions are set by the tax authority, often at the state level in the United States, and can vary greatly from one state to another.

Product-based Exemptions: Certain types of goods may be exempt from sales tax. For example, necessities like groceries and prescription medications are often tax-exempt. Clothing is also exempt in some states, and many states offer temporary exemptions for back-to-school supplies during certain periods of the year.

Use-based Exemptions: This refers to situations where an item is used in a way that qualifies it to be tax-exempt. For instance, goods that are purchased for resale are often exempt from sales tax, as the tax will ultimately be paid by the end consumer. Similarly, items used in manufacturing or items purchased by non-profit organizations are often tax-exempt.

Buyer-based Exemptions: In some cases, the buyer's status can lead to a tax exemption. For instance, government agencies, non-profit organizations, and certain other groups may not have to pay sales tax on their purchases.

Transaction-based Exemptions: Certain types of sales transactions may be exempt from sales tax. For example, sales involving interstate commerce may be exempt in some cases.

If you sell goods and services to a client who is tax exempt, you can mark them as tax exempt by editing their client record and setting the tax exempt switch on.


![Tax Exempt Product](/assets/images/taxes/tax_exempt_client.png)

## Configure EU tax calculations

Currently we only support tax calculations for German based users. Taxes can be calculated for DE -> DE transactions and also DE -> EU countries. You'll want to configure your product categories accordingly to whether they are exempt, reduced or standard tax.

A new feature is the ability of Invoice Ninja to verify a clients VAT number. Where a valid VAT number is present, the tax calculation will take this into consideration and apply or remove the tax depending on the client location.

<x-next url=/en/transactions>Transactions</x-next>