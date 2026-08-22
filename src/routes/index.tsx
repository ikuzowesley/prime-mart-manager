import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Mart Supermarket — Inventory & Sales" },
      {
        name: "description",
        content:
          "Offline-ready inventory and sales management system for Prime Mart Supermarket in Kigali, Rwanda.",
      },
      { property: "og:title", content: "Prime Mart Supermarket — Inventory & Sales" },
      {
        property: "og:description",
        content: "Track stock, sales, profits, and print receipts — all offline in your browser.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/primemart.html"
      title="Prime Mart Supermarket"
      style={{ border: "none", width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
