---
extend: _layouts.user_guide
section: content
locale: fr_CA
---

## Serveurs de messagerie hébergés

Si vous êtes un utilisateur pro/entreprise, vous avez accès à plusieurs méthodes différentes pour envoyer des courriels à partir d'Invoice Ninja. Nous proposons des intégrations OAuth avec Google et Microsoft qui vous permettent d'envoyer des courriels depuis votre propre adresse électronique.

### Envoyer avec Gmail / Microsoft

Relier Gmail ou Microsoft implique les mêmes étapes. Voici une courte vidéo montrant les étapes.

<div class="video_container">
<iframe class="video" src="https://www.youtube.com/embed/dU48fu3tmS0" title="Lecteur vidéo YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<x-info>
Note: L'authentification initiale et la connexion à Gmail doivent utiliser le même compte OAuth. C'est-à-dire que si vous essayez de connecter bob@gmail.com, vous devez sélectionner cette adresse e-mail pour vous authentifier auprès de Google et autoriser les permissions pour cette adresse e-mail pour envoyer des e-mails. La liaison entre comptes différents n'est pas possible.
</x-info>

Une fois que vous avez connecté votre compte OAuth, vous pouvez sélectionner Gmail ou Microsoft en tant que fournisseur de courriel dans

```bash
Paramètres / Paramètres de courriel
```

![texte alternatif](/assets/images/user_guide/gmail_config.png "Écran de configuration pour Gmail/Microsoft")

Après avoir sélectionné le fournisseur de courriel, vous voudrez ensuite sélectionner l'utilisateur qui a été authentifié pour envoyer des courriels à partir du champ situé en dessous de celui-ci.

### Envoyer avec Postmark

Si vous préférez envoyer des emails en vrac via PostMark, cela est également pris en charge. Nous ne limitons pas les emails sortants en utilisant Postmark, donc cela convient si vous avez besoin d'un service de messagerie à haut débit.

![texte alternatif](/assets/images/user_guide/postmark_config.png "Écran de configuration pour Postmark")

Il suffit d'ajouter votre jeton d'API Postmark à la configuration dans

```bash
Paramètres / Paramètres de courriel
```
<x-warning>
Attention ! Vous devez configurer une signature d'expéditeur dans Postmark, sinon Postmark rejettera toutes les tentatives d'envoi de courriels. Pour ce faire, assurez-vous que l'adresse e-mail de votre utilisateur principal dans Invoice Ninja correspond à la signature d'expéditeur que vous avez configurée dans Postmark
</x-warning>

### Envoyer avec Mailgun

Si vous préférez envoyer des emails en masse via Mailgun, alors ceci est également pris en charge. Nous ne limitons pas les emails sortants utilisant Mailgun, donc cela convient si vous avez besoin d'un service d'envoi d'emails à haut débit.

![texte alternatif](/assets/images/user_guide/mailgun_config.png "Écran de configuration pour Mailgun")

Assurez-vous de remplir à la fois votre clé secrète Mailgun et le domaine qui a été configuré.

