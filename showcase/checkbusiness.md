---
name: CheckBusiness
description: ABC and XYZ inventory analysis of sales spreadsheets that runs entirely in the browser — the XLSX file is parsed, analysed and exported by a Rust engine compiled to WebAssembly and never uploaded.
keywords: rust wasm-bindgen xlsx excel spreadsheet analytics inventory abc-analysis xyz-analysis privacy client-side business
logo_url: https://checkbusiness.pl/img/logo/logo.png
website: https://checkbusiness.pl/en
---

CheckBusiness runs ABC, XYZ and combined XYZ+ABC analysis on a sales export — the
classification small retailers and wholesalers use to decide which products to keep,
reorder or cut.

The whole pipeline is a Rust library compiled to WebAssembly with `wasm-bindgen`:
reading the XLSX workbook, validating columns, computing classes, the XYZ+ABC matrix
and rule-based recommendations, and writing the XLSX report. The browser downloads the
module once as a separate `.wasm` file; after that the analysis works with the network
switched off.

WebAssembly here is not about speed first — it is about privacy by construction. Sales
data is often something a business may not send to an online service (AI policies,
client NDAs), and with the computation in the browser there is no endpoint that could
receive the file. Access to paid analyses is checked inside the module too: a
short-lived Ed25519-signed token is verified against a public key compiled into the
engine, so the server grants access without ever seeing the data.

How the data flows, and how to verify it yourself:
https://checkbusiness.pl/en/data-flow
