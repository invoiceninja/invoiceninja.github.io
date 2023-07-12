---
extends: _layouts.user_guide
section: content
locale: fr_CA
---


# Paramètres avancés


<h2 id=invoice_design>Modèles de facture</h2>


Ces paramètres gouvernent la personnalisation de la conception et de la mise en page du document standard utilisé par défaut sur les nouvelles factures, soumissions et crédits.


### Paramètres généraux


#### Personnaliser et prévisualiser


Ce bouton vous amène à un éditeur de code de modèle très avancé, avec un générateur de prévisualisation en direct. Les instructions pour ces fonctionnalités se trouvent sous <a href="https://invoiceninja.github.io/fr_CA/custom-fields/">Personnalisation des PDF</a>. Vous pouvez prévisualiser les modèles de conception de facture ici, avant d'en sélectionner un que vous souhaitez utiliser en permanence.


#### Paramètres de modèle


* **Modèle de facture** - Sélectionnez un modèle de conception par défaut pour les factures.


* **Modèle de soumission** - Sélectionnez un modèle de conception par défaut pour les soumissions.


* **Modèle de crédit** - Sélectionnez un modèle de conception par défaut pour les crédits.


* **Mise en page** - Configurez vos documents en mode portrait ou paysage.


* **Taille de page** - Préformate les rendus PDF de vos modèles pour mieux s'adapter à certaines tailles de page d'imprimante. Sélectionnez la taille de page la plus courante, A4, par défaut, à moins que vous n'ayez des exigences d'impression spécifiques.


* **Taille de police** - Ajustez la taille de police par défaut selon vos préférences. Par défaut 7.


* **Police principale** - Roboto par défaut. Une police personnalisée par défaut pour les modèles de document.


* **Police secondaire** - Roboto par défaut. Une police personnalisée secondaire par défaut pour les modèles de document.


* **Couleur principale** - #0c45a3 par défaut. Une couleur personnalisée par défaut utilisée par les modèles de document.


* **Couleur secondaire** - #7081e0 par défaut. Une couleur personnalisée secondaire par défaut utilisée par les modèles de document.


* **Colonnes vides** - Afficher par défaut. Masquez éventuellement les colonnes dans la liste des articles qui n'ont pas de valeurs à remplir.


### Informations du client, Informations de l'entreprise, Informations de facture, etc.


Une liste personnalisable de données qui peuplent les sections de vos documents, avec les données saisies dans l'enregistrement associé.


* **Ajouter un champ** - Sélectionnez parmi une liste de valeurs de détails d'enregistrement disponibles, à inclure dans la section de l'enregistrement sur les nouveaux documents.


* **Réinitialiser** - Le bouton en bas réinitialise la liste détaillée à ses valeurs par défaut.


Voici une liste des sections incluses dans divers documents, factures, soumissions, crédits, et chaque élément de la liste a son propre onglet dans le menu des paramètres de conception de facture, pour personnaliser les valeurs qui seront présentées sur vos documents générés.


* **Informations du client** - Les champs ajoutés et supprimés ici affectent la section de vos documents qui imprime les valeurs d'enregistrement du client.


* **Informations de l'entreprise** - Les champs ajoutés et supprimés ici affectent la section de vos documents qui imprime les valeurs d'enregistrement de l'entreprise.


* **Adresse de l'entreprise** - L'adresse de l'entreprise est souvent présentée à un autre endroit sur la page, elle est donc séparée en sa propre section ici également.


* **Informations de facture** - Ces champs remplissent les valeurs de l'enregistrement de la facture elle-même, pour créer la section qui décrit quelle facture il s'agit.


* **Informations de soumission** - Ces champs remplissent les valeurs de l'enregistrement de soumission lui-même, pour créer la section qui décrit quelle soumission il s'agit.


* **Informations de crédit** - Ces champs remplissent les valeurs de l'enregistrement de crédit lui-même, pour créer la section qui décrit quel crédit il s'agit.


* **Colonnes produit** - Une liste détaillée des colonnes à inclure à partir des entrées de détails de produit, pour tous les articles de produit inclus dans votre facture, soumission ou crédit.


* **Colonnes tâches** - Une liste détaillée des colonnes à inclure à partir des entrées de détails de tâches, pour toutes les tâches incluses dans votre facture, soumission ou crédit.


* **Champs des totaux** - Une liste de toutes les valeurs comptables, avec autant ou aussi peu de détails que vous le souhaitez pour les présenter sur vos factures.


<h2 id=custom_fields>Champs personnalisés</h2>


Les options de champs personnalisés contrôlent jusqu'à 4 champs personnalisés à inclure dans tous les enregistrements d'entités, pour décrire les entités qui peuvent être affichées dans vos transactions PDF et documentées, ou conservées uniquement pour les enregistrements d'administration. Vous pouvez les utiliser pour ajouter des détails sur une licence d'alcool à votre propre entreprise, des détails sur les adhésions aux clients, ou des certifications de vos employés assignés à des tâches, ou d'autres détails.


Il existe 5 options différentes pour les types de champs indépendamment du type d'enregistrement auquel le champ personnalisé s'applique. Dans chaque cas, vous sélectionnerez un type de champ à droite, et la valeur que vous entrez à gauche représentera le nom de ce champ personnalisé dans les formulaires et dans l'interface d'administration.


Pour inclure un champ personnalisé, donnez simplement un nom au champ. Sans nom de champ, il n'apparaîtra pas dans vos enregistrements d'entités. Pour supprimer un champ personnalisé, supprimez simplement complètement le nom du champ.


* **Ligne de texte simple** - Accepte simplement une ligne de texte arbitraire pour une entrée.


* **Zone de texte multilignes** - Accepte plusieurs lignes de texte arbitraire, plus adapté pour des notes plus détaillées.


* **Commutateur** - Ce champ convient aux déclarations vraies/fausses ou aux états oui/non. Interrupteur personnalisé pour l'état de membre/licence actif, opt-in de l'employé pour les quarts de nuit, ou valeur de case à cocher pour les produits en inventaire.


* **Liste déroulante** - Cela génère un champ avec un menu déroulant pour sélectionner dans une liste, et vous serez immédiatement invité à présenter une liste de valeurs séparées par des virgules pour remplir le menu déroulant.


* **Date** - Un champ de date demande une valeur de date, et dans l'interface d'administration, présentera même un widget pour la sélection de date pour aider à la mise en forme de la valeur de champ. Bon pour les dates d'expiration de licence/certificat, la date de fabrication du produit, etc.


Chacun de ces 5 types de champs peut être attribué jusqu'à 4 champs personnalisés par type d'entité, sélectionnables à partir des onglets en haut de la page des paramètres de champs personnalisés.


* **Entreprise** - Ces champs personnalisés s'appliquent à l'enregistrement de l'entreprise, comme celui de votre entreprise spécifiquement.


* **Clients** - Ces champs personnalisés s'appliquent à un enregistrement de client, ou aux enregistrements de contact individuels imbriqués dans un enregistrement de client.


* **Produits** - Ces champs s'appliquent à chaque enregistrement de produit, pour mieux décrire les articles de votre inventaire.


* **Factures** - En plus d'avoir 4 options de champs personnalisés pour vos enregistrements de facture, vous pouvez également ajouter un champ de surcharge. Le nom du champ est saisi ici, et vous sélectionnez si oui ou non appliquer la taxe. La même taxe s'applique à l'ensemble de la facture, sinon elle en est exemptée. Depuis le portail d'administration, vous verrez le nouveau champ de surcharge répertorié sur chaque facture au-dessus des menus déroulants de taxe, et il s'attendra à ce que vous attribuiez une valeur en dollars arbitraire pour facturer le client.


* **Paiements** - Champs personnalisés qui apparaissent dans les enregistrements de paiement.


* **Fournisseurs** - Champs personnalisés pour aider à décrire davantage les fournisseurs de votre entreprise, comme vos conditions de crédit avec eux.


* **Dépenses** - Ajoutez plus de détails à vos enregistrements de dépenses avec des champs personnalisés pour une catégorie fiscale de vos dépenses pour aider à la fin de l'année.


* **Utilisateurs** - Ces champs personnalisés ajoutent des détails à vos enregistrements de compte utilisateur pour les utilisateurs enregistrés du portail d'administration. Ce serait un bon endroit pour mettre les détails des employés si vous prévoyez d'utiliser le système de tâches ou si vous avez de nombreux utilisateurs à gérer.


<h2 id=generated_numbers>Nombres générés</h2>


Les nombres générés contiennent une collection de variables qui permettent une personnalisation très fine des nombres générés pour chaque entité de l'application.


### Paramètres


![alt text](/assets/images/settings/generated_numbers/generated_numbers_settings_pane.png "Generated Numbers Settings")


L'onglet des


* **Réinitialiser le compteur** - Les compteurs générés peuvent être réinitialisés à différentes fréquences. Il est important de noter que pour réinitialiser le compteur, vous devez combiner suffisamment de variables uniques pour vous assurer que le compteur généré sera toujours unique. Par exemple, si vous utilisez un compteur de réinitialisation annuel pour les nouvelles entités, il serait parfait d'inclure l'année au début du numéro de facture.


### Clients, Factures, Factures récurrentes, Paiements, etc.


![alt text](/assets/images/settings/generated_numbers/generated_numbers_client.png "Numéros générés pour les clients")


Les différents enregistrements d'entités disponibles auxquels s'appliquent les numéros générés sont tous répertoriés avec leurs propres onglets en haut, pour que vous puissiez personnaliser les comportements de la génération de numéros pour chaque type d'entité respectif.


* **Modèle de numéro** - Champ de texte à une ligne que vous pouvez modifier manuellement pour affiner vos numéros générés. Créez une règle qui décrit comment les nouveaux numéros seront générés.


```bash
{$date:y}-{$counter}
```
Cet exemple de modèle de numéro produira un numéro comme celui-ci, pour le 9ème comptage en 2021 : 2021-0009


Assurez-vous d'ajouter suffisamment de données uniques aux modèles de numéros si vous utilisez la fonction *Réinitialiser le compteur*, pour éviter les collisions de compteur.


* **Compteur de numéro** - Le compteur de numéro est modifiable manuellement, mais vous pouvez créer des collisions de compteur si vous n'êtes pas prudent. Le compteur de numéro pour un type d'entité donné indique la progression du compteur de numéro pour cette entité.


En outre, en bas de la page, vous verrez des informations utiles pour vous aider à personnaliser votre *Modèle de numéro* de manière plus efficace. Le grand bouton **Voir les formats de date** renvoie à une page avec un guide de style PHP. En dessous, chaque type d'entité a sa propre liste de variables qui peuvent être utilisées pour ajouter une personnalisation supplémentaire au *Modèle de numéro*.


<h2 id=email_settings>Paramètres de messagerie</h2>


Ces paramètres régissent le comportement, l'apparence et d'autres paramètres pour les courriels envoyés par le logiciel Invoice Ninja au nom de votre entreprise.


* **Nom de l’expéditeur** - Spécifiez un *nom de réponse* à mettre en haut de vos courriels automatisés, comme pour transférer les demandes de support au contact approprié.


* **Courriel de réponse** - Spécifiez le *courriel de réponse* de l'utilisateur que les clients doivent contacter pour obtenir du support.


* **Cci** - Le courriel en copie cachée (Cci) est envoyé à une liste séparée par des virgules de vos adresses de courriel spécifiées. Les adresses de courriel de contact Cci ne peuvent être vues par aucun des destinataires des messages électroniques.


* **Modèle de courriel** - Sélectionnez un modèle de conception pour l'apparence de vos courriels.


* **Signature de courriel** - Incluez un message de signature avec tous vos messages électroniques d'entreprise. Plusieurs lignes de texte ici pour entrer votre signature personnalisée. Les balises HTML sont respectées ici pour formater votre signature de courriel.


* **Heure d'envoi** - Tous les rappels programmés pour la journée seront envoyés à cette heure.


* **Joindre un PDF** - En activant cette option, les factures seront envoyées en tant que PDF joints à vos courriels. Par défaut, vos courriels ont tous des liens pour afficher les documents sur le portail client, mais il peut être préférable d'envoyer le PDF directement.


* **Joindre un document** - Lorsqu'elle est activée, tous les fichiers inclus dans l'onglet *Documents* de la facture, ou autre enregistrement, sont joints à vos courriels aux clients. Sinon, ils peuvent être consultés via le lien sur le portail client.


* **Joindre UBL** - Langage universel des affaires (UBL) standard international. Les documents UBL sont des documents commerciaux XML tels que les bons de commande et les factures. En activant cette fonction, un document XML est joint à la facture PDF. Normalement, toutes les informations XML sont intégrées dans le PDF, mais certains utilisateurs préfèrent ou ne peuvent pas lire les données XML intégrées dans un PDF.


<h2 id=client_portal>Portail client</h2>


Ces paramètres régissent le comportement, la fonction et la présentation du portail client.


Il y a quatre onglets dans ce panneau de configuration, avec des fonctionnalités uniques dans chacun d'eux pour couvrir.


### Paramètres


Ces paramètres contrôlent la fonction et le comportement de base ou général du portail client.


* **Portail client** - Activer ou désactiver le portail client. En le désactivant, tous les liens vers le portail client seront envoyés vers une page indiquant que l'application a été bloquée par l'administrateur. Généralement activé par défaut.


* **Tâches** - Désactivé par défaut. Activez-le pour présenter un onglet sur le côté gauche pour les clients, pour afficher les tâches qui leur sont assignées, qu'elles soient facturées ou non. Les clients peuvent voir les tâches dans une liste, avec des colonnes pour la description de la tâche, le nom du projet, l'état et la durée totale. Cela permet aux clients de voir la progression de votre entreprise sur les tâches qui leur sont assignées jusqu'à présent, et de leur donner un aperçu de votre travail de projet pour eux.


* **Inscription du client** - En activant cela, les nouveaux utilisateurs peuvent s'inscrire eux-mêmes et générer leurs propres entrées de client dans votre base de données via un lien d'inscription sur le portail client.


* **Téléversement de document** - Autoriser vos clients à télécharger des documents sur le serveur, qui seront attachés en tant que documents à leurs propres enregistrements de client. Dans le portail client, ils verront l'option de faire glisser et déposer ou de cliquer pour télécharger des fichiers avec un grand bouton sur l'écran sous l'onglet Documents.


* **Boutique en ligne** - Active l'accès API pour créer des factures automatiquement. Après l'activation, il générera une clé d'entreprise, ou une clé API à utiliser par vos propres applications ou celles d'un tiers pour effectuer la création de factures, et agir comme une boutique en ligne automatisée pour les produits ou services de votre entreprise.


* **Conditions d'utilisation** - Champ de texte personnalisé à plusieurs lignes qui sera présenté comme vos conditions d'utilisation, dans un lien discret et cliquable en bas de chaque page du portail client.


* **Politique de confidentialité** - Un autre champ de texte personnalisé à plusieurs lignes qui sera présenté comme votre politique de confidentialité, dans un lien discret et cliquable en bas de chaque page du portail client, juste à côté des conditions d'utilisation.


### Autorisation


Ces paramètres régissent les fonctionnalités d'autorisation, de responsabilité et d'authentification pour le portail client et les factures des clients.


* **Protéger les factures avec un mot de passe** - Désactivé par défaut. Lorsqu'il est activé, les clients seront invités à définir un mot de passe la première fois qu'ils consultent leurs factures. Désormais, ils devront entrer ce mot de passe.


* **Case à cocher des conditions de facturation** - Invite le client à accepter les conditions de facture lorsqu'il effectue un paiement pour une facture dans le portail client.


* **Case à cocher des conditions de soumission** - Invite le client à accepter les conditions de soumission lorsqu'il confirme la soumission dans le portail client.


* **Signature de facture** - Exige que le client fournisse sa signature à l'écran avec une souris ou un écran tactile, lorsqu'il paie une facture sur le portail client.


* **Signature de soumission** - Exige que le client fournisse sa signature à l'écran avec une souris ou un écran tactile, lorsqu'il confirme une soumission sur le portail client.


* **Afficher sur le PDF** - Affiche la signature du client sur la facture/soumission PDF après qu'elle a été signée.


### Messages


Ce sont des messages à présenter aux clients à divers écrans du portail client.


* **Tableau de bord** - À partir de la page du tableau de bord, le client sera accueilli par ce message.


* **Facture impayée** - Lors de la consultation d'une facture impayée, le client verra ce message.


* **Facture payée** - Le client verra ce message lorsqu'il consulte une facture payée.


* **Soumission non approuvée** - Le client sera accueilli par ce message lorsqu'il ouvre une soumission en attente d'approbation.


### Personnalisation


Ici, nous pouvons personnaliser un peu plus l'apparence du portail client.


* **En-tête** - Valeur de texte à plusieurs lignes à présenter avec une barre solide sur sa propre ligne en haut de chaque page du portail client.


* **Pied de page** - Valeur de texte à plusieurs lignes à présenter avec une barre solide sur sa propre ligne en bas de chaque page du portail client.


* **CSS personnalisé** - Entrez votre propre code CSS personnalisé pour remplacer le code CSS standard du portail client.


* **


* **Sujet** - Ligne d'objet du courriel. L'objet par défaut pour un courriel de facture est : "Nouvelle facture $number de $company.name". Ces valeurs proviennent de vos données d'entreprise et de vos enregistrements par message. Vous pouvez sélectionner différentes valeurs dans les menus ci-dessous, selon la catégorie de votre modèle, pour personnaliser davantage le message dans les lignes d'objet de votre modèle de courriel.


* **Corps** - Construisez le corps du message du modèle de courriel. Le corps de message par défaut pour un courriel de facture est :


     `"<p>Pour voir votre facture de $amount, cliquez sur le lien ci-dessous.</p><div class="center">$view_link</div>".`


     Le corps du message électronique accepte une mise en forme HTML de base pour une personnalisation supplémentaire, et comme pour l'objet, vous pouvez également ajouter d'autres valeurs à votre message de corps, en sélectionnant la liste appropriée de valeurs ci-dessous.


Les catégories ci-dessous sont des onglets pour sélectionner des valeurs afin de personnaliser et de personnaliser vos modèles de messages, sélectionnez les onglets pour voir les valeurs ($amount, $due_date, etc.) disponibles pour votre modèle pour obtenir les valeurs pertinentes dans vos messages. Les types de modèles de facture et de soumission ont un ensemble légèrement différent de valeurs disponibles, se peuplant de la facture originale ou de la soumission respectivement.


Les valeurs ci-dessous sont pour la plupart explicites. L'onglet **Facture / Soumission** offre des valeurs peuplées de la facture ou de la soumission pertinent envoyé par courrier électronique. L'onglet **Client** offre des valeurs peuplées de l'entrée client pertinente. L'onglet **Contact** offre des valeurs pertinentes pour le premier contact sélectionné dans l'enregistrement de facture. L'onglet **Entreprise** offre des valeurs de votre propre enregistrement d'entreprise, pour présenter des informations sur votre propre entreprise. L'onglet **Utilisateur** offre des valeurs qui représentent l'utilisateur connecté représentant votre entreprise, qui envoie le message électronique. Vous pouvez voir à quoi ressemblent les valeurs dans un exemple de message sous l'onglet *Aperçu*.


### Modèles et rappels


Comme mentionné ci-dessus, lorsque vous sélectionnez un rappel dans la liste des modèles en haut de l'onglet d'édition, vous verrez de nouvelles options apparaître spécifiques aux rappels.


* **Premier, deuxième et troisième rappels**
  * **Jours** - Un simple entier est accepté ici pour le nombre de jours avant l'envoi du courriel de rappel.
  * **Programme** - Quand envoyer le rappel par courrier électronique, décalé par le nombre de jours choisis.  
    *Après la date de la facture* - Rappel envoyé jours après la date de la facture.
    *Avant la date d'échéance* - Rappel envoyé jours avant la date d'échéance de la facture.
    *Après la date d'échéance* - Rappel envoyé jours après la date d'échéance de la facture.
  * **Envoyer un courriel** - Un interrupteur marche/arrêt pour activer l'envoi automatique de courriels pour ce message de rappel.
  * **Montant de la pénalité de retard** - Entrez une valeur en dollars pour une charge de pénalité de retard fixe.
  * **Pourcentage de pénalité de retard** - Entrez une valeur en pourcentage pour appliquer un taux de pénalité de retard en pourcentage du solde restant.


* **Rappels sans fin**
  * **Envoyer un courriel** - Un interrupteur marche/arrêt pour activer l'envoi automatique de courriels pour ce message de rappel.
  * **Fréquence** - Un menu déroulant pour sélectionner la fréquence d'envoi de courriels de rappel automatisés, une fois que les premier, deuxième et troisième rappels sont épuisés.

<h2 id=group_settings>Paramètres de groupe</h2>


Les paramètres de groupe sont une autre catégorie avec beaucoup de profondeur, mais la plupart des sujets sont déjà couverts car les paramètres de groupe consistent principalement à activer des paramètres spécifiques de base ou avancés sur une base de groupe, vous permettant de créer des expériences uniques pour certaines collections de clients.


La première étape consiste à créer un groupe, ce qui est très simple et ne nécessite qu'un nom de groupe. Créez un groupe avec l'icône "+" dans le coin supérieur gauche du panneau des paramètres de groupe. Donnez-lui un nom et cliquez sur "Enregistrer".


Sélectionnez votre groupe. Vous verrez un onglet *Aperçu* et un onglet *Documents*. À partir de l'onglet *Documents*, vous pouvez télécharger des fichiers comme la plupart des autres onglets de documents, ils ne seront vus nulle part ailleurs que dans le portail d'administration. L'onglet *Aperçu* comporte deux options, un bouton Clients interactif, où vous pouvez afficher une liste de clients dans le groupe ou ajouter des clients au groupe, et un bouton *Configurer les paramètres*.


Remarque : Pour supprimer un client d'un groupe, il est plus facile de modifier directement le client et de changer son groupe ou de le supprimer.


### Configurer les paramètres


Personnalisez toutes les options ici pour remplacer les paramètres réguliers pour chaque catégorie respective, ou laissez un champ vide pour utiliser les paramètres réguliers.


* **Informations sur l'entreprise** - Configurez un profil d'entreprise personnalisé pour le groupe de clients. Cela inclut des conditions de facturation personnalisées, des pieds de page et des paramètres d'autofacturation.


* **Localisation** - Configurez une localisation personnalisée pour vos clients dans d'autres pays/fuseaux horaires, ou utilisant des langues, des devises, etc. différentes.


* **Paramètres de paiement** - Modifiez les autorisations d'autofacturation et de sur/sous-paiement pour le groupe. Configurez les passerelles de paiement pour le groupe.


* **Paramètres de tâche** - Définissez un taux de tâche spécifique et une règle pour la présentation des tâches dans le portail client, pour le groupe.


* **Modèle de facture** - Modèles de conception de facture personnalisés, spécifiques au groupe.


* **Numéros générés** - Utilisez un compteur de numéros unique et un ensemble de règles de numérotation pour le groupe, à part du reste de vos clients.


* **Paramètres de courriel** - Modifiez les paramètres génériques par défaut pour les courriels envoyés aux membres du groupe par Invoice Ninja.


* **Portail client** - Personnalisez le portail client, exclusivement pour les membres du groupe.


* **Modèles et rappels** - Ayez des règles spéciales pour les modèles et les rappels pour votre groupe, personnalisez davantage vos messages ou soyez plus ou moins restrictif sur les paiements en retard avec certains groupes.


* **Liens de paiement** - Afficher et modifier les paramètres de lien de paiement généraux et spécifiques au groupe.


* **Paramètres de flux de travail** - Modifiez certains des paramètres de flux de travail de l'interface utilisateur du portail d'administration lors de l'interaction avec les factures ou les soumissions du groupe de clients.






<h2 id=payment_links>Liens de paiement</h2>


Il y a trois visualisations dans le panneau des liens de paiement. La liste des liens de paiement, la visualisation d'un lien de paiement et la création ou la modification d'un lien de paiement.


Dans la liste des liens de paiement, vous pouvez sélectionner des liens de paiement existants pour les afficher ou les modifier. Vous pouvez également ajouter de nouveaux liens de paiement avec le caractère "+" dans le coin supérieur gauche du panneau de liste des liens de paiement.


Lors de la visualisation d'un lien de paiement, vous verrez le coût initial du service de lien de paiement en haut. En dessous, se trouve un lien que vous pouvez copier et partager avec des clients, ou poster sur votre boutique en ligne, qui incite les clients à payer et à configurer le lien de paiement sélectionné, ce qui crée les enregistrements de facture et de paiement pour vous lorsqu'ils le font. Enfin, vous verrez des liens vers des listes filtrées de factures ou de factures récurrentes directement liées à votre lien de paiement.  


Lorsque vous *modifiez un lien de paiement*, il y a trois onglets avec des fonctionnalités uniques pour contrôler les liens de paiement.


### Aperçu


* **Nom** - Le nom de votre lien de paiement mensuel, présentable aux clients.


* **Groupe** - Affectez des liens de paiement à des groupes, pour permettre aux membres du groupe de passer entre les liens de paiement qui leur sont exclusivement disponibles en fonction de leur appartenance au groupe. Les liens de paiement non attribués à un groupe seront visibles uniquement par les utilisateurs qui ne sont pas dans un groupe. Utilisez ceci pour rendre des modèles de lien de paiement spéciaux disponibles à certains clients VIP, etc.


* **Produits** - Une liste déroulante consultable et sélectionnable de produits disponibles de l'entreprise. Ces produits sont émis en tant qu'achat unique sur le modèle de lien de pai


* **Autoriser les substitutions de requêtes** - Ce commutateur permet aux appels API vers l'arrière-plan de remplacer les demandes de lien de paiement, afin d'ajouter automatiquement des informations supplémentaires aux demandes de lien de paiement lorsque le client interagit avec le site Web ou l'application de votre boutique en ligne.


* **Autoriser les changements de plan** - Autoriser les clients qui utilisent ce lien de paiement à passer manuellement d'un modèle de lien de paiement à un autre. Différents liens de paiement disponibles pour le changement doivent être assignés au même groupe. Notez que vous pouvez autoriser le passage du lien de paiement A au lien de paiement B, et interdire le passage du lien de paiement B en ne permettant pas les changements de plan pour le lien de paiement B uniquement.


* **Autoriser l'annulation** - Autoriser les clients à demander manuellement l'annulation des liens de paiement depuis le portail client. Lorsqu'elle est activée, vous pouvez éventuellement définir une fenêtre de temps pour que les clients puissent bénéficier d'un remboursement sur leur lien de paiement.


* **Essai activé** - Lorsqu'il est activé, le bouton "Payer maintenant" initial devient un bouton "Commencer l'essai gratuit" sans demande de détails de paiement au moment du début de l'essai. Lorsqu'il est activé, vous devez sélectionner une *Durée d'essai* ci-dessous dans le menu déroulant nouvellement apparu. Sinon, les essais seront indéfinis.


* **Siège activé** - Basculez pour activer ou désactiver une capacité maximale ou une limite de siège pour le lien de paiement. Lorsqu'il est activé, entrez un nombre sur la ligne de texte unique apparue ci-dessous pour spécifier le nombre de sièges maximum.


### Webhook


Les webhooks permettent à vos applications Web de communiquer entre elles. Ces paramètres ici régissent les règles pour les webhooks sortants lorsque les clients s'inscrivent à des liens de paiement.


* **URL du webhook** - Entrez l'URL du service Web auquel vous souhaitez envoyer votre notification.


* **Méthode REST** - Un menu déroulant pour sélectionner POST ou PUT.
  * **POST** - Lorsque vous souhaitez créer une nouvelle entrée ou un nouveau enregistrement.
  * **PUT** - Utilisez PUT pour modifier une entrée ou un enregistrement. La fonctionnalité PUT provoquera le remplacement complet de l'entrée ou de l'enregistrement d'origine par les nouvelles données entrantes.


Vous pouvez définir autant de paires d'en-têtes clé-valeur que vous le souhaitez ci-dessous. Il s'agit d'une charge utile JSON,


* **Clé d'en-tête** - Entrez l'en-tête HTTP approprié selon les en-têtes disponibles pour l'API JSON d'InvoiceNinja.


* **Valeur d'en-tête** - Entrez la valeur à attribuer à cet en-tête HTTP personnalisé.






<h2 id=workflow_settings>Paramètres de flux de travail</h2>


Quelques paramètres pour automatiser les comportements de gestion des factures et des soumissions.


### Factures


* **Envoi automatique** - Activé par défaut, enverra automatiquement des courriels aux clients lorsqu'une facture récurrente est créée pour eux.


* **Archivage automatique** - Désactivé par défaut, archivera automatiquement les enregistrements de facture lorsqu'ils sont entièrement payés.


* **Verrouiller les factures** - Verrouillez automatiquement les factures pour empêcher les modifications :
  * **Désactivé** - Désactivez cette fonctionnalité.
  * **Lors de l’envoi** - Verrouillez la facture après qu'elle a été envoyée au client.
  * **Lors du paiement** - Verrouillez la facture uniquement après que le client a entièrement payé la facture.


### Soumissions


* **Conversion automatique** - Activé par défaut. Convertit automatiquement la  soumission que vous avez envoyé en facture, après que le client a approuvé la soumission.


* **Archivage automatique** - Désactivé par défaut. Archive automatiquement les soumissions, après qu'ils ont été convertis avec succès en factures.


<h2 id=user_management>Gestion des utilisateurs</h2>


Il y a trois vues dans le panneau de gestion des utilisateurs. La liste des utilisateurs, la visualisation d'un utilisateur et la création ou la modification d'un utilisateur, ainsi que leurs autorisations dans le portail d'administration.


Lorsque vous visualisez un utilisateur, vous voyez leur adresse courriel en haut, qui est utilisée pour se connecter au portail d'administration. Ci-dessous, vous pouvez voir une liste de boutons pour tous les enregistrements de clients, de factures, de soumission, de tâches, etc., que l'utilisateur a créés ou auxquels il a été assigné. Les boutons ouvriront des listes filtrées par utilisateur des enregistrements pour chaque catégorie respective.


Lorsque vous êtes dans le panneau de modification de l'utilisateur, vous verrez trois onglets pour personnaliser les paramètres de l'utilisateur :


### Détails


* **Prénom** - Le prénom de l'utilisateur.


* **Nom de famille** - Le nom de famille de l'utilisateur.


* **Courriel** - L'adresse courriel de l'utilisateur. Obligatoire pour se connecter. Lorsque le compte de l'utilisateur est créé pour la première fois, il recevra un courriel du serveur InvoiceNinja pour vérifier son adresse courriel et se connecter.


* **Téléphone** - Ajoutez éventuellement un numéro de téléphone à vos entrées d'utilisateur pour référence.


### Notifications


Une liste complète des événements est affichée ici, pour quand une facture, une soumission, un paiement ou un crédit a une action quelconque, telle que la création, la visualisation, l'expiration, le paiement réussi ou échoué, etc.


Activez les notifications par courriel pour l'utilisateur pour un certain nombre de ces événements. Choisissez un comportement de notification pour chaque événement selon vos préférences :


* **Aucun** - Aucune notification ne sera envoyée pour cet événement.


* **Appartenant à l'utilisateur** - La notification ne sera envoyée que lorsque l'événement se produit pour un enregistrement appartenant à l'utilisateur.


* **Tous les enregistrements** - Notifiez l'utilisateur chaque fois que cet événement se produit, indépendamment de qui possède l'enregistrement.


### Permissions


* **Administrateur** - un commutateur pour élever ou abaisser l'utilisateur au niveau de privilèges d'administrateur.
  * Lorsqu'il est désactivé, une liste de catégories d'autorisations apparaît ci-dessous, auxquelles l'utilisateur sera soumis. Accordez ou refusez les autorisations pour créer, modifier ou afficher toute catégorie d'enregistrement ici ; clients, factures, soumissions, tâches, fournisseurs, produits, etc.




<x-next url=/fr_CA/custom-fields>Personnalisation PDF</x-next>
