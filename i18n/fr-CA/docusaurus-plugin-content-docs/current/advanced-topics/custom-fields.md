---
title: "Personnalisations PDF"
sidebar_position: 2
---
# Personnalisations PDF

La génération de PDF dans la v5 se fait via un système de modèles HTML. Nous fournissons plusieurs modèles de conception parmi lesquels vous pouvez choisir, ou\nvous pouvez créer votre propre conception en utilisant n'importe quelle combinaison HTML/CSS.

## Extraits

Ces extraits ont été recueillis au fil du temps, certains pourraient les trouver utiles. Nous avons donc décidé de les rassembler dans la documentation officielle.

### Obtenir tous les sélecteurs disponibles sur le design
Pour nous assurer de pouvoir cibler tous les éléments facilement et rendre les modifications disponibles plus rapidement pour vous, nous avons introduit le mode "Brouillon".
Pour activer le mode "Brouillon", assurez-vous d'activer l'option :

Paramètres (Paramètres avancés) > Conception de facture > Personnaliser & prévisualiser > Mode brouillon :

![texte alternatif](/assets/images/pdf_customization/draft-mode.png "Basculer en mode brouillon")

Sélectionnons la colonne de l'article :

![texte alternatif](/assets/images/pdf_customization/1-selecting-element-in-draft.png "Sélection de l'élément en mode brouillon")

Maintenant, vous pouvez sélectionner un élément et inspecter son sélecteur :

![texte alternatif](/assets/images/pdf_customization/2-inspecting-data-ref-of-element.png "Inspecter data-ref dans le code source")

La partie importante pour nous est **data-ref**.

### Affichage d'une colonne de tableau sur un design et masquage sur les autres
Cela masquera les colonnes et les rangées entièrement liées. Dans cet exemple, nous masquons le champ de produit personnalisé.

```css
/* CSS (inclut) */
```

[data-ref="product_table-product.product1-th"],
[data-ref="product_table-product.product1-td"] { display: none; }
```

### Remplacer la propriété "hidden" sur un élément
Certains éléments ont une propriété "hidden" sur l'élément. Vous pouvez écraser cela avec CSS.

```
css
[data-ref="totals_table-subtotal-label"] {
    display: inline; /* ou block */
}
```


## Création d'un design personnalisé
Voici une section pour vous qui souhaitez créer un nouveau design entièrement à partir de zéro
ou simplement curieux de comprendre comment fonctionnent les modèles.

```
:::info
Gardez à l'esprit que pour créer des conceptions, une connaissance en HTML et CSS est obligatoire.
:::
```

### Création d'une entrée de conception

Commençons par cloner le design existant.
Pour ce faire, ouvrez le panneau d'administration et accédez à **Paramètres > Conception de facture > Personnaliser & Prévisualiser**.

Le design de base n'est pas important si vous avez une nouvelle conception en tête. Nommez votre design et cliquez sur **Enregistrer**."}

![texte alternatif](/assets/images/creating-custom-design/01-creating-design-entry.png "Création d'une entrée de design")

Nous allons nommer le nôtre **Tutoriel** et activer le **Mode HTML** pour voir les changements plus rapidement.

### Structure de conception
En haut de la page, nous devrions voir des onglets tels que **Corps**, **En-tête**, **Pied de page**, **Produits**, **Inclus**.  
C'est ainsi que la conception est structurée et, pour la plupart, vous pouvez la laisser telle quelle.

Nous passerons la plupart de notre temps dans les sections **Includes** et **Body**.

#### Corps
Comme le suggère le nom, c'est le cœur de la conception. C'est ici que nous allons organiser
nos éléments.

#### En-tête
Si vous voulez être entièrement sémantique et respecter pleinement les normes HTML, c'est ici
que vous devriez placer le contenu de votre en-tête.

#### Pied de page
Tout comme l'en-tête, il s'agit d'une section plus sémantique pour le contenu du pied de page.

#### Produits
:::warning
Au moment de la rédaction, cette fonctionnalité est **non prise en charge**. À l'avenir, elle vous permettra d'allouer dynamiquement des colonnes de table.
:::

#### Inclusions
C'est ici que vos styles vont.

### Exigences

Avant de commencer à personnaliser/coder notre propre design, gardez à l'esprit que Invoice Ninja a certaines exigences.
Ce sont des identifiants spécifiques pour les contenus.

#### Éléments cibles:
- #détails-entreprise
- #adresse-entreprise
- #détails-client
- #détails-entité
- #tableau-bon-livraison
- #tableau-produits
- #tableau-tâches
- #tableau-totaux
- #pied-de-page

Pour obtenir des sélecteurs spécifiques, veuillez vous référer à [Obtenir tous les sélecteurs disponibles sur le design](#obtenir-tous-les-sélecteurs-disponibles-sur-le-design).

Si c'est plus facile pour vous de développer un modèle statique en premier, vous pouvez toujours copier le code source fourni
sous l'onglet Paramètres et développer localement, en copiant les modifications dans Invoice Ninja une fois que vous êtes satisfait
du design.

![texte alternatif](/assets/images/creating-custom-design/02-showing-the-source-code.png "Saisir le code source des PDF sources")

### Sélecteurs
:::info
Tous les sélecteurs suivants sont marqués à l'aide de l'attribut `data-ref`.
:::

Pour interroger `client_details-client.name` par exemple, utilisez ce qui suit :


```css
[data-ref="client_details-client.name"] {
    background-color: rouge;
}
```


#### Détails du client
- client_details-client.name
- client_details-client.number
- client_details-client.vat_number
- client_details-client.address1
- client_details-client.address2
- client_details-client.city_state_postal
- client_details-client.country
- client_details-client.phone
- client_details-client.email

#### Détails de l'entreprise
- company_details-company.nom
- company_details-company.numéro d'identification
- company_details-company.numéro TVA
- company_details-company.site_web
- company_details-company.email
- company_details-company.téléphone

#### Adresse de l'entreprise
- company_address-company.address1
- company_address-company.address2
- company_address-company.city_state_postal
- company_address-company.country

#### Détails de la facture
- entity_details-invoice.number_label
- entity_details-invoice.number
- entity_details-invoice.po_number_label
- entity_details-invoice.po_number
- entity_details-invoice.date_label
- entity_details-invoice.date
- entity_details-invoice.due_date_label
- entity_details-invoice.due_date
- entity_details-invoice.total_label
- entity_details-invoice.total
- entity_details-invoice.balance_due_label
- entity_details-invoice.balance_due

#### Détails du devis\n- entity_details-quote.number_label\n- entity_details-quote.number\n- entity_details-quote.po_number_label\n- entity_details-quote.po_number\n- entity_details-quote.date_label\n- entity_details-quote.date\n- entity_details-quote.valid_until_label\n- entity_details-quote.valid_until\n- entity_details-quote.total_label\n- entity_details-quote.total

#### Détails du crédit
- entity_details-quote.number_label
- entity_details-quote.number
- entity_details-quote.po_number_label
- entity_details-quote.po_number
- entity_details-quote.date_label
- entity_details-quote.date
- entity_details-quote.balance_label
- entity_details-quote.balance
- entity_details-quote.total_label
- entity_details-quote.total

#### Tableau des produits
- tableau_des_produits-produit.item-th
- tableau_des_produits-produit.description-th
- tableau_des_produits-produit.coût_unitaire-th
- tableau_des_produits-produit.quantité-th
- tableau_des_produits-produit.rabais-th
- tableau_des_produits-produit.taxe-th
- tableau_des_produits-produit.total_ligne-th

#### Tableau des tâches
- task_table-task.service-th
- task_table-task.description-th
- task_table-task.rate-th
- task_table-task.hours-th
- task_table-task.discount-th
- task_table-task.tax-th
- task_table-task.line_total-th

#### Colonnes totales
- totals_table-net_subtotal-label
- totals_table-net_sous_total
- totals_table-subtotal-label
- totals_table-sous_total
- totals_table-remise-label
- totals_table-remise
- totals_table-custom_surcharge1-label
- totals_table-surtaxe_personnalisée1
- totals_table-custom_surcharge2-label
- totals_table-surtaxe_personnalisée2
- totals_table-custom_surcharge3-label
- totals_table-surtaxe_personnalisée3
- totals_table-custom_surcharge4-label
- totals_table-surtaxe_personnalisée4
- totals_table-versé_à_ce_jour-label
- totals_table-versé_à_ce_jour
- totals_table-en_attente-label
- totals_table-en_attente

## Champs personnalisés
```bash
$tax - Étiquette de taxe  
$app_url - L'URL complète de l'application  
$from - Étiquette de l'expéditeur  
$to - Étiquette du destinataire  
$total_tax_labels - Carte des étiquettes de taxe  
$total_tax_values - Carte des valeurs de taxe  
$line_tax_labels - Carte des étiquettes de taxe de ligne  
$line_tax_values - Carte des valeurs de taxe de ligne  
$date - Étiquette/valeur de la date de l'entité  
$invoice.date - Alias de l'étiquette $date  
$due_date - Étiquette/valeur de la date d'échéance de l'entité (ou date d'échéance du paiement partiel si défini sur la facture ou le devis)
$invoice.due_date - Alias de la date d'échéance  
$payment_due - Étiquette/valeur du paiement dû  
$invoice.number - Étiquette/valeur du numéro de facture  
$invoice.po_number - Étiquette/valeur du numéro de bon de commande de la facture  
$entity.datetime - Étiquette/valeur de la date et de l'heure de l'entité  
$invoice.datetime - Alias de $entity.datetime  
$quote.datetime - Alias de $entity.datetime  
$credit.datetime - Alias de $entity.datetime
```

$entity - L'étiquette d'entité, par exemple. Facture / Avoir / Devis  
$number - L'étiquette du numéro, par exemple. Numéro de Facture  
$entity.terms - L'étiquette/valeur des conditions de l'entité, par exemple. Conditions de Facturation:  
$terms - Alias de $entity.terms  
$view_link - Lien de visualisation de l'entité, par exemple. <a href="/link/to/entity">Voir la facture</a>  
$view_url - L'URL de visualisation de l'entité, par exemple. https://lien.vers.la.ressource

$project.name - Nom du projet étiquette/valeur  
$project.number - Numéro du projet /valeur

$entity_number - Alias de $number  
$invoice.discount - Étiquette/valeur de la réduction de la facture  
$discount - Alias de $invoice.discount  
$subtotal - Étiquette/valeur du sous-total  
$invoice.subtotal - Alias de $subtotal

$balance_due - Libellé/valeur du solde dû formaté en devise  
$balance_due_raw - Libellé/valeur du solde dû non formaté  
$quote.balance_due - Alias de $balance_due  
$invoice.balance_due - Alias de $balance_due  
$outstanding - Alias de $balance_due

$partial_due - étiquette/valeur de la partie due  
$total - étiquette/valeur totale  
$amount - Alias de $total  
$amount_raw - Alias non formaté de $total  
$amount_due - Alias de $total  
$quote.total - Alias de $total

$invoice.total - Alias de $total  
$invoice_total_raw - Alias non formaté de $total
$invoice.amount - Alias de $total  
$quote.amount - Alias de $total  
$credit.total - Alias de $total  
$credit.number - Alias de $number  
$credit.total - Alias de $total  
$credit.po_number - Alias de $invoice.po_number  
$credit.date - Étiquette/valeur de la date du crédit  
$balance - Alias de $balance  
$credit.balance - Alias de $balance  
$invoice.balance - Alias de $balance  
$taxes - Étiquette/valeur des taxes totales  
$invoice.taxes - Alias de $taxes

$invoice.custom1 - Étiquette/valeur personnalisée de la facture 1  
$invoice.custom2 - Étiquette/valeur personnalisée de la facture 2  
$invoice.custom3 - Étiquette/valeur personnalisée de la facture 3  
$invoice.custom4 - Étiquette/valeur personnalisée de la facture 4

$invoice.public_notes - Étiquette/valeur des notes publiques de la facture  
$entity.public_notes - Alias de $invoice.public_notes  
$public_notes - Alias de $invoice.public_notes

$entity_issued_to - Étiquette "Émis à"  
$your_entity - Étiquette "Votre `entité`"

$quote.date - Alias de $date  
$quote.number - Alias de $number  
$quote.po_number - Alias de $invoice.po_number  
$quote.quote_number - Alias de $quote.number  
$quote_no - Alias de $quote.number  
$quote.quote_no - Alias de $quote.number  
$quote.valid_until - Étiquette/valeur valable jusqu'à  
$credit_amount - Alias de $amount  
$credit_balance - Alias de $balance

$credit_number - Alias de $number  
$credit_no - Alias de $number  
$credit.credit_no - Alias de $number

$invoice_no - Alias de $number  
$invoice.invoice_no - Alias de $number

$client1 - Étiquette/valeur personnalisée 1 du client  
$client2 - Étiquette/valeur personnalisée 2 du client  
$client3 - Étiquette/valeur personnalisée 3 du client  
$client4 - Étiquette/valeur personnalisée 4 du client

$client.currency - Code de devise du client, par exemple. AUD, USD

$client.lang_2 - Paramètre régional de la langue du client, par exemple 'fr'

```
$client.balance - Étiquette/valeur du solde du client  
$outstanding - Alias de $client.balance  
$client_balance - Alias de $client.balance  
$paid_to_date - Étiquette/valeur du montant payé à ce jour par le client  
```

$contact.full_name - Nom complet du contact (étiquette/valeur)  
$contact.email - Courriel du contact (étiquette/valeur)  
$contact.phone - Téléphone du contact (étiquette/valeur)

$contact.name - Étiquette/valeur du nom du contact  
$contact.first_name - Étiquette/valeur du prénom du contact  
$contact.last_name - Étiquette/valeur du nom de famille du contact

$contact.custom1 - Étiquette/valeur personnalisée du contact 1  
$contact.custom2 - Étiquette/valeur personnalisée du contact 2  
$contact.custom3 - Étiquette/valeur personnalisée du contact 3  
$contact.custom4 - Étiquette/valeur personnalisée du contact 4

$company.city_state_postal - Étiquette/valeur de la combinaison ville_province_code postal de l'entreprise  
$company.postal_city_state - Étiquette/valeur de la combinaison ville_province de l'entreprise  
$company.name - Étiquette/valeur du nom de l'entreprise  
$company.address1 - Étiquette/valeur de la première ligne d'adresse de l'entreprise  
$company.address2 - Étiquette/valeur de la deuxième ligne d'adresse de l'entreprise  
$company.city - Étiquette/valeur de la ville de l'entreprise  
$company.state - Étiquette/valeur de la province de l'entreprise  
$company.postal_code - Étiquette/valeur du code postal de l'entreprise  
$company.country - Étiquette/valeur du pays de l'entreprise  
$company.phone - Étiquette/valeur du téléphone de l'entreprise  
$company.email - Étiquette/valeur du courriel de l'entreprise  
$company.vat_number - Étiquette/valeur du numéro de TVA de l'entreprise  
$company.id_number - Étiquette/valeur du numéro d'identification de l'entreprise  
$company.website - Étiquette/valeur du site web de l'entreprise  
$company.address - Étiquette/valeur de l'adresse complète de l'entreprise

`$code_qr_spc` - Code QR formaté SPC

$logo - URL complète du logo de l'entreprise  
$company.logo - Alias de $logo  
$company_logo - Alias de $logo  
$company1 - Étiquette/valeur personnalisée de l'entreprise 1  
$company2 - Étiquette/valeur personnalisée de l'entreprise 2  
$company3 - Étiquette/valeur personnalisée de l'entreprise 3  
$company4 - Étiquette/valeur personnalisée de l'entreprise 4  

$custom_surcharge1 - Étiquette/valeur de surcharge personnalisée 1  
$custom_surcharge2 - Étiquette/valeur de surcharge personnalisée 2  
$custom_surcharge3 - Étiquette/valeur de surcharge personnalisée 3  
$custom_surcharge4 - Étiquette/valeur de surcharge personnalisée 4

$product.item - Étiquette de l'élément du produit  
$product.date - Étiquette de la date du produit  
$product.discount - Étiquette de remise du produit  
$product.product_key - Étiquette de la clé du produit  
$product.description - Étiquette de description du produit  
$product.unit_cost - Étiquette du coût unitaire du produit  
$product.quantity - Étiquette de la quantité du produit  
$product.tax - Étiquette de la taxe  
$product.tax_name1 - Étiquette du nom de la taxe 1 du produit  
$product.tax_name2 - Étiquette du nom de la taxe 2 du produit  
$product.tax_name3 - Étiquette du nom de la taxe 3 du produit  
$product.line_total - Étiquette du total de la ligne du produit  
$product.product1 - Étiquette personnalisée du produit 1  
$product.product2 - Étiquette personnalisée du produit 2  
$product.product3 - Étiquette personnalisée du produit 3  
$product.product4 - Étiquette personnalisée du produit 4

$task.date - Étiquette de date de tâche  
$task.discount - Étiquette de réduction de tâche  
$task.service - Étiquette de service de tâche  
$task.description - Étiquette de description de tâche  
$task.rate - Étiquette de tarif de tâche  
$task.hours - Étiquette d'heures de tâche  
$task.tax - Étiquette d'impôt  
$task.tax_name1 - Étiquette de nom d'impôt 1 de tâche  
$task.tax_name2 - Étiquette de nom d'impôt 2 de tâche  
$task.tax_name3 - Étiquette de nom d'impôt 3 de tâche  
$task.line_total - Étiquette de total de ligne de tâche

`$contact.signature` - L'image de la signature du contact.

$thanks - Étiquette de remerciement  
$from - Étiquette d'expéditeur  
$to - Étiquette de destinataire  
$details - Étiquette de détails  
$item - Étiquette d'article  
$description - Étiquette de description  
$entity_footer - Étiquette/valeur de pied de page d'entité  
```
