---
title: "Codes QR"
sidebar_position: 4
---
# Codes QR

Nous proposons actuellement trois options de codes QR dans Invoice Ninja : Swiss QR, SEPA ERC et des codes QR de lien de paiement génériques qui amèneront l'utilisateur final sur le portail client Invoice Ninja pour effectuer le paiement.

## Codes QR suisses

Pour les utilisateurs suisses, vous pouvez intégrer automatiquement des codes QR de paiement compatibles avec les normes suisses directement dans la conception de la facture.

Il existe trois types de QR-Rechnungen. 

1. **QR-IBAN avec référence QR**. 

Il s'agit d'un IBAN spécial, différent de votre IBAN habituel. La manière la plus simple est de demander à votre banque le QR-IBAN, mais vous pouvez également le calculer vous-même. 
La référence QR est un nombre de 26 chiffres suivi d'un chiffre de contrôle. Le chiffre de contrôle doit être modulo 10, récursif. De plus, vous pouvez ajouter 140 symboles de texte.

### Comment calculer votre QR-IBAN :

Par exemple, l'IID normal de Raiffeisen est 80808. 

C'est pourquoi un IBAN Raiffeisen pourrait ressembler à ceci : CH21 **8080 8**001 2345 6789 0

Recherchez le QR-IID de votre banque (un nombre compris entre 30000 et 31999) et remplacez l'IID par le QR-IID. Le QR-IID de Raiffeisen est 30808. Si nous remplaçons l'IBAN précédent par celui-ci, nous obtenons : CH21 **3080 8**001 2345 6789 0. Il s'agit du QR-IBAN avec un mauvais chiffre de contrôle, nous devons donc le calculer.

Nous commençons par le chiffre de contrôle d'origine (CH**21** 3080 8001 2345 6789 0). Le QR-IBAN doit être un pour modulo 97. Nous devons déplacer les 4 premiers symboles à la fin (3080 8001 2345 6789 0 CH21). Nous remplaçons le chiffre de contrôle 21 par deux XX, car nous ne connaissons pas encore celui-ci (3080 8001 2345 6789 0 CHXX). Ensuite, nous remplaçons CH par des chiffres. C'est alphabétique et commence par 10. Donc A=10, B=11 et C=13. De ce fait, CH est 1217. Cela nous donne 3080 8001 2345 6789 0 1217XX. Nous devons maintenant trouver deux chiffres qui donnent le modulo 97 = 1.

Nous commençons par utiliser 00 pour XX. 3080 8001 2345 6789 0 121700 modulo 97 = 32. C'est trop bas. 97-32+1= 66.  3080 8001 2345 6789 0 121766 modulo 97 = 1. Nous y sommes ! Nous les ramenons à l'avant (121766 3080 8001 2345 6789 0) et remplaçons 1217 par le code du pays (CH66 

2. **QR-Rechnung avec IBAN et sans référence**

Ceci est votre IBAN normal. Vous ne pouvez pas utiliser de référence ! Vous n'êtes autorisé à utiliser que 140 symboles de texte.

3. **QR-Rechnung avec IBAN et référence créancier**

Suit la norme ISO-11649. Fonctionne comme une référence QR, mais utilise l'ISO-11649, ce qui le rend utilisable à l'international. Contrairement aux deux précédents codes QR, celui-ci fonctionne également en dehors de la Suisse. Vous devez utiliser l'IBAN normal, et non le QR IBAN.

![texte alternatif](/assets/images/pdf_customization/swiss_qrcode1.png "Codes QR suisses")

Vous pouvez configurer cela dans Paramètres > Détails de l'entreprise sur la page Détails.

![texte alternatif](/assets/images/pdf_customization/swiss_qrcode3.png "Codes QR suisses")

Vous devrez ensuite personnaliser votre design pour inclure le code QR sur vos PDF. Pour ce faire, créez un nouveau design dans Paramètres > Design de facture > Personnaliser

Dans l'onglet Corps, ajoutez en bas

```
<div style="page-break-inside: avoid;" data-state="encoded-html">
$swiss_qr

```
Après avoir enregistré le design, vous voudrez en faire votre nouveau design par défaut.

![texte alternatif](/assets/images/pdf_customization/swiss_qrcode2.png "Codes QR suisses")

Si vos codes QR n'apparaissent pas, il y a un problème de configuration à régler. Les raisons les plus courantes pour lesquelles le code QR n'apparaît pas sur le PDF sont les détails manquants de l'entreprise. Votre adresse complète est requise ainsi que les détails complets des clients.

## Codes QR SEPA ERC

Pour activer les codes QR SEPA, vous devrez suivre quelques étapes pour vous assurer que les données sont correctes.

Les codes QR SEPA nécessitent au minimum un IBAN, pour les paiements en dehors de l'EEE, vous aurez également besoin du BIC. Ces deux champs sont récupérés à partir de la section Champs personnalisés de l'entreprise d'Invoice Ninja. Veuillez noter que l'IBAN doit être le premier champ personnalisé et le BIC le deuxième champ personnalisé. Pour configurer cela, accédez à

```
Paramètres > Champs personnalisés > Entreprise
```

![texte alternatif](/assets/images/user_guide/iban_bic.png "Configuration IBAN et BIC")

Une fois enregistré, accédez à

```
Paramètres > Détails de l'entreprise
```

Et entrez les valeurs pour votre entreprise

![texte alternatif](/assets/images/user_guide/iban_bic_2.png "Configuration IBAN et BIC")

Dans votre design personnalisé, vous voudrez ensuite insérer la variable qui permet d'injecter le code QR, par exemple.

```
<div>
$sepa_qr_code

```

## Codes QR de liens de paiement génériques

Les codes QR de paiement génériques peuvent facilement être appliqués à votre PDF de facture en utilisant le bloc suivant dans votre design personnalisé

```
<div>
$payment_qrcode

```
