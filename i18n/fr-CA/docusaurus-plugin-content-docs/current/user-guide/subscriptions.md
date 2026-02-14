---
title: "Abonnements"
sidebar_position: 23
---
# Abonnements

## Introduction

Les abonnements sont une version améliorée de nos liens Acheter maintenant depuis la version 4.

Dans la version 5, les abonnements vous permettent de créer une boutique instantanée où vous pouvez regrouper vos produits existants en achats par lien direct.

![alt text](/assets/images/subscriptions/subscription_list.png "Liste des abonnements")

![alt text](/assets/images/subscriptions/subscription_overview.png "Aperçu de l'abonnement")

Lorsque vous créez un abonnement, un lien direct est généré, qui est disponible pour effectuer directement l'achat de l'abonnement donné. Il est important de noter que même si nous avons appelé cette fonctionnalité des abonnements, vous pouvez toujours générer des liens directs pour des achats ponctuels. Cela peut être adapté aux ventes numériques qui sont ponctuelles plutôt que récurrentes.

![alt text](/assets/images/subscriptions/subscription_products.png "Produits d'abonnement")

Lorsque vous créez l'abonnement, vous pouvez combiner des produits ponctuels et récurrents en un seul abonnement. Par exemple, supposons que vous dirigez une entreprise d'hébergement et que vous souhaitez créer un abonnement qui a une seule charge de configuration ainsi qu'une charge récurrente mensuelle pour le serveur.

Lorsque votre client achète cela, la charge de configuration ne s'appliquera qu'à la première facture, puis une facture récurrente est générée pour tous les produits récurrents de l'abonnement.

Si vous voulez permettre à vos clients de passer d'un abonnement à un autre, cela est possible en créant un groupe et en ajoutant chaque abonnement au groupe. Cela regroupe tous les abonnements étiquetés avec le même groupe !

![alt text](/assets/images/subscriptions/subscription_settings.png "Paramètres d'abonnement")

Le volet des paramètres vous permet de définir la fréquence / la facturation automatique et également les codes promo/réductions. Nous avons également intégré la possibilité pour l'utilisateur final de changer entre les abonnements ou même d'annuler ces abonnements. Nous nous occupons également de la comptabilité pour vous en cas de remboursement si ceux-ci sont définis.

![alt text](/assets/images/subscriptions/subscription_webhooks.png "Webhooks d'abonnement")

La dernière pièce du puzzle des abonnements est l'intégration avec des services tiers. Lorsqu'un abonnement est acheté / annulé / mis à niveau, nous pouvons notifier un point de terminaison tiers !

## Configuration de webhook

Si vous devez contrôler les événements qui se produisent en dehors d'Invoice Ninja, vous pouvez configurer les points de terminaison de webhook pour recevoir des informations lorsque l'utilisateur parcourt le processus de commande. Tous les points de terminaison doivent être pris en charge si vous activez cette fonctionnalité de l'application, car l'application échouera sans réponse réussie de chacun des éléments suivants :

# Attention:
Les webhooks sont des événements uniques qui ne seront pas réessayés si votre point de terminaison est indisponible.

## Vérificateur d'éligibilité

Cette demande interroge le point de terminaison pour savoir si le client/le contact est éligible pour continuer le processus de paiement. Vous pouvez utiliser cela si vous souhaitez restreindre les utilisateurs à un abonnement à la fois. Le payload qui est envoyé au point de terminaison ressemble à ceci:

```
{
    "context": "is_eligible",
    "subscription": "l4zbq7repr",
    "contact": "l4zbq7repr",
    "contact_email": "customer@example.com",
    "client": "l4zbq7repr",
    "account_key": "unique_identifier"
}
```

### Paramètres

- **contexte**: (string) L'identificateur de contexte, `is_eligible`.
- **abonnement**: L'identifiant de l'abonnement.
- **contact**: L'identifiant du contact.
- **contact_email**: L'email du contact.
- **client**: L'identifiant du client.
- **account_key**: Une référence client (client.custom_value2).

#### Réponse

Un tableau standard doit être retourné dans tous les cas, et il contiendra deux clés. Une requête réussie retournera la réponse suivante :
```
{
	"message" : "Success",
	"status_code" : "200" / code de statut HTTP 2xx
}
```
Une requête échouée retournera un tableau comme celui-ci :
```
{
	"message" : "Un message d'échec lisible par un humain pour renvoyer au client",
	"status_code" : "403" / code de statut HTTP 4xx/5xx
}
```

### Commencer l'essai

Si vous avez configuré votre abonnement pour qu'il soit basé sur un essai, alors après la vérification d'éligibilité, le système tentera de démarrer l'essai. Votre point de terminaison recevra une charge utile comme celle-ci :
```
{
    "context" : "essai",
    "recurring_invoice" : "l4zbq7repr",
    "client" : "l4zbq7repr",
    "subscription" : "l4zbq7repr",
    "account_key" : "unique_identifier",
}
```
#### Paramètres

**contexte**: (chaîne) L'identificateur de contexte, `essai`
**recurring_invoice**: L'identifiant de la facture récurrente qui a été générée en fonction de l'abonnement.
**client**: L'identifiant du client
**subscription**: L'identifiant de l'abonnement
**account_key**: Une référence client (client.custom_value2)

#### Réponse

Un tableau standard doit être retourné dans tous les cas, dans le tableau il y aura deux clés, une demande réussie retournera la réponse suivante :
```
{
    "message" : "Succès",
    "status_code" : "200" / code de statut HTTP 2xx
}
```
Une demande échouée renverrait un tableau comme celui-ci :
```
{
    "message" : "Un message d'erreur lisible par l'homme à renvoyer au client",
    "status_code" : "403" / code de statut HTTP 4xx/5xx
}
```

### Avertissement

Les Webhooks sont des événements à usage unique qui ne sont pas réessayer si votre point de terminaison est indisponible.

### Vérificateur d'éligibilité

Cette demande interroge le point de terminaison pour savoir si le client/contact est éligible pour continuer à traverser la caisse. Vous pouvez utiliser cela si vous souhaitez restreindre les utilisateurs à un abonnement à la fois, le payload qui est envoyé au point de terminaison ressemble à ceci
```
{
	"context" : "is_eligible",
	"subscription" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"contact_email" : "customer@example.com",
	"client" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```
#### Paramètres

**contexte**: (chaîne de caractères) L'identificateur de contexte, `is_eligible`  
**subscription**: L'ID de l'abonnement  
**contact**: L'ID du contact  
**contact_email**: L'e-mail de contact  
**client**: L'ID du client  
**account_key**: Une référence client (client.custom_value2)  

### Essai gratuit

Si vous avez configuré votre abonnement pour qu'il soit basé sur un essai, alors après la vérification d'éligibilité, le système tentera de démarrer l'essai, votre point de terminaison recevra une charge utile comme ceci :
```
{
	"context" : "trial",
	"recurring_invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```
#### Paramètres

**contexte**: (chaîne de caractères) L'identificateur de contexte, `trial`  
**recurring_invoice**: L'ID de la facture récurrente qui a été générée en fonction de l'abonnement  
**client**: L'ID du client  
**subscription**: L'ID d'abonnement  
**account_key**: Une référence client (client.custom_value2)  

#### Réponse

Un tableau standard doit être retourné dans toutes les circonstances, dans le tableau il y aura deux clés, une demande réussie retournera la réponse suivante :
```
{
	"message" : "Success",
	"status_code" : "200" / Code de statut HTTP 2xx
}
```
Une demande échouée renverrait un tableau comme celui-ci :
```
{
	"message" : "Un message d'échec lisible par l'homme à renvoyer au client",
	"status_code" : "403" / Code de statut HTTP 4xx/5xx
}
```
### Achat récurrent

Lorsqu'un abonnement récurrent est créé pour la première fois, une charge utile est envoyée au point de terminaison pour notifier la création et le paiement réussis de l'abonnement, la charge utile ressemblera à ceci :
```
{
	"context" : "recurring_purchase",
	"recurring_invoice" : "l4zbq7repr",
	"invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
}
```

### Single Purchase

Lorsque votre abonnement est uniquement pour un produit standard et _non_ un produit récurrent, votre point de terminaison recevra un webhook d'achat unique avec la configuration suivante :
```
{
	"context" : "single_purchase",
	"invoice" : "l4zbq7repr",
	"client"  : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```
#### Paramètres

**context**: (string) L'identificateur de contexte, `single_purchase`  
**invoice**: L'identifiant de la facture qui a été générée en fonction de l'abonnement  
**client**: L'identifiant du client  
**subscription**: L'identifiant de l'abonnement  
**account_key**: Une référence de client (client.custom_value2)  

#### Réponse

Un tableau standard doit être renvoyé dans tous les cas, dans le tableau il y aura deux clés, une requête réussie renverra la réponse suivante :
```
{
	"message" : "Success",
	"status_code" : "200" / Code de statut HTTP 2xx
}
```
Une requête échouée renverrait un tableau comme celui-ci :
```
{
	"message" : "Un message d'erreur lisible par un humain à renvoyer au client",
	"status_code" : "403" / Code de statut HTTP 4xx/5xx
}
```

### Changer de plan

Si vous prenez en charge la possibilité pour les clients de mettre à niveau ou de rétrograder leurs abonnements, un webhook `change_plan` est déclenché.

Lorsqu'un client change de plan, il peut y avoir un crédit ou un paiement en fonction du plan et du remboursement au prorata généré. Dans ces deux cas, la charge utile diffère avec une clé "crédit" ou "facture" apparaissant dans la charge utile. Voici des exemples :
```
{
	"context" : "change_plan",
	"recurring_invoice" : "l4zbq7repr",
	"credit" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"account_key" : "identifiant_unique",
}
```
#### Paramètres

**contexte** : (string) L'identifiant de contexte, `change_plan`  
**facture** : L'ID de la facture générée en fonction de l'abonnement  
**crédit** : L'ID du crédit généré en fonction de l'abonnement **note** ce champ peut être vide s'il n'y a pas de crédit généré  
**client** : L'ID du client  
**contact** : L'ID du contact  
**abonnement** : L'ID de l'abonnement  
**account_key** : Une référence client (client.custom_value2)  

#### Réponse

Un tableau standard doit être renvoyé dans toutes les circonstances, dans le tableau, il y aura deux clés. Une demande réussie renverra la réponse suivante :
```
{
	"message" : "Success",
	"status_code" : "200" / code de statut HTTP 2xx
}
```
Une demande échouée renverrait un tableau comme celui-ci :
```
{
	"message" : "Un message d'erreur lisible par l'homme à renvoyer au client",
	"status_code" : "403" / code de statut HTTP 4xx/5xx
}
```

### Subscription Cancellation

Si vous autorisez les annulations d'abonnement, la charge utile suivante est transférée à l'extrémité :
```
{
	"context" : "cancellation",
	"subscription" : "l4zbq7repr",
	"recurring_invoice" : "l4zbq7repr",
	"client" : "l4zbq7repr",
	"contact" : "l4zbq7repr",
	"account_key" : "unique_identifier",
}
```
#### Paramètres

**contexte**: (chaîne) L'identificateur de contexte, `cancellation`  
**subscription** : l'identifiant de l'abonnement  
**recurring_invoice** : l'identifiant de la facture récurrente qui a été générée en fonction de l'abonnement  
**client** : l'identifiant du client  
**contact** : l'identifiant du contact  
**account_key** : une référence client (client.custom_value2)  

#### Réponse

Un tableau standard doit être renvoyé dans toutes les circonstances, dans le tableau, il y aura deux clés. Une requête réussie renverra la réponse suivante :
```
{
	"message" : "Success",
	"status_code" : "200" / code d'état HTTP 2xx
}
```
Une demande échouée renverrait un tableau comme celui-ci :
```
{
	"message" : "Un message d'erreur lisible par l'homme à renvoyer au client",
	"status_code" : "403" / code d'état HTTP 4xx/5xx
}
```

A daily check is performed to check if any subscriptions have gone past their due date without a payment. If a subscription has been found to expired, a webhook is sent with the following payload:
```
{
	"context" : "plan_expired",
	"client" : "l4zbq7repr",
	"invoice" : "l4zbq7repr",
	"subscription" : "l4zbq7repr",
}
```
#### Parameters:

context: (string) The context identifier, plan_expired
subscription: The subscription id
invoice: The id of the invoice that was generated based on the subscription
client: The id of the client

#### Response:

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:
```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```
A failed request would return the an array like this:
```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```

When a payment for a subscription is made (ie for a renewal), a Plan Paid webhook event is fired with the following configuration:
```
{
    "context" : "plan_paid",
    "subscription" : "l4zbq7repr",
    "recurring_invoice" : "l4zbq7repr",
    "client" : "l4zbq7repr",
    "contact" : "l4zbq7repr",
    "invoice" : "l4zbq7repr",
    "account_key" : "l4zbq7repr",
}
```
#### Parameters:

context: (string) The context identifier, plan_expired
subscription: The subscription id
recurring_invoice: The id of the recurring invoice that was generated based on the subscription
invoice: The id of the invoice that was generated based on the subscription
client: The id of the client
contact: The id of the contact
account_key: A client reference (client.custom_value2)

#### Response:

A standard array should be returned under all circumstances, within the array will be two keys, a successful request will return the following response:
```
{
	"message" : "Success",
	"status_code" : "200" / HTTP status code 2xx
}
```
A failed request would return the an array like this:
```
{
	"message" : "A human readable failure message to pass back to the client",
	"status_code" : "403" / HTTP status code 4xx/5xx
}
```
