# Firebase setup for Rigan booking/admin

The website code is connected to Firebase project `rigan-9d5cc`. The customer booking form, admin dashboard, quotation builder, public quote link and booking status workflow are already present in the repository. Firebase still needs the one-time console settings below before the system can be used safely in production.

## 1. Create Firestore and publish the repository rules

Firebase Console → Build → Firestore Database → Create database.

Use production mode. Then open Firestore → Rules and replace the editor contents with this repository's `firestore.rules` file, then click **Publish**.

The rules are intentionally designed so that:

- public visitors may create a new booking request only in the approved booking schema;
- public visitors cannot list or read booking records;
- only active admin accounts with `role = admin` may read or manage bookings and quotations;
- public quotation links can be opened only through their long random token;
- quotation acceptance can update only the small set of fields required for acceptance.

Important: changing `firestore.rules` in GitHub does **not** automatically publish those rules to Firebase. The rules must also be published in the Firebase Console unless a Firebase deployment workflow is added later.

## 2. Enable admin authentication

Firebase Console → Build → Authentication → Sign-in method → enable **Email/Password**.

Then Authentication → Users → Add user and create the admin email/password you want to use at:

- `https://riganrootsroutes.com/admin/`

Do not add a public admin sign-up page.

## 3. Authorize the website domains

Authentication → Settings → Authorized domains. Add the production domains you use, including:

- `riganrootsroutes.com`
- `www.riganrootsroutes.com` if the site uses it
- `riganroots.github.io` only if you want to test authentication on the GitHub Pages URL

## 4. Grant an account admin access

Copy the UID of the admin user from Firebase Authentication.

Firestore → Data → Start collection:

- Collection ID: `admins`
- Document ID: **the admin user's Firebase UID**

Create these fields exactly:

- `role` = `admin` (string)
- `name` = the team member's name (string)
- `active` = `true` (boolean)

The production security rules require both `role = admin` and `active = true`. Merely having a document in the `admins` collection is not enough.

To revoke an admin account without deleting the Firebase Authentication user, set that admin document's `active` field to `false`.

## 5. Test the customer booking flow

Open an experience detail page and use the booking/request-booking action, or open:

- `https://riganrootsroutes.com/booking/`

Submit a test request. A new document should appear under the Firestore `bookings` collection with a reference such as `RIG-20260917-ABC123` and status `New`.

The public form stores the request in Firestore and separately attempts to notify the team through the configured notification endpoint. No payment data is collected by the booking form.

## 6. Test the admin dashboard

Open:

- `https://riganrootsroutes.com/admin/`

Sign in using the Firebase Authentication admin account. Confirm that the test booking appears.

Current admin functions include:

- search and filter booking requests;
- booking status updates;
- WhatsApp and email follow-up drafts;
- internal notes;
- quoted amount and currency;
- CSV export;
- professional quotation creation;
- private customer quotation links;
- quote version history;
- customer quote acceptance.

The normal booking workflow is:

`New → Contacted → Quoted → Confirmed → Paid → Completed`

`Cancelled` can be used when a request does not proceed.

## 7. Test a quotation

From the admin dashboard:

1. Open the test booking.
2. Enter a quoted amount and currency.
3. Review or load the package itinerary.
4. Add inclusions, exclusions, payment terms and cancellation notes.
5. Choose a quote-valid-until date.
6. Publish the quotation.
7. Open the generated customer link in a private/incognito browser window.
8. Confirm that the quotation can be viewed without admin access and that no private admin notes are exposed.

## Security notes

The Firebase web `apiKey`, `projectId`, and app configuration in `firebase-config.js` are browser-side Firebase configuration and are expected to be present in frontend code. They do **not** grant admin access and do not replace Firestore Security Rules.

Never put a Firebase service-account private key, Google Cloud private key, admin password, payment secret, webhook secret or other server credential in this public repository.

The customer booking page currently collects contact and trip-planning details only. It does not collect card/payment credentials. If online payments are added later, use a proper payment provider with server-side verification rather than storing payment credentials in Firestore.

## Recommended production follow-up

After the first end-to-end test succeeds, the next hardening step should be Firebase App Check / bot protection for the public booking form and a server-backed notification/payment workflow if booking volume grows.
