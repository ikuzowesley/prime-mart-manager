# Prime Mart Manager (67)

You are a full-stack developer. Build a complete, single-file Inventory and Sales Management

System for "Prime Mart Supermarket," a small retail shop in Rwanda. Deliver one self-contained

HTML file (HTML + CSS + JavaScript embedded, no external dependencies except the SheetJS CDN

script for Excel export) that works offline in any browser using localStorage for persistence.

BUSINESS CONTEXT

- Business Name: Prime Mart Supermarket

- Location: Kigali, Rwanda

- Currency: Rwandan Franc (RWF)

- Tracks goods coming IN (stock/purchases) and goods going OUT (sales)

CORE FEATURES

1. GOODS RECEIVED MODULE (Stock In)

Form fields: Product Name, Category, Quantity Received, Unit (pcs, carton, jar, crate, kg,

litre), Purchase Price per Unit (RWF), Total Purchase Cost (auto: Qty × Purchase Price),

Selling Price per Unit (RWF), Supplier Name, Date Received, Notes (optional).

2. SALES MODULE (Stock Out)

Form fields: Product Name (dropdown from existing stock), Quantity Sold, Selling Price per Unit

(auto-filled, editable), Total Sale Amount (auto-calculated), Date of Sale, Notes (optional).

Automatically deducts sold quantity from current stock.

3. INVENTORY DASHBOARD

Live table: Product Name & Category, Total Qty Received (all time), Total Qty Sold (all time),

Current Stock (Received − Sold), Purchase Price/Unit, Selling Price/Unit, Profit Margin/Unit,

Total Profit Earned, Stock Status badge — "In Stock" (green), "Low Stock" (orange, ≤5 units),

"Out of Stock" (red).

4. SALES HISTORY TABLE

Date, Product Name, Qty Sold, Unit Selling Price, Total Revenue. Filterable by date range and

product name.

5. STOCK RECEIVED HISTORY TABLE

Date, Product Name, Supplier, Quantity, Purchase Price, Total Cost Paid.

6. SUMMARY METRIC CARDS (top of dashboard)

Total Products Tracked, Total Stock Value (current stock × purchase price, summed), Total

Revenue from Sales, Total Purchase Cost, Total Gross Profit, Number of Out-of-Stock Items.

TECHNICAL REQUIREMENTS

- Single HTML file, all CSS/JS embedded

- localStorage for all data persistence

- Fully responsive (desktop + mobile)

- Sidebar or tab navigation: Dashboard, Add Stock, Record Sale, Stock History, Sales History

- Clean, professional green-and-white color scheme

- "Prime Mart Supermarket" name + small cart/store icon in header

- Working search/filter on the inventory table

- Delete option on records, with confirmation prompt

- All dates displayed as DD/MM/YYYY

VALIDATION RULES

- Quantity and price fields accept only positive numbers

- Cannot sell more than available stock — show error if attempted

- All fields required except Notes

- Warn if selling price is set below purchase price

SEED / SAMPLE DATA — PRELOAD THESE REAL PRODUCTS ON FIRST LOAD

Use this actual stock data (supplier: "Local Supplier", date received: 16/05/2026 unless noted)

instead of generic placeholders:

| Product | Category | Unit | Qty Received | Purchase Price (RWF) | Selling Price (RWF) |

|-----------------------|-----------------|---------|---------------|------------------------|------------------------|

| Crystar Oil | Food | jerrycan| 7 | 17,600 | 20,000 |

| Endomie Super | Food | pcs | 80 | 288 | 400 |

| Ball Gum | Food | jar | 12 | 2,333 | 50 (per piece in jar) |

| Soft Spring Fresh | Personal Care | pcs | 100 | 650 | 1,100 |

| Petit Beurre (50pcs) | Food | carton | 1 | 40,000 | 1,200 (per pc) |

| Petit Beurre (10pcs) | Food | carton | 1 | 23,500 | 3,000 (per carton) |

| Ketchup | Food | carton (36pcs)| 1 | 36,500 | 1,500 (per pc) |

| Konyagi Big | Beverages | carton (12pcs)| 1 | 82,000 | 10,000 (per pc) |

| Konyagi Medium | Beverages | carton (16pcs)| 1 | 77,000 | 7,000 (per pc) |

| Konyagi Small | Beverages | carton (35pcs)| 1 | 82,000 | 3,000 (per pc) |

| Guarana SMN | Beverages | carton (72pcs)| 1 | 118,500 | 3,000 (per pc) |

| Basic Towel | Household | pack (20pcs)| 1 | 34,000 | 2,000 (per pc) |

| Toothpaste | Personal Care | carton (72pcs)| 1 | 136,700 | — |

| Toothpaste Chocolate | Personal Care | carton (48pcs)| 1 | 115,900 | — |

| Inyange Milk | Food | pcs | 1 | 8,200 | — |

| Sugar | Food | pcs | 1 | 17,000 | — |

| Meru Soap | Personal Care | pack (10pcs)| 1 | 16,500 | — |

| Spaghetti | Food | pack (20pcs)| 1 | 22,500 | — |

| Fanta (20 cartons) | Beverages | crate | 1 | 200,000 | — |

| Water (big) | Beverages | crate | 1 | 19,200 | — |

| Dollars (candy) | Food | pcs | 12 | 18,500 | 2,500 |

| Niks | Food | pcs | 24 | 16,500 | 1,000 |

| Quaker | Food | pcs | 12 | 44,000 | 5,000 |

| Cotex Softcare | Personal Care | pack | 12 | 11,500 | 1,500 |

For rows where the selling price is missing, set a reasonable selling price ~12–20% above the

purchase price so the dashboard isn't blank. Add a handful of sales transactions against a few

of these products (e.g., Crystar Oil: sold 2 units, Endomie Super: sold 80 units / fully sold

out) so the Sales History table and dashboard metrics aren't empty on first load.

PRINTABLE RECEIPTS

Customer Sales Receipt — auto-generated after every recorded sale:

- "Prime Mart Supermarket" header with logo placeholder, address line "Kigali, Rwanda"

- Auto-generated Receipt Number (e.g., REC-00124)

- Date/time of sale

- Table: Product Name | Quantity | Unit Price (RWF) | Total (RWF)

- Subtotal, notes, Grand Total

- Thank-you message: "Thank you for shopping at Prime Mart Supermarket!"

- "Print Receipt" button with print-optimized CSS (hides nav/sidebar/buttons, shows only receipt)

- Also accessible via "View Receipt" button on each Sales History row

Stock Delivery Note — generated when new stock is added:

- Header, auto-generated Delivery Note Number (e.g., DN-00045)

- Date received, Supplier Name

- Table: Product Name | Quantity | Unit | Purchase Price (RWF) | Total Cost (RWF)

- Grand Total Cost Paid

- "Print Delivery Note" button, also accessible from Stock History rows

EXCEL EXPORT (use SheetJS via CDN:

https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js)

1. Inventory Report — button on Dashboard

   File: PrimeMart_Inventory_[DATE].xlsx

   Columns: Product, Category, Qty Received, Qty Sold, Current Stock, Purchase Price, Selling

   Price, Profit Margin, Total Profit, Stock Status

2. Sales History Export — button on Sales History page

   File: PrimeMart_Sales_[DATE].xlsx

   Columns: Receipt No., Date, Product, Qty Sold, Unit Price, Total Revenue

   Include a TOTALS row summing Qty Sold and Total Revenue

3. Stock Received History Export — button on Stock History page

   File: PrimeMart_StockReceived_[DATE].xlsx

   Columns: Delivery Note No., Date, Supplier, Product, Qty, Unit, Purchase Price, Total Cost

   Include a TOTALS row summing Total Cost

4. Full Business Summary Export — button in Dashboard summary section

   File: PrimeMart_FullReport_[DATE].xlsx

   Multi-sheet workbook: "Inventory", "Sales History", "Stock History" tabs

All exports must have: bold green-background/white-text headers, auto-fitted column widths,

RWF values formatted with thousand separators, and export date/time noted in cell A1 above

the headers.

OUTPUT

Deliver one complete, self-contained HTML file that opens and runs immediately in any browser,

fully functional offline.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45464c45-e73c-420b-ae97-ee796930956f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
