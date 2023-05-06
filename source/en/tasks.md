---
extends: _layouts.user_guide
section: content
locale: en
---

# Tasks

*Tasks* represent small to medium sized jobs or services performed for a client, and are suited perfectly for services rendered with an hourly rate. Tasks enable you to track your time on the job, with stopwatch-like functions baked into your tasks, and you can track and record hours across as many date and time periods as you need to. You can assign tasks to a project, in order to keep track of the various jobs involved in it, or leave them as standalone small jobs. Tasks can be added to a clients invoice independently, or in bulk when you create an invoice out of the project record itself. Tasks also allow you to assign an admin portal User to them, to maintain accountability and responsibility for the work associated with them.

The *Tasks* module is powerful, especially when used in combination with Projects and Expenses, and very useful to any service-based business.

## Overview

The Tasks module allows you to easily manage and organize your tasks within the software application. 

### Table View

- By default, the Tasks module opens to the table view, where you can see all available tasks. 
- Customize the columns and sort the tasks in the list to suit your needs.
- Use the 'Columns' button at the bottom right corner of the screen to add or remove columns from the table.
- Filter tasks by their status: "Active", "Archived", "Deleted", "Invoiced", "Logged", and "Running".

### Board View

- The Tasks module also offers an alternative viewing mode, the board view.
- Use the board view to visualize your active tasks in a highly visual way.
- Tasks are sorted into vertical lists by their status, and appear like notes stuck to a board.
- Hover over a task 'note' to view, edit, or delete the task.
- Click directly on the task 'note' to quickly edit the name of the task.
- Press and hold a note to drag and drop it into another status column, changing the status of the task quickly and easily.

With the Tasks module, you can easily manage your work and stay organized. Try it out today!

<x-warning>
Note that the *Tasks* board view does not present invoiced and paid tasks, it is more like a "to do list" board for visualizing and managing your current work, rather than a full history view, which the table view is better suited for.
</x-warning>

## Viewing a Task

- Select a task from the list or table view, or click on "View" for a task in the task board view to bring up the Tasks panel.
- At the top of the Tasks panel, you will see the Task Number and an "Edit" button.
- Use the kebab menu for context-sensitive options to manipulate and manage your task record.
- At the bottom of the Tasks panel, you will have two large buttons for common functions.
- The first function button changes depending on the state of the task, either "Start", "Stop", or "Resume" which will respectively start and create a date/time line in the task record to begin tracking billable hours for the work, stop the timer and fill in the end time with the current time, or resume timing the task with another date/time line in the task record.
- The second button "Invoice Task" will create a new invoice record automatically filled with the current task for the assigned client of that task.

With the Tasks panel, you can easily view and manage your tasks and stay organized. Try it out today!

### Overview

The Overview tab in the Tasks panel provides you with all the general information about a task, including duration, value, and status.

- View the duration of the task and the "Amount" or value of the work logged so far at the top of the tab.
- See the task's status and check if it's private or public note.
- Notes are highlighted and prefixed by an icon of a lock for private notes and a icon with a circle around the letter "i" for public notes, which will be included automatically in generated invoices.
- A breakdown of dates and times of work entered in the task record is also displayed.
- Click on the interactive buttons to access filtered lists or views of linked clients, projects, task status, or users.

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

## Time Tracking

The time tracking feature allows you to easily track billable hours for your work on a task for the client. 

### Time Entries

- View a mostly self-explanatory list of date and times.
- Manually enter or edit date and time entries.
- Use the play/stop button to start and stop the timer.
- Starting the timer creates a new line in the list with the current Date and Start Time.
- Stopping the timer will populate the "End Time", which calculates the Duration.
- Alternatively, you can manually set the Duration, which will calculate your end time for you.
- If an entry in the times list has no end time yet, the task record is considered to have the Running status and you will see the Duration of the task change every second when viewing the task, while it tracks the progress.

## Lifecycle of a Task

Tasks have a unique lifecycle, with the option to create custom statuses and support for multiple statuses to aid in sorting and managing tasks while reflecting their current states.

### Manual Task Status or *Logged*

A manually set task status is one that you select or configure, such as one of the pre-configured task statuses (Backlog, Done, In progress, or Ready to do) or a custom status you've created in *Settings* > *Task Settings*. These statuses serve primarily as recordkeeping and help sort and visualize your active tasks. Tasks with a manually set status are considered *Logged* if they have not been invoiced and are not currently in a *Running* state.

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

<x-next url=/en/transactions>Transactions</x-next>