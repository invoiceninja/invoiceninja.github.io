---
title: "Taxes"
sidebar_position: 20
---
# Taxes

## Taxes Manuelles

Les taxes peuvent être configurées manuellement en suivant les étapes [ici](/docs/user-guide/basic-settings#tax_settings) où vous pouvez définir manuellement les noms des taxes, les taux et comment ils sont appliqués.

## Calcul des taxes de vente américaines

Dans Invoice Ninja v5.6, nous introduisons la capacité d'effectuer des calculs de taxes automatiques. Laissez-nous vous donner une brève introduction pour vous aider à comprendre les calculs des taxes de vente aux États-Unis.

La taxe de vente aux États-Unis est une taxe à la consommation imposée par le gouvernement sur la vente de biens et de services. Elle est généralement calculée en pourcentage et ajoutée au prix d'un produit ou d'un service au point de vente. Contrairement à certains pays où une taxe sur la valeur ajoutée (TVA) est utilisée, aux États-Unis, il n'y a pas de taxe de vente nationale. Au lieu de cela, la taxe de vente est prélevée au niveau de l'État, du comté et parfois même au niveau municipal, ce qui la rend quelque peu complexe.

Cela signifie que la taxe de vente peut varier considérablement d'un endroit à un autre, non seulement d'un État à un autre, mais même à l'intérieur d'un même État. Par exemple, dans une ville, la taxe de vente totale pourrait être de 6 %, tandis que dans une autre, elle pourrait être de 9 %. Certains États, comme l'Oregon et le Delaware, n'imposent pas du tout de taxe de vente.

Les produits et services peuvent également être taxés différemment. Par exemple, certains États taxent les produits alimentaires, tandis que d'autres ne le font pas. De même, certains États offrent des périodes de vacances fiscales, des moments spécifiques de l'année où la taxe de vente n'est pas facturée sur certains articles.

Pour calculer avec précision la taxe de vente, il est important de connaître :

- L'emplacement précis de la vente (le "nexus").
- Le type de produit ou de service vendu.
- Le taux de taxe actuel à cet endroit.
- Invoice Ninja peut simplifier ce processus pour vous en automatisant le calcul de la taxe de vente. Il identifie le taux de taxe approprié en fonction de l'adresse de livraison sur la facture et l'applique aux articles imposables dans votre facture. Il reste à jour avec les taux de taxe actuels dans différents endroits, garantissant que vos factures sont toujours conformes aux lois fiscales les plus récentes.

Rappelez-vous, gérer correctement la taxe de vente n'est pas seulement bénéfique pour vos opérations commerciales, mais c'est aussi une obligation légale. Avoir la possibilité de calculer automatiquement la taxe de vente vous fera gagner du temps, réduira les erreurs et garantira que vous collectez le montant correct de taxe sur chaque vente, ce qui est crucial pour la déclaration et le versement des taxes de votre entreprise.

## Configurer les calculs de taxe américains

Si vous êtes un client hébergé d'Invoice Ninja avec un plan Pro ou Entreprise, vous pouvez activer les calcul

s de taxe avec ces étapes :

### Activer le calcul des taxes

```bash
Paramètres > Paramètres fiscaux
```

![Activer les calculs de taxe](/assets/images/taxes/enable_taxes.png)

Accédez à Paramètres > Paramètres fiscaux et activez l'interrupteur Calculer les taxes. Une nouvelle section apparaîtra pour une configuration supplémentaire. Il est important de sélectionner la sous-région du vendeur (votre), qui sera un État américain où votre entreprise est enregistrée à des fins fiscales.

![Sous-région du vendeur](/assets/images/taxes/seller_subregion.png)

En dessous se trouve une série de régions où les calculs de taxes automatiques sont pris en charge. Chaque section offre une granularité supplémentaire pour l'endroit où vous souhaitez percevoir la taxe.

![Configuration du taux de taxe](/assets/images/taxes/tax_rate_config.png)

Il y a essentiellement deux options ici, la première est de percevoir des taxes dans tous les États (Taxer tous), ou vous pouvez choisir Taxer sélectionnés et sélectionner dans quels États percevoir la taxe en cliquant sur l'option Afficher qui exposera tous les États. Cochez les cases des États où vous souhaitez percevoir les taxes, puis enregistrez.

### Mise à jour de vos produits
La façon dont la taxe de vente est appliquée peut varier considérablement en fonction du type de biens ou de services vendus. C'est parce que chaque État peut établir ses propres règles sur ce qui est taxable et ce qui ne l'est pas. Par exemple, les biens personnels tangibles sont généralement taxables, mais certains types d'articles comme les produits alimentaires, les médicaments sur ordonnance et les vêtements peuvent être exemptés de taxe de vente dans certains États.

En ce qui concerne les services, les règles peuvent devenir un peu plus complexes. Certains États taxent tous les services, certains ne taxent que certains services, tandis que d'autres ne taxent pas du tout les services. Par exemple, les services de réparation et de maintenance peuvent être taxés dans un État, mais pas dans un autre. De même, les services professionnels tels que les services juridiques ou de conseil peuvent être exemptés dans certains États, mais taxables dans d'autres.

Pour gérer la gamme des possibilités fiscales, vous pouvez attribuer des catégories fiscales à vos produits.

Les catégories fiscales disponibles sont les suivantes :

- Biens Physiques
- Produits Numériques
- Services
- Expédition
- Exonéré de Taxe
- Taxe Réduite
- Taxe de Remplacement
- Taux Zéro
- Taxe Inversée (Taxe d'Utilisation)

#### Biens Physiques

La taxe de vente sur les biens physiques, également connue sous le nom de biens personnels tangibles, est l'une des formes les plus courantes de taxe de vente aux États-Unis. La majorité des États imposent une taxe de vente sur l'achat de biens physiques, tels que l'électronique, les meubles et les véhicules. Cependant, ce qui est considéré comme taxable peut varier d'un État à l'autre. Certains biens physiques comme les produits alimentaires, les médicaments sur ordonnance et parfois les vêtements peuvent être exemptés ou taxés à un taux réduit dans certains États. Sélectionnez cette catégorie pour les biens physiques qui sont taxables.

#### Produits Numériques

La taxe de vente sur les produits numériques est un domaine en évolution de la loi fiscale américaine, reflétant le passage croissant vers une économie numérique. Les produits numériques peuvent inclure tout, des e-books, de la musique et des téléchargements de vidéos, aux logiciels et abonnements numériques.

Certains États peuvent taxer les biens numériques exactement de la même manière que les biens physiques, d'autres peuvent taxer seulement certains types de biens numériques, tandis que certains États ne taxent pas du tout les biens numériques. Par exemple, un e-book pourrait être taxé dans un État, mais pourrait être exempté de taxe dans un autre. La taxe pourrait également dépendre de si le bien numérique est considéré comme un service ou un produit, et de s'il est livré sur un support tangible comme un DVD ou un CD.

#### Services
La taxe de vente sur les services peut être un domaine complexe de la fiscalité aux États-Unis. Contrairement aux biens tangibles, qui sont généralement taxables, les services sont taxés différemment à travers les États. Certains États taxent tous les services, d'autres taxent seulement des services spécifiques, et certains ne taxent pas du tout les services.

Par exemple, les services professionnels tels que le conseil, les services juridiques et les services de comptabilité peuvent être exemptés de la taxe de vente dans certains États, alors qu'ils sont taxables dans d'autres. De même, les services personnels comme les coupes de cheveux, les réparations et l'entretien, ou l'entraînement physique peuvent être traités différemment en fonction de l'État.

#### Exonéré de Taxe
Les exonérations de taxe de vente sont une partie importante du paysage fiscal aux États-Unis. Une exonération signifie que certains biens ou services ne sont pas soumis à la taxe de vente. Les spécificités de quels produits et services sont exonérés de taxe peuvent varier considérablement d'un État à un autre.

#### Taxe Réduite

En plus des taux de taxe standard et exemptés, de nombreux États aux États-Unis mettent également en œuvre des taux de taxe réduits pour certains types de biens ou de services. Ces taux réduits sont généralement appliqués pour rendre les articles essentiels plus abordables ou pour stimuler certains secteurs de l'économie.

Les taux de taxe réduits peuvent également s'appliquer à certains types de services. Par exemple, certains États pourraient appliquer un taux de taxe plus bas aux services éducatifs, aux services médicaux ou aux transports publics.

#### Taxe de Remplacement

Dans certaines circonstances, vous pouvez souhaiter remplacer le taux de taxe sur certains produits qui sont en dehors du champ d'application habituel de la taxe de vente. Lorsque vous sélectionnez une catégorie de taxe de remplacement, vous pouvez également sélectionner la taxe (le cas échéant) que vous souhaitez appliquer au produit.

#### Taux Zéro

Les articles taxés à taux zéro sont une catégorie unique dans le monde de la taxe de vente. Bien que cela puisse sembler similaire aux articles exonérés de taxe, il y a une différence cruciale. Lorsqu'un article est taxé à taux zéro, il reste techniquement taxable, mais à un taux de 0%. L'avantage clé ici est que bien que le consommateur final ne paie aucune taxe sur ces biens ou services, les entreprises impliquées dans la chaîne d'approvisionnement peuvent toujours récupérer les taxes sur les intrants (le cas échéant), ce qui n'est pas autorisé pour les articles exonérés de taxe.

Cependant, il est important de noter que le concept de biens à taux zéro est plus couramment associé aux pays qui utilisent un système de taxe sur la valeur ajoutée (TVA), comme ceux de l'Union européenne ou du Canada. Dans ces systèmes, certains biens essentiels comme la nourriture ou les livres sont souvent taxés à taux zéro pour réduire le fardeau des coûts pour les consommateurs, tout en permettant aux entreprises de récupérer la TVA qu'elles ont payée sur les intrants.

Aux États-Unis, qui utilisent un système de taxe de vente plutôt que de TVA, le concept de taux zéro ne s'applique pas de la même manière. Au lieu de cela, les États classent généralement les biens et services comme étant soit taxables, exemptés, ou taxables à un taux réduit.

#### Taxe Inverse (Taxe d'Usage)

Le concept de "taxe inverse" est souvent utilisé dans le contexte de la "taxe d'usage". Aux États-Unis, une taxe d'usage est généralement un type de taxe facturée aux consommateurs qui achètent des biens ou des services en dehors de leur État de résidence pour utilisation dans leur État de résidence, et où aucune taxe de vente n'a été facturée.

En essence, la taxe d'usage est le pendant de la taxe de vente et est conçue pour décourager les consommateurs d'acheter hors de leur État afin d'éviter la taxe de vente. Elle aide également à équilibrer le terrain de jeu entre les détaillants de l'État (qui doivent facturer la taxe de vente) et les détaillants hors de l'État (qui ne le font souvent pas).

Le taux de la taxe d'usage est généralement le même que la taxe de vente qui aurait été facturée si l'achat avait été effectué dans l'État. Par conséquent, si vous achetez un article sans taxe auprès d'un détaillant en ligne situé dans un autre État, mais que vous utilisez l'article dans votre État de résidence, vous êtes généralement responsable du paiement de la taxe d'usage à votre État.

Gardez à l'esprit, il est généralement de la responsabilité de l'acheteur de calculer, de déclarer et de verser la taxe d'usage à l'autorité fiscale appropriée. Cela peut se compliquer pour les entreprises qui effectuent de nombreux achats hors de l'État. Cependant, certains États exigent que les entreprises plus importantes ou celles ayant une présence significative (nexus) dans l'État facturent la taxe d'usage au point de vente, inversant effectivement le processus de taxation normal, d'où le terme "taxe inverse".

![Produit Exonéré de Taxe](/assets/images/taxes/exempt_product_tax.png)

### Exemptions de Taxes

Dans le domaine de la taxe de vente, les exemptions de taxes sont des scénarios spécifiques où la taxe de vente n'a pas à être payée sur certains biens, services ou transactions. Ces exemptions sont fixées par l'autorité fiscale, souvent au niveau de l'État aux États-Unis, et peuvent varier considérablement d'un État à l'autre.

Exemptions basées sur le produit : Certains types de biens peuvent être exemptés de la taxe de vente. Par exemple, les nécessités comme les produits alimentaires et les médicaments sur ordonnance sont souvent exemptés de taxe. Les vêtements sont également exemptés dans certains États, et de nombreux États offrent des exemptions temporaires pour les fournitures scolaires pendant certaines périodes de l'année.

Exemptions basées sur l'utilisation : Cela se réfère à des situations où un article est utilisé de manière à le qualifier pour être exempté de taxe. Par exemple, les biens qui sont achetés pour la revente sont souvent exemptés de la taxe de vente, car la taxe sera finalement payée par le consommateur final. De même, les articles utilisés dans la fabrication ou les articles achetés par des organisations à but non lucratif sont souvent exemptés de taxe.

Exemptions basées sur l'acheteur : Dans certains cas, le statut de l'acheteur peut conduire à une exemption de taxe. Par exemple, les agences gouvernementales, les organisations à but non lucratif et certains autres groupes peuvent ne pas avoir à payer de taxe de vente sur leurs achats.

Exemptions basées sur la transaction : Certains types de transactions de vente peuvent être exemptés de la taxe de vente. Par exemple, les ventes impliquant le commerce interétatique peuvent être exemptées dans certains cas.

Si vous vendez des biens et des services à un client qui est exempté de taxe, vous pouvez le marquer comme exempté de taxe en modifiant son dossier de client et en activant l'interrupteur d'exemption de taxe.

![Produit Exempté de Taxe](/assets/images/taxes/tax_exempt_client.png)
