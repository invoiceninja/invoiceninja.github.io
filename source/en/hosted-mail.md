---
extends: _layouts.user_guide 
section: content
locale: en
---

## Hosted Mail Servers

If you are a pro/enterprise user, you have access to multiple different ways to send emails from Invoice Ninja. We offer OAuth integrations with both Google and Microsoft allowing you to send emails from your own email address. 

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