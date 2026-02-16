---
title: "Self Host Debug Mode"
sidebar_position: 7
---
# Self Host Debug Mode

## Overview

Debug mode should only ever be used to get addtional information on why your system may not be responding / behaving as expected.

By default the .env variable which controls this is set to FALSE.

If your application has become unresponsive, and there is no information in the log files located in

```bash
storage/logs/laravel.log
```

Then you may need to enable debug mode as this will output errors in the browser so you will get direct feedback as to the issue that has caused the application to fail.

:::warning
You should **NEVER** leave your application in debug mode, this potentially could leak credentials and your system will be exposed to potential attackers
:::

##  Security concerns

In Laravel, the ".env" file is used to store configuration values for the application. One of the values that can be set in this file is "APP_DEBUG". This value controls whether or not detailed error messages are displayed when an error occurs in the application.

When "APP_DEBUG" is set to "true", Laravel will display detailed error messages that can include sensitive information such as the file path, database credentials, and other configuration details. This information can be used by attackers to gain unauthorized access to the application and its underlying infrastructure.

Leaving "APP_DEBUG" set to "true" in a production environment is a security concern because it can allow attackers to gain valuable information about the application and its environment. Attackers can use this information to craft targeted attacks against the application or its users, and can also use it to gain unauthorized access to the underlying infrastructure.

To mitigate this security concern, it is recommended to set "APP_DEBUG" to "false" in the ".env" file of a production environment. This will prevent detailed error messages from being displayed and help to protect the application and its users from potential attacks. Additionally, it is important to ensure that all sensitive information is properly secured and not exposed in error messages or other application outputs.

The following CVEs have been reported exploiting this:

* CVE-2020-15168: Laravel 7.x before 7.27.0 allows remote attackers to execute arbitrary code because of an "Unrestricted File Upload" vulnerability via a request to "/debugbar/file".
* CVE-2019-16785: Laravel Framework through 5.8.35 allows unauthorized remote attackers to execute arbitrary OS commands via a crafted web site that is mishandled by the "artisan serve" command.
* CVE-2018-15133: In Laravel Framework through 5.5.40 and 5.6.x through 5.6.29, remote code execution might occur as a result of an unserialize call on a potentially untrusted X-XSRF-TOKEN value, because of the fallback mechanism for CSRF tokens.

These vulnerabilities demonstrate the potential for serious security issues when APP_DEBUG=true is left enabled in a production environment. It is therefore crucial to take appropriate security measures to protect against these types of attacks.