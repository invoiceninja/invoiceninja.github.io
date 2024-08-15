---
extends: _layouts.user_guide
section: content
locale: en
---

# Tasks

_Tasks_ represent small to medium sized jobs or services performed for a client, and are suited perfectly for services rendered with an hourly rate. Tasks enable you to track your time on the job, with stopwatch-like functions baked into your tasks, and you can track and record hours across as many date and time periods as you need to.

You can assign tasks to a project, in order to keep track of the various jobs involved in it, or leave them as standalone small jobs.

Tasks can be added to a client's invoice independently, or in bulk when you create an invoice out of the project record itself.

Tasks also allow you to assign an admin portal User to them, to maintain accountability and responsibility for the work associated with them.

The _Tasks_ module is powerful, especially when used in combination with Projects and Expenses, and very useful to any service-based business.

## Overview

With the Tasks module, you can easily manage your work and stay organized. Try it out today!

<video width="100%" controls>
  <source src="/assets/videos/tasks/tasks_demo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### Table View

- By default, the Tasks module opens to the table view, where you can see all available tasks.
- Filter tasks by their status: "Invoiced", "Uninvoiced", "Backlog", "Ready to do", "In progress", "Done"
- Customize the columns and sort the tasks in the list to suit your needs.
  - Use the 'Columns' button at the bottom right corner of the screen to add or remove columns from the table (ex. to display the assigned user, rate...)
- Click on a task's status text in the row to change it or add a New Task Status.

### Kanban View

- The Tasks module also offers an alternative viewing mode, the kanban view.
- Use the kanban view to visualize your active tasks in a highly visual way, grouped into statuses.
- Tasks are sorted into vertical lists by their status, and appear like notes stuck to a board.
- Hover over a task 'note' to see options to view, edit, or start/stop the task.
- Drag and drop tasks into other columns to change the status of the task quickly and easily.
- You can use the _Project_ selection to see tasks linked to a specific project.
- Press the "**+**" to the right of a task column to quickly add a task with that status.

<video width="100%" controls>
  <source src="/assets/videos/tasks/tasks_kanban_operations.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

### Custom Task Status

You can add custom task statuses from the table view by clicking a status text and selecting "New Task Status", or from the Kanban view by scrolling to the right and selecting the "**+**".

The "New Task Status" window will appear where you will enter a name for the status as well as a color.

#### From Table view

![New task status from table](/assets/images/tasks/tasks_table_view_status_options.png)

#### From Kanban view

![New task status from kanban](/assets/images/tasks/new_task_status_from_kanban.png)

#### Manage Task Statuses

Task statuses can be edited/added from _Settings>Task Settings_

<x-warning>
Note that the *Tasks* kanban view does not present invoiced and paid tasks, it is more like a "to do list" kanban for visualizing and managing your current work, rather than a full history view, which the table view is better suited for.
</x-warning>

## Viewing a Task

- Select some whitespace on the tasks's row from the table view, or click on "View" for a task in the task kanban view to bring up the Tasks panel on the right.
- At the top of the Tasks overview panel and on the right of the table view, you will see a "More Actions" dropdown menu.

### More Actions Dropdown Menu

![More actions](/assets/images/tasks/tasks_more_actions_dropdown.png)

- "Edit" allows you to edit the task
- The "Start"/"Stop" button changes depending on the state of the task, which will respectively start and create a date/time line in the task record to begin tracking billable hours for the work, or stop the timer and fill in the end time with the current time.
- "Invoice Task" will create a new invoice record automatically filled with the current task for the assigned client of that task. Note: this option is only shown when "More Actions" is selected from the task's table view.
- "Add to Invoice" will prompt you to select one of the client's active invoices to add the task to.
- "Clone" will bring up the New Task screen pre-filled with the same information from the selected task.
- "Run Template" allows you to run a template for the selected task.
- "Archive" archives the task.
- "Delete" deletes the task.

### Overview

The Overview tab in the Tasks panel provides you with all the general information about a task, including duration, value, and status.

- View the "Amount" or value of the work logged so far (Total Duration \* Rate)
- See the task's status ("state")
- A breakdown of dates and times of work entered in the task record is also displayed.
- Click on the interactive links to access filtered lists or views of linked clients, projects, task status, or users.

## Editing/Creating a Task

### Details

- **Client** - Assign a client to link to the task. When you invoice the task, it will automatically assign the invoice to that client.
- **Project** - Optionally assign the task to an available project. Doing this will automatically assign the task to the same client as the project, and when you select a client, it will filter the available projects by those which are assigned to the client you've selected. Selecting a project will override the default task rate with the task rate defined in the project record.
- **User** - Optionally assign an admin portal User to the task, to maintain accountability and responsibility for the work associated with it.
- **Task Number** - While you can manually edit this, the best practice is to leave this field blank and allow Generated Numbers policies to populate the Task Number.
- **Rate** - Automatically this field will use the default global task rate, or more authoritatively, the default task rate of the project it was assigned to. You may also manually specify a task rate by filling in the field yourself.
- **Status** - Select a task status. Task statuses are a small part of the task lifecycle and help sort your tasks for organizational purposes. You can select one of the prebuilt task statuses, or create your own task statuses under _Settings_ > _Task Settings_.
- **Description** - Create a description/note for your task, which will be included within the line item description of the task when you create an invoice out of your tasks or projects.

### Documents

Here you are able to upload files such as pictures, documents, and more in order to give your client access to these files from the client portal.

Note: To download all documents linked to one or more tasks, you can select the checkboxes for the tasks (from the table view), then _More Options>Documents_ which will email you a download link to retrieve the files.

## Time Tracking

The time tracking feature allows you to easily track billable hours for your work on a task for the client.

### Time Entries

- View a mostly self-explanatory list of date and times.
- Manually enter or edit date and time entries.
- Use the start/stop button to start and stop the timer.
- Starting the timer creates a new line in the list with the current Date and Start Time.
- Stopping the timer will populate the "End Time", which calculates the Duration.
- Alternatively, you can manually set the Duration, which will calculate your end time for you.
- _TIP: tab through the columns for quick entry._
- If an entry in the times list has no end time yet, the task record is considered to have the Running status and you will see the Duration of the task change every second when viewing the task, while it tracks the progress.

## Lifecycle of a Task

Tasks have a unique lifecycle, with the option to create custom statuses and support for multiple statuses to aid in sorting and managing tasks while reflecting their current states.

### Manual Task Status or _Logged_

A manually set task status is one that you select or configure, such as one of the pre-configured task statuses (Backlog, Done, In progress, or Ready to do) or a custom status you've created in _Settings_ > _Task Settings_. These statuses serve primarily as recordkeeping and help sort and visualize your active tasks. Tasks with a manually set status are considered _Logged_ if they have not been invoiced and are not currently in a _Running_ state.

### Running

A running task is any task that is currently tracking billable hours on the clock.

- A task automatically enters a _Running_ status when it contains a line for date/time with a start time entered, but no duration or end time yet entered.

- A running task will always show a moving time for it's _Duration_ to help track the active work being performed for that task.
- When a task is in the running state, it will be presented in the table as "Running" but it technically still has the manually set task status, and when you look at the tasks kanban view, you will see it sorted as such, with a "play" icon next to it to represent it is in a running state.
- Whether you manually populate the _End Time_ or _Duration_ of the open ended line on a task record, or stop the task to automatically populate those fields, the running task will return to a _Logged_ state, and appear in the table with the manually set task status.

### Invoiced

A task is in an invoiced state after the task has been added to an invoice. A task in the invoice state no longer appears in the kanban view, because it is considered completed. When viewing a task that has been invoiced, there will be a link to the invoice it has been assigned to.

### Archived

Archived tasks are hidden from all views by default. Archived tasks are still considered available, and can be invoiced and billed for. You can change your view filters to see archived tasks, and you can "Restore" an archived task to return it to its former state.

### Deleted

A deleted task is no hidden from all views by default, and is no longer considered available. Deleted tasks can not be added to invoices, edited, or billed for. You can change your view filters to see deleted tasks, and you can "Restore" a deleted task record to return it to its former state.

<x-next url=/en/purchase_orders>Purchase Orders</x-next>
