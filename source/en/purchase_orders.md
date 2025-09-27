---
extends: _layouts.user_guide
section: content
locale: en
---

# Purchase Orders

A purchase order (PO) is a legally binding document that a buyer uses to request goods or services from a supplier. It serves as an official offer to purchase specific items at a specified price and is typically used by businesses in the procurement process. The PO includes details such as the type, quantity, and cost of the products or services being requested, as well as any relevant delivery or payment terms.

Once a supplier accepts the PO, it becomes a binding contract between the buyer and seller.

## Creating a Purchase Order

<video width="100%" controls>
  <source src="../../assets/videos/purchase_orders/create_purchase_order.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

Creating a purchase order has a similar work flow as when creating an invoice. Prior to creating a Purchase Order, a Vendor needs to be present in the system. A Vendor can be created directly from the Purchase Order page, or via the Vendors tab.

### Details

The _Details_ panel includes the most basic information about the purchase order:

- **Vendor** - You must select a vendor from the list to apply your purchase order to.
- **Purchase Order Date** - Automatically generated with today's date, is simply the date of the purchase order.
- **Due Date** - Optionally, you may specify an end date that the purchase order is valid until, to limit how long you will honor it.
- **Partial/Deposit** - Optionally, specify a required partial payment or deposit on the purchase order, with its own due date, separate from, and owed before the purchase order due date for the purchase order's full amount.
- **Discount** - Enter a discount amount to apply to the purchase order, either as a percentage, or a flat rate.

### Items

Here you see a list of the line items included on the purchase order. You can add _Products_, to the purchase order to bill your vendor for. Each item on the list will have these fields available:

- **Product** - The name of the product item being applied.
- **Description** - A description of the line item. Descriptions can include HTML code, or Markdown code formatting (When enabled under _Settings_ > _Account Management_).
- **Unit Cost** - The cost of a single product for the line item.
- **Quantity** - The number of products to be multiplied by the unit cost of that line item.

### Bottom Tabs

The Purchase order can be decorated with additional terms, footer, and notes below.

![Bottom Tabs](/assets/images/purchase_orders/purchase_order_bottom_tabs.png "Bottom Tabs")

#### Terms

Describe any terms or conditions for your vendor, as they relate to the Purchase Order, and optionally _Save as default terms_.

#### Footer

Any text notes to be included at the bottom of the Purchase Order. A good spot for less important disclaimers. Optionally _Save as default footer_.

#### Public Notes

Any text notes to add detail or context to the purchase order for you and the vendor.

#### Private Notes

Private text notes, not printed on the Purchase Order PDF or viewable by the vendor. These notes can only be seen by users of the admin portal.

#### Settings

The _Settings_ panel includes some additional options for the Purchase Order:

- **User** - Optionally change the user who is marked as creator of the Purchase Order.
- **Project** - Optionally link the Purchase Order to a _Project_
- **Client** - Optionally assign a _Client_ to the Purchase Order
- **Exchange Rate** - Optionally, for when your vendor has another currency than your own as their default, you will be able to manually specify the exchange rate to automatically calculate what you will owe in their own default currency.
- **Design** - Choose a template design from one of the premade templates, or one of your own custom designs. You can customize Purchase Order designs under _Settings>Invoice Design_

#### Documents

Upload pictures or documents to your Purchase Order, to include for your vendor.

## Lifecycle of a purchase order

### Draft

The Draft status is the first status in the lifecycle of a purchase order. In this status, changes can be made to the purchase order and the purchase order is hidden completely from the vendor. Draft purchase orders are inactive until either emailed to the vendor or marked as sent.

<x-warning>
Once a draft purchase order has been emailed/marked as sent its status cannot be changed back to draft.
</x-warning>

### Sent

A purchase order is marked as sent when it has been emailed to the vendor or marked as _sent_ in the admin panel.

### Accepted

![alt text](/assets/images/purchase_orders/purchase_order2.png "Creating purchase order.")

When a purchase order is **accepted** by the vendor, the status of the purchase order changes to accepted. The vendor is able to perform this via the Vendor Portal. The vendor can also be asked to agree to additional terms and place a signature on file for this purchase order during the acceptance process.

### Received

When the goods have been received, the administrator is able to mark the purchase order as accepted. At this point, if Inventory Tracking is enabled, the stock levels of the products/SKUs are incremented.

### Cancelled

If the purchase order is cancelled, it is placed in a cancelled state.

### Deleted

A purchase order can be marked as deleted if the following conditions have been met

- The purchase order has a status of Sent / Draft.

What happens when a purchase order is deleted?

- purchase order status set to deleted
- The purchase order number is appended with **\_deleted** in order to allow reuse of purchase order numbers.

### Archived

Archiving a purchase order simply removes the purchase order from the purchase order list view. Archiving a purchase order keeps your list views clean and tidy.

<x-warning>
When a purchase order is archived no further modifications can be made to the purchase order. To modify the purchase order you will need to Restore the purchase order first.
</x-warning>

### Restored

Restoring a purchase order from the archived or deleted state will set the purchase order back to its previous state prior to archiving.

<x-next url=/en/tasks>Tasks</x-next>
