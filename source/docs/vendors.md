---
extends: _layouts.docs
section: content
---

# Vendors

The *Vendors* module enables you to manage a list of vendors that your organization purchases goods or services from for business related purposes.  You can enter all the necessary relevant contact information, and billing information for your vendor into a vendor record.  Expense records track your individual purchases, and get linked to vendor records in order to organize the sources of your expenses.  Managing vendor records is a key part of the management of your business or organization.

## Vendor Module View

When you select the *Vendors* module from the navigation menu on the left hand side of the admin portal, by default you are brought to a table view listing all of your current vendor records.  

The table view allows you to sort vendors by the available column types at the top of the list.  You can add/remove columns from the table view with the *Columns* button in the bottom right corner of this screen.  You can use filters to view archived or deleted vendors, and create new vendors from this screen also.  Each vendor in the table will have a kebab menu to the left of its entry in the table, with available functions to manage the vendor record or take actions against it, such as editing it, creating a new expense record linked to that vendor, archiving, and deleting.

## Viewing a Vendor

Select a vendor from the table or list view by clicking on the vendor's line, to bring up the preview panel.  There are 3 tabs under the vendor preview panel.  The edit button at the top of the screen brings you to a vendor edit screen, and the kebab menu next to it is full of a list of any actions you can take against the vendor record.

The two buttons at the bottom of the vendor preview panel are "New Expense" and "Archive".  New Expense will create a new expense record linked to the vendor, and Archive will archive the vendor which will hide it from the default table view unless you change your filters.

### Overview

The vendor overview tab shows general information about the vendor.  

* The total value of all expenses from this vendor is displayed at the top.  
* Private and public notes are highlighted, and prefixed with a lock symbol for private notes, and a letter "i" in a small circle for public notes.
* A list of multifunctional interactive buttons link to the user, expense records, and recurring expense records assigned to the vendor.

### Details

The details tab has a list of other specifics about the vendor, such as their website, contact information, billing address, and more.  Clicking on any of these listed items will copy the value of the item to your clipboard.

### Documents

Here you can upload files such as pictures, documents, and more to link to your vendor record.  This will mostly only be for your purposes in the admin portal however.

## Creating and Editing a Vendor

Creating and editing a vendor in the desktop layout will take you to a new screen with all available fields presented in one view.  On the mobile layout it is broken down into tabbed sections, similar to the way they appear in desktop layout, as follows:

### Details

* **Name** - Enter the name of your vendor here.
* **Number** - This is a generated number for your record keeping purposes to identify different vendors in the system.  Customize the number patterns under *Settings* > *Generated Numbers*.
* **ID Number** - An optional and generic field for business ID numbers wherever applicable.
* **VAT Number** - An optional field to support recording "Value Added Tax" numbers for countries like those in the European Union which require tracking this for tax purposes.
* **Website** - The website of your vendor can be entered here.
* **Phone** - A primary contact phone number for the vendor.

### Contacts

You can add as many contacts as you like to a vendor record, to represent individuals or departments you may need to contact at some point from the vendor.

* **First Name** & **Last Name** - A first and last name for an individual, or simply enter a department name as a first name.
* **Email** - The preferred email address for the contact.
* **Phone** - The preferred phone number for the contact.

### Notes

* **Currency** - Optionally include a note about what the vendor's preferred currency is.  New expense records linked to the vendor will automatically be populated with this currency choice.
* **Public Notes** - Public notes may see future implementation, or be included in custom templates for invoices and other records.  This is a good placeholder for general descriptions of a vendor.
* **Private Notes** - Only viewable by admin portal users, you may use this field to leave private comments about a vendor for yourself and your coworkers.

### Address

Billing address details for your vendor can be entered here for record keeping purposes.

* **Street** - The street number, and street name.
* **Apt/Suite** - Apartment or suite number.
* **City**
* **State or Province**
* **Postal Code**
* **Country**

  <x-next url=/docs/expenses>Expenses</x-next>

