---
extends: _layouts.docs 
section: content
---

# Clients

## Creating clients

There several ways for a client to be created, including:

- Admin Portal > Create Client
- Admin Portal > Client CSV Import
- Client Portal (if client registration is enabled on Settings > Client Portal)
- API
- Integrator: Zapier, Integromat or APISync

A "Client" can either represent a person or a company. If only the contact information is set the contact name will be
used as the client's display name. If the client's name is set then it will be used instead.

## Grouping settings

If many clients share the same settings, for example, the same currency or email reminder settings, you can create a
group on Settings > Groups to, as the name implies, group together the settings.

For most settings, the app will first check if the client has a value in place, if not it will check if the client
belongs to a group and if that group defines a value. Finally, it will use the default value set at the company level.

The benefit of using groups is that if in the future you need to change the setting you can change it one place rather
than having to update multiple clients individually. Without groups, bulk updating client settings would require using
the API or an integrator.

<x-next url=/docs/products>Products</x-next>