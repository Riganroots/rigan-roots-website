# Firebase setup for Rigan booking/admin

The website code is connected to Firebase project `rigan-9d5cc`, but the Firebase console still needs a few one-time settings before bookings can be stored and the admin dashboard can be used.

## 1. Create Firestore

Firebase Console → Build → Firestore Database → Create database.

Use production mode, then publish the rules from this repository's `firestore.rules` file in Firestore → Rules.

The rules intentionally allow the public website to **create** booking requests, but public visitors cannot read bookings. Only users listed in the `admins` collection can read/update booking data.

## 2. Enable admin authentication

Firebase Console → Build → Authentication → Sign-in method → enable **Email/Password**.

Then Authentication → Users → Add user and create the admin email/password you want to use at `/admin.html`.

Do not add a public sign-up page.

## 3. Authorize website domains

Authentication → Settings → Authorized domains. Add the production domains you use, including:

- `riganrootsroutes.com`
- `www.riganrootsroutes.com` if the site uses it
- `riganroots.github.io` if you want to test authentication on the GitHub Pages URL

## 4. Grant the user admin access

Copy the UID of the admin user from Firebase Authentication.

Firestore → Data → Start collection:

- Collection ID: `admins`
- Document ID: **the admin user's Firebase UID**

Suggested fields:

- `role` = `admin`
- `name` = admin name
- `active` = `true`

The security rule checks for the existence of `admins/{UID}`. It does not rely on a hidden frontend password.

## 5. Test a booking

Open any experience detail page and click **Book / Request Booking**. Submit a test request. A new document should appear under the `bookings` collection with a reference such as `RIG-20260916-ABC123` and status `New`.

## 6. Test the admin dashboard

Open `/admin.html`, sign in using the Firebase Authentication admin account, and confirm the booking appears. You can search/filter requests, open the traveller in WhatsApp, and change status through:

`New → Contacted → Quoted → Confirmed → Paid → Completed / Cancelled`

## Security notes

The Firebase web `apiKey`, `projectId`, and app configuration in `firebase-config.js` are client configuration and are expected to be present in browser code. They do **not** replace Firestore Security Rules.

Never put a Firebase service-account private key, Google Cloud private key, password, or server credential in this repository.

The booking form currently collects no card/payment details. Payments should be added later through a proper payment provider and server-verified workflow.
