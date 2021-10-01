---
extends: _layouts.docs
section: content
---

# Projects

The *Projects* module is very useful for managing any larger collections of work that you do for your clients.  While a project record itself is quite simple and doesn't do much on it's own, it draws its functionality and usefulness from the records linked to it.  By linking *Tasks* and *Expenses* to a project, you can stay organized while you lay out the plans for the work your client is asking for, and expenses or extra steps in the work start to add up along the way.  Link a project to a *User* in the admin portal to maintain accountability and responsibility for the project.  

You can assign as many tasks and expenses to a project as you like, but tasks and expenses do not require a project to be assigned to, it only helps for organization of multiple tasks and expenses. Tasks represent jobs you perform with billable hours for your client.  Assigning tasks to a project with a *Task Rate* set, allows you to create a default hourly rate for all tasks within a project.  Expenses represent goods or services you had to pay for.  Although an expense to your company is often just part of doing business, sometimes you have an agreement to pass on the costs of an expense directly to the client, and assigning those expenses to a project helps you keep track of them when it's time to finally bill your client for the completed project.

## Viewing a Project

From the *Projects* module, select any project from the table to bring up the preview pane with the project overview shown first.

At the very bottom of the *Projects* preview pane, you have an option to create a **New Task** which will shortcut you to creating a task that is already prepared to be linked to the project you were viewing.  The other button at the bottom is **Invoice Project** which takes you to a new page to create an invoice, already prepared with any unpaid tasks that are assigned to the project.

The kebab menu at the top right corner of the screen also offers these abilities, as well as cloning the project, creating an invoice, and archiving or deleting the project.

### Overview

The first thing you notice in the overview tab, is the **Total** hours and **Budgeted** hours.  Total hours are summed up from all the tasks in the project.  This way at a glance you can see the progress of all your work relative to the budgeted billable hours for the project.  

Below you will see interactive links showing the *Client* the project is assigned to, and which *User* from the admin panel is responsible for the project.

Interactive buttons for linked *Tasks* and *Expenses* can take you to the linked records, help you create new records of that type, and show you the total number of *Tasks* or *Expenses* respectively.

You will also notice the project *Due Date*, and default *Task Rate* for any linked tasks near the bottom.  

Public notes are highlighted and marked with an exclamation mark in a circle, while private notes are highlighted and marked with a symbol for a lock.

### Documents

You can upload files, such as images, documents, and more under the *Documents* tab.  Like most other modules, files uploaded under the documents tab of a project can be viewed by the client through the client portal under the Documents section > Projects tab.

## Creating and Editing a Project

Creating and editing a project is very simple, there are only a few customizable fields here to describe.  Like mentioned before, most of the function of a project comes from the records linked to it, using it as an umbrella to manage all the related tasks and expenses for a large job, and giving an easy shortcut to bill the client for all the related work.  The fields available are as follows.

* **Project Name** - The name of your project.  This is included in the line item description of the first task in your invoice automatically, when you create an invoice from a project.
* **Project Number** - An automatically generated number using the rules defined in *Settings* > *Generated Numbers*, for your organizations record keeping purposes.
* **User** - Assign a user to a project to maintain accountability and responsibility for the project work.
* **Due Date** - Stay focused and on track!  Assign due dates to your many projects so you can sort them by due date in the table, and compare against your total, and budgeted hours to measure your progress along the way to the end of the job.
* **Budgeted Hours** - Set a budget for billable hours based on your estimation for the work, and what the client is willing to pay for to get the job done.
* **Task Rate** - Set a default rate for billable hours, applied automatically to any tasks that are linked to the project (Can be overwritten manually when creating or editing a task after assignment to the project).
* **Public Notes** - Public notes help add a little perspective to the nature of the work for you, and your client's records.
* **Private Notes** - A place for you to make comments about the project only to be shared with your coworkers who have access to the admin portal viewing the project.

<x-next url=/docs/tasks>Tasks</x-next>
