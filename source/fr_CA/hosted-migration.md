---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

## De V4 hébergé à V5 hébergé

La migration vers v5 pour les utilisateurs hébergés devrait être un processus simple.

Commencez par naviguer vers

```bash
Paramètres / Gestion de compte
```

et cliquez sur le bouton Démarrer la migration.

![alt text](/assets/images/hosted-migration/hosted_migration_step_1.png "Étape 2")

Le prochain écran affichera toutes vos entreprises qui sont disponibles pour la migration. Cochez les cases des entreprises que vous souhaitez migrer.

![alt text](/assets/images/hosted-migration/hosted_migration_step_2.png "Étape 2")

<x-warning>Si vous avez déjà migré vers v5, veuillez noter que l'activation de la case à cocher `Forcer la migration` ÉCRASERA TOUTES VOS DONNÉES sur V5. Ceci est irréversible. Si vous n'êtes pas sûr, veuillez envoyer un courriel à contact@invoiceninja.com.</x-warning>

Une fois que vous avez sélectionné les entreprises à migrer, cliquez sur le bouton Continuer. Cela démarrera automatiquement le processus de migration. Lorsqu'il sera terminé, vous recevrez un courriel avec les prochaines étapes.

Après avoir terminé la migration, vous voudrez désactiver v4 pour éviter qu'il n'envoie des courriels/factures récurrentes et activer v5. Le guide complet pour l'activation se trouve [ici](https://invoiceninja.github.io/fr_CA/hosted-activate/)

<x-info>Si vous recevez une erreur d'échec de la migration, veuillez nous contacter via contact@invoiceninja.com et nous pourrons vous aider davantage.</x-info>

## Migration auto-hébergée vers hébergée

Parfois, la gestion de votre propre serveur auto-hébergé est tout simplement trop compliquée.

Nous avons simplifié le transfert depuis votre serveur auto-hébergé (et vice versa).

Inscrivez-vous d'abord à l'un de nos plans [gratuits](https://invoiceninja.invoicing.co/client/subscriptions/VolejRejNm/purchase) ou [payants](https://invoiceninja.invoicing.co/client/subscriptions/7LDdwRb1YK/purchase).

Ensuite, assurez-vous d'être sur la dernière version de v5, puis effectuez une exportation de vos données.

![alt text](/assets/images/hosted-migration/v5-export.png "Export")

Une fois l'exportation terminée, vous recevrez un courriel avec un lien de téléchargement vers le fichier de sauvegarde. Connectez-vous simplement à votre compte Hosted v5 et accédez à Paramètres > Importer | Exporter et utilisez le fichier .zip pour importer vos données.

![alt text](/assets/images/hosted-migration/v5-import.png "Import")
