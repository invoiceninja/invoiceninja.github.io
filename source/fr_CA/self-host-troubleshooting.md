---
extends: _layouts.self_host
section: content
locale: fr_CA
---

# Dépannage

### Étapes générales de dépannage

Si vous rencontrez des problèmes avec votre instance Invoice Ninja auto-hébergée, suivez ces étapes générales de dépannage avant de passer aux sections spécifiques :

1. Vérifiez que vous répondez aux [exigences minimales du système](https://invoiceninja.github.io/fr_CA/self-hosting/#requirements).
2. Consultez le [forum Invoice Ninja](https://forum.invoiceninja.com/) pour obtenir une assistance communautaire.
3. Examinez les journaux pour les messages d'erreur. Vous pouvez trouver les journaux dans le répertoire `storage/logs`.


## Cron ne fonctionne pas / Queue ne fonctionne pas

<x-warning>
Il peut prendre jusqu'à une heure pour que le triangle d'avertissement rouge disparaisse après avoir correctement configuré votre Cron.

Après avoir apporté des modifications à votre configuration cron, vous voudrez forcer une nouvelle vérification des paramètres cron. Pour cela, accédez à l'URL de mise à jour dans votre navigateur : http://url/update?secret=
</x-warning>

Si vous êtes confronté à des factures récurrentes qui ne se déclenchent pas ou à des rappels qui ne s'envoient pas, il est fort probable que votre travail cron ne fonctionne pas. La première chose à faire est de vous assurer que vous avez configuré correctement vos travaux cron en suivant le guide [ici](https://invoiceninja.github.io/fr_CA/self-host-installation/#cron-configuration-1)

Si vous utilisez un hébergement partagé, vous devrez ajouter un paramètre supplémentaire à la commande cron qui ressemble à ceci:

```
cd /chemin/vers/le/dossier/racine && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

Veuillez noter que sur certains systèmes, l'emplacement de PHP peut être différent, alors confirmez avec votre fournisseur d'hébergement le chemin à utiliser pour PHP.

Pour tester vos modifications, accédez à l'URL de mise à jour suivante dans votre navigateur :

```
https://votredomaine.com/update?secret=
```

La variable secrète est située dans votre fichier .env, sous la clé UPDATE_SECRET, cela forcera une nouvelle vérification et si le cron fonctionne, le triangle d'erreur rouge disparaîtra.

## Les PDF ne semblent pas être mis à jour

Si vous utilisez Cloudflare, il est probable que Cloudflare mette en cache vos données statiques. Pour forcer la suppression du cache, éditez votre fichier nginx.conf et ajoutez le snippet suivant :

```
location ~* \.pdf$ {
    add_header Cache-Control no-store;
}
```

Sur les serveurs basés sur Apache, ouvrez le fichier /public/.htaccess et mettez à jour le bloc mod_headers :

```apacheconf
<IfModule mod_headers.c>
    # Blocks Search Engine Indexing
    Header set X-Robots-Tag "noindex, nofollow"

    # Prevents PDF File Caching
    <FilesMatch ".pdf$">
        Header set Cache-Control no-store
    </FilesMatch>
</IfModule>
```

## Les e-mails ne sont pas envoyés

Si vous rencontrez des problèmes d'envoi d'e-mails, assurez-vous de vérifier que votre fichier .env contient les champs correctement configurés.

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME="votre_adresse_e-mail@gmail.com"
MAIL_PASSWORD="votre_mot_de_passe_n'oubliez_pas_les_guillemets!"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="votre_adresse_e-mail@gmail.com"
MAIL_FROM_NAME="Nom complet entre guillemets"
```

<x-warning>
Si vous utilisez Gmail - Utilisez un [mot de passe spécifique à l'application](https://support.google.com/accounts/answer/185833?hl=fr) ou assurez-vous que les applications moins sécurisées sont activées.
</x-warning>

<x-warning>
Si vous utilisez Office 365 - Vous devrez peut-être [activer SMTP AUTH](https://docs.microsoft.com/fr-fr/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission).
</x-warning>

Si vous utilisez Gmail SMTP Relay, une variable .env supplémentaire est requise.

Pour Gmail SMTP Relay, assurez-vous également d'avoir configuré ce service dans Google en suivant les étapes suivantes :

```
Accédez à [Applications > Google Workspace > Gmail > Routage]
À côté du service de relais SMTP, cliquez sur Configurer.
Configurez le service de relais SMTP en suivant les étapes décrites dans [Relais SMTP : Faites passer les messages sortants non Gmail par Google]
Ensuite, dans votre fichier env, utilisez ce qui suit :

Le relais SMTP de Gmail nécessite un nom de domaine EHLO correct à envoyer pendant la poignée de main SMTP : [127.0.0.1] ne suffit plus. Pour cela, Laravel doit vérifier une variable de domaine d'hôte et l'envoyer avec la demande de poignée de main.

MAIL_EHLO_DOMAIN="server.domain.com"
MAIL_MAILER=smtp
MAIL_HOST=smtp-relay.gmail.com
MAIL_PORT=587
MAIL_USERNAME=xxxx
MAIL_PASSWORD=xxxx
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=xxxx
MAIL_FROM_NAME=xxxx
```

Vous voudrez également vous assurer de ne pas avoir de règles de pare-feu qui pourraient bloquer l'accès aux serveurs Google. Juste au cas où, assurez-vous que les adresses IP suivantes sont sur liste blanche :

```
142.251.163.28
172.253.63.28
172.253.118.28
74.125.24.28
142.250.114.28
142.250.4.28
142.251.12.28
172.217.194.28
142.250.31.28
142.251.167.28
172.253.115.28
```

Pour plus d'informations détaillées sur Gmail Relay, consultez ce post de notre forum par le membre de la communauté charles :

https://forum.invoiceninja.com/t/emails-not-sending-yet-another-thread-v5-5-55/12401/9

### Configuration du mailer

Le champ ```MAIL_MAILER``` définit le pilote de messagerie que vous souhaitez utiliser : cela peut être Postmark, Mailgun, SMTP, Log... Tout ce que Laravel 9 prend en charge nativement est pris en charge dans cette application.

Si la configuration du mail est correcte, le prochain endroit à vérifier serait les journaux d'erreurs pour toutes les erreurs qui sont en cours, le journal d'erreurs se trouve dans ```storage/logs/laravel.log```.

La dernière source d'informations pour diagnostiquer les problèmes de courrier électronique consiste à inspecter l'onglet ```Journaux système``` dans le tableau de bord de l'application. Ici, nous enregistrons tous les messages du serveur de messagerie lui-même qui peuvent être instructifs quant à la cause de vos problèmes.

Si vous utilisez le système de file d'attente, c'est-à-dire QUEUE_CONNECTION=database, vous voudrez peut-être également vérifier la table des emplois dans la base de données. Il ne devrait y avoir _aucun_ enregistrement dans cette table... S'il y a des enregistrements dans la table, cela signifie que votre file d'attente ne fonctionne pas et donc aucune tâche de messagerie n'est traitée.

Il est possible que les e-mails soient envoyés mais bloqués pour des raisons DNS, SPF, DKIM ou autres. Dans ces cas, l'envoi d'une facture de test à [mail-tester.com](https://mail-tester.com) peut aider à résoudre certains problèmes.

De plus, si vous voyez dans /storage/logs/invoiceninja.log cette ligne ```error failed with stream_socket_enable_crypto(): SSL operation failed with code 1. OpenSSL Error messages:
error:14090086:SSL routines:ssl3_get_server_certificate:certificate verify failed```, essayez d'exécuter `yum update` sur votre serveur Web, cela devrait résoudre le problème de ca-certificates.

## Problèmes d'envoi d'e-mails avec GoDaddy

GoDaddy n'autorise pas l'envoi d'e-mails via des serveurs [SMTP](https://my.godaddy.com/help/send-form-mail-using-an-smtp-relay-server-953) tiers. Ils exigent que tous les e-mails soient envoyés via leurs propres serveurs. Si vous devez utiliser GoDaddy, nous vous suggérons d'utiliser un service d'e-mails transactionnels tel que PostMark pour contourner ce problème.

## Problèmes de conversion de PDF

Nous recommandons fortement d'utiliser le package [snappdf](https://github.com/beganovich/snappdf) intégré, qui est un générateur de PDF très performant basé sur le binaire headless chrome/chromium. Ce package est parfait pour les utilisateurs qui ont un accès root à leur serveur et qui sont capables d'installer les dépendances requises si nécessaire.

Pour configurer SnapPDF, utilisez les variables d'environnement suivantes :

```
PDF_GENERATOR=snappdf
```

À partir de la version 5.5.12, nous ne pré-intégrons plus snappdf dans les fichiers de la version, donc si vous avez une nouvelle installation, vous devrez manuellement invoquer le téléchargement du binaire chromium. À partir de la racine du projet, exécutez la commande suivante :

```
vendor/bin/snappdf download
```

Snappdf est également le moteur PDF par défaut de notre image [Docker](https://github.com/invoiceninja/dockerfiles), donc si vous préférez une installation très simple, veuillez envisager notre configuration Docker, car elle est très rapide à mettre en place !

Vous pouvez utiliser cette commande pour tester Snappdf :

```
./vendor/bin/snappdf convert --html "<h1>Bonjour, monde</h1>" test.pdf
```

Une liste complète des dépendances requises est disponible [ici](https://github.com/beganovich/snappdf#headless-chrome-doesnt-launch-on-unix).

Si vous utilisez un hébergement mutualisé, il vous sera probablement impossible d'utiliser snappdf car vous n'avez pas accès au sous-système pour installer les packages requis. Au lieu de cela, vous devrez utiliser un service de PDF hébergé. Les deux services PDF pris en charge par Invoice Ninja v5 sont [PhantomJS Cloud](https://phantomjscloud.com/) et notre propre générateur PDF hébergé, que vous pouvez utiliser gratuitement pour générer des PDFs de manière _illimitée_.

### Phantom JS

Phantom JS Cloud est le moteur PDF par défaut utilisé [PhantomJS Cloud](https://phantomjscloud.com/) pour générer vos PDF. La clé d'API par défaut qui accompagne une installation propre ne générera pas de PDF de manière fiable. Pour vous assurer que vous pouvez générer des PDF, vous devriez vous inscrire pour une clé d'API sur le site phantomjscloud et utiliser cette clé dans le fichier .env.

Phantom JS peut être activé ou désactivé en définissant PHANTOMJS_PDF_GENERATOR sur TRUE ou FALSE. Les variables d'environnement suivantes sont disponibles pour configurer PhantomJS.

```
PDF_GENERATOR=phantom
PHANTOMJS_KEY='une-clé-de-demo-avec-un-quota-faible-par-adresse-ip'
PHANTOMJS_SECRET='votre-secret-ici'
```


Le `PHANTOMJS_SECRET` peut être une valeur aléatoire quelconque, il est utilisé pour contourner le mot de passe du portail client.

Si vous rencontrez des erreurs lors de la génération de PDF, telles que `500 Server error` ou `Failed to load PDF document` ou une barre de chargement continue, vous devez obtenir une clé PhantomJS [ici](https://dashboard.phantomjscloud.com/dash.html#/signup) et la remplacer par la clé préremplie `a-demo-key-with-low-quota-per-ip-address`.

<x-warning>
Pour que PhantomJS fonctionne, l'adresse Web de votre installation d'Invoice Ninja doit être publique ; les installations localhost ou celles sur des réseaux privés ne pourront pas utiliser PhantomJS Cloud.
</x-warning>

### Génération de PDF hébergée par Invoice Ninja

Le PDF par défaut généré à partir de la version 5.5.12 est notre système de conversion de PDF hébergé sur notre plateforme. Le générateur PDF hébergé par Invoice Ninja est un générateur de PDF hors site hébergé par Invoice Ninja, qui fonctionne de manière similaire à PhantomJS. Il est important de noter que nous ne stockons aucune information avec ce service, nous convertissons simplement le HTML que votre système envoie en un fichier PDF qui est renvoyé à la volée.

```
PDF_GENERATOR=hosted_ninja
```

## Problèmes spécifiques à la plateforme

### Conseils généraux

En cas d'erreurs, commencez par définir `APP_DEBUG=true` dans `.env`

### Processus signalé avec le signal "5"

Ce message d'erreur est observé lorsque la file d'attente tente d'effectuer une action pour laquelle l'utilisateur de la file d'attente n'a pas les autorisations correctes. Vous pouvez voir cette erreur si vous exécutez des arguments en ligne de commande en tant qu'utilisateur autre que l'utilisateur Web.

Cela se voit le plus souvent dans Invoice Ninja lorsque snappdf a été téléchargé depuis la ligne de commande en tant qu'utilisateur régulier, les autorisations sur le binaire peuvent empêcher l'utilisateur Web d'exécuter le binaire chrome lors de la génération du PDF.

Assurez-vous toujours que les tâches exécutées en ligne de commande sont exécutées par l'utilisateur Web. Sur Ubuntu, il s'agit généralement de www-data.

### Format de données erroné pour la désérialisation de 'Symfony\Component\Routing\CompiledRoute'

La cause la plus courante de ce problème est l'exécution de plusieurs versions de PHP. Si les caches sont construits avec une version différente de PHP, vous pouvez voir l'erreur ci-dessus, car des versions différentes de PHP peuvent ne pas être interopérables sur la même installation. Assurez-vous d'exécuter la même version de PHP CLI et Web pour éviter toute erreur.

### Impossible de se connecter à la base de données après l'installation

Vous devrez peut-être redémarrer la file d'attente de cette manière

```
php artisan queue:restart
```

### Nginx: 413 – Request Entity Too Large

Cette erreur indique que le paramètre client_max_body_size de NGINX est trop petit. Vous devrez modifier votre configuration nginx et augmenter la taille.


### Nginx: 413 – Request Entity Too Large

Cette erreur indique que le paramètre client_max_body_size de NGINX est trop petit. Vous devrez modifier votre configuration nginx et augmenter la taille.

```
client_max_body_size 100M;
```


### Configuration du proxy.

Pour les utilisateurs qui comptent sur la configuration d'un proxy inverse, veuillez consulter ce post sur notre forum qui détaille les étapes qui peuvent aider à configurer un proxy inverse.

<a href="https://forum.invoiceninja.com/t/selfhosting-setup-failing/5651/8">Reverse Proxy Invoice Ninja</a>

### Problèmes de migration

Si vous rencontrez des problèmes avec la migration qui ne se déroule pas comme prévu, veuillez passer en revue la liste de contrôle suivante :

* Assurez-vous que les répertoires sont lisibles/inscriptibles par l'utilisateur Web (ie www-data)
* Assurez-vous que l'ordonnanceur cron est en cours d'exécution (et fonctionne) - Vous pouvez vérifier s'il fonctionne en inspectant la table ```jobs``` dans la base de données, elle doit être vide.
* Inspectez le fichier journal /storage/logs/laravel.log pour obtenir des informations supplémentaires.
* Si vous rencontrez toujours des problèmes, activez la journalisation avancée en ajoutant la variable suivante à votre fichier .env. ```EXPANDED_LOGGING=true``` Ensuite, essayez à nouveau la migration et inspectez le fichier journal dans storage/logs/invoiceninja.log

### libatk.so ne se charge pas pour Google

La génération de PDF ne fonctionnera pas avec le moteur PDF intégré sans certaines dépendances du sous-système. Veuillez consulter cette ressource pour la liste des bibliothèques nécessaires pour chaque plateforme prise en charge : <a href="https://github.com/beganovich/snappdf#headless-chrome-doesnt-launch-on-unix">Snappdf required libraries</a>

### Configuration de WebCron

Certains systèmes n'autorisent pas les configurations cron, un contournement consiste à utiliser un service de cron Web qui peut frapper un point final défini qui exécute l'ordonnanceur via une requête HTTP GET. Invoice Ninja a mis en place un petit service pour permettre à un service de cron Web de frapper le point final :

```
https://domaine.com/webcron?secret=
```

Pour configurer le service, vous devez ajouter une variable .env

```
WEBCRON_SECRET=password
```

# Installer dans un sous-répertoire.

Il est possible d'installer Invoice Ninja dans un sous-répertoire en dehors de la racine du document. Pour cela, vous devrez mettre à jour le fichier .htaccess (uniquement si vous utilisez le serveur web Apache),

```
RewriteRule ^(.*)$ public/$1 [L]
```

devrait être mis à jour en

```
RewriteRule ^(.*)$ subdirectoryname/public/$1 [L]
```

# Boucle de configuration sans fin

Si vous trouvez que toutes vos vérifications de pré-configuration passent mais que vous retombez constamment sur l'écran de configuration, cela peut indiquer que vous manquez de la bibliothèque `mysql-client` nécessaire pour effectuer la migration initiale. Si vous ne pouvez pas l'installer pour une raison quelconque (par exemple XAMPP), vous devrez exécuter les migrations manuellement en saisissant ce qui suit à l'invite de commande


# Boucle de configuration sans fin

Si vous trouvez que toutes vos vérifications de pré-configuration passent mais que vous retombez constamment sur l'écran de configuration, cela peut indiquer que vous manquez de la bibliothèque `mysql-client` nécessaire pour effectuer la migration initiale. Si vous ne pouvez pas l'installer pour une raison quelconque (par exemple XAMPP), vous devrez exécuter les migrations manuellement en saisissant ce qui suit à l'invite de commande

```
php artisan migrate:fresh --seed
```

# flock() attend en paramètre 1 une ressource, bool donné

Cette erreur est déclenchée en profondeur dans PHP et indique un problème de permissions - le répertoire `public/storage` et/ou `storage/` n'est probablement pas accessible en écriture par l'utilisateur web. Selon votre plate-forme, vous devrez exécuter quelque chose comme ceci :

```
sudo chown -R www-data:www-data public/storage

sudo find ./ -type d -exec chmod 755 {} ;
```

et/ou

```
sudo chown -R www-data:www-data storage/

sudo find ./ -type d -exec chmod 755 {} ;
```


# Interface utilisateur non réactive

Si pour une raison quelconque l'interface utilisateur devient non réactive, vous devrez peut-être vider certaines configurations de sous-système et les reconstruire. Il est possible de le faire en naviguant jusqu'à la route `/update?secret=`, c'est-à-dire https://invoiceninja.test/update?secret=. Cela effectuera plusieurs nettoyages système et peut résoudre les problèmes résultant d'une mise à niveau incomplète. Pour protéger cette route, vous êtes invité à ajouter une variable .env `UPDATE_SECRET=a_secret_passcode` qui restreindra la route aux utilisateurs ayant le code secret UPDATE_SECRET.

### Le logo ne s'affiche pas dans le PDF

Il peut être utile d'ajouter `LOCAL_DOWNLOAD=true` au fichier .env, cela incorporera l'image dans le PDF plutôt que de la demander via le réseau.

### Erreur de liaison de communication : 1153 un paquet plus grand que 'max_allowed_packet' a été reçu

Si vous utilisez la base de données pour vos files d'attente, il peut arriver que vous voyiez une erreur provenant de MySQL

```
1153 Got a packet bigger than 'max_allowed_packet'
```

Ceci indique que la charge utile d'insertion est plus importante que ce que MySQL est configuré pour gérer ! Pour contourner ce problème, vous devrez augmenter la variable MySQL

```
max_allowed_packet
```

à une valeur plus grande. Parfois, une valeur de 1024M est requise.

Il peut également être judicieux d'augmenter la variable

```
max_connections
```

car des erreurs similaires peuvent être signalées depuis la base de données.

### Erreur 500 lors de l'édition de modèles PDF

Un [rapport](https://forum.invoiceninja.com/t/500-error-when-editing-pdf-invoice-templates-potential-fix/7067) a été émis par un utilisateur qui a résolu l'erreur 500 sur son serveur en désactivant ModSecurity.

### Erreur 500 lors de la tentative de connexion ou de modification des détails de l'entreprise

Essayez ces étapes pour résoudre l'erreur 500 du serveur lors de la tentative de connexion ou de la modification des détails de l'entreprise.

1. Téléchargez la dernière mise à jour depuis les [versions publiées sur Github](https://github.com/invoiceninja/invoiceninja/releases) (pas `invoiceninja.zip`, mais `Source code (zip)`)
2. Téléchargez le zip, extrayez les fichiers et remplacez-les dans votre /public_html/ (Attention à ne pas remplacer le fichier .env ou tout sera supprimé)
3. Connectez-vous à votre racine et assurez-vous tout d'abord que tous les fichiers sont possédés de manière récursive par l'utilisateur, ex. `sudo chown -R www-data:www-data dir/`
4. Exécutez cette commande `cd /home/domain.com/public_html/invoiceninja/ && php artisan migrate` ou simplement `php artisan migrate`, sélectionnez "YES"
5. Si une erreur comme celle-ci se produit

```
PHP Fatal error: Cannot declare class UpdateDesigns, because the name is already in use in /home/domain.com/public_html/invoiceninja/database/migrations/2021_09_16_115919_update_designs.php on line 0
In 2021_09_16_115919_update_designs.php line n/a: Cannot declare class UpdateDesigns, because the name is already in use
```


Supprimez ce fichier et réessayez la commande jusqu'à ce qu'elle fonctionne correctement.

6. Allez sur https://domain.com/update?secret=x pour vous assurer que la mise à jour a fonctionné, cela devrait afficher l'écran de connexion et fonctionner, vous devriez également pouvoir modifier à nouveau les détails de l'entreprise.

### Dépendance irrésoluble résolvant [Paramètre #0 [array $options]] dans la classe App\Utils\CssInlinerPlugin

Lorsque des modifications sont apportées au conteneur, cela peut rendre le cache obsolète dans l'application et l'empêcher de démarrer.

La solution consiste à vider le contenu du dossier ```bootstrap/cache```, en supprimant manuellement les fichiers ou en exécutant ```/update?secret=``` qui supprimera également le contenu de ce répertoire.

### Erreur non capturée Collection::offsetExists($key)

Cette erreur est observée lorsque le système a Composer v1 installé. Mettez à jour vers Composer 2 en utilisant la commande suivante

```
sudo -H composer self-update
```

### file_exists(): restriction open_basedir en vigueur

Si vous n'êtes pas en mesure d'ajuster les restrictions open_basedir, les étapes suivantes peuvent vous aider :

1. Supprimez bootstrap/cache/config.php
2. Supprimez tous les fichiers journaux dans storage/logs

### J'ai oublié mon mot de passe et ne peux pas le réinitialiser, AIDEZ-MOI !

Si vous avez un accès en ligne de commande, vous pouvez réinitialiser votre mot de passe manuellement en suivant les étapes suivantes. À partir de la ligne de commande, naviguez jusqu'au répertoire du projet et exécutez

```
php artisan tinker
```

Ensuite, trouvez l'identifiant de l'utilisateur pour la réinitialisation du mot de passe

```
User::all();
```

Récupérez l'utilisateur

```
$user = User::find(id_of_user_to_find);
```

Maintenant, réinitialisons le mot de passe

```
$user->password = Hash::make('password');
$user->save();
```




