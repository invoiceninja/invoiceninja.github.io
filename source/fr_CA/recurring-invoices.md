---
extends: _layouts.user_guide
section: content
locale: fr_CA
---

# Factures récurrentes

Les factures récurrentes sont un moyen pratique d'automatiser le processus de facturation d'un client selon un calendrier régulier. Vous pouvez définir une facture récurrente pour être générée automatiquement à un intervalle spécifique et envoyée à votre client par courrier électronique. Cette fonctionnalité est utile pour les entreprises qui ont des clients réguliers et les facturent selon un calendrier régulier, tel que mensuel ou annuel. Elle permet de gagner du temps et des efforts en automatisant le processus de création de factures.

<video width="100%" controls>
  <source src="/assets/videos/recurring_invoices/create_recurring_invoice.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

## Options d'autorisation de paiement automatique

Lors de la configuration d'une facture récurrente, vous avez plusieurs options pour activer AutoBilling. Il existe 4 options :

- Désactivé
- Activé
- Activé par défaut
- Désactivé par défaut

### Désactivé

Lorsqu'elle est définie sur Désactivé, cela signifie que la facture récurrente ne sera jamais automatiquement facturée.

### Activé

Lorsqu'elle est définie sur Activé, cela signifie que la facture récurrente sera toujours automatiquement facturée si un moyen de paiement valide est enregistré.

### Activé par défaut

Lorsqu'elle est définie sur Activé par défaut, une case à cocher radio apparaîtra pendant le processus de paiement. Cette case permettra à l'utilisateur d'opter pour l'autorisation de paiement automatique ou de s'en désinscrire. Avec ce réglage particulier, le bouton radio sera pré-sélectionné pour l'autorisation de paiement automatique.

### Désactivé par défaut

Lorsqu'elle est définie sur Désactivé par défaut, une case à cocher radio apparaîtra pendant le processus de paiement. Cette case permettra à l'utilisateur d'opter pour l'autorisation de paiement automatique ou de s'en désinscrire. Avec ce réglage particulier, le bouton radio sera pré-sélectionné pour la désactivation du paiement automatique.

## Mots-clés réservés dans la description des articles

Pour vous faciliter la vie, nous avons mis en place quelques mots-clés réservés dans la description des articles pour faciliter votre travail avec les factures récurrentes.

Les mots-clés réservés sont :

- :MONTH
- :YEAR
- :QUARTER
- :WEEK
- :WEEK_BEFORE
- :WEEK_AHEAD
- :MONTHYEAR

Comme vous pouvez le deviner, chaque fois qu'une facture (PDF) est générée, les mots clés seront remplacés par des valeurs réelles, donc :

- :MONTH sera traduit en mois réel (par exemple janvier).
- :YEAR à la valeur numérique de l'année en cours (par exemple 2021)
- .. et le :QUARTER à par exemple T2.

Les mots clés :MONTH, :YEAR, :QUARTER et :MONTHYEAR prennent également en charge les opérations mathématiques de base : **addition**, **soustraction**, **multiplication** & **division**.

Voici donc le modèle pour les opérations mathématiques :

> %MOT-CLÉ% %OPÉRATION% %VALEUR%

Voyons cela en pratique. Imaginez que vous envoyez une facture pour une adhésion à un club de gym tous les trois mois. Écrivez cela dans la description de l'article et voyons ce que nous obtenons :

> Adhésion à un club de gym : de :MONTH à :MONTH+3

![alt text](/assets/images/recurring_invoices/reserved-keywords-step-one.png "Typing reserved keys in description")

... et enregistrons et prévisualisons la facture :

![alt text](/assets/images/recurring_invoices/reserved-keywords-pdf.png "Screenshot of PDF")

Super ! Maintenant, chaque fois que vous envoyez cette facture, vous n'avez pas à mettre le mois exact, ni le mois suivant.

### Combinaisons prises en charge


markdown
Copy code
Comme vous pouvez le deviner, chaque fois qu'une facture (PDF) est générée, les mots clés seront remplacés par des valeurs réelles, donc :

- :MONTH sera traduit en mois réel (par exemple janvier).
- :YEAR à la valeur numérique de l'année en cours (par exemple 2021)
- .. et le :QUARTER à par exemple T2.

Les mots clés :MONTH, :YEAR, :QUARTER et :MONTHYEAR prennent également en charge les opérations mathématiques de base : **addition**, **soustraction**, **multiplication** & **division**.

Voici donc le modèle pour les opérations mathématiques :

> %MOT-CLÉ% %OPÉRATION% %VALEUR%

Voyons cela en pratique. Imaginez que vous envoyez une facture pour une adhésion à un club de gym tous les trois mois. Écrivez cela dans la description de l'article et voyons ce que nous obtenons :

> Adhésion à un club de gym : de :MONTH à :MONTH+3

![alt text](/assets/images/recurring_invoices/reserved-keywords-step-one.png "Typing reserved keys in description")

... et enregistrons et prévisualisons la facture :

![alt text](/assets/images/recurring_invoices/reserved-keywords-pdf.png "Screenshot of PDF")

Super ! Maintenant, chaque fois que vous envoyez cette facture, vous n'avez pas à mettre le mois exact, ni le mois suivant.

### Combinaisons prises en charge

```
Mois :MONTH
Année :YEAR
Trimestre :QUARTER

:MONTH (+, -, , /) par exemple :MONTH+1 :MONTH-1 :MONTH2 :MONTH/2
:YEAR (+, -) :YEAR+1 :YEAR-1
:QUARTER (+, -) :QUARTER+1 :QUARTER-1
:MONTHYEAR (+, -) :MONTHYEAR :MONTHYEAR+1
```


## Mot clé réservé pour les plages de dates

Les mots clés précédemment énumérés sont *super* cool, mais que faire si nous devons générer par exemple :

> Adhésion à un club de gym : février 2021 à février 2023

C'est aussi simple que de taper ce qui suit :
> Adhésion à un club de gym : [MONTHYEAR|MONTHYEAR+24]

Adhésion à un club de gym : février 2021 à février 2023 🎉

![alt text](/assets/images/recurring_invoices/reserved-keywords-monthyear-preview.png "Screenshot of PDF")

Une autre façon de le faire est la suivante :
> Adhésion à un club de gym : :MONTH :YEAR à :MONTH :YEAR+2

Gardez à l'esprit que la syntaxe **[MONTHYEAR|MONTHYEAR]** se chargera des **dates chevauchantes**.

### Combinaisons prises en charge

```
[MONTHYEAR|MONTHYEAR +, -], [MONTHYEAR|MONTHYEAR+16], [MONTHYEAR|MONTHYEAR-2]
```


### Traductions
Comme vous pouvez le voir, [MONTHYEAR|MONTHYEAR] utilise "à" entre les plages de dates. Ce n'est pas codé en dur, mais il se construit en fonction de [vos paramètres de localisation](/fr_CA/basic-settings/#localization).


<x-next url=/fr_CA/reports>Rapports</x-next>