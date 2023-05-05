---
extends: _layouts.user_guide
section: content
---

# Rapports

Dans le module *Rapports*, vous êtes en mesure de générer des rapports hautement personnalisés et ajustés de vos différents enregistrements. Vous pouvez suivre les profits, les ventes, les dépenses, la performance de vos produits et services, et visualiser ces données directement ou les exporter pour un traitement et une analyse dans une application externe.

L'utilisation efficace du module de rapports peut aider à préparer les registres financiers de votre entreprise, surveiller votre progression et votre développement, suivre les dépenses et assurer la responsabilité.

Il y a trois catégories principales en haut de l'écran pour vous aider à contrôler les données présentées dans le rapport.

* **Rapport** - Cette catégorie se déroule pour présenter les options des différents enregistrements sur lesquels vous pouvez baser un rapport, tels que Clients, Factures, Dépenses, Devis, Produits, Factures récurrentes, et plus encore. La catégorie rapport comprend également d'autres options telles que le bénéfice et la perte, ainsi que les éléments de facturation (qui, contrairement à "Produit", incluront également les tâches facturées). Les colonnes disponibles dans votre rapport seront basées sur la sélection que vous choisissez ici.
* **Groupe** - Regroupez les éléments de votre rapport en fonction de l'une des diverses propriétés de ces éléments, par exemple; regrouper les clients par leur pays, regrouper les factures par le mois de leur création, ou regrouper les tâches par les projets auxquels ils sont affectés. Cela affecte le rapport lui-même et se reflétera dans les données exportées.
* **Graphique** - Uniquement à des fins de visualisation, après avoir sélectionné un *Rapport* et un *Groupe*, vous pourrez choisir comment visualiser les données présentées. Dans l'exemple de capture d'écran ci-dessous, nous n'avons que quelques clients, nous les avons donc regroupés par nom et présenté les données *Payé à ce jour* dans le graphique pour visualiser, pour voir combien chacun de nos clients nous a payés jusqu'à présent.

Les boutons en haut à droite de l'écran ajoutent plus de fonctionnalités :

* **Colonnes** - Ce bouton crée une fenêtre pop-up pour vous permettre de modifier les colonnes par défaut des données à inclure dans le rapport, et à utiliser pour filtrer les données dans le rapport. Vous pouvez supprimer des colonnes en cliquant sur le *X* à gauche de chaque option, ou vous pouvez utiliser le champ *Ajouter une colonne* pour sélectionner de nouvelles colonnes à ajouter à votre rapport. Les colonnes disponibles dépendent du type de *Rapport* que vous avez choisi.
* **Export** - Vous pouvez générer et télécharger un fichier .CSV avec toutes les données affichées en bas, afin de sauvegarder les données de votre rapport ou de les analyser dans une autre application externe.

Quand vous remplissez les champs *Rapport*, *Groupe* et *Graphique*, un graphique apparaîtra pour visualiser vos données. Dans la capture d'écran d'exemple ci-dessous, un rapport de base des dossiers clients avec un graphique est présenté.

![texte alternatif](/assets/images/reports/reports.png "Rapport de base")

Vous pouvez personnaliser davantage vos rapports en sélectionnant différentes colonnes de données à présenter, puis en filtrant les données en fonction des valeurs de ces colonnes. Vous pouvez utiliser le bouton *Colonnes* pour gérer les colonnes de votre rapport.

Lorsque vous regardez la liste des enregistrements au bas de l'écran, il y a un champ en haut de chaque colonne que vous pouvez utiliser pour filtrer vos enregistrements. Ces filtres s'appliquent à votre rapport et modifieront votre graphique, ainsi que les données d'*Export* lorsque vous générez un fichier .CSV.

La plupart des filtres sont simples, correspondant à des filtres basés sur du texte (comme filtrer pour les clients nommés "Daniel"), mais certains fonctionnent un peu différemment. Ci-dessous, vous pouvez voir que les colonnes avec une valeur en dollars vous permettent de filtrer en fonction d'une *valeur minimale* plutôt que d'une valeur exacte. Vous pouvez également utiliser min-max (c'est-à-dire `100-200`) pour voir les enregistrements entre les montants sélectionnés.

[texte alternatif](/assets/images/reports/filter-minimum-value.png "Filtrer par valeur minimale") Vous verrez également dans l'exemple de capture d'écran suivant ci-dessous, que certaines options telles que *Date* ou *Créé le* et d'autres types de colonnes sensibles à la date vous présentent plutôt un menu déroulant pour filtrer vos données de rapport avec. Lorsque l'option de filtre actuellement sélectionnée est *Personnalisée*, vous verrez un champ *Date de début* et *Date de fin* devenir disponible en haut de l'écran, sous le champ de sélection *Rapport*, ce qui vous permet de spécifier manuellement la plage de dates pour filtrer vos données de rapport.

![texte alternatif](/assets/images/reports/filter-date.png "Filtrer par date")

Il y a trop de façons d'utiliser la personnalisation du module *Rapports* pour toutes les énumérer ici, mais cela devrait vous donner une bonne idée des mécanismes du module et comment l'utiliser pour générer des rapports qui vous aident lors de la saison des impôts, et pour surveiller ou examiner les tendances des ventes de produits, ou la responsabilité de votre personnel pour leur facturation.

<x-next url=\/docs\/basic-settings>Paramètres de base</x-next>

