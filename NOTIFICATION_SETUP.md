# Booking notifications and customer follow-up

Phase 7C improves the booking follow-up flow without adding payment handling or storing any new credentials in the website.

## What happens automatically now

After a booking is successfully stored in Firestore, the booking page sends a best-effort notification to the existing Rigan Formspree endpoint (`mbdpwkoz`). The Firestore booking remains the source of truth: if the notification request fails or times out, the customer still receives the on-screen booking reference and can continue on WhatsApp.

The booking confirmation page also lets the customer:

- copy the booking reference
- download the preferred travel date as a calendar reminder
- create an email containing the booking reference
- continue the conversation on WhatsApp

The calendar entry is deliberately described as a **preferred travel date**, not a final confirmed departure date.

## Admin follow-up workflow

The booking detail modal now generates a customer message from the current booking status:

- New
- Contacted
- Quoted
- Confirmed
- Paid
- Completed
- Cancelled

If a quoted amount and currency are saved, the Quoted message can include that amount. Admins can edit the draft before using the Copy, WhatsApp or Email actions.

These actions create drafts for the admin to review. They do not claim that a WhatsApp or email was sent automatically.

## Customer email autoresponse

The current code notifies the Rigan team through Formspree. It does **not** guarantee an automatic email to the traveller.

If customer autoresponses are wanted, configure an autoresponse in the Formspree form settings (if available on the active Formspree plan) or add a server-side email workflow later using Firebase/Google Cloud.

Do not place SMTP passwords, email API secrets, Firebase service-account private keys, or other server credentials in this public GitHub Pages repository.

## Automatic WhatsApp messages

True server-triggered WhatsApp messages require an approved WhatsApp Business Platform/Cloud API setup (or another authorized provider), business verification as applicable, approved templates for business-initiated messages, and server-side credentials.

Phase 7C therefore uses pre-filled WhatsApp drafts opened by the customer or admin. This keeps the current implementation credential-free and avoids pretending that a message was delivered automatically.

## Firestore rules

No Firestore Rules change is required for Phase 7C. Public visitors still only create validated booking documents, while authenticated admins can read and update booking records.
