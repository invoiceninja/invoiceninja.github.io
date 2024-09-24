---
extends: _layouts.user_guide
section: content
locale: fr_CA
---

# Importer

## Importer des données

Vous pouvez importer des données dans Invoice Ninja à partir de fichiers CSV ou d'autres logiciels de comptabilité depuis n'importe où dans l'application en utilisant le bouton vert Importer.

![alt text](/assets/images/settings/import_overview.png "Importations CSV")

Commencez par téléverser votre fichier CSV dans la zone de dépôt.

![alt text](/assets/images/settings/import_column_matching.png "Mappage CSV")

Cela téléchargera le fichier et nous effectuerons la correspondance des colonnes et vous renverrons vers une nouvelle page.

![alt text](/assets/images/settings/import_column_matching2.png "Mappage CSV")

Ici, nous faisons correspondre la colonne du CSV (colonne de gauche) avec les colonnes correspondantes d'Invoice Ninja (colonnes de droite). D'ici, vous pouvez ajuster les correspondances et, lorsqu'elles semblent correctes, cliquez sur Importer.

Le système traitera alors le fichier CSV et vous enverra les résultats de l'importation par e-mail.

## Importation de factures

Il y a quelques considérations particulières à prendre en compte lors de l'importation de factures.

1. Un numéro de facture doit être inclus dans le fichier et doit être unique.
2. Si vous avez plusieurs articles que vous souhaitez inclure dans la même facture, utilisez le même numéro de facture pour chaque ligne.
3. Chaque article DOIT inclure une colonne pour la quantité et le coût afin de permettre le calcul du total de la facture.
4. Si vous souhaitez inclure un paiement sur la facture, ajoutez une colonne pour le montant du paiement et indiquez le montant payé.

## Importation tierce

### Freshbooks

Depuis la page d'importation, sélectionnez Freshbooks, puis téléchargez vos fichiers clients et factures, nous ferons le reste !

### Invoice2go

Depuis la page d'importation, sélectionnez Invoice2go, téléchargez votre fichier de factures et nous ferons le reste !

### Invoicely

Depuis la page d'importation, sélectionnez Invoicely, puis téléchargez vos fichiers clients et factures, nous ferons le reste !

### Wave

Depuis la page d'importation, sélectionnez Wave Account, puis téléchargez vos fichiers clients et comptabilité, nous ferons le reste !

### Zoho

Depuis la page d'importation, sélectionnez Zoho, puis téléchargez vos fichiers contacts et factures, nous ferons le reste !

# Exporter des données:

Il existe plusieurs façons d'exporter des données hors d'Invoice Ninja.

## Fonction d'exportation à l'aide des rapports

En utilisant le [rapport](/fr_CA/reports), vous pouvez générer des rapports et les filtrer. Lorsque vous êtes prêt, il y a un bouton Exporter qui exportera les données en CSV pour des téléchargements instantanés.

![texte alternatif](/assets/images/settings/export_report.png "Exportations")

À partir du menu des rapports, vous pouvez créer des rapports personnalisés, y compris la possibilité de personnaliser les colonnes que vous souhaitez exporter.

Vous pouvez également utiliser l'action Planifier pour envoyer automatiquement un rapport par courriel à une adresse électronique sélectionnée sur une base régulière.

```bash
Paramètres > Sauvegarde | Restauration
```

![alt text](/assets/images/settings/export_backup.png "Sauvegarde")

Les sauvegardes et restaurations complètes du système peuvent être effectuées à partir de cette section de l'application. Vous pouvez créer une sauvegarde complète qui sera envoyée par courriel à vous pour conservation.
