---
extends: _layouts.docs 
section: content
---

# Troubleshooting

## Mollie: Error executing API call (422: Unprocessable Entity): No suitable payment methods found.

This error will occur when you don't have enabled payment methods in the Mollie dashboard.
Navigate to [Mollie](https://mollie.com/dashboard) > Settings > Website profiles > _Select your profile_ > Payment methods and enable Credit card.

<x-next url=/docs/developer-guide>Developer Guide</x-next>