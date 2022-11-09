---
extends: _layouts.user_guide
section: content
---

# Tasks

*Tasks* represent small to medium sized jobs or services performed for a client, and are suited perfectly for services rendered with an hourly rate.  Tasks enable you to track your time on the job, with stopwatch-like functions baked into your tasks, and you can track and record hours across as many date and time periods as you need to.  You can assign tasks to a project, in order to keep track of the various jobs involved in it, or leave them as standalone small jobs.  Tasks can be added to a clients invoice independently, or in bulk when you create an invoice out of the project record itself.  Tasks also allow you to assign an admin portal *User* to them, to maintain accountability and responsibility for the work associated with them.

The *Tasks* module is powerful, especially when used in combination with *Projects* and *Expenses*, and very useful to any service-based business.  

## Tasks Module View

When you first select the *Tasks* module from the navigation menu on the left hand side, by default you will see the table view of all available tasks, where you can customize columns, and sorting of the tasks in the list.  

When viewing the *Tasks* module in table view, you can change the column layout and add/remove columns to the table with the "Columns" button at the bottom right corner of the screen.  In addition to filters for "Active", "Archived", and "Deleted" task records, you can also filter by a task's status "Invoiced" for anything billed to a client already, "Logged" for tasks not yet billed and not in progress at the moment, and "Running" for tasks that are currently in progress and counting time on the clock.

Unique to the *Tasks* module, is an alternative viewing mode, a board view, to visualize your active tasks with.  On the top bar and near the left corner of the *Tasks* view you will see the buttons to create a task ("Plus" symbol), to enter multi-select mode ("Checkbox" symbol), and third, the unique board view button (A small white box, with two vertical bars inside).  In the board view, you will find tasks sorted into vertical lists by their task status, appearing like notes stuck to a board.  Hover over a task 'note' (or select the kebab menu button on mobile) to either view, edit, or delete the task.  Clicking directly on the task 'note' will enable you to quickly edit the name of the note.  You can also press and hold a note to drag and drop it into another status column, changing the status of the task quickly and easily.  This highly visual view mode for tasks can help you manage your work better.  

<x-warning>
Note that the *Tasks* board view does not present invoiced and paid tasks, it is more like a "to do list" board for visualizing and managing your current work, rather than a full history view, which the table view is better suited for.
</x-warning>

## Viewing a Task

Select a task from the list or table view, or click on "View" for a task in the task board view, in order to bring up the *Tasks* preview panel.  

In the top of the *Tasks* panel you will see the *Task Number*, and you will have an "edit" button, and a kebab menu full of context sensitive options to manipulate and manage your task record that offers almost all functions available in a list.  At the bottom of the *Tasks* panel you will have two large buttons for common functions.  The first function button changes depending on the state of the task, either "Start", "Stop", or "Resume" which will respectively start and create a date/time line in the task record to begin tracking billable hours for the work, stop the timer and fill in the end time with the current time, or resume timing the task with another date/time line in the task record.  The second button "Invoice Task" will create a new invoice record automatically filled with the current task for the assigned client of that task.

### Overview

Under the overview tab you will find all the general information about a task, you can see duration of the task and "Amount" or value of the work logged so far, and the task's status at the top.  Private notes, and public notes are highlighted, and prefixed by an icon of a lock for private notes, and a icon with a circle around the letter "i" for public notes which will be included automatically in generated invoices.  Interactive buttons that connect you to filtered lists or views of the linked client, project, task status, or user appear, as well as a breakdown of dates and times of work entered in the task record.

### Documents

Here you are able to upload files such as pictures, documents, and more in order to give your client access to these files from the client portal.

## Creating and Editing a Task

When creating or editing a task in the desktop layout, you will be switched away from the table/list view completely to a "Edit Task" or "New Task" view, with all the available fields visible.  On a mobile layout, it is similar behavior, but the fields available are divided into two tabs.

### Details

* **Client** - Assign a client to link to the task.  When you invoice the task, it will automatically assign the invoice to that client.
* **Project** - Optionally assign the task to an available project.  Doing this will automatically assign the task to the same client as the project, and when you select a client, it will filter the available projects by those which are assigned to the client you've selected.  Selecting a project will override the default task rate with the task rate defined in the project record.  
* **Task Number** - While you can manually edit this, the best practice is to leave this field blank and allow Generated Numbers policies to populate the Task Number.
* **Rate** - Automatically this field will use the default global tax rate, or more authoritatively, the task rate of the project it was assigned to.  You may also manually specify a task rate by filling in the field yourself.
* **Status** - Select a task status.  Task statuses are a small part of the task lifecycle and help sort your tasks for organizational purposes.  You can select one of the prebuilt task statuses, or create your own task statuses under *Settings* > *Task Settings*.
* **Description** - Create a description for your task, which will be included within the line item description of the task when you create an invoice out of your tasks or projects.

### Times

Here you will see a mostly self explanatory list of date and times.  This list is used to track billable hours for your work on a task for the client.  You can manually enter or edit date and time entries here, or use the large button at the bottom right of the screen that looks like a *Play* or *Stop* icon in order to start and stop the timer.  Starting the timer will always create a new line in the list with the current *Date* and *Start Time*.  Stopping the timer will populate the "End Time", which calculates what to fill for the *Duration*.  Alternatively you can manually set the *Duration* which will calculate your end time for you.

If an entry in the times list has no end time yet, the task record is considered to have the *Running* status, in addition to the manually set task status, and you will see the *Duration* of the task change every second when viewing the task, while it tracks the progress.

## Lifecycle of a Task

Tasks have a most unique lifecycle, because of the option to create custom task statuses, and support for multiple statuses in some cases, to support sorting and managing tasks, while also reflecting their current states.

### Manual Task Status or *Logged*

A manually set task status is one that is selected or configured by you, such as one of the pre-configured task statuses (Backlog, Done, In progress, or Ready to do), or a custom status you've created in *Settings* > *Task Settings*.  The manually set task statuses exist primarily for your own recordkeeping purposes, and help sort and visualize your many active tasks at work.  When an invoice in the table or the overview panel is shown to have one of the manual task statuses, it is considered *Logged*.  A *Logged* status is any status that has not yet been invoiced, and is not currently in a *Running* state.

### Running

A running task is any task that is currently tracking billable hours on the clock.  

* A task automatically enters a *Running* status when it contains a line for date/time with a start time entered, but no duration or end time yet entered.  

* A running task will always show a moving time for it's *Duration* to help track the active work being performed for that task.  
* When a task is in the running state, it will be presented in the table as "Running" but it technically still has the manually set task status, and when you look at the tasks board view, you will see it sorted as such, with a "play" icon next to it to represent it is in a running state.  
* Whether you manually populate the *End Time* or *Duration* of the open ended line on a task record, or stop the task to automatically populate those fields, the running task will return to a *Logged* state, and appear in the table with the manually set task status.  

### Invoiced

A task is in an invoiced state after the task has been added to an invoice.  A task in the invoice state no longer appears in the board view, because it is considered completed.  When viewing a task that has been invoiced, there will be a link to the invoice it has been assigned to.

### Archived

Archived tasks are hidden from all views by default.  Archived tasks are still considered available, and can be invoiced and billed for.  You can change your view filters to see archived tasks, and you can "Restore" an archived task to return it to its former state.

### Deleted

A deleted task is no hidden from all views by default, and is no longer considered available.  Deleted tasks can not be added to invoices, edited, or billed for.  You can change your view filters to see deleted tasks, and you can "Restore" a deleted task record to return it to its former state.

<x-next url=/docs/transactions>Transactions</x-next>