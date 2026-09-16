# Phase 7E — Payments and Receipts

This phase adds payment tracking and printable customer receipts to the existing booking admin.

## What it does

After a quotation has been accepted and the booking is **Confirmed**, an authenticated Rigan admin can record money that has already been received.

Each recorded payment stores:

- amount and quotation currency
- payment method
- received date
- optional transaction/reference number
- optional customer-facing receipt note
- admin who recorded it
- receipt number and private receipt link

The booking stores cumulative `totalPaid`, `balanceDue`, and `paymentHistory`. When the balance reaches zero, the booking is automatically marked **Paid**.

## Receipts

Each payment creates a document in `publicReceipts` with a cryptographically random 192-bit token. The customer receipt URL is:

`receipt.html?token=<random-token>`

Unauthenticated visitors can retrieve a receipt only when they already possess its token. Firestore list access remains restricted to admins.

The receipt page supports **Print / Save PDF** through the browser and clearly states that the receipt confirms a recorded payment and is not automatically a tax invoice.

## Important limitation

Phase 7E does **not** collect money, charge cards, call eSewa/Khalti, or run a payment gateway. It records payments that Rigan has already verified as received through an external method such as bank transfer, cash, eSewa, Khalti, or a separate payment link.

A future payment-gateway integration should use the provider's server-side verification flow. Never place merchant secrets, signing keys, private API keys, or service-account private keys in this public GitHub Pages repository.

## Firebase deployment

After merging Phase 7E, publish the updated `firestore.rules` in Firebase Console so `publicReceipts` can be read by token while admin-only writes remain protected.
