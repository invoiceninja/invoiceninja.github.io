---
extends: _layouts.user_guide 
section: content
locale: en
---

# Hosted Mail

If you are a Pro Plan or Enterprise Plan user, you have access to multiple different ways to send emails from Invoice Ninja. We offer OAuth integrations with both Google and Microsoft allowing you to send emails from your own email address. 

### Send with Gmail / Microsoft


Connecting either Gmail or Microsoft involves the same steps. Below is a short video showing the steps.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/dU48fu3tmS0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<x-info>
Note: Both the initial authentication and the connection to Gmail must use the same OAuth account. ie if you attempt to connect bob@gmail.com you must select this email address for authenticating with Google, and then also allow permissions for this email address to send email. Cross account linking is not possible.
</x-info>

Once you have connected your OAuth account, you can select either Gmail or Microsoft as the Email Provider in

```bash
Settings / Email Settings
```

![alt text](/assets/images/user_guide/gmail_config.png "Configuration screen for Gmail/Microsoft")

After selecting the email provider, you'll then want to select the user who has been authenticated to send emails from the field beneath this.

### Send with Postmark

If you prefer to send bulk emails via PostMark, then this is also supported. We do not throttle the outbound emails using Postmark, so this is suitable if you require a high throughput email service.

![alt text](/assets/images/user_guide/postmark_config.png "Configuration screen for Postmark")

Simply add your Postmark API token to the configuration in 

```bash
Settings / Email Settings
```

<x-warning>
Warning! You must configure a sender signature in Postmark, else Postmark will reject all email attempts. To do this, ensure the email address of your primary user in Invoice Ninja matches the Sender Signature you configured in Postmark
</x-warning>

### Send with Mailgun

If you prefer to send bulk emails via Mailgun, then this is also supported. We do not throttle the outbound emails using Mailgun, so this is suitable if you require a high throughput email service.

![alt text](/assets/images/user_guide/mailgun_config.png "Configuration screen for Mailgun")

Ensure to fill in both your Mailgun Secret and Domain that has been configured.

### Handling Spam / Contacts unsubscribing from your emails.

Email delivery is _hard_ the large email providers such as GMail, Yahoo, Microsoft are continuing their fight against unsolicited / spam emails from filling the inboxes that they serve.

In 2024 it will become even harder with additional checks in place on all emails to ensure that only high quality emails arrive to a users inbox.

In particular, their focus is on working unsubscribe links within emails. Previously we have not needed to insert an unsubscribe link into an invoice email, however now it will become a standard part of all outbound emails to include a unsubscribe link.

<x-warning>
All ourbound emails that are sent from the Invoice Ninja Hosted Mail Service (maildelivery@mail.invoicing.co and maildelivery@invoicing.co) will now contain a working unsubscribe link. If you are sending via your own provider (PostMark / MailGun / GMail / Microsoft) we will not be injecting these unsubscribe links into your emails.
</x-warning>

If your client clicks on an unsubscribe link, they'll be taken to a page where they can opt out of receiving emails from you. This will mark their client record as "DO NOT SEND" and you will also receive a follow up email advising that this action has been taken by your client.

For more information, you can read this great article from ![Postmark](https://postmarkapp.com/blog/2024-gmail-yahoo-email-requirements "Postmark") 

### Send with SMTP

You can also configure your own SMTP server to send emails from Invoice Ninja.

![alt text](/assets/images/user_guide/smtp_server_configuration.png "Configuration screen for SMTP Server")

The following parameters are supported:

- Host ie smtp.gmail.com
- Port ie 587,25,465
- Encryption ie tls,ssl,starttls
- Username SMTP username
- Password SMTP password
- Verify Peer (verifies the identity of the SMTP server, including checking the certificate and hostname)

You can use the Send Test Email button to test the configuration and send a test email to ensure that your SMTP server is working.

### Send with Brevo

![alt text](/assets/images/user_guide/brevo_server_configuration.png "Configuration screen for Brevo")

If you prefer to send bulk emails via Brevo, then this is also supported. We do not throttle the outbound emails using Brevo, so this is suitable if you require a high throughput email service.

The only configuration required is your Brevo API key.
