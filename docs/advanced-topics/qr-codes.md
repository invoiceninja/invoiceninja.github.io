---
title: "QR Codes"
sidebar_position: 4
---
# QR Codes

We currently offer three options for QR codes in Invoice Ninja: Swiss QR, SEPA ERC and generic Payment link QR codes which will take the end user to the Invoice Ninja Client portal for payment.

## Swiss QR Codes

For Swiss users, you are able to automatically inject Swiss Compatible payment QR codes directly into the invoice design.

There are three types of QR-Rechnungen.

1. **QR-IBAN with QR-Reference**.

This is a special IBAN, different from you normal IBAN. Easiest way is to ask your bank for the QR-IBAN, but you can also calculate it yourself.
The QR-Reference is a 26 digit number follow by one checksum digit. The checksum has to be modulo 10, recursive. Additionally you can add 140 symbols of text.

### How to calculate automatically your QR-IBAN:

Now there is a new tool to calculate it automatically, you will find it here : 
[Swiss IBAN to QR-IBAN Converter](https://alexin-tech.github.io/Swiss-IBAN-to-QR-IBAN-Converter/)

In order to find your QR-IID , just : 
Go to the [SIX Group IID Inquiry Page](https://www.six-group.com/en/products-services/banking-services/interbank-clearing/online-services/inquiry-iid.html)
Enter your bank name in the **Bank/Institution** field.
Click the **Search** button.
Look for a **QR-IID** in the results (values between **30000 - 31999**).
Copy the QR-IID and paste it into the input field of the [Swiss IBAN to QR-IBAN Converter](https://alexin-tech.github.io/Swiss-IBAN-to-QR-IBAN-Converter/) 

### How to calculate manually your QR-IBAN:

For example, the normal IID of Raiffeisen is 80808.

Because of that, a Raiffeisen IBAN could look like this CH21 **8080 8**001 2345 6789 0

Lookup the QR-IID of your bank (something between 30000 and 31999) and replace the IID with the QR-IID. The Raiffeisen QR-IID is 30808. If we replace the previous IBAN with this, we get: CH21 **3080 8**001 2345 6789 0. This is the QR-IBAN with wrong checksum therefore we have to calculate it.

We start with the original checksum (CH**21** 3080 8001 2345 6789 0). The QR-IBAN should be one for modulo 97. We have to move the first 4 symbols to the end (3080 8001 2345 6789 0 CH21). We replace the checksum 21 with two XX, because we don't know this yet (38080 8001 2345 6789 0 CHXX). After that we replace CH with digits. It is alphabetical and starts with 10. So A=10, B=11 and C=13. Because of that, CH is 1217. This gives us 3080 8001 2345 6789 0 1217XX. We now have to find two numbers that give us the modulo 97 = 1.

We start by using 00 for XX. 3080 8001 2345 6789 0 121700 modulo 97 = 32. That is to low. 97-32+1= 66. 3080 8001 2345 6789 0 121766 modulo 97 = 1. Now we got it! We move them back to the front (121766 3080 8001 2345 6789 0) and replace 1217 with the country code (CH66 3080 8001 2345 6789 0). This is our QR-IBAN.

2. **QR-Rechnung with IBAN and without reference**

This is your normal IBAN. You can't use a reference! You are only allowed to use 140 symbols of text.

3. **QR-Rechnung with IBAN and Creditor Reference**

Follows the ISO-11649 norm. Works like a QR-Reference but uses ISO-11649 which makes it usable international. Unlike the provious two QR codes, this also works outside of Switzerland. You have to use the normal IBAN, not the QR IBAN.

### Inserting the QR Code into your Invoice

:::info
> Your company country must be set to Switzerland for the QR IBAN and BESR Number fields to become visible on the Company Details page.
:::

![alt text](/assets/images/pdf_customization/swiss_qrcode1.png "Swiss QR Codes")

Codes can be inserted directly into the wysiwyg editor in either the public notes or terms sections. 

![alt text](/assets/images/pdf_customization/swiss_qrcode3.png "Swiss QR Codes")

:::warning
> Due to the width of these containers, the QR Code will appear compressed. If you prefer to have the QR code stretch the width of the PDF, you'll want to create a custom design and insert the QR code into the body of the invoice as shown below.
:::

In the body tab, at the bottom add

```bash
<div style="page-break-inside: avoid;" data-state="encoded-html">
$swiss_qr
```

or we have also made available a decoded version using the following variable

```bash
$swiss_qr_raw
```

![alt text](/assets/images/pdf_customization/swiss_qrcode4.png "Swiss QR Codes")

This will then allow the QR code to stretch the width of the PDF and will appear as follows.

![alt text](/assets/images/pdf_customization/swiss_qrcode5.png "Swiss QR Codes")

After you have saved the design, you'll want to make this your new default design.

If your QR codes are not appearing then there would be a configuration issue that needs to be addressed. The most common reasons the QR code does not appear on the PDF is due to missing company details. Your full address is required along with the clients full details.

## SEPA ERC QR Codes

To enable SEPA QR codes you'll need to follow a couple of steps to ensure there is the correct data.

SEPA QR codes require at the very least a IBAN, for payments outside of EEA you will also need the BIC. 

You can configure your payment details by enabling E Invoicing and setting the payment method to Credit Transfer (code 30) or SEPA Credit Transfer (code 58).

![alt text](/assets/images/qr/sepa_qr_code_config_1.png "Enable E Invoicing")

Once you enable E Invoicing, the payment means dialog will appear, then set either code 30 or 58, the form will then populate with the correct fields.

![alt text](/assets/images/qr/sepa_qr_code_config_2.png "Set payment method to Credit/Transfer")

The variable

```bash
$sepa_qr_code
```

Can be placed directly into the Public Notes or Terms sections of your invoice, for automatic generation of the QR code in your invoice.

![alt text](/assets/images/qr/sepa_qr_code_config_3.png "Insert code into invoice")

If you prefer to have control over the location of the QR code you can create a custom design and then use the following options to inject the QR code into your PDF.


```bash
<div data-state="encoded-html">
$sepa_qr_code
```

or

```bash
$sepa_qr_code_raw
```

![alt text](/assets/images/qr/sepa_qr_code_config_4.png "Insert code into the custom design")


## Generic Payment link QR Codes

Generic payment QR codes can easily be applied to your Invoice PDF using the following block in your custom Design

```bash
<div>
$payment_qrcode
```