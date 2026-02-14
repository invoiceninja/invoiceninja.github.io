---
title: "Variables d'environnement"
sidebar_position: 6
---
# Variables d'environnement

```
APP_NAME="Invoice Ninja"
```
Votre nom d'application - utilisé dans la bannière de titre du portail client

```
APP_ENV=local
```
Votre variable d'environnement d'application - les options comprennent local / développement / production
```
APP_KEY=
```
Votre clé de chiffrement d'application - utilisée pour le chiffrement / déchiffrement de certaines données au sein de l'application. Sauvegardez cette clé dans un emplacement sécurisé. Sans elle, votre application pourrait être rendue dans un état non valide

```
APP_DEBUG=true
```
Option booléenne qui place l'application en mode débogage pour une journalisation supplémentaire. Gardez-le réglé sur FALSE à moins que vous n'ayez besoin de faire du débogage

```
APP_URL=http://ninja.test:8000
```
Votre URL complète de l'application inclut le préfixe HTTP/HTTPS.

```
DB_HOST=localhost
DB_DATABASE=db-ninja-01
DB_USERNAME=ninja
DB_PASSWORD=ninja
DB_PORT=3306
```
Définitions de la base de données.

```
LOG_CHANNEL=stack
```
Où nous envoyons les journaux.

```
REQUIRE_HTTPS=false
```
Si vous avez besoin que HTTPS soit imposé partout dans votre application, définissez ceci sur VRAI.

```
BROADCAST_DRIVER=pusher
```
Variable d'environnement Laravel par défaut - non utilisée dans Invoice Ninja

```
CACHE_DRIVER=redis
```
Pilote de cache, les options incluent fichier / redis / base de données

```
QUEUE_CONNECTION=database
```
Connexion à la file d'attente - par défaut, elle est définie sur sync, si vous voulez que votre application fonctionne plus rapidement, vous devrez modifier cette valeur pour database ou redis. Notez que vous devrez configurer vos travailleurs de file d'attente.

```
SESSION_DRIVER=redis
```
Où vos informations de session sont stockées, les options comprennent redis / database / file.

```
REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```
Votre configuration Redis - si vous utilisez Redis

```
MAIL_MAILER=smtp
MAIL_HOST=localhost
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS='jimmy@gmail.com'
MAIL_FROM_NAME='David Canary'
```
Votre configuration de messagerie

```
POSTMARK_SECRET=
```
Votre clé API Postmark si vous souhaitez utiliser Postmark

```
API_SECRET=mot_de_passe
```
En tant que couche de sécurité supplémentaire pour les auto-hébergeurs, cela empêche les personnes aléatoires de s'inscrire / d'interroger votre API

```
ERROR_EMAIL=erreur@gmail.com
```
Les courriels d'erreur système sont envoyés à cette adresse e-mail

```
AWS_ACCESS_KEY_ID=clé_compatible_s3
AWS_SECRET_ACCESS_KEY=une_clé_longue_et_glorieuse
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=nom_du_bucket
AWS_URL=https://endpoint.com
AWS_ENDPOINT=https://endpoint.com/
```
Si vous utilisez un stockage compatible S3, c'est ici que vous souhaitez le configurer.

```
FILESYSTEM_DRIVER=public
```
Définit où stocker vos fichiers, les options incluent local / public
```
OPENEXCHANGE_APP_ID=key_r_us
```
Utilisé pour récupérer les données de taux de change

```
EXPANDED_LOGGING=true
```
Ajoute des journaux supplémentaires dans le répertoire storage/logs/invoiceninja.log

```
LOG_PDF_HTML=true
```
Utilisé lors du débogage de la sortie PDF, cela déversera le HTML complet de l'objet PDF en cours de rendu.

```
UPDATE_SECRET=secret
```
Utilisé comme pseudo-protection de la route /update?secret= pour n'autoriser que les personnes possédant ce secret à accéder à cette URL pour mettre à jour l'application

```
PHANTOMJS_KEY='une-cle-demo-avec-faible-quota-par-adresse-ip'
PHANTOMJS_SECRET=mot_de_passe
```
Clé et mot de passe de configuration de l'API Phantom Cloud JS utilisés pour sécuriser la route fantôme

```
#options - snappdf / phantom / hosted_ninja
PDF_GENERATOR=snappdf
```
Configure le moteur PDF à utiliser. SnapPDF est la méthode recommandée pour générer des PDF, cependant elle nécessite un accès direct au serveur pour installer certains paquets requis.

```
TRUSTED_PROXIES=*
```
Si votre serveur est situé derrière un proxy, vous devrez peut-être activer trusted_proxies, sinon vous obtiendrez des erreurs SSL

```
IS_DOCKER=FALSE
```
Si vous utilisez une configuration Docker, vous voudrez peut-être définir cette valeur sur true, car certaines modifications spécifiques à Docker sont nécessaires.

```
LOCAL_DOWNLOAD=FALSE
```
Cette variable contourne notre encodage base64 du logo de l'entreprise, cela peut aider si le logo ne s'affiche pas sur le PDF.

```
NINJA_ENVIRONMENT=selfhost
```
Ceci est le réglage d'environnement par défaut.

```
WEBCRON_SECRET=secret
```
Si vous utilisez la fonctionnalité webcron, vous voudrez définir un mot de passe ici pour empêcher les personnes non autorisées d'accéder à cette URL

