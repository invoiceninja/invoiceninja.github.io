---
extends: _layouts.migration
section: content
locale: fr_CA
---

# Migration vers v5

<x-info>
Si vous êtes un utilisateur de Invoice Ninja hébergé, vous pouvez ignorer toutes ces étapes. Connectez-vous simplement à votre compte, cliquez sur le bouton Démarrer la migration dans Paramètres > Gestion du compte et nous nous occuperons du reste. Une fois que vous êtes sûr que vos données ont été transférées, vous pouvez suivre les étapes de notre guide [Activation](https://invoiceninja.github.io/fr_CA/hosted-activate/)
</x-info>

<x-warning>
Vous devez configurer cette version (v5) complètement à partir de zéro. N'essayez pas de remplacer votre ancienne version d'Invoice Ninja (4.x.x) avec cette version car les deux bases de code sont complètement différentes.
</x-warning>

## Préparation v4.

La première étape nécessaire pour préparer la migration de vos données vers votre nouvelle installation v5 est de mettre à jour votre installation v4 vers la [dernière version](https://download.invoiceninja.com) disponible. C'est une étape cruciale et vous rencontrerez des problèmes lors de la migration de vos données si vous ne mettez pas à jour vers la dernière version v4.

## Installation de v5.

L'installation de v5 est expliquée en détail [ici](/fr_CA/self-host-installation) avec des ressources pour couvrir vos besoins pour des installations Docker / Hébergement partagé ou Ubuntu/Centos.

Un détail important lors de votre installation v5 est que votre identifiant utilisateur initial est identique à celui de votre installation v4.

La migration repose fortement sur le système de file d'attente Laravel, vous devez donc vous assurer d'avoir configuré le planificateur cron qui démarre la file d'attente Laravel pour vous. Si vous ne configurez pas le planificateur cron, la migration ne fonctionnera pas et vous vous retrouverez avec une entreprise vide sans contenu.

<x-warning>
Veuillez noter que la version 5.3.0 nécessite désormais PHP 7.4. Pour certains environnements, vous devrez peut-être envisager d'utiliser une plateforme vous permettant d'utiliser plusieurs versions de PHP. La plupart des hébergeurs Web réputés offrent cPanel avec MultiPHP switcher
</x-warning>

## Démarrage de la migration

![texte alternatif](/assets/images/migration/migration_step_1.png "Commencer la migration")

Accédez à Paramètres > Gestion des comptes et faites défiler jusqu'à ce que vous voyez le bouton Démarrer la migration.

![texte alternatif](/assets/images/migration/migration_step_2.png "Sélectionnez auto-hébergé")

Après avoir cliqué sur ```Démarrer la migration```, vous obtiendrez un autre écran, sélectionnez simplement le bouton radio d'auto-hébergement et continuez.

![texte alternatif](/assets/images/migration/migration_step_3.png "Entrer l'URL")

Le prochain écran demande le nom de domaine complet qualifié de votre installation v5, entrez ceci en incluant le http:// ou https:// dans votre URL, c'est-à-dire

```
http:://ninja.test
```

![texte alternatif](/assets/images/migration/migration_step_4.png "Authentifier")

L'écran suivant vous demande de saisir vos identifiants de connexion, en gardant à l'esprit que ceux-ci doivent être identiques entre votre installation v4 et v5. Vous remarquerez également un champ supplémentaire ```API_SECRET``` ; vous pouvez l'ignorer si vous n'avez pas de valeur définie pour cela dans votre fichier ```.env```.

Si vous rencontrez une erreur à ce stade, il est fort probable que vos identifiants sont incorrects ou que l'URL que vous avez saisie n'est pas correcte.

![texte alternatif](/assets/images/migration/migration_step_5.png "Sélectionner une entreprise")

Si vous vous authentifiez avec succès, vous verrez l'écran suivant qui vous permet de sélectionner les entreprises que vous souhaitez migrer.

**Points importants à ce stade :**

* La migration forcée écrasera une entreprise existante qui a déjà été migrée vers la v5, c'est destructeur et irréversible.
<br>**NOTE :** Si la 1ère migration échoue et que seulement une partie des données a été transférée, PURGEZ et SUPPRIMEZ les données/l'entreprise et recommencez le processus avec "Migration forcée" coché.
* Il suffit de cocher la case à côté du nom de l'entreprise pour tenter une migration si l'entreprise n'a jamais été migrée vers l'installation v5. C'est une migration non-destructive, c'est-à-dire qu'elle n'écrasera pas une entreprise correspondante.

![texte alternatif](/assets/images/migration/migration_step_6.png "Migration commencée")

## Processus de migration v5
Avec un peu de chance, vous devriez avoir déjà reçu une notification par courriel vous informant que la migration est terminée !

Il y a quelques éléments que vous voudrez vérifier pour vous assurer que les données ont été transmises correctement :

* Assurez-vous que le logo de votre entreprise a été transféré (Paramètres > Détails de l'entreprise > Logo)
* Assurez-vous que les données transférées passent notre contrôle de qualité des données en exécutant

```php
php artisan ninja:verifier-donnees
```

Une série de vérifications sont effectuées et si vous voyez 0 problème, cela signifie que vos données ont été transférées correctement.

* Vous voudrez également inspecter les journaux situés dans :

```bash
storage/logs/laravel.log
```

À l'intérieur, vous verrez une sortie comme celle-ci :

## Transfert des utilisateurs de v4 à v5

Lorsque vous avez terminé la migration et que vous êtes satisfait de la configuration de votre installation v4, il est temps de rediriger vos utilisateurs ayant déjà des invitations v4 vers votre installation v5.

Dans la v4, accédez à Réglages > Gestion de compte - Rediriger les clients vers la v5.

Entrez l'URL de votre installation v5 et cliquez sur enregistrer. Lorsque vos utilisateurs utiliseront des liens v4 existants, ils seront redirigés en toute transparence vers votre installation v5.

Pour les utilisateurs hébergés, vous pouvez découvrir votre URL complète en naviguant dans la v5 vers Paramètres > Portail Client. Le champ Sous-domaine sera la valeur du sous-domaine avec invoicing.co à la fin. c'est-à-dire.


<x-warning>
    Attention ! Une fois la redirection activée, votre compte v4 sera désactivé. Cela signifie que vos factures récurrentes et les rappels / facturation automatique ne seront plus effectués à partir de cette installation.
</x-warning>


https://subdomain.invoicing.co"

## Dépannage

Si vous rencontrez des problèmes avec la migration qui ne se déroule pas comme prévu, veuillez suivre la liste de vérification suivante :

* Assurez-vous que les répertoires sont accessibles en lecture/écriture par l'utilisateur web (c.-à-d. www-data)
* Assurez-vous que le planificateur cron fonctionne (et travaille) - Vous pouvez vérifier s'il fonctionne en inspectant la table ```jobs``` dans la base de données, elle doit être vide
* Inspectez le fichier journal /storage/logs/laravel.log pour plus d'informations.
* Si vous rencontrez toujours des problèmes, activez la journalisation avancée en ajoutant la variable suivante à votre fichier .env.

```
EXPANDED_LOGGING=vrai
```
Ensuite, tentez à nouveau la migration et, par la suite, inspectez le fichier journal dans storage/logs/invoiceninja.log

* Si vous utilisez `https://`, assurez-vous d'utiliser un certificat SSL signé, vous pourriez rencontrer des erreurs d'authentification si vous essayez d'utiliser un certificat auto-signé. Des certificats SSL gratuits sont disponibles auprès de [lets encrypt](https://letsencrypt.org)
* Vous rencontrez toujours des problèmes ? Recherchez sur le [forum](https://forum.invoiceninja.com) ou venez discuter avec nous sur [slack](https://invoiceninja.slack.com)

## Notifications d'échec de migration","52":"L'application fera de son mieux pour rapporter une erreur lisible par l'humain si la migration échoue pour une raison quelconque.

Quelques problèmes connus lors de la migration vers notre plateforme hébergée incluent :

```
"Cet utilisateur ne peut pas être associé à cette entreprise. Peut-être ont-ils déjà enregistré un utilisateur sur un autre compte?"
```

Si vous voyez cette erreur, cela indique que l'un de vos utilisateurs a déjà enregistré son propre compte sur la plateforme hébergée. Nous ne prenons pas en charge les utilisateurs multi-comptes pour des raisons de sécurité. Vous devrez changer l'adresse e-mail de l'utilisateur dans votre installation v4 à une adresse e-mail différente pour que la migration réussisse.

## Migration entre comptes

La migration de la version 4 à la version 5 n'est autorisée qu'entre les comptes ayant la même adresse e-mail. Il s'agit d'une exigence,
et avant de commencer la migration, assurez-vous d'utiliser la même adresse e-mail sur la version 4 et la version 5 pour l'utilisateur.

