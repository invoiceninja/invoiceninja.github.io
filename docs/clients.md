# Clients

## Creating Clients

<p>There a number ways for a client to be created, including:<p>

* Admin Portal - Create Client
* Admin Portal - Client CSV Import 
* Client Portal (if client registration is enabled on Settings > Client Portal)
* API
* Integrator: Zapier, Integromat or APISync

<p>A 'Client' can either represent a person or a company. If only the contact information is set the contact name will be used as the client's display name. If the client's name is set then it will be used instead.<p>

## Grouping Settings

<p>If many clients will share the same settings, for example the same currency or email reminder settings,  you can create a group on Settings > Groups to, as the name implies, group together the settings.<p>

<p>For most settings the app will first check if the client has a value in place, if not it will check if the client belongs to a group and if that group defines a value. Finally, it will use the default value set at the company level.<p>

<p>The benefit of using groups is that if in the future you need to change the setting you can change it one place rather than having to update multiple clients individually. Without groups bulk updating client settings would require using the API or an integrator.</p>
