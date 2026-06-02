# GHL Book Products — Setup & Delivery Flow

End-to-end workflow for shipping the 7 books as paid digital products through GoHighLevel and linking them from the website.

The three Node scripts in this folder cover everything that can be safely automated. The remaining steps — uploading the actual PDF file and configuring the post-purchase email workflow — happen in the GHL UI, because GHL's public API doesn't cleanly expose those.

## What gets automated

| Step | What it does | Where it runs |
|---|---|---|
| `pnpm ghl:seed-books` | Creates 7 DIGITAL products in GHL (draft), attaches a one-time price to each, captures product/price IDs + checkout URLs to `.ghl-book-products.json` | Your laptop, with GHL creds |
| `pnpm ghl:wire-books` | Reads that JSON and regenerates `src/lib/book-checkouts.ts` so the website links covers → checkout | Your laptop |
| `pnpm ghl:publish-books` | Flips every seeded product from draft → live (`availableInStore: true`) | Your laptop, with GHL creds |

## What stays manual (in the GHL UI)

1. **Stripe / payment gateway connected** to the sub-account. Without this, prices won't take payment.
2. **Upload the PDF** for each book to the GHL Media Library when the manuscript is ready.
3. **Open each product → Digital Asset / Fulfillment** and paste the media URL (or attach the file directly).
4. **Workflow: "On Order Placed"** with a "Send Email" action that delivers the download link. One workflow per product, or one workflow filtered by product id (cleaner).
5. **Verify the checkout** by buying one book yourself with a test card.

These five things are configuration that the API doesn't expose cleanly, and they only have to happen once per book.

## Required env vars

| Var | What it is | Where to find it |
|---|---|---|
| `GHL_PIT_TOKEN` | Private Integration Token | GHL → Settings → Private Integrations → New |
| `GHL_LOCATION_ID` | Sub-account / location id | GHL → Settings → Business Profile |
| `GHL_STORE_BASE` *(optional)* | Base URL the seed script uses to construct each book's checkout URL, e.g. `https://store.jamaurjohnson.com/products` | Wherever your GHL store / order pages live |

`GHL_PIT_TOKEN` must have at least `products.write` and `products/prices.write` scopes. Never commit the token — it gives full access to your products and customers.

## The full run

### 1. Seed products into GHL

```bash
export GHL_PIT_TOKEN="pit-..."
export GHL_LOCATION_ID="abc123..."
export GHL_STORE_BASE="https://store.jamaurjohnson.com/products"

pnpm ghl:seed-books
```

Output:

```
✓ The Last Verifiable Year     product 6f...  price 71...  $18.88
✓ Synchronicity                product 6f...  price 71...  $18.88
✓ Awakening to Source          product 6f...  price 71...  $18.88
✓ The Space In Between         product 6f...  price 71...  $8.88
✓ Atomic Habits for Traders    product 6f...  price 71...  $8.88
✓ Trading In The Vortex        product 6f...  price 71...  $8.88
✓ Trade Hybrid                 product 6f...  price 71...  $18.88
```

Writes `.ghl-book-products.json` (gitignored — it holds your live IDs).

### 2. Confirm checkout URLs

Open `.ghl-book-products.json`. Each entry should have a `checkoutUrl` like `https://store.jamaurjohnson.com/products/the-last-verifiable-year`.

If your GHL store uses a different URL pattern (payment-link only, custom funnel per book, etc.), paste the correct URL into each entry's `checkoutUrl` by hand. The wire script in the next step just reads what's there.

### 3. Wire the URLs into the website

```bash
pnpm ghl:wire-books
```

Overwrites `src/lib/book-checkouts.ts` with a typed map from book slug → checkout. `BooksSection.tsx` already imports that map and uses it to render each cover as a "Pre-Order $X.XX" link.

Commit and push:

```bash
git add src/lib/book-checkouts.ts
git commit -m "feat: wire book covers to live GHL checkouts"
git push
```

### 4. Configure digital fulfillment in GHL (per book, when files are ready)

For each product:

1. Open the product → **Files / Digital Asset** tab.
2. Upload the PDF (or paste a URL to a hosted PDF — S3, Cloudflare R2, Google Drive with public link, etc.).
3. Save.

Then build the delivery workflow (once):

1. **Workflows → New Workflow → Order Placed trigger**.
2. Filter on `Product = <Book Name>` (or run separate workflows per product if you want per-book copy).
3. Add **Send Email** with a personalized message and the digital asset / download link merge field.
4. Optionally add **Add Contact Tag** (e.g. `Owner: Atomic Habits for Traders`) so you can run follow-on campaigns to readers later.

### 5. Test with a real (low-cost) purchase

Use a Stripe test card or run one $0.50 test order, confirm:

- ✅ Card charges
- ✅ Confirmation email arrives
- ✅ Download link in the email opens the PDF
- ✅ Contact appears in GHL with the right tags

### 6. Flip products live

```bash
pnpm ghl:publish-books
```

Sets `availableInStore: true` on every product. From this point on, the website's "Pre-Order $X.XX" buttons drive real revenue.

## Re-running

- **Seed** refuses to run if `.ghl-book-products.json` already exists. Delete the file if you intentionally want to re-seed (and clean up the duplicate products in GHL after).
- **Wire** is idempotent — re-run it any time the JSON changes.
- **Publish** is idempotent — re-running it on already-live products is a no-op.

## Failure modes

| Symptom | Likely cause | Fix |
|---|---|---|
| `HTTP 401` from seed | PIT token wrong/expired or missing scopes | Regenerate in GHL → Settings → Private Integrations |
| `HTTP 422` from seed | Required field missing — usually image URL not publicly fetchable | Confirm `https://jamaurjohnson.com/photos/books/*.jpg` returns 200 |
| Buy button still says "Learn More" after deploy | `book-checkouts.ts` wasn't committed or wire script wrote 0 entries | Check the file in git, re-run `pnpm ghl:wire-books` |
| Buyer charged but no email | Workflow not built or paused | GHL → Workflows → check status |
