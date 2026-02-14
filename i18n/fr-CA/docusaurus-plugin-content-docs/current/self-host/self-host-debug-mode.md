---
title: "Aperçu du mode débogage"
sidebar_position: 7
---
# Aperçu du mode débogage

## Aperçu

Le mode débogage ne doit être utilisé que pour obtenir des informations supplémentaires sur les raisons pour lesquelles votre système pourrait ne pas répondre / se comporter comme prévu.

Par défaut, la variable .env qui contrôle cela est définie sur FALSE.

Si votre application est devenue non réactive et qu'il n'y a aucune information dans les fichiers de journal situés dans

```bash
storage/logs/laravel.log
```

Ensuite, vous devrez peut-être activer le mode débogage, car cela affichera les erreurs dans le navigateur, vous donnant ainsi un retour direct sur le problème qui a provoqué l'échec de l'application.

:::warning
Vous ne devriez **JAMAIS** laisser votre application en mode débogage, cela pourrait potentiellement divulguer des informations d'identification et votre système sera exposé à d'éventuels attaquants
:::

##  Préoccupations de sécurité

Dans Laravel, le fichier ".env" est utilisé pour stocker les valeurs de configuration de l'application. Une des valeurs qui peut être définie dans ce fichier est "APP_DEBUG". Cette valeur contrôle si des messages d'erreur détaillés sont affichés lorsqu'une erreur se produit dans l'application.

Lorsque "APP_DEBUG" est défini sur "true", Laravel affichera des messages d'erreur détaillés qui peuvent inclure des informations sensibles telles que le chemin du fichier, les informations d'identification de la base de données et d'autres détails de configuration. Cette information peut être utilisée par des attaquants pour obtenir un accès non autorisé à l'application et à son infrastructure sous-jacente.

Laisser "APP_DEBUG" défini sur "true" dans un environnement de production est un problème de sécurité car cela peut permettre aux attaquants d'obtenir des informations précieuses sur l'application et son environnement. Les attaquants peuvent utiliser ces informations pour élaborer des attaques ciblées contre l'application ou ses utilisateurs, et peuvent également l'utiliser pour accéder sans autorisation à l'infrastructure sous-jacente.

Pour atténuer cette préoccupation de sécurité, il est recommandé de définir "APP_DEBUG" sur "false" dans le fichier ".env" d'un environnement de production. Cela empêchera l'affichage de messages d'erreur détaillés et contribuera à protéger l'application et ses utilisateurs contre d'éventuelles attaques. De plus, il est important de veiller à ce que toutes les informations sensibles soient correctement sécurisées et ne soient pas exposées dans les messages d'erreur ou d'autres sorties d'application.

Les CVEs suivantes ont été signalées comme exploitant cela :

* CVE-2020-15168 : Laravel 7.x avant 7.27.0 permet aux attaquants distants d'exécuter du code arbitraire en raison d'une vulnérabilité d'« Upload de fichier non restreint » via une demande à « /debugbar/file ».
* CVE-2019-16785 : Laravel Framework jusqu'à 5.8.35 permet aux attaquants distants non autorisés d'exécuter des commandes OS arbitraires via un site web conçu qui est mal géré par la commande « artisan serve ».
* CVE-2018-15133 : Dans Laravel Framework jusqu'à 5.5.40 et 5.6.x jusqu'à 5.6.29, l'exécution de code à distance pourrait se produire à la suite d'un appel unserialize sur une valeur X-XSRF-TOKEN potentiellement non fiable, en raison du mécanisme de secours pour les jetons CSRF.

Ces vulnérabilités démontrent le potentiel de problèmes de sécurité sérieux lorsque APP_DEBUG=true est laissé activé dans un environnement de production. Il est donc crucial de prendre des mesures de sécurité appropriées pour se protéger contre ce type d'attaques.
