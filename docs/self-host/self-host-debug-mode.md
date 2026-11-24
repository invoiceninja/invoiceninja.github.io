---
title: "Turn debug mode on and off on a self-hosted Invoice Ninja"
sidebar_label: "Self Host Debug Mode"
sidebar_position: 7
description: "Use APP_DEBUG in .env to show detailed errors on a self-hosted Invoice Ninja, then turn it off. Never leave debug mode on in production."
---

# Turn debug mode on and off on a self-hosted Invoice Ninja

Debug mode makes your self-hosted Invoice Ninja show detailed error messages in the browser. Use it only for a short time, when the app has stopped responding or is behaving strangely and the log file does not tell you why.

:::warning
**Never leave debug mode switched on.** It can leak credentials, such as passwords and database details, and leave your system exposed to attackers. Turn it off as soon as you have found the problem.
:::

## When should I turn on debug mode? {#overview}

Only when you need extra information about why your system is not responding or behaving as expected.

First, check the log file:

```bash
storage/logs/laravel.log
```

If the app has become unresponsive and that log file does not explain the problem, you can turn on debug mode. It shows errors directly in the browser, so you can see what caused the app to fail.

## How do I turn debug mode on and off?

Debug mode is controlled by `APP_DEBUG` in your `.env` file. The default is `false` (off).

1. Open the `.env` file on your server.
2. To turn debug mode on, set `APP_DEBUG=true`.
3. If you cache configuration on this server, run `php artisan config:clear` so the new value is picked up.
4. Reproduce the problem and read the error shown in your browser.
5. Set `APP_DEBUG=false` as soon as you are done, and run `php artisan config:clear` again if you use a config cache.

## Why is debug mode a security risk? {#security-concerns}

When `APP_DEBUG` is `true`, Laravel (the framework Invoice Ninja is built on) shows detailed error messages when something goes wrong. Those messages can include sensitive information, such as:

- File paths on your server
- Database credentials
- Other configuration details

Attackers can use this information to plan targeted attacks against your app or its users, or to break into the app and the server it runs on. That is why leaving `APP_DEBUG` set to `true` on a live (production) system is a security risk.

To stay safe:

- Keep `APP_DEBUG` set to `false` in the `.env` file of your live system, except for the short time you are diagnosing a problem.
- Make sure no sensitive information is exposed in error messages or other app output.

These public Laravel CVEs show how serious problems can be when debug tooling or related framework issues are left exposed on a live system:

- **CVE-2020-15168:** Laravel 7.x before 7.27.0 allows remote attackers to run arbitrary code because of an "Unrestricted File Upload" vulnerability via a request to "/debugbar/file".
- **CVE-2019-16785:** Laravel Framework through 5.8.35 allows unauthorized remote attackers to run arbitrary OS commands via a crafted web site that is mishandled by the "artisan serve" command.
- **CVE-2018-15133:** In Laravel Framework through 5.5.40 and 5.6.x through 5.6.29, remote code execution might occur as a result of an unserialize call on a potentially untrusted X-XSRF-TOKEN value, because of the fallback mechanism for CSRF tokens.

Always switch debug mode off when you finish.

## Related

- [Env Variables](/docs/self-host/env-variables)
- [What should I do if something goes wrong?](/docs/self-host/getting-started#debugging-problems)
- [Self Host Troubleshooting](/docs/self-host/self-host-troubleshooting)
