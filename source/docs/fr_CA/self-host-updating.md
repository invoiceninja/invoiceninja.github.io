---
extends: _layouts.self_host
section: content
---

# Mise à jour d'Invoice Ninja

### Docker

Lorsque nous étiquetons une nouvelle version, une nouvelle image est construite. Tout ce qui est nécessaire pour les utilisateurs de Docker est de mettre hors ligne le conteneur, de télécharger la nouvelle image, puis de remettre en ligne le conteneur. Ces trois commandes sont tout ce dont on a besoin.

```bash
docker-compose down
docker-compose pull
docker-compose up
```

### Utilisateurs de Git

Si vous avez installé Invoice Ninja en utilisant simplement git, alors tout ce qui est nécessaire est de récupérer les modifications et d'appeler la commande post-update. Ces commandes sont les suivantes :

```bash
git pull
composer install -o --no-dev
php artisan ninja:post-update
````

### Hébergement partagé / Builds ZIP

Si vous avez installé l'application en utilisant le fichier .zip précompilé, alors le gestionnaire de mise à jour interne devrait effectuer toutes les tâches nécessaires pour mettre à jour votre application à la dernière version. Les seules exigences strictes sont :

* Le répertoire appartient de manière récursive à l'utilisateur web.
* Le cron du planificateur est en cours d'exécution.

L'auto-updater va récupérer la dernière version depuis notre dépôt Github, extraire et écraser les fichiers système. Avant de tenter tout cela, le système effectue une vérification récursive des fichiers pour s'assurer que _tous_ les fichiers appartiennent à l'utilisateur web.

Si le bouton de mise à jour ne fonctionne pas, vous pouvez alternativement télécharger le fichier invoiceninja.zip et écraser le dossier de votre installation, notez qu'il y a toujours 3 fichiers : https://github.com/invoiceninja/invoiceninja/releases

```bash
invoiceninja.zip - environ 170 Mo ou 500 Mo
Code source (zip) - environ 15 Mo
Code source (tar.gz) - environ 14 Mo
```

<x-warning>
Veuillez vous assurer de supprimer le dossier .git avant de tenter des mises à jour sur la v5.1.50 et ultérieures. Le programme de mise à jour échouera silencieusement si des dossiers cachés sont présents.
</x-warning>


Après avoir exécuté le programme de mise à jour, vous voudrez exécuter la route de mise à jour

```bash
https://url.com/update?secret=
```

La valeur du paramètre secret de la requête se trouve dans le fichier .env sous la clé ```UPDATE_SECRET```

Je suis désolé, mais il n'y a pas de texte à traduire dans cette demande. Veuillez fournir le texte à traduire en anglais pour que je puisse vous aider.

