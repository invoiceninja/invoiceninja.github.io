---
extends: _layouts.self_host
section: content
locale: fr_CA
---

# Installation

## Exigences du serveur

<p>Invoice Ninja a quelques exigences système. Construit sur la base de <a href="https://www.laravel.com/fr_CA/">Laravel</a>, il requiert un serveur PHP et MySQL au minimum avec les versions et extensions suivantes installées.</p>

<x-warning>
Vous devez configurer cette version complètement à partir de zéro. N'essayez pas d'écraser votre ancienne version d'Invoice Ninja (4.x.x) avec cette version, car les deux bases de code sont complètement différentes.
</x-warning>


* PHP 8.1 avec les extensions suivantes
    * bcmath
    * ctype
    * fileinfo
    * gd
    * mbstring
    * openssl
    * PDO
    * tokenizer
    * xml
    * curl
    * zip
    * gmp
    * iconv
    * mysqli
    * fpm (si vous utilisez NGINX)
* MySQL 5.7+ ou MariaDB 10.3+
* NGINX ou Apache

Sur Ubuntu, cela devrait être aussi simple que d'exécuter :

```bash
sudo apt install php8.1-bcmath php8.1-gmp php8.1-fileinfo \\
    php8.1-gd php8.1-mbstring php8.1-pdo php8.1-xml \\
    php8.1-curl php8.1-zip php8.1-gmp php8.1-mysql php8.1-fpm
```

## Installation de Invoice Ninja

### Ubuntu 20.04 (Recommandé)

Le membre de la communauté TechnicallyComputers a un guide étape par étape très utile sur comment installer Invoice Ninja v5 à partir de zéro sur Ubuntu, vous pouvez accéder au guide [ici](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-ubuntu-20-04/4588)

### Installation sur CentOS 8

Si CentOS est plus votre style, le membre de la communauté TechnicallyComputers a un guide d'installation étape par étape très complet [ici](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-centos-8/4293).

### Installation sur Arch

Si Arch Linux est plutôt votre style, le membre de la communauté brackenhill-mob a un guide d'installation étape par étape très complet [ici](https://forum.invoiceninja.com/t/howto-install-invoice-ninja-v5-on-arch-linux/6196)

### Installation sur Enterprise Linux

TechnicallyComputers a également un guide pour l'installation d'Invoice Ninja sur Enterprise Linux [ici](https://forum.invoiceninja.com/t/install-invoice-ninja-v5-on-enterprise-linux-8/4293)

### Installation avec Docker

Nous avons un dépôt dédié avec des instructions détaillées sur comment commencer <a href="https://github.com/invoiceninja/dockerfiles">ICI</a>.

<iframe width="560" height="315" src="https://www.youtube.com/embed/xo6a3KtLC2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<x-warning>
Si vous apportez des modifications à votre fichier env, n'oubliez pas de redémarrer le conteneur pour que les modifications prennent effet !
</x-warning>

### Télécharger le zip préconstruit. (Avancé)

<iframe width="560" height="315" src="https://www.youtube.com/embed/i04EX7WXTVE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>Un fichier zip préconstruit peut être téléchargé depuis notre page de versions GitHub <a href="https://github.com/invoiceninja/invoiceninja/releases">ici</a>. Vous devrez télécharger le package nommé <b>invoiceninja.zip</b></p>

<p>Décompressez ce fichier dans le répertoire de l'hôte virtuel que vous avez créé.</p>

#### Permissions de fichier
<x-warning>
Assurez-vous que les permissions de fichier ont été définies pour l'utilisateur du serveur Web. Par exemple, sous Ubuntu, il s'agit de www-data si vous avez configuré un hôte virtuel avec un répertoire racine de `/var/www/html`, vous définiriez la propriété comme ceci.
</x-warning>

```bash
sudo chown -R www-data:www-data /var/www/html
sudo find ./ -type d -exec chmod 755 {} \;
```

Traduction des commentaires de code :
```
# Changez la propriété du fichier récursivement dans /var/www/html
sudo chown -R www-data:www-data /var/www/html

# Réglez les autorisations sur 755 pour tous les dossiers (type d) récursivement
sudo find ./ -type d -exec chmod 755 {} \;
```

##### Configuration du serveur Web
<p>Un exemple de configuration NGINX est fourni ci-dessous, il suppose que vous avez PHP 8.1 installé avec l'extension PHP FPM installée</p>

```bash
server {

listen 80;
server_name invoiceninja.test;
root /var/www/invoiceninja/public;
index index.php index.html index.htm;
client_max_body_size 20M;

gzip on;
gzip_types      application/javascript application/x-javascript text/javascript text/plain application/xml application/json;
gzip_proxied    no-cache no-store private expired auth;
gzip_min_length 1000;

location / {
    try_files $uri $uri/ =404;
}

location ~* \.pdf$ {
    add_header Cache-Control no-store;
}

if (!-e $request_filename) {
    rewrite ^(.+)$ /index.php?q= last;
}

location ~ \.php$ {
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php8.1-fpm.sock;
}

location ~ /\.ht {
    deny all;
}

}
```

<x-warning>
Avertissement de performance!

Activez gzip dans la configuration de votre serveur web, cela améliorera considérablement le temps de chargement de l'application! Veuillez consulter la configuration nginx ci-dessus pour un exemple de chargement des composants de l'application avec gzip.
</x-warning>

##### Configuration du serveur de base de données

Créez une base de données sur votre serveur compatible MySQL et ajoutez un utilisateur ayant un accès complet à la base de données. La configuration de la base de données n'est pas couverte par cet article, vous pouvez trouver plus d'informations [ici](https://dev.mysql.com/doc/refman/8.0/en/creating-database.html)

##### Configuration du Cron"

<x-warning>
Assurez-vous de définir le planificateur sous l'utilisateur du serveur Web, c'est-à-dire `sudo -u www-data crontab -e`
</x-warning>


<p>Invoice Ninja dépend fortement de Laravel Scheduler, pour cela il faut configurer une tâche cron. Modifiez votre crontab et ajoutez l'enregistrement suivant.</p>

```bash
* * * * * cd /chemin-vers-votre-projet && php artisan schedule:run >> /dev/null 2>&1
```

<p>Si vous utilisez un hébergement partagé, vous devrez ajouter un paramètre supplémentaire à la commande cron qui ressemble à ceci :</p>

```
* * * * * cd /chemin/vers/dossier/racine && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

### Installation à partir de git (Avancé)

<p>Pour les utilisateurs avancés, l'installation de l'application à partir de Github peut être effectuée en deux étapes suivantes</p>

``````markdown
```bash
git clone -b v5-stable --single-branch https://github.com/invoiceninja/invoiceninja.git

composer create-project --no-dev
```

### Étapes finales de configuration

<p>Une fois que vous avez configuré votre hôte virtuel, copiez le même fichier .env </p>

```bash
.env.exemple
```

```bash
.env

```

<p>
Ensuite, créez une base de données et dirigez votre navigateur vers http://votre.domaine.com/setup - le processus de configuration vérifiera un certain nombre de paramètres système tels que la génération de PDF, les paramètres de base de données et de courrier, et vous permettra également de configurer le premier compte sur le système, cliquez sur Soumettre et l'application configurera votre application et vous redirigera vers la page de connexion</p>

#### Configuration de Cron
<p>Invoice Ninja dépend fortement du planificateur Laravel. Pour que cela fonctionne, il est nécessaire de configurer une tâche cron. Éditez votre crontab et entrez l'enregistrement suivant</p>

<x-warning>
Assurez-vous de définir le planificateur sous l'utilisateur du serveur web, c'est-à-dire `sudo -u www-data crontab -e`
</x-warning>

```bash
# Ceci est un commentaire
* * * * * cd /chemin-vers-votre-projet && php artisan schedule:run >> /dev/null 2>&1
```

Certains serveurs Web exigent que le Cronjob se termine par `> /dev/null 2>&1` au lieu de `>> /dev/null 2>&1` pour fonctionner.
Vérifiez également si votre Cronjob de serveur Web doit être défini avec `/private_html/` au lieu de `/public_html/` dans le chemin.
Et parfois, il suffit de mettre `php` au lieu de `/opt/alt/php73/usr/bin/php` dans la commande du planificateur de cronjob pour exécuter.

Si vous rencontrez toujours des erreurs, il peut être utile de supprimer temporairement `>> /dev/null 2>&1` du cron, cela devrait afficher le cron dans le fichier `cron.log`

Si vous rencontrez des problèmes avec vos tâches cron, jetez un coup d'œil à la section de dépannage [ici](https://invoiceninja.github.io/fr_CA/self-host-troubleshooting/#cron-not-running-queue-not-running)

Si vous souhaitez améliorer les performances de votre installation d'Invoice Ninja, activer le système de file d'attente améliorera considérablement les performances de l'application.

Si vous avez un accès root à votre système, suivez simplement le [guide](https://laravel.com/fr_CA/8.x/queues#supervisor-configuration) de Laravel pour configurer le service supervisor afin de démarrer et redémarrer votre file d'attente.

Membre du forum @link470 a également le guide suivant pour configurer le processus Supervisor sur Ubuntu 22.04 en utilisant les étapes suivantes :

#### Superviseur pour Invoice Ninja Ubuntu 22.04 LTS

```bash
$ sudo apt-get install supervisor
```

Ensuite, créez un fichier de configuration pour Invoice Ninja en vous rendant dans le répertoire de configuration de Supervisor et en lançant votre éditeur de texte préféré avec le nom de fichier à utiliser. Vous pouvez choisir n'importe quel nom de fichier se terminant par .conf. J'utilise vi.

```bash
$ cd /etc/supervisor/conf.d
$ sudo vi invoiceninja-worker.conf
```

Dans le nouveau fichier invoiceninja-worker.conf, entrez ce qui suit :.

```bash
[program:invoiceninja-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /chemin/vers/invoiceninja/artisan queue:work --sleep=3 --tries=3 --max-time=3600
autostart=true
autorestart=true
stopasgroup=true
killasgroup=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/var/log/invoiceninja-worker.log
stopwaitsecs=3600
```

Il y a 4 choses principales à changer, indiquées en gras ci-dessus:

programme : Le nom du programme que vous utiliserez pour le travailleur
commande : Le chemin vers le fichier artisan dans la racine du répertoire de l'application Invoice Ninja
utilisateur : L'utilisateur qui exécutera Supervisor. Généralement, il s'agit de l'utilisateur du serveur web (le même utilisateur qui possède les fichiers Invoice Ninja)
stdout_logfile : En option, inclure le chemin vers un fichier de journal pour le travailleur Supervisor
Une fois ces modifications effectuées pour s'adapter à votre environnement, enregistrez le fichier.

Si vous avez choisi de définir un chemin pour le fichier journal, assurez-vous que le fichier journal est créé et que le compte utilisateur configuré y a accès. Dans cet exemple, le journal est stocké dans /var/log.

```bash
$ cd /var/log
$ sudo touch invoiceninja-worker.log
$ sudo chown www-data:www-data invoiceninja-worker.log
```

Maintenant que Supervisor est configuré, nous pouvons lire le fichier de configuration :

```bash
$ sudo supervisorctl reread
```

Ceci devrait nous indiquer que le nom de notre configuration (invoiceninja-worker) est disponible. La commande ci-dessus devra également être relancée chaque fois que le fichier de configuration est mis à jour.

Ensuite, ajoutez la nouvelle configuration au groupe de processus pour Supervisor (cette commande doit également être exécutée chaque fois que la configuration est mise à jour)

```bash
$ sudo supervisorctl update
```
Maintenant, démarrez le travailleur Supervisor

```bash
$ sudo supervisorctl start invoiceninja-worker:*
```

Exécuter la commande suivante affichera les processus de travail comme EN COURS (sur mon installation, je vois 8 processus de travail, numérotés de 00 à 07)


```bash
$ sudo supervisorctl status
```

Maintenant que le Superviseur est configuré, nous devons indiquer à Invoice Ninja de l'utiliser réellement.

Modifier le fichier .env pour Invoice Ninja

```bash
$ sudo vi /chemin/vers/invoiceninja/.env
```

Modifier la ligne suivante pour passer de sync à base de données, et enregistrer le fichier

```bash
QUEUE_CONNECTION=database
```

Finalement, maintenant que tout est configuré, rechargez la configuration pour Invoice Ninja et redémarrez la file d'attente. J'utilise www-data pour cet exemple comme utilisateur du serveur Web.

```bash
$ cd /path/to/invoiceninja/
$ sudo -u www-data php artisan optimize
$ sudo -u www-data php artisan queue:restart

```
Traduction des commentaires de code :

```bash
$ cd /path/to/invoiceninja/
$ sudo -u www-data php artisan optimize
$ sudo -u www-data php artisan queue:restart
```

C'est tout! Vous devriez maintenant avoir une configuration Supervisor fonctionnelle pour Invoice Ninja.

Si vous êtes sur un hébergement partagé, il est possible de faire fonctionner les files d'attente en définissant un nouveau cron avec la configuration suivante :

```
*/5 * * * * cd /chemin/vers/le/dossier/racine && /usr/bin/php -d register_argc_argv=On artisan queue:work --stop-when-empty
```

Certaines personnes ont différentes configurations d'hébergement web, donc cela pourrait également fonctionner :

```
*/5 * * * * php /home/admin/domains/site.com/private_html/invoices_site/artisan queue:work --stop-when-empty
```

Ce cron démarrera un travailleur de file d'attente toutes les 5 minutes et exécutera toutes les tâches qui sont dans la file d'attente, puis se terminera proprement. Cela signifie que les e-mails / notifications peuvent être mis en file d'attente pendant une courte période avant d'être exécutés. Si ce délai est acceptable, c'est un excellent moyen de faire fonctionner les files d'attente sur un hébergement mutualisé.","97":"Si vous préférez gérer les files d'attente avec Supervisor, vous voudrez alors désactiver les commandes internes d'Invoice Ninja qui démarrent la file d'attente. Pour ce faire, définissez simplement la variable .env suivante

```
INTERNAL_QUEUE_ENABLED=false
```

Vous aurez alors le plein contrôle sur la file d'attente.

## Hébergement partagé

#### Exigences du serveur

Nous avons testé Invoice Ninja v5 sur un hébergement mutualisé et pouvons confirmer qu'il fonctionne. Softaculous dispose d'un installateur en un clic qui simplifie l'ensemble du processus de configuration. Cependant, si vous n'avez pas Softaculous disponible, il peut toujours être possible d'installer Invoice Ninja. Plusieurs vérifications sont nécessaires avant de confirmer si votre hébergeur mutualisé dispose des modules correctement activés. Invoice Ninja repose sur :

* proc_open
* exec
* open_basedir
* fpassthru

Sans ces modules, vous ne pourrez pas exécuter Invoice Ninja. Nous incluons certaines vérifications préalables de ces modules dans le processus de configuration, mais il est préférable de vérifier auprès de votre hébergeur qu'ils prennent en charge ces modules. Certains hébergeurs choisissent de désactiver ces modules car ils les considèrent comme des risques pour la sécurité.

#### Configuration de la base de données

Créez une base de données compatible MySQL dans le panneau de contrôle de votre hébergement partagé, ainsi qu'un utilisateur de base de données. Notez le nom de la base de données, le nom d'utilisateur et le mot de passe car vous en aurez besoin plus tard. Assurez-vous que votre utilisateur de base de données a un accès complet à la base de données que vous venez de créer.

#### Télécharger l'élément de la version

Téléchargez la dernière version depuis notre page des <a href="https://github.com/invoiceninja/invoiceninja/releases">Versions</a>. Notez que vous voudrez trouver la dernière version qui contiendra 3 fichiers, celui dont vous avez besoin sera annoté comme invoiceninja.zip.

Téléchargez ce fichier sur votre hébergeur partagé, généralement si votre hébergeur utilise le standard de l'industrie cPanel, vous voudrez télécharger le fichier **invoiceninja.zip** dans le répertoire **public_html**. Une fois le téléchargement terminé, utilisez le gestionnaire de fichiers pour décompresser le fichier.

Vous devrez également copier/renommer le fichier .env.example en .env

#### Exécuter la configuration

Naviguez vers https://your.url.com/setup et remplissez le formulaire. Le processus de configuration effectuera quelques vérifications préalables, puis tentera d'exécuter la configuration. Si cela réussit, vous serez redirigé vers le portail administrateur. Si la configuration échoue pour une raison quelconque, vous serez renvoyé à l'écran de configuration avec un message d'erreur, il se peut que des erreurs supplémentaires soient signalées dans **storage/logs/laravel.log** qui fourniront plus d'informations sur l'échec de la configuration.

Si vous voyez une **erreur de serveur web 404** et utilisez **sub.domain.com**, assurez-vous de pointer le chemin pour le sous-domaine vers le dossier `/public` à partir du fichier extrait invoiceninja.zip, par exemple: ``/domains/domain.com/public_html/invoices2/public/``

##### Ajouter la tâche cron

Ajoutez la tâche cron du planificateur Laravel, assurez-vous d'inclure le chemin complet, pour un hôte cPanel, cela devrait ressembler à ceci:

```
* * * * * cd /chemin/vers/dossier/racine && /usr/bin/php -d register_argc_argv=On artisan schedule:run >> /dev/null 2>&1
```

## Configuration de courriel

Lors de la configuration de votre courriel, veuillez vous assurer que tous les champs sont remplis. En particulier, vous _devez_ inclure MAIL_FROM_ADDRESS et MAIL_FROM_NAME pour éviter les erreurs telles que

```bash
Adresse dans la boîte aux lettres donnée [] ne respecte pas la RFC 2822, 3.6.2.
```

Voici un exemple complet - en utilisant Gmail comme exemple.

```bash
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME="votre_adresse_email@gmail.com"
MAIL_PASSWORD="votre_mot_de_passe_noubliez_pas_les_guillemets!"
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="votre_adresse_email@gmail.com"
MAIL_FROM_NAME="Nom Complet Avec Guillemets Doubles"
```

Je suis désolé, je ne peux pas traiter cette demande car il n'y a pas de texte en anglais à traduire. Merci de me fournir le texte en anglais pour que je puisse vous aider à le traduire en français canadien.

<x-warning>
REMARQUE : si vous utilisez le cryptage SSL, le MAIL_PORT est 465. Le cryptage TLS est sur le port 587.
</x-warning>
```

### Configurations de courrier individuelles par entreprise

À partir de la v5.5.38, nous prenons en charge les configurations de messagerie par entreprise.

Qu'est-ce que cela signifie?

Par exemple, si vous avez deux sociétés, Acme co et Ninja co, vous pouvez créer des configurations de serveur de messagerie distinctes pour chaque entreprise.

Pour configurer cela, vous devrez préfixer votre .env avec la clé principale de l'entreprise, c'est-à-dire dans votre base de données, ouvrez la table des entreprises et si la colonne ID principale est 1 pour Acme co, ce serait la configuration

```
1_MAIL_HOST=
1_MAIL_PORT=
1_MAIL_USERNAME=null
1_MAIL_PASSWORD=null
1_MAIL_ENCRYPTION=null
```

Si l'identifiant de l'entreprise Ninja Co est 5

```
5_MAIL_HOST=
5_MAIL_PORT=
5_MAIL_USERNAME=null
5_MAIL_PASSWORD=null
5_MAIL_ENCRYPTION=null
```

## Conversion de devise

<p>Invoice Ninja prend en charge <a href="https://openexchangerates.org/">Open Exchange</a> pour la conversion de devises.
Open Exchange offre actuellement une version gratuite qui convient pour les mises à jour quotidiennes des taux de change.
Il suffit d'insérer une clé API Open Exchange dans votre fichier .env pour activer les mises à jour des taux de change:</p>

```bash
OPENEXCHANGE_APP_ID=votre_clé_api_open_exchange_ici
```

Les devises sont mises à jour automatiquement en utilisant le planificateur. Si les devises ne sont pas disponibles dans l'interface utilisateur, veuillez vérifier la table de la base de données `currencies` et vous assurer que les champs `exchange_rate` contiennent des valeurs réalistes.

