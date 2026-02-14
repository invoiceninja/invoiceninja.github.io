---
title: "Ressources pour développeurs"
sidebar_position: 1
---
# Ressources pour développeurs

## Pour commencer.
 
L'API Invoice Ninja est construite sur le <a href="https://laravel.com">Framework Laravel</a>, il s'agit d'un framework PHP extrêmement populaire avec une documentation et des tutoriels de grande qualité, disponibles partout sur le Web. Pour commencer à personnaliser et/ou étendre Invoice Ninja, vous devrez vous familiariser avec la dernière version de Laravel et toutes ses fonctionnalités. L'espace de noms URL pour l'api est **/api/v1** Le Portail Client est une application Web traditionnelle également construite avec Laravel ainsi qu'avec des composants Livewire et Tailwind. L'espace de noms URL pour les URL orientées client est **/client/**

Si vous prévoyez de créer une nouvelle fonctionnalité dans Invoice Ninja, par exemple un module d'inventaire, plutôt que de l'intégrer directement dans la base de code, nous vous recommandons fortement d'utiliser la bibliothèque <a href="https://github.com/nwidart/laravel-modules">Laravel Modules</a>. Cette bibliothèque fait déjà partie du noyau d'Invoice Ninja, vous pouvez donc vous lancer directement et commencer à construire.

Si vous prévoyez de contribuer avec votre code au dépôt officiel d'Invoice Ninja, veuillez vous assurer d'avoir une couverture de test pour votre fonctionnalité. Nous utilisons <a href="https://phpunit.de/">PhpUnit</a> pour nos tests d'API, et <a href="https://www.cypress.io/">Cypress</a> pour nos tests d'interface utilisateur du portail client.

## Architecture

L'application est divisée en trois parties principales : le backend/API et les deux portails d'administration.

### Backend - API

#### Développeur principal : [David Bomba](https://twitter.com/deadbeefx0)

- Cadre : [Laravel](https://laravel.com)
- Code : [GitHub](https://github.com/invoiceninja/invoiceninja/tree/v5-stable)
- API : [Docs](https://api-docs.invoicing.co/)

### Portail administrateur - Bureau & Mobile

#### Développeur principal : [Hillel Coren](https://twitter.com/hillelcoren)

- Cadre de travail : [Flutter](https://flutter.dev)
- Code : [GitHub](https://github.com/invoiceninja/admin-portal)
- Démo : [demo.invoiceninja.com](https://demo.invoiceninja.com)

### Portail administratif - Web

#### Développeur principal : [Benjamin Beganović](https://twitter.com/beganovichhh)

- Cadre d'application : [React](https://reactjs.org)
- Code : [GitHub](https://github.com/invoiceninja/ui)
- Démo: [react.invoicing.co/demo](https://react.invoicing.co/demo)

## Définition de l'API

Notre définition complète de l'API se trouve <a href="https://api-docs.invoicing.co/">ici</a>

### URL de base pour v5

L'url de base pour la v5 est :

```
https://invoicing.co
```

### Migration de v4

Invoice Ninja v4 a été initialement construit comme une application web avec une API ajoutée par la suite pour prendre en charge les cas d'utilisation courants et la fonctionnalité limitée de l'application mobile v4. Avec la v5, nous avons plutôt construit une application API-first, toutes les fonctionnalités des applications web/mobile/bureau sont alimentées par l'API.

Par exemple, dans la v4, les <a href="https://github.com/invoiceninja/invoiceninja/blob/master/app/Ninja/Transformers/ClientTransformer.php#L51">inclusions de clients</a> sont limitées aux contacts, factures, crédits et activités, alors que dans la v5, <a href="https://github.com/invoiceninja/invoiceninja/blob/v5-develop/app/Transformers/ClientTransformer.php#L32">toutes les options</a> sont disponibles. Cela inclut : contacts, documents, gateway_tokens, documents, gateway_tokens, activités, grand livre et journaux système.

Un autre inconvénient majeur de l'API v4 est la documentation, même si les fonctionnalités sont limitées, ce qui est disponible n'est pas nécessairement documenté. Dans la v5, nous nous sommes assurés de documenter chaque aspect de l'API.

Les APIs v4 et v5 sont principalement les mêmes, mais il y a quelques changements clés dont il est important d'être conscient.

:::warning
Le nom de l'en-tête pour le jeton API a changé de X-Ninja-Token dans la v4 à X-API-Token dans la v5.
:::

Le type de données des champs d'identifiant a été modifié de entier à chaîne de caractères pour prendre en charge le nouveau format d'identifiant.

La route pour téléverser des documents a changé, voici un exemple cURL v5 :

```
curl -X POST https://invoicing.co/api/v1/invoices/<invoice_id>/upload \\
  -H 'Content-Type: multipart/form-data' \\
  -H 'X-API-TOKEN: TOKEN' \\
  -H 'X-Requested-With: XMLHttpRequest' \\
  -F _method=PUT \\
  -F 'documents[]=@nomdufichier.png'
```

### Entêtes de l'API

#### X-API-SECRET


Le X-API-SECRET peut être utilisé comme une autre couche de protection pour votre API.

Le X-API-SECRET nécessite que vous configuriez une variable .env ```API_SECRET=```" }

Ceci est un en-tête facultatif, et n'est évalué que sur la route /api/v1/login.\n\n
```
X-API-SECRET: valeur
```



#### X-API-TOKEN


Le X-API-TOKEN est le jeton d'authentification et est requis pour toutes les demandes de l'API

Ceci est un en-tête obligatoire.


```
X-API-TOKEN: valeur
```



#### X-Requested-With;


Le en-tête X-Requested-With est un en-tête axé sur la sécurité, il n'accepte qu'une seule valeur.

Ceci est un en-tête obligatoire.



```
X-Requested-With: XMLHttpRequest
```




#### Content-Type: application/json


Lors de la soumission des données à l'API, vous devez déclarer le type de contenu

Ceci est un en-tête requis lors de l'utilisation des méthodes POST/PUT.



```
Content-Type: application/json\nContent-Type: multipart/form-data
```



### Clés primaires
Dans la version 5 de Invoice Ninja, nous passons des clés primaires basées sur des entiers aux hashed_id's, ce sont des représentations de chaînes de caractères obscurcies de la clé primaire pour tous les enregistrements d'entités.

