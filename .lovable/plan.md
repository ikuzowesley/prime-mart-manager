## Prime Mart Supermarket — Inventory & Sales System

Deliver in two forms:

### 1. Standalone HTML file

Single self-contained file at `/mnt/documents/PrimeMart.html` — opens in any browser offline. Includes embedded CSS + JS, SheetJS via CDN for Excel export, localStorage persistence.

### 2. Lovable app integration

Replace `src/routes/index.tsx` with a route that embeds the standalone HTML via an `<iframe>` (served from `/public/primemart.html`) so the live preview shows the working app.

### Build scope (single HTML)

**Layout**

- Header: "Prime Mart Supermarket" + cart SVG icon, "Kigali, Rwanda"
- Sidebar nav (collapses to top tabs on mobile): Dashboard · Add Stock · Record Sale · Stock History · Sales History
- Green (#0a7d3b) + white theme, clean cards, responsive grid

**Modules**

- Goods Received form → saves to `stockReceived[]`, generates `DN-#####`, opens printable Delivery Note
- Sales form → product dropdown from in-stock items, auto-fill selling price (editable), validates stock availability, warns if price < cost, deducts stock, generates `REC-#####`, opens printable Receipt
- Dashboard: 6 metric cards + inventory table with search, status badges (In Stock / Low ≤5 / Out)
- Sales History: filter by date range + product, View Receipt + Delete per row
- Stock History: View Delivery Note + Delete per row
- All dates DD/MM/YYYY; RWF formatted with thousand separators

**Printable docs**

- Receipt + Delivery Note in modal; `@media print` hides everything except the doc
- Both reachable from history rows

**Excel exports (SheetJS)**

- Inventory, Sales, Stock Received, Full Multi-sheet workbook
- Bold green header row (white text), column widths, RWF number format, timestamp in A1
- Totals row on Sales and Stock exports

**Seed data**

- All 24 products from the table preloaded on first launch (flag in localStorage)
- Missing selling prices: set to ~15% above cost
- Seeded sales: Crystar Oil ×2, Endomie Super ×80 (sells out), plus a few others to populate metrics

**Validation**

- Positive numbers only, required fields, stock-availability check, low-price warning, confirm prompt on delete

### Technical details

- Single `<script>` with state object `{stock: [...], sales: [...], meta: {recNo, dnNo}}`, persisted to `localStorage["primemart_v1"]`
- Pure vanilla JS, no framework
- File written to `/mnt/documents/PrimeMart.html` (download) and copied to `public/primemart.html`
- New `src/routes/index.tsx` renders full-viewport iframe pointing to `/primemart.html` with proper `<head>` meta (title "Prime Mart Supermarket — Inventory & Sales", description, og tags)

### Deliverables

1. `/mnt/documents/PrimeMart.html` — download artifact
2. `public/primemart.html` — same file served by the app
3. `src/routes/index.tsx` — iframe wrapper route
