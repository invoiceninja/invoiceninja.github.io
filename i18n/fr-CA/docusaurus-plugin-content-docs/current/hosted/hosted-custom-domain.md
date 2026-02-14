---
sidebar_position: 3
---
## Configuration du domaine personnalisé

Si vous êtes un client Entreprise, vous pouvez configurer un domaine de portail client personnalisé qui dirigera vos liens orientés client vers votre propre domaine.

Par exemple, si vous avez le domaine best-brand.com, vous pouvez configurer un sous-domaine tel que portail / factures / facturation / client pour obtenir un domaine pleinement qualifié, c'est-à-dire portal.best-brand.com

:::warning
Il est important de ne pas utiliser votre domaine racine, c'est-à-dire best-brand.com, car cela peut rediriger le trafic loin de votre site web !
:::

Une fois que vous avez décidé d'un nom, vous devez créer un CNAME pointant votre nom de domaine vers notre enregistrement de domaine personnalisé Invoice Ninja :

```
cname.invoicing.co
```


Une fois que vous voyez l'enregistrement se résoudre correctement, ajoutez ensuite votre nom de domaine au panneau d'administration v5 dans Paramètres > Portail client.

Changez votre mode de portail en Domaine, puis entrez le nom de domaine pleinement qualifié, par exemple :

```
https://portal.best-brand.com
```


et enfin, cliquez sur Enregistrer.

:::warning
Si vous migrez votre domaine personnalisé de v4 vers v5, pensez à utiliser un domaine différent sur v5. Si vous transférez votre domaine v4, votre redirection ne fonctionnera pas, c'est-à-dire que les liens de facture v4 ne résoudront plus de redirection vers v5.
:::

Le système générera alors un certificat SSL pour votre domaine. Si vous ne voyez pas votre domaine se résoudre avec un certificat SSL valide, veuillez nous envoyer un courriel à contact@invoiceninja.com en nous indiquant le nom de domaine complet et le problème.
