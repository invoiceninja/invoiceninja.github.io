---
extends: _layouts.user_guide
section: content
locale: en
---

# Projects

The _Projects_ module is useful for managing large collections of work for clients. A project record itself is simple, but its functionality and usefulness come from the records linked to it. By linking Tasks and Expenses to a project, you can stay organized and plan the work for your client. You can also link a project to a User in the admin portal to maintain accountability.

You can assign multiple tasks and expenses to a project, but it is not required. Tasks represent billable hours and assigning them to a project with a Task Rate set, allows you to create a default hourly rate. Expenses represent goods or services you had to pay for. Assigning expenses to a project helps you keep track of them when it's time to bill your client for the completed project.

## Viewing a Project

From the _Projects_ module, select any project from the table to bring up the preview pane with the project overview shown first.

At the very bottom of the _Projects_ preview pane, you have an option to create a **New Task** which will shortcut you to creating a task that is already prepared to be linked to the project you were viewing. The other button at the bottom is **Invoice Project** which takes you to a new page to create an invoice, already prepared with any unpaid tasks that are assigned to the project.

The kebab menu at the top right corner of the screen also offers these abilities, as well as cloning the project, creating an invoice, and archiving or deleting the project.

### Overview

The overview tab displays the **Total** hours and **Budgeted** hours for the project. The Total hours are the sum of all tasks in the project, allowing you to see the progress of the work relative to the budgeted hours.

You can also see the _Client_ and _User_ assigned to the project, as well as the number of linked _Tasks_ and _Expenses_. Additionally, you can see the project _Due Date_ and default _Task Rate_ for linked tasks.

Public and private notes are also displayed with different icons.

### Documents

You can upload files, such as images, documents, and more under the _Documents_ tab. Like most other modules, files uploaded under the documents tab of a project can be viewed by the client through the client portal under the Documents section > Projects tab.

## Creating and Editing a Project

Creating and editing a project is simple. Most of the functionality comes from the records linked to it, such as tasks and expenses, making it easy to bill the client for all related work. The customizable fields are:

- **Project Name**: The name of the project, which is included in the line item description of the first task in the invoice when creating it from the project.
- **Project Number**: An automatically generated number for record keeping purposes.
- **User**: Assign a user to the project to maintain accountability and responsibility.
- **Due Date**: Assign a due date to stay focused and track progress.
- **Budgeted Hours**: Set a budget for billable hours based on estimation and client agreement.
- **Task Rate**: Set a default rate for billable hours, which can be overwritten later.
- **Public Notes**: Add notes for perspective and client records.
- **Private Notes**: Add notes to be shared with coworkers who have access to the admin portal.

<x-next url=/en/tasks>Tasks</x-next>
