import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/invoice-ninja-api-reference",
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "api-reference/auth",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/post-login",
          label: "Login",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Clients",
      link: {
        type: "doc",
        id: "api-reference/clients",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-clients",
          label: "List clients\n",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-client",
          label: "Create client",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-client",
          label: "Show client",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-client",
          label: "Update client",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-client",
          label: "Delete client",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-client",
          label: "Edit Client",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-clients-create",
          label: "Blank Client",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-clients",
          label: "Bulk client actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-client",
          label: "Add client document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/purge-client",
          label: "Purge client",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/merge-client",
          label: "Merge client",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/client-statement",
          label: "Client statement PDF",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/reactivate-email",
          label: "Removes email suppression of a user in the system",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/update-client-tax-data",
          label: "Update tax data",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Locations",
      link: {
        type: "doc",
        id: "api-reference/locations",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-locations",
          label: "List locations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-location",
          label: "Create location",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-location",
          label: "Show location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-location",
          label: "Update location",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-location",
          label: "Delete location",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/get-locations-create",
          label: "Blank Location",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-locations",
          label: "Bulk location actions",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      link: {
        type: "doc",
        id: "api-reference/products",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-products",
          label: "List products",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-product",
          label: "Create Product",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-product",
          label: "Show product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-product",
          label: "Update product",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-product",
          label: "Delete product",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-product",
          label: "Edit product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-products-create",
          label: "Blank product",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-products",
          label: "Bulk product actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-product",
          label: "Add product document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Invoices",
      link: {
        type: "doc",
        id: "api-reference/invoices",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-invoices",
          label: "List invoices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-invoice",
          label: "Create invoice",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-invoice",
          label: "Show invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-invoice",
          label: "Update invoice",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-invoice",
          label: "Delete invoice",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-invoice",
          label: "Edit invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-invoice-create",
          label: "Blank invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-invoices",
          label: "Bulk invoice actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-invoice",
          label: "Custom invoice action",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api-reference/download-invoice-by-invitation",
          label: "Download invoice PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-invoice-delivery-note",
          label: "Download delivery note",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-invoice-document",
          label: "Add invoice document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Recurring Invoices",
      link: {
        type: "doc",
        id: "api-reference/recurring-invoices",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-recurring-invoices",
          label: "List recurring invoices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-recurring-invoice",
          label: "Create recurring invoice",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-recurring-invoice",
          label: "Show recurring invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-recurring-invoice",
          label: "Update recurring invoice",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-recurring-invoice",
          label: "Delete recurring invoice",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-recurring-invoice",
          label: "Edit recurring invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-recurring-invoices-create",
          label: "Blank recurring invoice",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-recurring-invoices",
          label: "Bulk recurring invoice actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-recurring-invoice",
          label: "Custom recurring invoice action",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api-reference/download-recurring-invoice",
          label: "Download recurring invoice PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-recurring-invoice",
          label: "Add recurring invoice document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      link: {
        type: "doc",
        id: "api-reference/payments",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-payments",
          label: "List payments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-payment",
          label: "Create payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-payment",
          label: "Show payment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-payment",
          label: "Update payment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-payment",
          label: "Delete payment",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-payment",
          label: "Edit payment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-payments-create",
          label: "Blank payment",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-refund",
          label: "Refund payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/bulk-payments",
          label: "Bulk payment actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-payment",
          label: "Custom payment actions",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-payment",
          label: "Upload a payment document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Quotes",
      link: {
        type: "doc",
        id: "api-reference/quotes",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/download-credit",
          label: "Download quote PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-quotes",
          label: "List quotes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-quote",
          label: "Create quote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-quote",
          label: "Show quote",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-quote",
          label: "Update quote",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-quote",
          label: "Delete quote",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-quote",
          label: "Edit quote",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-quotes-create",
          label: "Blank quote",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-quotes",
          label: "Bulk quote actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-quote",
          label: "Performs a custom action on an Quote",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api-reference/download-quote",
          label: "Download quote PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-quote",
          label: "Upload a quote document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Credits",
      link: {
        type: "doc",
        id: "api-reference/credits",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-credits",
          label: "List credits",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-credit",
          label: "Create credit",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-credit",
          label: "Show credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/delete-credit",
          label: "Delete credit",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-credit",
          label: "Edit credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-credits-create",
          label: "Blank credit",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-credits",
          label: "Bulk credit actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-credits",
          label: "Upload a credit document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Projects",
      link: {
        type: "doc",
        id: "api-reference/projects",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-projects",
          label: "List projects",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-project",
          label: "Create project",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-project",
          label: "Show project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-project",
          label: "Update project",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-project",
          label: "Delete project",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-project",
          label: "Edit project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-projects-create",
          label: "Blank project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-projects",
          label: "Bulk project actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-project",
          label: "Uploads a project document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Tasks",
      link: {
        type: "doc",
        id: "api-reference/tasks",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-tasks",
          label: "List tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-task",
          label: "Create task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-task",
          label: "Show task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-task",
          label: "Update task",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-task",
          label: "Delete task",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-task",
          label: "Edit task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-tasks-create",
          label: "Blank task",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-tasks",
          label: "Bulk task actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-task",
          label: "Uploads a task document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/sort-tasks",
          label: "Sort tasks on KanBan",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Vendors",
      link: {
        type: "doc",
        id: "api-reference/vendors",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-vendors",
          label: "List vendors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-vendor",
          label: "Create vendor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-vendor",
          label: "Show vendor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-vendor",
          label: "Update vendor",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-vendor",
          label: "Delete vendor",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-vendor",
          label: "Edit vendor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-vendors-create",
          label: "Blank vendor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-vendors",
          label: "Bulk vendor actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-vendor",
          label: "Uploads a vendor document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Purchase Orders",
      link: {
        type: "doc",
        id: "api-reference/purchase-orders",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-purchase-orders",
          label: "List purchase orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-purchase-order",
          label: "Create purchase order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-purchase-order",
          label: "Show purchase order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-purchase-order",
          label: "Update purchase order",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-purchase-order",
          label: "Delete purchase order",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-purchase-order",
          label: "Edit purchase order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-purchase-order-create",
          label: "Blank purchase order",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-purchase-orderss",
          label: "Bulk purchase order action",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-purchase-order",
          label: "Custom purchase order actions",
          className: "menu__list-item--deprecated api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-purchase-order",
          label: "Uploads a purchase order document",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/download-purchase-order",
          label: "Download a purchase order PDF",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Expenses",
      link: {
        type: "doc",
        id: "api-reference/expenses",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-expenses",
          label: "Gets a list of expenses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-expense",
          label: "Adds an expense",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-expense",
          label: "Shows a expense",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-expense",
          label: "Updates a expense",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-expense",
          label: "Deletes a expense",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-expense",
          label: "Shows a expense for editing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-expenses-create",
          label: "Gets a new blank expense object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-expenses",
          label: "Performs bulk actions on an array of expenses",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Recurring Expenses",
      link: {
        type: "doc",
        id: "api-reference/recurring-expenses",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-recurring-expenses",
          label: "Gets a list of recurring_expenses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-recurring-expense",
          label: "Adds a recurring expense",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-recurring-expense",
          label: "Shows a recurring expense",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-recurring-expense",
          label: "Updates a recurring expense",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-recurring-expense",
          label: "Deletes a recurring expense",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-recurring-expense",
          label: "Shows a recurring expense for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-recurring-expenses-create",
          label: "Gets a new blank recurring expense object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-recurring-expenses",
          label: "Performs bulk actions on an array of recurring_expenses",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Bank Transactions",
      link: {
        type: "doc",
        id: "api-reference/bank-transactions",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-bank-transactions",
          label: "Gets a list of bank_transactions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-bank-transaction",
          label: "Adds a bank_transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-bank-transaction",
          label: "Shows a bank_transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-bank-transaction",
          label: "Updates a bank_transaction",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-bank-transaction",
          label: "Deletes a bank_transaction",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-bank-transaction",
          label: "Shows a bank_transaction for editing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-bank-transactions-create",
          label: "Gets a new blank bank_transaction object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-bank-transactions",
          label: "Bulk actions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/match-bank-transactions",
          label: "Match transactions",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Reports",
      link: {
        type: "doc",
        id: "api-reference/reports",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-contact-report",
          label: "Contact reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-client-report",
          label: "Client reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-credit-report",
          label: "Credit reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-document-report",
          label: "Document reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-expense-report",
          label: "Expense reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-invoice-item-report",
          label: "Invoice item reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-invoice-report",
          label: "Invoice reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-payment-report",
          label: "Payment reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-product-report",
          label: "Product reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-product-sales-report",
          label: "Product Salesreports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-profit-loss-report",
          label: "Profit loss reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-quote-item-report",
          label: "Quote item reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-quote-report",
          label: "Quote reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-recurring-invoice-report",
          label: "Recurring Invoice reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-task-report",
          label: "Task reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-activity-report",
          label: "Activity reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-client-contact-report",
          label: "Client contact reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-ar-detail-report",
          label: "AR detail report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-ar-summary-report",
          label: "AR summary report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-client-balance-report",
          label: "Client balance report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-client-sales-report",
          label: "Client sales report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-tax-summary-report",
          label: "Tax summary report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-tax-period-report",
          label: "Tax period report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-user-sales-report",
          label: "User sales report",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-project-report",
          label: "Project reports",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-report-preview",
          label: "Report preview",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-export-preview",
          label: "Export preview",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Activities",
      link: {
        type: "doc",
        id: "api-reference/activities",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-activities",
          label: "Returns a list of activities",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-activity-historical-entity-pdf",
          label: "Returns a PDF for the given activity",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/post-activities-entity",
          label: "Entity activity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-activities-notes",
          label: "Activity note",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Bank Integrations",
      link: {
        type: "doc",
        id: "api-reference/bank-integrations",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-bank-integrations",
          label: "Returns a list of Bank Integrations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-bank-integration",
          label: "Adds a bank_integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-bank-integration",
          label: "Shows a bank_integration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-bank-integration",
          label: "Updates a bank_integration",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-bank-integration",
          label: "Deletes a bank_integration",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-bank-integration",
          label: "Shows a bank_integration for editing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-bank-integrations-create",
          label: "Gets a new blank bank_integration object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-bank-integrations",
          label: "Performs bulk actions on an array of bank_integrations",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-refresh-accounts",
          label: "Gets the list of accounts from the remote server",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-remove-account",
          label: "Removes an account from the integration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-account-transactions",
          label: "Retrieve transactions for a account",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Bank Transaction Rules",
      link: {
        type: "doc",
        id: "api-reference/bank-transaction-rules",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-bank-transaction-rules",
          label: "Gets a list of bank_transaction_rules",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-bank-transaction-rule",
          label: "Adds a bank_transaction rule",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-bank-transaction-rule",
          label: "Shows a bank_transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-bank-transaction-rule",
          label: "Updates a bank_transaction Rule",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-bank-transaction-rule",
          label: "Deletes a bank_transaction rule",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-bank-transaction-rule",
          label: "Shows a bank_transaction for editing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-bank-transaction-rules-create",
          label: "Gets a new blank bank_transaction rule object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-bank-transaction-rules",
          label: "Performs bulk actions on an array of bank_transaction rules",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Charts",
      link: {
        type: "doc",
        id: "api-reference/charts",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-chart-totals",
          label: "Get chart data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-chart-totals-v-2",
          label: "Get chart data v2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-chart-summary-v-2",
          label: "Get chart summary v2",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-chart-calculated-fields",
          label: "Get calculated fields",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Claim License",
      link: {
        type: "doc",
        id: "api-reference/claim-license",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-claim-license",
          label: "Attempts to claim a white label license",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Client Gateway Tokens",
      link: {
        type: "doc",
        id: "api-reference/client-gateway-tokens",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-client-gateway-tokens",
          label: "List of client payment tokens",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-client-gateway-token",
          label: "Adds a client payment token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-client-gateway-token",
          label: "Shows a client payment token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-client-gateway-token",
          label: "Updates a client payment token",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-client-gateway-token",
          label: "Deletes a client",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-client-gateway-token",
          label: "Shows a client payment token for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-client-gateway-tokens-create",
          label: "Gets a new blank client payment token object",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Companies",
      link: {
        type: "doc",
        id: "api-reference/companies",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-companies",
          label: "Gets a list of companies",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-company",
          label: "Adds a company",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-companies-create",
          label: "Gets a new blank company object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-company",
          label: "Shows an company",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-company",
          label: "Updates an company",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-company",
          label: "Deletes a company",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-company",
          label: "Shows an company for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/upload-companies",
          label: "Uploads a document to a company",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/set-default-company",
          label: "Sets the company as the default company.",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-current-company",
          label: "Returns the current comapny",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Company Gateways",
      link: {
        type: "doc",
        id: "api-reference/company-gateways",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-company-gateways",
          label: "Gets a list of company_gateways",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-company-gateway",
          label: "Adds a CompanyGateway",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-company-gateways-create",
          label: "Gets a new blank CompanyGateway object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-company-gateway",
          label: "Shows an CompanyGateway",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-company-gateway",
          label: "Updates an CompanyGateway",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-company-gateway",
          label: "Deletes a CompanyGateway",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-company-gateway",
          label: "Shows an CompanyGateway for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-company-gateways",
          label: "Performs bulk actions on an array of company_gateways",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Company Ledger",
      link: {
        type: "doc",
        id: "api-reference/company-ledger",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-company-ledger",
          label: "Gets a list of company_ledger",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Company User",
      link: {
        type: "doc",
        id: "api-reference/company-user",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/update-company-user",
          label: "Update a company user record",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Connected Account",
      link: {
        type: "doc",
        id: "api-reference/connected-account-tag",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/connected-account",
          label: "Connect an oauth user to an existing user",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Credits",
      link: {
        type: "doc",
        id: "api-reference/credits",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/update-credit",
          label: "Update credit",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Designs",
      link: {
        type: "doc",
        id: "api-reference/designs",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-designs",
          label: "Gets a list of designs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-design",
          label: "Adds a design",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-design",
          label: "Shows a design",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-design",
          label: "Updates a design",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-design",
          label: "Deletes a design",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-design",
          label: "Shows a design for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-designs-create",
          label: "Gets a new blank design object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-designs",
          label: "Performs bulk actions on an array of designs",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Documents",
      link: {
        type: "doc",
        id: "api-reference/documents",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-documents",
          label: "Gets a list of documents",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Emails",
      link: {
        type: "doc",
        id: "api-reference/emails",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/send-email-template",
          label: "Sends an email for an entity",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Expense",
      link: {
        type: "doc",
        id: "api-reference/expense",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/upload-expense",
          label: "Uploads a document to a expense",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Expense Categories",
      link: {
        type: "doc",
        id: "api-reference/expense-categories",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-expense-categorys",
          label: "Gets a list of expense_categories",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-expense-category",
          label: "Adds a expense category",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-expense-category-create",
          label: "Gets a new blank Expens Category object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-expense-category",
          label: "Shows a Expens Category",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-expense-category",
          label: "Updates a tax rate",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-expense-category",
          label: "Deletes a ExpenseCategory",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-expense-category",
          label: "Shows a Expens Category for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-expense-categorys",
          label: "Performs bulk actions on an array of ExpenseCategorys",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Export",
      link: {
        type: "doc",
        id: "api-reference/export",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-export",
          label: "Export data from the system",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Group Settings",
      link: {
        type: "doc",
        id: "api-reference/group-settings",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-group-settings",
          label: "Gets a list of group_settings",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-group-setting",
          label: "Adds a GroupSetting",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-group-settings-create",
          label: "Gets a new blank GroupSetting object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-group-setting",
          label: "Shows an GroupSetting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-group-setting",
          label: "Updates an GroupSetting",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-group-setting",
          label: "Deletes a GroupSetting",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-group-setting",
          label: "Shows an GroupSetting for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-group-settings",
          label: "Performs bulk actions on an array of group_settings",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/upload-group-setting",
          label: "Uploads a document to a group setting",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health Check",
      link: {
        type: "doc",
        id: "api-reference/health-check",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-health-check",
          label: "Attempts to get a health check from the API",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Import",
      link: {
        type: "doc",
        id: "api-reference/import",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-import-json",
          label: "Import data from the system",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Imports",
      link: {
        type: "doc",
        id: "api-reference/imports",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/preimport",
          label: "Pre Import checks - returns a reference to the job and the headers of the CSV",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Logout",
      link: {
        type: "doc",
        id: "api-reference/logout",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-logout",
          label: "Logs the user out of their current session",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Migration",
      link: {
        type: "doc",
        id: "api-reference/migration",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/post-purge-company",
          label: "Attempts to purge a company record and all its child records",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-purge-company-save-settings",
          label: "Attempts to purge a companies child records but save the company record and its settings",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/post-start-migration",
          label: "Starts the migration from previous version of Invoice Ninja",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "One Time Token",
      link: {
        type: "doc",
        id: "api-reference/one-time-token-tag",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/one-time-token",
          label: "Attempts to create a one time token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Terms",
      link: {
        type: "doc",
        id: "api-reference/payment-terms",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-payment-terms",
          label: "Gets a list of payment terms",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-payment-term",
          label: "Adds a Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-payment-terms-create",
          label: "Gets a new blank PaymentTerm object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-payment-term",
          label: "Shows a Payment Term",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-payment-term",
          label: "Updates a Payment Term",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/edit-payment-terms",
          label: "Shows an Payment Term for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-payment-terms",
          label: "Performs bulk actions on an array of payment terms",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payment Terms",
      link: {
        type: "doc",
        id: "api-reference/payment-termss",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/delete-payment-term",
          label: "Deletes a Payment Term",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Ping",
      link: {
        type: "doc",
        id: "api-reference/ping",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-ping",
          label: "Attempts to ping the API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-last-error",
          label: "Returns the last error",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Postmark",
      link: {
        type: "doc",
        id: "api-reference/postmark",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/confirm-apple-purchase",
          label: "Processing webhooks from Apple for in app purchases",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/process-apple-webhook",
          label: "Processing event webhooks from Apple for in purchase / subscription status update",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/postmark-webhook",
          label: "Processing webhooks from PostMark",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Preview",
      link: {
        type: "doc",
        id: "api-reference/preview",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-preview",
          label: "Returns a pdf preview",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-preview-purchase-order",
          label: "Returns a pdf preview for purchase order",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Recurring Expense",
      link: {
        type: "doc",
        id: "api-reference/recurring-expense",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/upload-recurring-expense",
          label: "Uploads a document to a recurring_expense",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Recurring Quotes",
      link: {
        type: "doc",
        id: "api-reference/recurring-quotes",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-recurring-quotes",
          label: "Gets a list of recurring_quotes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-recurring-quote",
          label: "Adds a RecurringQuote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-recurring-quotes-create",
          label: "Gets a new blank RecurringQuote object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-recurring-quote",
          label: "Shows an RecurringQuote",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-recurring-quote",
          label: "Updates an RecurringQuote",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-recurring-quote",
          label: "Deletes a RecurringQuote",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-recurring-quote",
          label: "Shows an RecurringQuote for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-recurring-quotes",
          label: "Performs bulk actions on an array of recurring_quotes",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/action-recurring-quote",
          label: "Performs a custom action on an RecurringQuote",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Refresh",
      link: {
        type: "doc",
        id: "api-reference/refresh-tag",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/refresh",
          label: "Refresh data by timestamp",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Scheduler",
      link: {
        type: "doc",
        id: "api-reference/scheduler",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-scheduler",
          label: "Get scheduler status",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Search",
      link: {
        type: "doc",
        id: "api-reference/search",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/post-search",
          label: "Search",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Statics",
      link: {
        type: "doc",
        id: "api-reference/statics",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-statics",
          label: "Gets a list of statics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Subscriptions",
      link: {
        type: "doc",
        id: "api-reference/subscriptions",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-subscriptions",
          label: "Gets a list of subscriptions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-subscription",
          label: "Adds a subscriptions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-subscriptions-create",
          label: "Gets a new blank subscriptions object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-subscription",
          label: "Shows an subscriptions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-subscription",
          label: "Updates an subscriptions",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-subscription",
          label: "Deletes a subscriptions",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-subscription",
          label: "Shows an subscriptions for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-subscriptions",
          label: "Performs bulk actions on an array of subscriptions",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Support",
      link: {
        type: "doc",
        id: "api-reference/support",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/support-message",
          label: "Sends a support message to Invoice Ninja team",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "System Logs",
      link: {
        type: "doc",
        id: "api-reference/system-logs",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-system-logs",
          label: "Gets a list of system logs",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-system-logs",
          label: "Shows a system_logs",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Task Schedulers",
      link: {
        type: "doc",
        id: "api-reference/task-schedulers",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-task-schedulers",
          label: "Task Scheduler Index",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/create-task-scheduler",
          label: "Create task scheduler with job ",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-task-scheduler",
          label: "Gets a new blank scheduler object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-task-scheduler",
          label: "Show given scheduler",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-task-scheduler",
          label: "Update task scheduler ",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/destroy-task-scheduler",
          label: "Destroy Task Scheduler",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/bulk-task-scheduler-actions",
          label: "Performs bulk actions on an array of task_schedulers",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Task Status",
      link: {
        type: "doc",
        id: "api-reference/task-status",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-task-statuses",
          label: "Gets a list of task statuses",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-task-status",
          label: "Adds a TaskStatus",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-task-statuss-create",
          label: "Gets a new blank TaskStatus object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-task-status",
          label: "Shows a TaskStatus Term",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-task-status",
          label: "Updates a TaskStatus Term",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/edit-task-statuss",
          label: "Shows an TaskStatusfor editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-task-statuss",
          label: "Performs bulk actions on an array of task statuses",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Task Status",
      link: {
        type: "doc",
        id: "api-reference/task-statuss",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/delete-task-status",
          label: "Deletes a TaskStatus Term",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Tax Rates",
      link: {
        type: "doc",
        id: "api-reference/tax-rates",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-tax-rates",
          label: "Gets a list of tax_rates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-tax-rate-create",
          label: "Gets a new blank Tax Rate object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-tax-rate",
          label: "Shows a Tax Rate",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-tax-rate",
          label: "Updates a tax rate",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-tax-rate",
          label: "Deletes a TaxRate",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-tax-rate",
          label: "Shows a Tax Rate for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-tax-rates",
          label: "Performs bulk actions on an array of TaxRates",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Templates",
      link: {
        type: "doc",
        id: "api-reference/templates",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-show-template",
          label: "Returns a entity template with the template variables replaced with the Entities",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-template-preview",
          label: "Preview template by hash",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "api-reference/tokens",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-tokens",
          label: "Gets a list of company tokens",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-token",
          label: "Adds a token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-token",
          label: "Shows a token",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-token",
          label: "Updates a token",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-token",
          label: "Deletes a token",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-token",
          label: "Shows a token for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-tokens-create",
          label: "Gets a new blank token object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-tokens",
          label: "Performs bulk actions on an array of tokens",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Update",
      link: {
        type: "doc",
        id: "api-reference/update",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/self-update",
          label: "Performs a system update",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/self-update-check-version",
          label: "Check for available update",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "api-reference/users",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-users",
          label: "Gets a list of users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-user",
          label: "Adds a User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/get-users-create",
          label: "Gets a new blank User object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/show-user",
          label: "Shows an User",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-user",
          label: "Updates an User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/delete-user",
          label: "Deletes a User",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/edit-user",
          label: "Shows an User for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-users",
          label: "Performs bulk actions on an array of users",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/detach-user",
          label: "Detach an existing user to a company",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api-reference/invite-user",
          label: "Reconfirm an existing user to a company",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/invite-user-reconfirm",
          label: "Reconfirm an existing user to a company",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Webcron",
      link: {
        type: "doc",
        id: "api-reference/webcron-tag",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/webcron",
          label: "Executes the task scheduler via a webcron service",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "api-reference/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/get-webhooks",
          label: "Gets a list of Webhooks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/store-webhook",
          label: "Adds a Webhook",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-reference/show-webhook",
          label: "Shows a Webhook",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/update-webhook",
          label: "Updates a Webhook",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-reference/edit-webhook",
          label: "Shows a Webhook for editting",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/get-webhooks-create",
          label: "Gets a new blank Webhook object",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-reference/bulk-webhooks",
          label: "Performs bulk actions on an array of Webhooks",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "api-reference/webhooks",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/delete-webhook",
          label: "Deletes a Webhook",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Yodlee",
      link: {
        type: "doc",
        id: "api-reference/yodlee",
      },
      items: [
        {
          type: "doc",
          id: "api-reference/yodlee-refresh-webhook",
          label: "Yodlee Webhook",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
