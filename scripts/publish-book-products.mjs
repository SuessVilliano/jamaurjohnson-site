#!/usr/bin/env node
/**
 * Flips every product recorded in .ghl-book-products.json from draft to live
 * (availableInStore: true). Run after seed-book-products.mjs and after you've
 * verified the products look right in the GHL store UI.
 *
 * Usage:
 *   GHL_PIT_TOKEN=... GHL_LOCATION_ID=... node scripts/publish-book-products.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";

const PIT = process.env.GHL_PIT_TOKEN?.trim();
const LOC = process.env.GHL_LOCATION_ID?.trim();
const API_VERSION = process.env.GHL_API_VERSION?.trim() || "2021-07-28";
const INPUT_PATH = ".ghl-book-products.json";

if (!PIT || !LOC) {
  console.error("\nMissing env. Set GHL_PIT_TOKEN and GHL_LOCATION_ID first.\n");
  process.exit(1);
}

let entries;
try {
  entries = JSON.parse(readFileSync(INPUT_PATH, "utf8"));
} catch {
  console.error(`\nCould not read ${INPUT_PATH}. Run scripts/seed-book-products.mjs first.\n`);
  process.exit(1);
}

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

const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);
let published = 0;
let failed = 0;
const updated = [];

console.log(`\nPublishing ${entries.length} products in GHL location ${LOC}...\n`);

for (const e of entries) {
  if (!e.productId) {
    console.warn(`- ${pad(e.title, 28)}  skipped (no productId)`);
    updated.push(e);
    continue;
  }
  try {
    // GHL's PUT /products/:id is a full replace, not a patch — it 422s unless
    // name + productType are present. Fetch the current product and resend the
    // required fields alongside availableInStore.
    const current = await ghl(`/products/${e.productId}?locationId=${encodeURIComponent(LOC)}`);
    const p = current.product ?? current;
    await ghl(`/products/${e.productId}`, {
      method: "PUT",
      body: JSON.stringify({
        locationId: LOC,
        name: p.name,
        description: p.description,
        productType: p.productType || "DIGITAL",
        ...(p.image ? { image: p.image } : {}),
        ...(p.slug ? { slug: p.slug } : {}),
        availableInStore: true,
      }),
    });
    console.log(`✓ ${pad(e.title, 28)}  published`);
    published += 1;
    updated.push({ ...e, availableInStore: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(`✗ ${pad(e.title, 28)}  ${msg}`);
    failed += 1;
    updated.push({ ...e, lastError: msg });
  }
}

writeFileSync(INPUT_PATH, JSON.stringify(updated, null, 2));
console.log(`\n${published}/${entries.length} products published. ${failed ? failed + " failed.\n" : ""}`);
process.exit(failed ? 1 : 0);
