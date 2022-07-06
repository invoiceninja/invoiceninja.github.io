---
extends: _layouts.docs
section: content
---

# Reports

In the *Reports* module, you are able to generate highly customized and fine tuned reports of your various records.  You can track profits, sales, expenses, performance of your products and services, and either visualize that data directly, or export it for processing and analysis in an external application.  

Effective use of the reports module can help prepare financial records for your business, monitor your progress and development, track expenses, and maintain accountability.  

There are three main categories at the top of the screen to help you control the data presented in the report.

* **Report** - This category drops down to present options for the various records you can gather a report based on, such as Clients, Invoices, Expenses, Quotes, Product Recurring invoices, and more.  The report category also includes other options such as Profit and Loss, and Invoice Items (Which unlike "Product" will also include invoiced Tasks).  The columns available in your report will be based on the selection you choose here.
* **Group** - Group items for your report based on one of the various properties of those items, for example; group clients by their country, group invoices by the month they were created, or group tasks by the projects they are assigned to.  This affects the report itself and will be reflected in the exported data.
* **Chart** - For visualization purposes only, after selecting a *Report* and a *Group* you will be able to select how to visualize the data presented.  In the example screenshot below, we only have a few clients, so we grouped them by name, and presented the *Paid to Date* data in the chart for visualization, to see how much each of our clients has paid us so far.

The buttons at the top right of the screen add more features:

* **Columns** - This button creates a pop-up window to allow you to change the default columns of data to include in the report, and to use for filtering data in the report with.  You can remove columns by clicking the *X* to the left of each option, or you can use the *Add Column* field to select new columns to add to your report.  The columns available to you are based off the *Report* type you have chosen.  
* **Export** - You can generate and download a .CSV file with all the data seen at the bottom, so you can back up your report data, or analyze it in another external application.

When you populate the *Report*, *Group*, and *Chart* fields, a chart will appear to visualize your data with.  In the example screenshot below, a basic report of client records with a chart is shown.  

![alt text](/assets/images/reports/reports.png "Basic Report")

You can further customize your reports by selecting different columns of data to present, and then filtering the data by the values of those columns.  You can use the *Columns* button to manage the columns in your report.  

When looking at the list of records at the bottom of the screen, there is a field at the top of every column that you can use to filter your records with.  These filters apply to your report, and will change your chart, and the *Export* data when you generate a .CSV file.

Most of the filters are simple, matching text based filters (like filtering for clients named "Daniel"), but some function a little differently.  Below you can see that columns with a dollar value allow you to filter based on a *minimum value* rather than an exact value.

![alt text](/assets/images/reports/filter-minimum-value.png "Filter by Minimum Value")

You will also see in the next screenshot example below, that some options like *Date* or *Created At* and other date sensitive column types instead present you with a drop down menu to filter your report data with.  When the currently selected filter option is *Custom* you will see a *Start Date* and *End Date* field become available at the top of the screen, under the *Report* selection field, which allows you to manually specify the date range to filter your report data by.

![alt text](/assets/images/reports/filter-date.png "Filter by Date")

There are too many ways to use the customization of the *Reports* module to list here, but this should give you a good idea of the mechanics of the module and how to use it to generate reports that help you when it is tax season, and to monitor or review trends for product sales, or the accountability of your staff for their billing.

<x-next url=/docs/recurring-invoices>Recurring Invoices</x-next>

