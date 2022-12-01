---
extends: _layouts.user_guide 
section: content
---

# QR Codes

We currently offer three options for QR codes in Invoice Ninja: Swiss QR, SEPA ERC and generic Payment link QR codes which will take the end user to the Invoice Ninja Client portal for payment.

## Swiss QR Codes

For Swiss users, you are able to automatically inject Swiss Compatible payment QR codes directly into the invoice design.

There are three types of QR-Rechnungen. 

1. **QR-IBAN with QR-Reference**. 

This is a special IBAN, different from you normal IBAN. Easiest way is to ask your bank for the QR-IBAN, but you can also calculate it yourself. 
The QR-Reference is a 26 digit number follow by one checksum digit. The checksum has to be modulo 10, recursive. Additionally you can add 140 symbols of text.

### How to calculate your QR-IBAN:

For example, the normal IID of Raiffeisen is 80808. 

Because of that, a Raiffeisen IBAN could look like this  CH21 **8080 8**001 2345 6789 0

Lookup the QR-IID of your bank (something between 30000 and 31999) and replace the IID with the QR-IID. The Raiffeisen QR-IID is 30808. If we replace the previous IBAN with this, we get:  CH21 **3080 8**001 2345 6789 0. This is the QR-IBAN with wrong checksum therefore we have to calculate it. 

We start with the original checksum (CH**21** 3080 8001 2345 6789 0). The QR-IBAN should be one for modulo 97. We have to move the first 4 symbols to the end (3080 8001 2345 6789 0 CH21). We replace the checksum 21 with two XX, because we don't know this yet (38080 8001 2345 6789 0 CHXX). After that we replace CH with digits. It is alphabetical and starts with 10. So A=10, B=11 and C=13. Because of that, CH is 1217. This gives us 3080 8001 2345 6789 0 1217XX. We now have to find two numbers that give us the modulo 97 = 1. 

We start by using 00 for XX. 3080 8001 2345 6789 0 121700 modulo 97 = 32. That is to low. 97-32+1= 66.  3080 8001 2345 6789 0 121766 modulo 97 = 1. Now we got it! We move them back to the front (121766 3080 8001 2345 6789 0) and replace 1217 with the country code (CH66 3080 8001 2345 6789 0). This is our QR-IBAN. 


2. **QR-Rechnung with IBAN and without reference**

This is your normal IBAN. You can't use a reference! You are only allowed to use 140 symbols of text.

3. **QR-Rechnung with IBAN and Creditor Reference**

Follows the ISO-11649 norm. Works like a QR-Reference but uses ISO-11649 which makes it usable international. Unlike the provious two QR codes, this also works outside of Switzerland. You have to use the normal IBAN, not the QR IBAN. 

![alt text](/assets/images/pdf_customization/swiss_qrcode1.png "Swiss QR Codes")

You can configure this under Settigns > Company Details in the Details page.


![alt text](/assets/images/pdf_customization/swiss_qrcode3.png "Swiss QR Codes")

You'll then need to customize your design to include the QR code on your PDFs. To do this create a new design in Settings > Inovice Design > Customize

In the body tab, at the bottom add

```
<div>
$swiss_qr
</div>
```

After you have saved the design, you'll want to make this your new default design.


![alt text](/assets/images/pdf_customization/swiss_qrcode2.png "Swiss QR Codes")


If your QR codes are not appearing then there would be a configuration issue that needs to be addressed. The most common reasons the QR code does not appear on the PDF is due to missing company details. Your full address is required along with the clients full details.

## SEPA ERC QR Codes

To enable SEPA QR codes you'll need to follow a couple of steps to ensure there is the correct data.

SEPA QR codes require at the very least a IBAN, for payments outside of EEA you will also need the BIC. These two fields are harvested from the Custom Company Fields section of Invoice Ninja. Please note that IBAN must be the first custom field and BIC the second custom field. To configure these navigate to

```bash
Settings > Custom Fields > Company
``` 

![alt text](/assets/images/user_guide/iban_bic.png "IBAN and BIC configuration")


Once saved, then navigate to

```bash
Settings > Company Details
``` 

And enter in the values for your company

![alt text](/assets/images/user_guide/iban_bic_2.png "IBAN and BIC configuration")


In your custom design, you'll then want to insert the variable that allows the QR code to be injected, for example.


```
<div>
$sepa_qr_code
</div>
```

## Generic Payment link QR Codes


Generic payment QR codes can easily be applied to your Invoice PDF using the following block in your custom Design


```
<div>
$payment_qrcode
</div>
```

