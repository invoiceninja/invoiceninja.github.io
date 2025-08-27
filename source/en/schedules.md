---
extends: _layouts.user_guide
section: content
locale: en
---

# Schedules

The Invoice Ninja scheduler allow you to configure tasks to run automatically. For instance, you can configure a monthly aging report to be emailed, or you can configure client statements to be sent at months end. Below we step through each of the available schedulers we have.

## Email Statement

The Email Statement scheduler enables you to automatically send client statements at predetermined intervals.  
This feature is particularly useful for maintaining regular communication with your clients about their account status and outstanding balances.  
You can configure the frequency (daily, weekly, monthly, or custom intervals) and specify which clients should receive these statements.  
The system will automatically generate and send professional-looking statements that include current balances, recent transactions, and payment history.

<div class="video_container">
    <x-video src="/assets/videos/email_statement/email_statement.mpd" is_dash="true" id="statement-schedule"></x-video>
</div>

## Email Record

The Email Record scheduler allows you to configure an Invoice/Quote/Credit or Purchase Order to be sent on exact date.  
This is perfect when you need fine grained control over _when_ the client or vendor will receive the document.

<div class="video_container">
    <x-video src="/assets/videos/schedule_invoice/schedule_invoice_email.mpd" is_dash="true" id="invoice-email-schedule"></x-video>
</div>

## Email Report

The Email Report scheduler is designed to automatically generate and distribute various business reports to stakeholders.  
You can schedule reports such as aging reports, revenue summaries, expense breakdowns, or custom financial analyses to be sent to specific email addresses or team members.  
This ensures that key decision-makers receive regular updates on business performance without manual intervention, helping maintain transparency and informed decision-making across your organization.

<div class="video_container">
    <x-video src="/assets/videos/schedule_report/schedule_report.mpd" is_dash="true" id="report-schedule"></x-video>
</div>

## Invoice Outstanding Tasks

The Invoice Outstanding Tasks scheduler helps you stay on top of follow-up activities related to unpaid invoices.  
This feature can automatically create an invoice based on outstanding tasks over a given period.  
You can configure the system to create these invoices based on specific criteria, such as the date range and types of tasks to be invoiced.

<div class="video_container">
    <x-video src="/assets/videos/schedule_invoice_tasks/schedule_invoice_tasks.mpd" is_dash="true" id="invoice-tasks-schedule"></x-video>
</div>

## Payment Schedules

Allow your clients to payment invoices on a time based program. You can use our easy setup which just needs the start date, number of payments and the frequency. (for example. 4 monthly payments starting on the 1st of October).  
The client will receive an email on each scheduled date for the payable amount. You can also configure the scheduler to auto bill these if preferred.  
Schedules can be configure by using either Dollar amounts, or percentage amounts.

<div class="video_container">
    <x-video src="/assets/videos/payment_schedule/paymentschedulemp4265.mpd" is_dash="true" id="payment-schedule"></x-video>
</div>

