---
extends: _layouts.user_guide 
section: content
locale: en
---

# Hosted migration

## V4 Hosted to V5 Hosted

Migrating to v5 for hosted users should be a straight forward process.

First navigate to

```bash
Settings / Account Management
```

and click on the Start Migration button.

![alt text](/assets/images/hosted-migration/hosted_migration_step_1.png "Step 2")

The next screen will display all of your companies which are available for migration. Mark the check boxes of the companies you wish to migrate.

![alt text](/assets/images/hosted-migration/hosted_migration_step_2.png "Step 2")

<x-warning>If you have previously migrated to v5 please note that enabling the `Force Migration` checkbox will OVERWRITE ALL OF YOUR DATA on V5. This is irreversible. If you are unsure, please send an email to contact@invoiceninja.com.</x-warning>

Once you have selected the companies to migrate click the continue button. This will automatically start the migration process. When it has completed, you will receive an email with your next steps.

After completing the migration you will want to deactivate v4 to prevent it from sending emails / recurring invoices and activate v5. The full guide for activating can be found [here](https://invoiceninja.github.io/en/hosted-activate/)

<x-info>If you receive a migration failed error, please contact us via contact@invoiceninja.com and we can assist further.</x-info>

## Self Hosted to Hosted Migration

Sometimes, the hassle of managing your own Self Hosted Server is just too much. 

We've made transferring from your self hosted server (and vice versa) simple.

First signup for one of our [free](https://invoiceninja.invoicing.co/client/subscriptions/VolejRejNm/purchase) or [paid](https://invoiceninja.invoicing.co/client/subscriptions/7LDdwRb1YK/purchase) plans.

Next you will want to ensure you are on the latest version of v5 and then perform an export of your data.

![alt text](/assets/images/hosted-migration/v5-export.png "Export")

Once the export is completed you will receive an email with a download link to the backup file. Now just log into your Hosted v5 Account and navigate to Settings > Import | Export and use the .zip file to import your data across.

![alt text](/assets/images/hosted-migration/v5-import.png "Import")
