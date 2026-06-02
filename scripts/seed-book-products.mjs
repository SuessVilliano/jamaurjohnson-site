#!/usr/bin/env node
/**
 * Creates one GoHighLevel digital product per book in BOOKS, with a one-time
 * price attached. Products are created as DRAFTS (`availableInStore: false`)
 * so you can review them in GHL before publishing.
 *
 * Usage:
 *   GHL_PIT_TOKEN=... GHL_LOCATION_ID=... node scripts/seed-book-products.mjs
 *
 * Writes .ghl-book-products.json with { productId, priceId } for every book,
 * so scripts/publish-book-products.mjs can flip them to live in one pass.
 *
 * Re-running this script will create duplicates in GHL — only run it once.
 */

import { existsSync, writeFileSync } from "node:fs";

const SITE_URL = process.env.SITE_URL?.trim() || "https://jamaurjohnson.com";
const PIT = process.env.GHL_PIT_TOKEN?.trim();
const LOC = process.env.GHL_LOCATION_ID?.trim();
const API_VERSION = process.env.GHL_API_VERSION?.trim() || "2021-07-28";

if (!PIT || !LOC) {
  console.error("\nMissing env. Set GHL_PIT_TOKEN and GHL_LOCATION_ID in your shell or .env first.\n");
  process.exit(1);
}

const OUTPUT_PATH = ".ghl-book-products.json";
if (existsSync(OUTPUT_PATH)) {
  console.error(`\n${OUTPUT_PATH} already exists — refusing to run to avoid creating duplicate products.\nDelete the file first if you intentionally want to re-seed.\n`);
  process.exit(1);
}

const BOOKS = [
  {
    title: "The Last Verifiable Year",
    slug: "the-last-verifiable-year",
    cover: "cover-the-last-verifiable-year.jpg",
    price: 18.88,
    description: "A reckoning with the year reality became negotiable — and what comes after.",
  },
  {
    title: "Synchronicity",
    slug: "synchronicity",
    cover: "cover-synchronicity.jpg",
    price: 18.88,
    description: "Reading the signal in the noise. A guide to aligning with the patterns life is already showing you.",
  },
  {
    title: "Awakening to Source",
    slug: "awakening-to-source",
    cover: "cover-awakening-to-source.jpg",
    price: 18.88,
    description: "Remembering what you already are. A field manual for the inward path.",
  },
  {
    title: "The Space In Between",
    slug: "the-space-in-between",
    cover: "cover-the-space-in-between.jpg",
    price: 8.88,
    description: "Notes from the threshold — between identities, eras, and selves.",
  },
  {
    title: "Atomic Habits for Traders",
    slug: "atomic-habits-for-traders",
    cover: "cover-atomic-habits.jpg",
    price: 8.88,
    description: "The compounding edge: small systems, repeated, that build a trader who can't be shaken.",
  },
  {
    title: "Trading In The Vortex",
    slug: "trading-in-the-vortex",
    cover: "cover-trading-in-the-vortex.jpg",
    price: 8.88,
    description: "Operating from alignment instead of fear. A philosophy and playbook for the modern trader.",
  },
  {
    title: "Trade Hybrid",
    slug: "trade-hybrid",
    cover: "cover-trade-hybrid.jpg",
    price: 18.88,
    description: "The hybrid trader's manual — strategy, technology, psychology, and community as one engine.",
  },
];

async function ghl(path, init = {}) {
  const res = await fetch(`https://services.leadconnectorhq.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${PIT}`,
      Version: API_VERSION,
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
  const text = await res.text();
  const body = text ? JSON.parse(text) : {};
  if (!res.ok) {
    const msg = body?.message ?? body?.error ?? `HTTP ${res.status}`;
    throw new Error(`${path} → ${typeof msg === "string" ? msg : JSON.stringify(msg)}`);
  }
  return body;
}

async function createBookProduct(book) {
  const product = await ghl("/products/", {
    method: "POST",
    body: JSON.stringify({
      locationId: LOC,
      name: book.title,
      description: book.description,
      productType: "DIGITAL",
      availableInStore: false, // draft on creation
      image: `${SITE_URL}/photos/books/${book.cover}`,
      slug: book.slug,
    }),
  });
  const productId = product._id ?? product.id ?? product?.product?._id;
  if (!productId) throw new Error(`product create returned no id (body: ${JSON.stringify(product)})`);

  const price = await ghl(`/products/${productId}/price`, {
    method: "POST",
    body: JSON.stringify({
      locationId: LOC,
      name: "Ebook",
      type: "one_time",
      currency: "USD",
      amount: Math.round(book.price * 100),
    }),
  });
  const priceId = price._id ?? price.id ?? price?.price?._id;

  return { productId, priceId };
}

const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
const results = [];

console.log(`\nSeeding ${BOOKS.length} digital products into GHL location ${LOC}...\n`);

for (const book of BOOKS) {
  try {
    const { productId, priceId } = await createBookProduct(book);
    console.log(`✓ ${pad(book.title, 28)}  product ${productId}  price ${priceId}  $${book.price.toFixed(2)}`);
    results.push({ ...book, productId, priceId });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`✗ ${pad(book.title, 28)}  ${msg}`);
    results.push({ ...book, error: msg });
  }
}

writeFileSync(OUTPUT_PATH, JSON.stringify(results, null, 2));

const ok = results.filter((r) => r.productId).length;
const failed = results.length - ok;
console.log(`\n${ok}/${results.length} products created. ${failed ? failed + " failed.\n" : ""}`);
console.log(`Wrote ids to ${OUTPUT_PATH}`);
console.log(`Products are DRAFT in GHL. Review them, then run:\n  node scripts/publish-book-products.mjs\n`);

process.exit(failed ? 1 : 0);
