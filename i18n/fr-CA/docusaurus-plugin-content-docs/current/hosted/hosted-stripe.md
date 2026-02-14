---
title: "Stripe"
sidebar_position: 6
---
# Stripe
## Intégration Stripe

Dans la version 5 d'Invoice Ninja, nous avons introduit Stripe Connect en utilisant OAuth. Cette intégration offre un moyen sécurisé d'intégrer votre compte Stripe à Invoice Ninja.

Lorsque vous migrez vos données, nous créons automatiquement votre compte Stripe, mais nous avons besoin que vous autorisiez votre compte Stripe avec Invoice Ninja via OAuth.

Pour ce faire, accédez à Paramètres > Paramètres de paiement > Configurer les passerelles. Dans le gestionnaire Stripe, vous verrez ce qui suit:

![texte alternatif](/assets/images/stripe/stripe1.png "Connecter Stripe")

Cliquez sur ce bouton et vous serez dirigé vers une page comme celle-ci :
![texte alternatif](/assets/images/stripe/stripe2.png "OAuth Stripe")

Sélectionnez le compte que vous souhaitez connecter et nous nous occuperons du reste!!

## Webhooks Stripe

Il est fortement recommandé de configurer des webhooks qui permettent à Stripe de communiquer avec Invoice Ninja.

Dans les cas où le client quitte avant la fin de la transaction ou une perte de communication entre Stripe et Invoice Ninja. Les webhooks peuvent réparer automatiquement les transactions incomplètes.

Vous pouvez trouver les détails de votre webhook sur la page d'aperçu Stripe dans Paramètres > Paramètres de paiement > Configurer les passerelles > Stripe

![texte alternatif](/assets/images/stripe/stripe_webhook_overview_1.png "Paramètres Webhook Invoice Ninja")

En utilisant ces détails, connectez-vous à Stripe et allez dans Développeurs > Webhooks

![texte alternatif](/assets/images/stripe/stripe_webhook_overview_2.png "Édition de Webhook dans Stripe")

Entrez votre URL de webhook dédié ainsi que les cinq types d'événements

:::info
source.chargeable  
charge.succeeded  
customer.source.updated  
payment_intent.processing  
payment_intent.succeeded  
payment_intent.payment_failed  
payment_intent.partially_funded
:::

![texte alternatif](/assets/images/stripe/stripe_webhook_overview_3.png "Ajouter des événements")