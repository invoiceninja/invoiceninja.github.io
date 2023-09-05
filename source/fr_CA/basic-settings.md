---
extends: _layouts.user_guide 
section: content
locale: fr_CA
---

# Paramètres de base

Les paramètres de base sont l'endroit où vous pouvez configurer tout ce dont vous avez besoin pour définir votre entreprise.

<x-info>
La recherche de paramètres est un excellent moyen de trouver des paramètres configurés à plusieurs endroits. Si vous recherchez par courriel, couleur ou tout autre terme, vous trouverez tous les paramètres pertinents.
</x-info>

<h2 id=company_details>Détails de l'entreprise</h2>

Les paramètres trouvés ici se rapportent à l'entreprise actuellement sélectionnée, à partir du widget de sélection d'entreprise en haut à gauche de l'interface administrateur. Sélectionnez l'entreprise pour laquelle vous souhaitez afficher les paramètres. La section Détails de l'entreprise est l'endroit où vous configurez votre adresse, téléchargez votre logo d'entreprise et définissez également vos valeurs par défaut.

### Détails

Toutes les données saisies dans cette première boîte de champs personnalisés apparaîtront comme la section des détails de votre entreprise, dans la plupart des dispositions de factures par défaut et autres enregistrements. Les courriels et les sites Web seront des liens cliquables dans les PDF.

* **Nom** - Le nom de votre entreprise
* **Numéro d'identification** - Le numéro d'entreprise de votre entreprise ou le numéro d'identification fiscale
* **Numéro de TVA** - Un **numéro d'identification à la taxe sur la valeur ajoutée** ou **numéro d'identification TVA** est un identifiant utilisé dans de nombreux pays, y compris l'UE, à des fins de taxe sur la valeur ajoutée
* **Site Web** - Le site Web de votre entreprise
* **Courriel** - Courriel de contact général de l'entreprise, ou courriel de contact des ventes irait mieux ici
* **Téléphone** - Numéro de téléphone de contact du support pour votre entreprise

Toutes les données saisies ici sont généralement à des fins de référence dans le portail administrateur et n'apparaissent pas sur les documents par défaut.

* **Taille** - Nombre approximatif d'employés dans cette entreprise
* **Secteur d'activité** - Une liste navigable et recherchable de catégories prédéfinies pour décrire le domaine dans lequel se trouve votre entreprise

### Adresse

Sur la plupart des factures par défaut et autres documents, vous voyez également toutes les données saisies dans ces champs. Ces champs devraient tous être explicites et s'appliquer à la plupart, sinon à toutes les entreprises de n'importe quel pays.

* **Rue**
* **App./Bureau**
* **Ville**
* **État/Province**
* **Code postal**
* **Pays**

### Logo

L'image téléchargée ici sera enregistrée dans le répertoire public/storage comme les autres fichiers téléchargés. Le logo de l'entreprise apparaîtra sur les modèles de factures par défaut et dans le widget de sélection de l'entreprise dans le coin supérieur gauche de l'interface utilisateur du portail administrateur.

L'image que vous sélectionnez doit être de 300x300 pour de meilleurs résultats, et il n'y a pas de restrictions quant à la taille du fichier que vous téléchargez, mais cela causera des problèmes avec les factures PDF facilement si vous ne suivez pas la pratique standard de résolution de 300x300 pixels pour les logos.

### Valeurs par défaut

Les valeurs par défaut sont des valeurs par défaut au niveau du système et de l'entreprise, elles seront appliquées à chaque niveau de l'application auxquelles elles se réfèrent.

* **Conditions de paiement des factures** - Le terme de paiement défini en 'jours'. Vous pouvez configurer des conditions de paiement personnalisées en cliquant sur le bouton **Configurer les conditions de paiement**

* **Citation valable jusqu'au** - Semblable aux conditions de paiement des factures, vous sélectionnerez une durée en jours, à partir de la liste des durées des conditions de paiement.

* **Conditions et pieds de page** - Les entrées de texte des conditions et des pieds de page vous permettent de définir les valeurs par défaut pour chacun. Celles-ci seront insérées automatiquement dans le document pour vous. Il vous suffit de les définir une fois ici et nous nous occuperons du reste! Notez que vous pouvez toujours remplacer ces valeurs en les modifiant directement dans l'entité.

  Les conditions et les pieds de page apparaissent sous les notes publiques jointes à vos documents.

  Ces espaces sont parfaits pour définir des clauses ou des avertissements standard, pour clarifier les politiques de responsabilité et de responsabilité dès le départ et en imprimé sur chaque document.

### Documents

Téléchargez les documents de l'entreprise ici. Ceux-ci ne sont pas utilisés automatiquement sur les documents et ne sont accessibles qu'à partir du portail administrateur. Les documents stockés ici apparaîtront également dans le répertoire "public/storage" sur le serveur Web, ce qui implique que les fichiers stockés ici ne doivent pas être considérés comme vraiment sécurisés, et cet emplacement de stockage est mieux réservé pour les formulaires de modèle, les avis, les accords vierges, les documents de politique, etc.

<h2 id=user_details>Détails de l'utilisateur</h2>

La section Détails de l'utilisateur couvre les paramètres de compte pour l'utilisateur actuellement connecté. Les détails d'un utilisateur les aident à s'identifier parmi votre équipe, à aider vos coéquipiers à se contacter et sont pertinents dans Invoice Ninja si vous attribuez des utilisateurs à des tâches, des projets, des clients, etc., en tant que pratique pour l'organisation et la responsabilité.

### Détails

* **Prénom**
* **Nom de famille**
* **Courriel** - Utilisé pour envoyer des liens de réinitialisation de mot de passe lorsqu'ils sont demandés.
* **Téléphone** - Pour votre référence uniquement.
* **

### Notifications

Les notifications par courriel peuvent être configurées ici pour votre compte utilisateur. Vous pouvez configurer des événements par courriel pour vous informer de presque toutes sortes de modifications d'enregistrements, qu'il s'agisse d'une facture, d'un devis, d'un paiement ou d'un crédit, qui a été consulté, approuvé, payé, échoué, en retard, envoyé, créé, etc.

Vous pouvez choisir de définir les notifications à l'un des trois niveaux d'options:

* **Aucun** - Ne recevez aucune notification pour cet événement
* **Possédé par l'utilisateur** - Ne recevez des notifications pour cet événement que si l'enregistrement en question est attribué à votre compte utilisateur
* **Tous les enregistrements** - Recevez des notifications pour chaque instance de cette catégorie de transaction

De plus, la catégorie Tous les événements peut être utilisée pour définir rapidement les niveaux de notification de chaque catégorie à la même chose en même temps.

<h2 id=localization>Localisation</h2>

### Paramètres

Ici, vous pouvez définir certains paramètres généraux pour Invoice Ninja qui seront appliqués à la mise en forme du texte sur tous les documents PDF générés à partir des enregistrements.

* **Devise** - Menu déroulant consultable pour sélectionner une devise par défaut.
* **Format de devise** - Sélectionnez la méthode de présentation préférée pour votre devise sélectionnée.
* **Langue** - Menu déroulant consultable pour sélectionner une langue préférée, si elle est prise en charge par Invoice Ninja.
* **Format de date** - Menu déroulant consultable pour sélectionner un format de date préféré.
* **Heure militaire** - Activez et désactivez la préférence d'heure sur 24 heures.
* **Premier mois de l'année** - Par défaut en janvier, utilisé pour déterminer le point de départ annuel lors de la consultation ou de la génération de rapports.

### Étiquettes personnalisées

Dans la section des étiquettes personnalisées, vous pouvez reformater les étiquettes de texte descriptives utilisées dans tous vos modèles de documents. C'est une fonctionnalité utile pour ajouter manuellement des paramètres de langue personnalisés à vos documents.

Vous avez une liste d'étiquettes personnalisées à maintenir. En ajoutant une étiquette personnalisée, comme "Article", elle sera ajoutée à votre liste dans la colonne de gauche, et dans la colonne de droite à côté de "Article", vous verrez un champ de saisie de texte pour le texte que vous souhaitez remplacer par "Article". Par exemple "Élément de ligne" ou "UPC". Ceci remplace le texte utilisé sur toutes vos factures, etc.

* **Sélectionner l'étiquette** - À partir de cette liste déroulante, vous pouvez sélectionner une étiquette à partir d'une liste d'étiquettes.
* **Ajouter personnalisé** - Ajoutez une étiquette à pratiquement n'importe quelle valeur utilisée sur vos documents, avec quelques étapes supplémentaires. Cliquez sur le bouton de texte bleu *Ajouter personnalisé* en haut à droite du panneau, et ce qu'Invoice Ninja

Modifiez ou créez une nouvelle facture, un crédit, etc., afin de voir les modifications apportées aux étiquettes de texte appliquées à vos documents maintenant.

<h2 id=payment_settings>Paramètres de paiement</h2>

Vous pouvez configurer les passerelles de paiement et les règles/comportements de paiement à partir d'ici.

* **Facturation automatique**
  * *Activé* - Un paiement sera automatiquement tenté si une méthode de paiement valide est enregistrée.
  * *Activé par défaut* - Le client aura la possibilité de permettre la conservation des méthodes de paiement avec la case d'option sélectionnée.
  * *Désactivé par défaut* - Le client aura la possibilité de permettre la conservation des méthodes de paiement avec la case d'option non sélectionnée.
  * *Désactivé* - Aucune option n'est donnée et la facturation automatique est désactivée.
* **Auto Bill On** - Dans un événement où la facturation automatique est activée, vous pouvez configurer le paiement automatique pour être déclenché lorsqu'une facture est envoyée ou à la date d'échéance de cette facture.
* **Type de paiement** - Ce sélecteur définira la méthode de paiement par défaut.
* **Utiliser les crédits disponibles** - Configurez le comportement pour qu'un client ait des crédits disponibles dans son compte lorsqu'il effectue un paiement
  * *Désactivé* - N'utilisera pas les crédits disponibles sur le compte du client.
  * *Activé* - Utilisera par défaut tous les crédits disponibles.
  * *Afficher l'option* - Informera l'utilisateur effectuant le paiement qu'il y a des crédits disponibles, s'il choisit de les appliquer.

* **Permettre le surpaiement** - Activez/désactivez la possibilité pour les clients de payer en option un supplément en guise de pourboire.
* **Permettre le sous-paiement** - Activez la possibilité pour les clients de payer un montant minimum ou partiel dû.

* **Courriels de paiement**
  * *Courriel de paiement manuel* - Envoie une notification de paiement au client lorsqu'un paiement manuel est appliqué
  * *Courriel de paiement en ligne* - Envoie une notification de paiement au client lorsqu'un paiement en ligne a été traité.

### Configurer les passerelles de paiement

Entrez dans le panneau de configuration des passerelles de paiement, où vous pouvez ajouter et configurer des passerelles de paiement pour que les clients les utilisent depuis le portail client, pour les paiements en ligne. Les fournisseurs de services de passerelle de paiement ont leurs propres frais et politiques dont il faut être conscient, mais cela vous aidera à connecter Invoice Ninja avec votre passerelle de paiement en utilisant leurs API standard.

Dans le nouveau volet pour configurer les passerelles de paiement, vous voyez une liste de passerelles de paiement configurées et une icône "plus" utilisée pour créer une nouvelle passerelle de paiement. Lorsque vous créez ou modifiez une passerelle de paiement, il y a trois onglets de paramètres à configurer. **Identifiants**, **Paramètres** et **Limites

#### Identifiants

Dans ce premier volet le plus important, vous définissez les valeurs nécessaires pour faciliter la communication entre Invoice Ninja et l'API de votre passerelle de paiement. Lorsque vous créez une nouvelle passerelle de paiement, vous devez sélectionner un fournisseur de services dans la liste.

* **Stripe** - Notre intégration [Stripe](https://stripe.com) comprend les options de paiement par carte de crédit, ACH et Sofort. Notre intégration Stripe comprend également la facturation par jeton et les remboursements. Entrez votre clé secrète d'API et votre clé publiable, fournies par Stripe. Pour les obtenir, connectez-vous ou créez un nouveau compte sur le site de Stripe et visitez le menu *Developer*, qui se développe, puis sous le menu Developer, visitez le menu *API Keys*. Votre clé secrète sera cachée et ne pourra être vue qu'une seule fois. Si nécessaire, créez une nouvelle clé secrète. Pour plus d'informations sur les clés API Stripe, visitez [Stripe Docs](https://stripe.com/fr_CA/keys).

* **Braintree** - Avec [Braintree](https://www.braintreegateway.com/), vous pouvez intégrer le support de paiement via PayPal, carte de crédit et virement bancaire/débit. Entrez votre identifiant de marchand, votre clé publique et votre clé privée, fournies par Braintree. Pour les obtenir, connectez-vous ou créez un compte de production sur le site de Braintree et cliquez sur l'icône "engrenage" dans le coin supérieur droit, qui développe une liste déroulante. Pour trouver vos clés publique et privée, visitez *API* dans la liste et pour trouver votre identifiant de marchand, visitez *Business* dans la liste. Pour plus d'informations sur les identifiants de passerelle Braintree, visitez [Braintree Docs](https://developer.paypal.com/braintree/articles/control-panel/important-gateway-credentials).

* **PayPal Express** - Entrez votre nom d'utilisateur API, votre mot de passe API et votre signature, fournis par PayPal. Pour les obtenir, connectez-vous ou créez un compte professionnel sur le site [PayPal](https://paypal.com/). Survolez ou cliquez sur votre icône de profil en haut à droite de l'écran pour afficher un menu déroulant et choisissez *Paramètres du compte*. Sous la première section, *Accès au compte*, trouvez *Accès API* dans la liste et cliquez sur le bouton *Mettre à jour* à côté. Faites défiler vers le bas sous "**Intégration API NVP/SOAP (classique)**" et cliquez sur *Gérer les identifiants API*. Ici, vous trouverez les identifiants existants ou la possibilité de créer de nouveaux identifiants. Pour plus d'informations sur ces identifiants de passerelle de paiement PayPal, visitez [PayPal Docs](https://developer.paypal.com/docs/nvp-soap-api/apiCredentials/).

Il y a quelques options supplémentaires dans l'onglet Identifiants, exclusivement pour la configuration de PayPal Express.
  * **Mode Test** - Activez cette option uniquement si vous utilisez des identifiants de test/sandbox de PayPal.
  * **Type de solution** - Choisissez entre *Sole* ou *Mark*. Avec Sole, un compte PayPal est facultatif. Avec Mark, vos clients doivent avoir un compte PayPal pour payer avec cette méthode.
  * **Page d'atterrissage** - Choisissez entre *Facturation* ou *Connexion*. Avec Facturation, vous choisissez généralement lors de l'utilisation du type de solution Sole, car un compte PayPal est alors facultatif et l'utilisateur atterrit sur une page avec la facture et une invite au paiement. Avec Connexion, vous choisissez généralement lors de l'utilisation du type de solution Mark, pour imposer l'utilisation d'un compte PayPal et diriger immédiatement le client vers la connexion à PayPal s'il n'est pas déjà connecté.
  * **Nom de la marque** - Ajoutez le nom de votre entreprise à la caisse PayPal.
  * **URL de l'image d'en-tête** - Choisissez d'utiliser soit une image d'en-tête, soit une image de logo à afficher lors de la caisse PayPal. PayPal demande une image avec une résolution maximale de 750 pixels de large sur 90 pixels de haut. Définissez un lien URL vers l'image d'en-tête de votre entreprise souhaitée.
  * **URL de l'image du logo** - Choisissez d'utiliser soit une image d'en-tête, soit une image de logo à afficher lors de la caisse PayPal. PayPal demande une image avec une résolution maximale de 190 pixels de large sur 60 pixels de haut. Définissez un lien URL vers l'image du logo de votre entreprise souhaitée.
  * **Couleur de la bordure** - Cette option crée une bordure de 2 pixels de large autour de votre image d'en-tête, dans la couleur de votre choix.

* **Authorize.net** - Notre intégration [Authorize.net](https://www.authorize.net/) comprend des options de paiement par carte de crédit, y compris la facturation par jeton et les remboursements. Entrez votre identifiant de connexion API et votre clé de transaction, fournis par Authorize.net. Pour les obtenir, connectez-vous ou créez un compte marchand sur le site Web d'Authorize.net. Après vous être connecté, cliquez sur *Paramètres* dans le menu de gauche, puis cliquez sur *Identifiants et clés API*. À partir de là, vous pouvez afficher et gérer les identifiants API nouveaux et existants. Pour plus d'informations sur ces identifiants API Authorize.net, consultez [Authorize.net Docs](https://support.authorize.net/s/article/How-do-I-obtain-my-API-Login-ID-and-Transaction-Key).
  * **Mode Test** - Activez-le uniquement pour tester les transactions, utilisez-le si votre compte fonctionne en "mode test". Pour plus d'informations sur le mode test, consultez [Authorize.net Docs](https://support.authorize.net/s/article/What-Is-Test-Mode-and-How-Do-I-Turn-It-off-and-On).
  * **Mode développeur** - Activez-le pour une utilisation avec des comptes sandbox réservés aux développeurs uniquement. Il s'agit d'un type de compte distinct, sans facturation et sans transactions *réelles* en direct, et des identifiants API uniques lui sont associés. Pour plus d'informations, visitez [sandbox.authorize.net](https://sandbox.authorize.net/).
  * **Point de terminaison en direct** - La valeur par défaut est l'adresse HTTP correcte pour les appels API Authorize.net vers un compte marchand en direct.
  * **Point de terminaison développeur** - La valeur par défaut est l'adresse HTTP correcte pour les appels API Authorize.net vers un compte sandbox. Pour plus d'informations sur les points de terminaison API, consultez [Authorize.net Docs](https://developer.authorize.net/api/reference/index.html#gettingstarted-section-section-header).

* **Mollie** - Notre intégration [Mollie](https://www.mollie.com/en) comprend des options de paiement par carte de crédit, y compris la facturation par jeton. Pour configurer Mollie comme méthode de paiement, vous aurez besoin de votre numéro d'identifiant de profil et de votre clé API du site. Votre numéro d'identifiant de profil se trouve dans le coin supérieur gauche de l'écran lorsque vous vous connectez au tableau de bord Mollie, et vous pouvez trouver une liste de vos clés API en cliquant sur le menu déroulant *Développeurs* dans la barre latérale gauche, puis en cliquant sur *Clés API*, comme décrit sur la [base de connaissances Mollie](https://help.mollie.com/hc/en-us/articles/115000328205-Where-can-I-find-the-live-API-key-). Après avoir approuvé votre site Web, vous trouverez vos clés API en direct et de test ici. Il y a une case à cocher dans le portail administrateur d'Invoice Ninja lors de la configuration de la passerelle de paiement Mollie, pour activer le mode test si vous allez utiliser une *Clé API de test* de Mollie.

* **Personnalisé** - Il s'agit d'une fonctionnalité pour les développeurs, où vous pouvez écrire votre propre code PHP avec des références API personnalisées pour votre propre fournisseur de passerelle de paiement.

* **Square** - Notre intégration [Square](https://squareup.com/) comprend des options de paiement par carte de crédit, y compris la facturation par jeton et les remboursements. Une fois que vous vous êtes inscrit à un compte développeur Square et que vous avez configuré votre application dans le tableau de bord développeur Square, vous devrez fournir l' *ID d'application*, le *Jeton d'accès* et l' *ID d'emplacement* à Invoice Ninja. L' *ID d'application* et le *Jeton d'accès* se trouvent sous *OAuth* dans la barre latérale gauche, et l' *ID d'emplacement* se trouve sous *Emplacement* dans la barre latérale. Plus d'informations peuvent être trouvées dans la [documentation du développeur Square](https://developer.squareup.com/docs/square-get-started). La case à cocher du mode test est disponible pour tester l'intégration Square avec les identifiants sandbox de Square.

* **Eway Rapid** - Notre intégration [eWAY](https://www.eway.com.au/) comprend des options de paiement par carte de crédit, y compris la facturation par jeton et les remboursements. Une fois que vous avez configuré votre entreprise dans le portail eWAY, vous pouvez trouver vos détails d'API sous le menu supérieur, en passant la souris sur *Mon compte* puis en cliquant sur *Clés API*. Votre *Clé API* et *Mot de passe* pour Invoice Ninja sont répertoriés près du haut sous *Clé API rapide* et votre *Clé API publique* peut être trouvée juste en dessous de cette section sous *Bouton Pay Now*. Vous pouvez trouver des instructions plus détaillées dans la [base de connaissances eWAY](https://go.eway.io/s/article/How-do-I-setup-my-Live-eWAY-API-Key-and-Password). La case à cocher du mode test permettra d'utiliser le compte sandbox eWAY pour tester la passerelle de paiement.

* **Checkout.com** - Notre intégration [Checkout.com](https://www.checkout.com/) comprend des options de paiement par carte de crédit, y compris la facturation par jeton et les remboursements. Entrez votre clé API publique et votre clé API secrète, fournies par Checkout.com. Pour les obtenir, connectez-vous ou créez un compte "The Hub" sur le site Web de Checkout.com. Une fois connecté à "The Hub", cliquez sur *Paramètres* dans le menu de gauche, puis sur *Canaux*. Ici, vous trouverez une liste de vos entreprises enregistrées sur Checkout.com, sélectionnez l'entreprise appropriée (si vous en avez plusieurs ici) et vous trouverez les clés API sur cet écran. Pour plus d'informations sur les informations d'identification de l'API Checkout.com, visitez [Checkout.com Docs](https://api-reference.checkout.com/#section/Authentication).
  * **Mode test** - Activez cette option lorsque votre compte/chaîne checkout.com fonctionne en mode test, et non pour des transactions en direct ou une utilisation en production.
  * **Threeds** - "threeds" est une fonctionnalité d'API pour utiliser les paiements 3D Secure sur Checkout.com avec Invoice Ninja. Les paiements 3D Secure ajoutent une étape supplémentaire d'authentification pour les clients lors du traitement d'une transaction par carte. Cette fonctionnalité réduit les risques de fraude et déplace également la responsabilité dans le traitement des paiements, afin de réduire les réclamations de litige de transaction.

* **PayTrace** - Notre intégration [PayTrace](https://www.paytrace.net/) comprend des options de paiement par carte de crédit, y compris la facturation par jeton et les remboursements. Pour configurer PayTrace, vous aurez besoin de vos identifiants d'utilisateur API et de votre clé API de compte PayTrace, qui peuvent être trouvés après avoir réussi à configurer un compte avec PayTrace. Il y a un processus à suivre avec PayTrace impliquant d'abord de tester un compte sandbox, avant de configurer les paiements en direct. Assurez-vous d'utiliser la case à cocher *Mode test* lorsque vous passez par ce processus avec les identifiants API sandbox. Pour plus d'informations, visitez le [site de support PayTrace](https://developers.paytrace.com/support/home).

#### Paramètres

Ces paramètres régissent certains des comportements dans le portail client d'Invoice Ninja ou le portail administrateur, lors de la consultation et de l'interaction avec vos passerelles de paiement configurées. Certaines de ces options peuvent apparaître ou non, en fonction du type de passerelle de paiement.

* **Étiquette** - Cette étiquette est uniquement à des fins de référence interne et s'applique à la liste des passerelles de paiement sur le portail administrateur.
* **Capture de carte** - Paramètre pour enregistrer ou non les détails de la carte de crédit du client pour la prochaine fois. Activé ou désactivé. Sinon, définissez sur "Activé par défaut" ou "Désactivé par défaut" pour donner au client une option au moment du paiement pour "Enregistrer les détails de la méthode de paiement" pour plus tard.
* **Types de paiement disponibles** - Vous verrez une liste différente de méthodes de paiement prises en charge, en fonction du fournisseur de services de passerelle de paiement que vous avez choisi. Par exemple, carte de crédit, virement bancaire, Alipay, Apple Pay, PayPal, etc. Activez ou désactivez ces options pour donner aux clients l'accès à ces méthodes de paiement au moment du paiement.
* **Champs obligatoires** - Cochez la case pour tout champ que vous souhaitez demander au client de remplir pour les enregistrements de paiement. Facultativement, mettez à jour l'enregistrement du client dans Invoice Ninja avec les informations supplémentaires du client que vous avez demandées.
* **Logos de cartes acceptées** - Détermine quels logos sont affichés lors du paiement. Activez vos logos de cartes acceptées pour annoncer le support à vos clients.

#### Limites/Frais

Ici, nous gérons les limites de paiement et les frais que nous souhaitons appliquer aux transactions. Les frais et les limites appliqués sont spécifiques au type de paiement que vous avez sélectionné.

* **Type de paiement** - Seules les méthodes de paiement activées dans votre volet *Paramètres* de la passerelle de paiement sont disponibles ici. Choisissez-en une, et les frais ou limites que vous définissez seront associés spécifiquement à cette méthode de paiement uniquement.
* **Limite min & Limite max** - Entrez une valeur en dollars pour les limites de paiement minimales ou maximales souhaitées, et cochez les cases "Activer Min" ou "Activer Max" pour imposer les valeurs minimales et maximales.
* **Pourcentage de frais** - Définissez des frais sur les transactions avec cette méthode de paiement, en fonction d'un % du montant payé.
* **Montant des frais** - Définissez des frais fixes pour toutes les transactions avec cette méthode de paiement. Peut être facturé en plus du pourcentage de frais, si les deux valeurs sont définies.
* **Plafonnement des frais** - Définissez une valeur maximale pour les frais de méthode de paiement facturés à un client.
* **Taxes** - Lorsqu'un, deux ou trois *Taux de taxe sur les articles* sont activés (Paramètres de base > Paramètres fiscaux), vous verrez un champ *Taxes* ici pour chaque taux de taxe. Ces taxes sont appliquées aux frais de la passerelle de paiement que vous facturez au client.
* **Ajuster le pourcentage des frais** - Utilisez le bouton à bascule pour activer cette fonctionnalité. Utilisez ceci lorsque vous avez l'intention de transférer les frais de la passerelle de paiement au client. Par exemple, si les frais de traitement des paiements pour votre compte Stripe sont de 30 cents fixes et de 1%, et que vous vouliez les transférer au client, vous entreriez un montant fixe de 0,30 pour le *Montant des frais* et 1 pour le *Pourcentage des frais*, et vous activeriez l'*Ajuster le pourcentage des frais*. Comme le total avec les frais sera plus élevé, les frais *réels* facturés par Stripe seront également plus élevés. Avec cette fonctionnalité, Invoice Ninja calculera et ajustera les frais pour facturer au client le montant de frais attendu, une fois que le prix final de la facture est modifié.
  * ***Remarque*** - Lorsque vous essayez de capturer parfaitement les frais de la passerelle de paiement à 100% et de les appliquer au paiement du client en utilisant *Ajuster le pourcentage des frais*, vous devez désactiver les *Taux de taxe sur les factures* et utiliser exclusivement les *Taux de taxe sur les articles* (Paramètres de base > Paramètres fiscaux). Lorsqu'un frais de paiement est appliqué à une facture client, il est inscrit en tant qu'article, et tous les taux de taxe sur les factures seront appliqués au frais, ce qui faussera la formule pour calculer correctement le nouveau pourcentage de frais.
  * Vous êtes responsable de vérifier que vos paramètres de taxes et de frais sont conformes à toutes les lois applicables. Consultez un conseiller juridique si vous avez besoin de conseils sur les politiques de frais et de taxes pour votre organisation.

<h2 id=tax_settings>Paramètres fiscaux</h2>

Dans cette section, nous pouvons configurer certains paramètres par défaut pour les taxes appliquées aux factures dans leur ensemble ou uniquement aux produits eux-mêmes. Les taux de taxe sont exprimés en valeurs de pourcentage uniquement.

**ATTENTION!**

Vous pouvez facturer accidentellement des taxes en double si vous appliquez des taux de taxe sur le solde fixe d'une facture, *et* sur les produits individuels de la facture eux-mêmes. Si une taxe distincte s'applique à certains produits que vous vendez, c'est peut-être là que cela pourrait s'appliquer.

* **Taux de taxe sur les factures** - Désactivé, un, deux ou trois choix de taux de taxe. Vous verrez des champs "*Taux de taxe par défaut*" apparaître près du bas lorsque vous modifiez ce paramètre. Les nouveaux champs ci-dessous définiront les taux de taxe par défaut appliqués au solde fixe de toute facture. Notez que vous pouvez modifier les taux de taxe pour chaque facture individuelle.
* **Taux de taxe sur les articles** - Désactivé, un, deux ou trois choix de taux de taxe. Activez éventuellement les champs "*Taxes*" qui apparaîtront alors dans le panneau *Modifier le produit* ou dans la liste des produits sur une facture.
* **Taux de taxe sur les dépenses** - Désactivé, un, deux ou trois choix de taux de taxe. Définit le nombre de taux de taxe à configurer pour les dépenses.
* **Taxes incluses** - Activez ce paramètre pour utiliser les taxes incluses, ce qui détermine si le taux de taxe est réduit de la valeur totale définie du produit/facture ou ajouté par-dessus après.
  * *Exemple*
    Hors taxes :  100 + 10% = 100 + 10
    Taxes incluses :  100 + 10% = 90,91 + 9,09

**Configurer les taux** - Un simple panneau de paramètres *Taux de taxe* pour gérer les taux de taxe applicables à votre entreprise. Les taux de taxe configurés ici sont sélectionnables dans les menus déroulants *Taxe* et *Taux de taxe* sur les factures et les produits. Vous ajoutez un taux de taxe avec le bouton "+" en haut à gauche de ce panneau, et ajoutez simplement un nom et un taux de taxe exprimé en pourcentage uniquement.

<h2 id=product_settings>Paramètres des produits</h2>

Ces options régissent les comportements et les règles liés aux *Produits* lors de la modification des produits directement ou lors de leur interaction avec des factures, des devis, etc.

* **Afficher la remise sur le produit** - Activez éventuellement un champ de remise pour les produits/articles lorsqu'ils sont ajoutés à des factures ou des devis. Cet élément de ligne apparaît sur les documents de facture et de devis envoyés aux clients.
* **Afficher le coût du produit** - Active un champ *Coût du produit* dans chaque liste de produits, pour suivre les coûts des articles et les valeurs de majoration. Cet élément n'apparaît *pas* sur les factures des clients, il est uniquement destiné au portail d'administration.
* **Afficher la quantité de produit** - Affiche ou non un champ de quantité sur les factures. Par défaut à un, si le champ de quantité du produit est désactivé.
* **Quantité par défaut** - Lorsque le champ de quantité du produit est activé, l'activer rendra la quantité par défaut à 1, sinon vous devez spécifier explicitement la quantité de chaque produit.

* **Remplir les produits** - Activez pour remplir automatiquement les champs de description et de coût avec les valeurs du produit que vous sélectionnez, lors de l'ajout d'un produit à une facture.
* **Mettre à jour les produits** - Modifier la description du produit ou le taux de taxe sur une facture mettra automatiquement à jour cette entrée de produit dans la liste des produits.
* **Convertir les produits** - Activez pour prendre en charge la conversion automatique des prix des produits en devise de votre client.

<h2 id=task_settings>Paramètres des tâches</h2>

Les paramètres ici régissent les règles et les comportements liés aux tâches, qui sont imbriquées dans les projets.

* **Taux de taxe par défaut** - Champ personnalisé pour définir un taux de tâche forfaitaire par défaut par heure.
* **Démarrage automatique des tâches** - Activez pour démarrer automatiquement le suivi du temps d'une tâche lorsqu'une tâche est créée.
* **Afficher la date de fin de la tâche** - Active un champ "*Date de fin*" lors de la création et de la modification des tâches.

Ces règles régissent strictement

* **Afficher le tableau des tâches** - Lorsqu'il est activé, présente toujours une catégorie "*Tâches*" lors de l'ajout d'éléments aux factures, où vous pouvez sélectionner des tâches attribuées à un client et les ajouter à la facture.
* **Journal des dates des tâches de facturation** - Incluez les dates des entrées dans le journal des tâches lors de l'ajout de la tâche à une facture.
* **Journal des heures des tâches de facturation** - Incluez les horodatages d'une tâche donnée lors de son ajout à une facture.
* **Ajouter des documents à la facture** - Activez pour rendre les documents attachés à vos tâches visibles pour les clients ainsi que pour les utilisateurs du portail d'administration.

**Configurer les statuts** - Ce bouton permet d'accéder à un autre panneau de paramètres pour les "*Statuts des tâches*" qui gère une liste de statuts sélectionnables pour les tâches, par exemple : Backlog, Prêt à faire, En cours et Terminé. Tout ce qu'il y a à configurer pour un statut de tâche, c'est le nom du statut et une couleur d'indicateur.

<h2 id=expense_settings>Paramètres des dépenses</h2>

Ces règles régissent les paramètres et comportements par défaut des enregistrements de dépenses de votre entreprise.

Chacun de ces paramètres ci-dessous peut être configuré pour chaque enregistrement de dépense, lors de la création ou de la modification d'une dépense. Modifier ces paramètres ici changera la configuration par défaut pour les nouveaux enregistrements de dépenses.

* **Devrait être facturé** - Lorsqu'il est activé, une dépense indiquera le statut EN ATTENTE car elle attend d'être mise sur une facture client.
* **Marquer comme payé** - Chaque enregistrement de dépense individuel a son propre paramètre *Marquer comme payé*.
* **Ajouter des documents à la facture** - Rendre les documents attachés à un enregistrement de dépense visibles pour le client à qui la facture est jointe.

**Configurer les catégories** - Ce bouton permet d'accéder à un sous-panneau de paramètres pour les "*Catégories de dépenses*". Ici, vous pouvez gérer une liste simple (champs Nom et Couleur uniquement) pour les catégories de dépenses. Cela peut vous aider à organiser vos dépenses de manière plus efficace, en attribuant une catégorie de dépenses à chacune de vos dépenses.

<h2 id=import_export>Importation | Exportation</h2>

Ici, vous avez de nombreuses options pour les formats de fichiers à partir desquels importer les enregistrements de votre entreprise.

### CSV

Les enregistrements au format CSV peuvent être importés uniquement. Les importations de fichiers CSV doivent être effectuées par catégorie et non dans un seul fichier volumineux.

Vous devrez sélectionner manuellement les catégories correspondantes pour certaines entrées du CSV après son téléchargement, car les logiciels plus anciens ou autres peuvent ne pas utiliser les mêmes étiquettes.

Le format attendu du document CSV est d'avoir une seule ligne avec toutes les catégories de colonnes, suivie d'une ligne pour chaque entrée.

Lors de l'importation de votre document CSV, vérifiez que la colonne de gauche correspond aux étiquettes de colonne de votre fichier CSV et que la colonne du milieu correspond à la première ligne sous les étiquettes de colonne de votre fichier CSV. Ensuite, à droite, sélectionnez l'étiquette la plus précise disponible dans Invoice Ninja pour associer ces valeurs à la nouvelle étiquette lors de l'importation.

### JSON

Une sauvegarde complète de l'entreprise peut être générée via l'option Exportation. Ceci planifiera une tâche qui exportera tous les paramètres et données et les compressera dans un fichier .zip à télécharger. Lorsque la tâche est terminée, un courriel est envoyé avec un lien de téléchargement (les liens de téléchargement expirent quotidiennement).

Les données peuvent être transférées vers une autre installation ou utilisées pour écraser un ensemble de données d'entreprise existant.

<x-warning>

Si vous ne souhaitez pas écraser l'entreprise actuelle et importer plutôt l'ensemble de données en tant que NOUVELLE entreprise, vous devez créer une nouvelle entreprise avant d'importer, car cela écrasera l'entreprise actuelle!

</x-warning>

Lors de l'importation de JSON, vous avez la possibilité d'importer uniquement les paramètres, les données, ou les deux.

<x-warning>

Notez que sur la plateforme hébergée, l'importateur d'entreprise effectuera un contrôle préalable pour s'assurer que votre ensemble de données est importable. Si votre plan ne dispose pas de ressources suffisantes (c'est-à-dire plusieurs utilisateurs ou la limite de clients est atteinte), l'importateur échouera et vous serez informé par courriel du problème exact.

</x-warning>

<h2 id=device_settings>Paramètres de l'appareil</h2>

Ces paramètres régissent les paramètres de la session ou de l'instance sur l'appareil physique sur lequel vous êtes actuellement connecté. Sur un nouvel appareil, ces paramètres ne s'appliqueront pas.

* **Disposition** - Choisissez explicitement entre une disposition de bureau ou mobile. Normalement, Invoice Ninja peut détecter le type d'affichage que vous utilisez.

* **Menu latéral** - Le menu latéral est la barre latérale la plus à gauche pour la navigation. Lorsqu'il est réglé sur "*Réduire*", la barre latérale reste épinglée et peut s'étendre ou se rétrécir. Lorsqu'il est réglé sur "*Flottant*", la barre latérale reste cachée et glisse à l'aide d'un geste ou en cliquant sur le bouton "*hamburger*" dans le coin supérieur gauche.

* **Barre latérale d'historique** - La barre latérale d'historique apparaîtra quelque part sur le côté droit. Lorsqu'il est réglé sur "*Afficher/Masquer*", la barre latérale d'historique apparaît à l'extrême droite et est une barre latérale persistante qui redimensionne et déplace les panneaux autour d'elle. Lorsqu'il est réglé sur "*Flottant*", la barre latérale d'historique apparaît devant le panneau dans lequel vous travaillez lorsque vous appuyez sur le bouton "*Historique*" en haut d'une liste de menus, et elle se ferme automatiquement.

* **Barre latérale de prévisualisation** - L'activation est le paramètre par défaut, qui vous présente une liste de clients, factures, tâches, etc. et toute l'entrée de la liste est un bouton cliquable pour afficher les détails avancés de l'entrée dans une barre latérale persistante sur le côté droit.

  Lorsqu'il est désactivé, il ne vous présente aucune barre latérale à droite, seulement une liste, et chaque entrée montre un peu plus de détails au premier coup d'œil, mais cela n'offre pas de vues de détails avancés, et désactiver cette fonction peut effectivement réduire les fonctionnalités normalement disponibles pour vous grâce à ces aperçus détaillés dans les barres latérales.

* **Appui long sur la liste** - Configurez le comportement lorsque vous appuyez longuement sur une entrée de la liste de menus. "*Démarrer la sélection multiple*" pour utiliser l'appui long pour passer en mode sélecteur d'élément et sélectionner plusieurs éléments sur lesquels agir, ou choisissez "*Afficher les actions*" pour simplement faire apparaître un menu contextuel des actions disponibles pour cette seule entrée de la liste de menus.

* **Lignes par page** - Configurez le nombre de lignes par défaut à charger par page de menu.

* **Mode sombre** - Bascule un thème sombre pour les conditions de faible luminosité ou les préférences personnelles.

* **Thème de couleur** - Sélectionnez les thèmes de couleur à utiliser pour les étiquettes

<h2 id=account_management>Gestion de compte</h2>

Le panneau de gestion de compte régit principalement le compte de votre entreprise sur le serveur, le statut de la licence Invoice Ninja et les configurations API pour les développeurs intéressés par l'automatisation.

### Aperçu

Dans cet onglet, plusieurs éléments vous sont présentés.

Tout d'abord, il y a des choses liées au statut de votre entreprise ou aux conditions avec Invoice Ninja

* **Plan** - Statut de votre plan actuel avec les services d'hébergement Invoice Ninja.
* **Activer l'entreprise** - Activer ou désactiver l'état actif de l'entreprise, le désactiver désactivera un certain nombre de fonctionnalités automatisées, comme les courriels, les factures récurrentes et les notifications.
* **Activer Markdown** - Permettez à vos modèles de conception d'intégrer du code Markdown dans votre code HTML pour formater des PDF avec Markdown. À l'heure actuelle, le code Markdown ne peut être converti qu'à partir des descriptions des éléments de ligne de produit, mais il est prévu de mettre en œuvre un support plus large.
* **Virgule décimale** - Lors de la création ou de l'édition de documents (factures, devis, etc.) dans le portail d'administration, l'activation de cette fonctionnalité modifiera l'utilisation des décimales en virgules pour séparer les dollars des cents. Il fonctionne avec l'un ou l'autre, mais pas les deux à la fois. Par exemple, 20.00 sera représenté à la place par 20,00. Un chiffre décimal sera ignoré si les virgules sont activées, et vice versa.
* **Inclure les brouillons** - Lors de la génération de rapports à partir du module "Rapports", l'activation de cette fonctionnalité inclura les objets qui sont encore marqués comme des brouillons dans les chiffres de vos rapports.
* **Acheter une licence** - Un lien pour demander une facture à Invoice Ninja pour une licence en marque blanche. La licence vous sera envoyée par courriel.
* **Appliquer une licence** - Entrez la clé de licence fournie par Invoice Ninja pour supprimer la marque blanche des documents et des parties de l'application visibles par le client.

Deuxièmement, il y a toutes les ressources pour les développeurs concernant les fonctionnalités d'automatisation.

* **Jetons API** - Créez de nouveaux jetons API générés aléatoirement et gérez les jetons existants dans un sous-panneau de paramètres ici.
* **Webhooks API** - Créez et gérez des webhooks API dans un sous-panneau de paramètres ici.
* **Docs API** - Lien vers la documentation de l'API pour les développeurs.
* **Zapier** - Lien de connexion pour Zapier pour configurer des processus automatisés avec Zapier.

Troisièmement, il y a les boutons les plus dangereux et sérieux! Assurez-vous de savoir ce que vous faites!

* **Purge des données** - Supprime définitivement *toutes vos entreprises et enregistrements* de la base de données!
* **Supprimer l'entreprise** - Supprime définitivement l'*entreprise actuellement sélectionnée* de la base de données!

### Modules activés

Les cases à cocher ici activent et désactivent des modules entiers pour l'entreprise. Désactiver une ou deux catégories comme "Projets" et "Tâches" les retirera de la barre latérale du menu sur le côté droit et les masquera, ainsi que tous leurs enregistrements existants, jusqu'à ce que vous réactiviez à nouveau le module.

### Intégrations

* **ID de suivi Google Analytics** - Sans avoir besoin d'écrire le code vous-même, intégrez facilement les analyses et le suivi du commerce électronique sur votre domaine en insérant votre ID de suivi de compte Google Analytics dans ce champ. Consultez [ici](https://support.google.com/analytics/answer/1008080#zippy=%2Cin-this-article) pour obtenir de l'aide pour trouver votre ID de suivi Analytics.

### Paramètres de sécurité

Configurez quelques paramètres de sécurité simples pour les comptes serveur des utilisateurs connectés.

* **Expiration du mot de passe** - Normalement, un mot de passe est requis pour certaines actions, comme la suppression de données. Ici, vous pouvez définir un délai avant la prochaine fois où vous devrez ressaisir ce mot de passe pour effectuer une autre action similaire.
* **Expiration de la session Web** - Désactivé par défaut, définissez un délai pour déconnecter l'utilisateur du portail d'administration après un certain temps.
* **Exiger un mot de passe avec connexion sociale** - Si vous avez la connexion sociale activée sur votre serveur, vous pouvez activer ce paramètre pour obliger les utilisateurs à vérifier le mot de passe de leur compte de toute façon lorsqu'ils se connectent.

<x-next url=/fr_CA/advanced-settings>Paramètres avancés</x-next>
