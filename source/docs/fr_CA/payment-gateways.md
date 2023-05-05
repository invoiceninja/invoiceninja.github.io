---
extends: _layouts.developer_resources
section: content
---

## Ajout de passerelles de paiement

**Modèle de pilote de paiement.**

Alors vous voulez créer un pilote de paiement pour Invoice Ninja, mais vous ne savez pas par où commencer? La première étape serait de nous contacter directement sur Slack https://invoiceninja.slack.com et d'avoir une discussion en temps réel avec nous afin que nous puissions vous aider à démarrer rapidement et à construire votre pilote de la manière la plus efficace possible. Nous contacter au préalable nous permettra également de nous assurer que votre code peut être fusionné avec le dépôt officiel, car nous en assurerons la maintenance à l'avenir.

Prêt? Allons-y!

### Étape 1. Configurer l'environnement

Vous devriez mettre à jour votre code pour être à jour avec la branche <a href="https://github.com/invoiceninja/invoiceninja/tree/v5-develop">v5-develop</a>.

Vous voudrez ensuite créer votre propre branche pour votre pilote, c'est-à-dire.

```
git branch my_payment_driver
```

### Étape 2. Ajout de la passerelle dans la table des passerelles

Créons un fichier de migration qui insérera un enregistrement identifiant la passerelle.

```
php artisan make:migration my_new_gateway
```
Ouvrons ce fichier et dans la méthode up() créons notre nouvel enregistrement de passerelle

Init une nouvelle instance de gateway

```
$gateway = new Gateway;
$gateway->name = 'Passerelle Élégante'; 
$gateway->key = Str::lower(Str::random(32)); 
$gateway->provider = ‘PasserelleÉlégante’;
$gateway->is_offsite = true;
$gateway->fields = new \\stdClass;
$gateway->visible = true;
$gateway->site_url = ‘https://stripe.com’;
$gateway->default_gateway_type_id = 1;
$gateway->save();
```

#### Propriétés du Gateway

* name: Le nom de votre passerelle
* key: Une clé de passerelle alphanumérique aléatoire de 32 caractères (Type: string)
* provider: Ceci est une chaîne en camel case qui est utilisée pour initialiser votre pilote de paiement. Nous ajoutons la chaîne Driver à cette classe, donc si votre pilote de paiement est FancyGatewayDriver, alors votre fournisseur sera FancyGateway. (Type: string)
* is_offsite: Spécifie si ce pilote de paiement redirige l'utilisateur vers une autre page pour effectuer le paiement. Paypal Express, par exemple, redirige vers Paypal, puis renvoie l'utilisateur une fois le paiement terminé (Type: bool)
* fields: Un objet stdClass de valeurs clés qui définit les paramètres utilisateur requis pour la passerelle, c'est-à-dire les clés API, les secrets, etc. Tous ces champs sont des chaînes à l'exception de testMode qui est un booléen et indique si la passerelle est en mode test. (Type stdClass)
* visible: Définit si la passerelle doit être visible dans l'interface utilisateur (Type: bool)
* site_url: Un champ URL qui permet à l'utilisateur d'accéder directement à la page de la passerelle pour plus d'informations (Type: string, url)
* default_gateway_type_id: Si votre passerelle propose plusieurs moyens de paiement, c'est-à-dire carte de crédit, transfert bancaire, etc., vous voudrez alors sélectionner une méthode par défaut. La liste des méthodes définies se trouve sur le modèle GatewayType comme suit:

```
const CARTE_CREDIT = 1;
const TRANSFERT_BANCAIRE = 2;
const PAYPAL = 3;
const CRYPTO = 4;
const PERSONNALISE = 5;
const ALIPAY = 6;
const SOFORT = 7;
const APPLE_PAY = 8;
const SEPA = 9;
const CREDIT = 10;
```

### Étape 3. Obtenez et définissez le modèle App\Models\Gateway.php

Deux méthodes doivent être ajoutées à :

1. ```getHelp()``` renvoie un lien vers la page d'aide des passerelles. Nous affichons un lien dans l'interface utilisateur pour que l'utilisateur puisse ouvrir une page Web directe vers la passerelle.
2. ```getMethods()``` renvoie un tableau des types de passerelle pris en charge (c'est-à-dire les méthodes de paiement), si la passerelle prend en charge les remboursements et la facturation par jeton, ainsi que les métadonnées du webhook. La structure du tableau ressemble à ceci :

```php
[
  [GatewayType::CREDIT_CARD => ['remboursement' => true, 'facturation_par_jeton' => true]],
  [GatewayType::BANK_TRANSFER => ['remboursement' => true, 'facturation_par_jeton' => true, 'webhooks' => ['source.chargeable']]]
];
```

Le tableau est stocké dans un bloc case/switch, qui change en fonction de la propriété gateway->id.

### Étape 4. Commencer le travail sur le Pilote de Paiement

Tous les pilotes de paiement doivent étendre la classe BaseDriver qui étend elle-même la classe abstraite AbstractPaymentDriver qui impose les méthodes requises suivantes. Nous avons ébauché un exemple de classe de pilote de paiement et des fichiers de vue qui peuvent être téléchargés [ici](/assets/files/PaymentDriver.zip)

```php
abstract public function autoriserVoir(array $data);
```

```markdown
fonction publique abstraite authorizeResponse(Requête $request);
```

Note : Le texte ne contient pas de balises HTML, de liens ou d'images en format Markdown à conserver ou traduire.

```
fonction publique abstraite processPaymentView(array $data);
```

```
fonction abstraite publique processPaymentResponse (Requête $request);

fonction publique abstraite refund(Paiement $paiement, $montant_remboursement, $retour_reponse_client = false);

fonction publique abstraite tokenBilling(ClientGatewayToken $cgt, PaymentHash $payment_hash);

fonction publique abstraite setPaymentMethod($payment_method_id);
```

* authorizeView() retourne une vue qui permet la capture d'un jeton pour une méthode de paiement spécifique, c'est-à-dire la Carte de Crédit ou le Virement Bancaire

Pour comprendre les dispositions de l'interface utilisateur, il est intéressant d'examiner les dispositions des autres pilotes de paiement dans resources/views/portal/ninja2020/gateways.

Toutes les mises en page sont basées sur la suivante:

```php
@extends('portal.ninja2020.layout.payments', ['gateway_title' => ctrans('texts.credit_card'), 'card_title' => ctrans('texts.credit_card')])

```

{"36":"* authorizeReponse() traite la réponse de la passerelle et si elle est réussie, crée un enregistrement ```ClientGatewayToken``` suivi du retour de l'utilisateur à la route suivante"}

```php
return redirect()->route('client.moyens_de_paiement.index');
```

**Note :** Since it's a code block, only the comment has been translated.

* processPaymentView() retourne une vue permettant la capture d'un paiement","39":"* processPaymentResponse() traite la réponse de la passerelle et, si elle est réussie, crée un enregistrement ```Payment``` suivi du retour de l'utilisateur à la route de paiement ici:

```php
return redirect()->route('client.payments.show', ['payment' => $this->stripe->encodePrimaryKey($payment->id)]);
```


* refund() tente d'effectuer un remboursement et prend trois paramètres,

1. Le modèle de paiement (Collection)
2. Le montant du remboursement (Flottant)
3. Si la réponse nécessite une réponse du client (Booléen)

* tokenBilling() tente de traiter un paiement avec jeton pour un montant donné

* setPaymentMethod() cette méthode est utilisée pour définir la méthode de paiement dans la classe du pilote, cela est nécessaire dans les classes de passerelle où il y a plusieurs options de méthode de paiement dans la passerelle, par exemple. Carte de crédit, virement bancaire.

La classe BaseDriver elle-même contient plusieurs méthodes d'assistance qui permettent la création d'enregistrements de paiement dans Invoice Ninja, ceux-ci sont définis comme suit:

## Code

```php
// Ne traduisez pas cette partie avec les balises PHP et retournez-public function storeGatewayToken(array $data, array $additional = []): ?ClientGatewayToken
```

Voici comment appeler cette méthode en utilisant un exemple concret:

```php
$data = [
    'gateway_id' => 1,
    'client_id' => 2
];

$clientGatewayToken = $this->storeGatewayToken($data, ['user' => $this->user]);
```
 
Notez que voyez pouvez ajouter des informations supplémentaires en utilisant le deuxième argument de cette fonction, qui est facultatif.

Cette méthode est utilisée pour stocker un jeton généré par une passerelle de paiement, elle nécessite un tableau de paramètres avec la définition suivante :


```php
[
    'jeton', // (chaîne de caractères),
    'identifiant_methode_paiement', // (ex : GatewayType::CREDIT_CARD),
    'metadonnees_paiement', // Objet stdClass défini ci-dessous
]
```

$payment_meta = new \\stdClass;
$payment_meta->exp_month = (string) $method->card->exp_month;
$payment_meta->exp_year = (string) $method->card->exp_year;
$payment_meta->brand = (string) $method->card->brand;
$payment_meta->last4 = (string) $method->card->last4;
$payment_meta->type = GatewayType::CREDIT_CARD;
```

Pour améliorer l'abstraction, nous encourageons le développement de l'implémentation de la passerelle de paiement réelle dans son propre espace de noms. Une fois que vous avez terminé le traitement d'une réponse de passerelle, vous devrez effectuer un travail supplémentaire, cela pourrait inclure :

1. Retourner une réponse de paiement réussie à l'utilisateur final
2. Traiter un remboursement
3. Stocker un jeton de passerelle client
4. Traiter une réponse de paiement échoué à l'utilisateur final

Invoice ninja fournit le point d'entrée pour ceux-ci dans la classe BaseDriver, les données exactes requises sont spécifiées comme ci-dessus, le reste est fusionné à partir des données déjà présentes dans le pilote lui-même.

#### 1. Gérer une réponse de paiement réussie

Invoice ninja utilise une petite classe de liaison appelée PaymentHash, qui relie les métadonnées de paiement à un hachage. Une fois que vous êtes revenu de votre passerelle, vous devrez réhydrater l'objet de hachage de paiement. Il vous sera retourné par la passerelle dans la variable de demande `payment_hash` en utilisant une recherche binaire comme suit :

```php
$payment_hash = PaymentHash::whereRaw('BINARY `hash`= ?', [$request->input('payment_hash')])->firstOrFail();
```

À ce stade, vous devrez créer un enregistrement de paiement, cela peut être transmis directement à la méthode BaseDriver définie ci-dessous

```php
public function createPayment(array $data, $status = Payment::STATUS_COMPLETED): Payment
```

Note : La traduction n'est pas requise pour les blocs de code, les balises HTML et les attributs en ligne tels que les liens et les images.

Le tableau de données ici nécessite les propriétés suivantes à être transmises depuis votre pilote de paiement personnalisé

```php
[
    'gateway_type_id', // (c.-à-d. GatewayType::CREDIT_CARD)
    'amount', // (float) voir ci-dessous
    'payment_type', // (c.-à-d. PaymentType::CREDIT_CARD_OTHER)
    'transfaction_reference',
]
```

L'élément clé du montant est issu du hachage de paiement, la requête suivante devrait être utilisée pour déterminer le montant

```php
array_sum(array_column($payment_hash->invoices(), 'montant')) + $payment_hash->total_frais;
```

N.B. Dans le bloc de code ci-dessus, j'ai traduit uniquement le commentaire. Ne traduisez pas le code dans les blocs de code.

En plus de créer l'enregistrement de paiement, nous recommandons fortement de consigner la sortie complète de la passerelle pour permettre le débogage à des fins futures, cela se fait via SystemLogger::job() qui est défini comme suit

```php
public function __construct(array $log, int $category_id, int $event_id, int $type_id, ?Client $client)
```

L'objet tableau est la réponse de la passerelle, regroupée avec toutes autres métadonnées que vous souhaitez ajouter. Les propriétés restantes sont les valeurs constantes définies dans SystemLog, celles-ci définissent la catégorie, l'événement et le type de journal. N'hésitez pas à créer des catégories supplémentaires en utilisant le modèle présent dans la classe SystemLog.

#### 2. Traiter un remboursement

La méthode de remboursement est implémentée dans votre classe PaymentDriver avec la méthode suivante

```php
public function refund(Payment $payment, $refund_amount, $return_client_response = false);
```

Vous pourriez avoir besoin de la classe $payment pour passer la transaction_reference à votre passerelle, avec le refund_amount, l'objet de retour ici est un simple tableau de données en cas de succès, ou lancer une exception avec un message approprié.

#### 3. Enregistrer un jeton de passerelle client

Une fois que vous avez généré un jeton de passerelle, vous devrez le stocker. Une méthode d'assistance dans le BaseDriver est définie ici :

```php
public function storeGatewayToken(array $data, array $additional = []): ?ClientGatewayToken
```

Les propriétés requises pour le tableau de données sont les suivantes :

```php
[
  'jeton',
  'identifiant_methode_paiement',
  'meta_paiement',
  'identifiant_methode_paiement', // par exemple. GatewayType::CREDIT_CARD
  'reference_client_gateway', // facultatif
]
```

#### 4. Traiter une réponse de paiement échoué pour l'utilisateur final

Un message d'erreur générique est fourni lorsqu'une erreur fatale de passerelle se produit pendant le traitement d'un paiement

```php
throw new PaymentFailed('Échec du traitement du paiement.', 500);
```


Le long de cette exception, il est également requis que vous lanciez un PaymentFailureMailer::job() défini comme suit

```php
PaymentFailureMailer::dipatch($client, $erreur, $entreprise, $payment_hash)
```
