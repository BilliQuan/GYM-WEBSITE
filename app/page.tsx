import React from "react";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem" }}>
      <section style={{ textAlign: "center", maxWidth: 960 }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Landing Page</h1>
        <p style={{ fontSize: "1.125rem", color: "#444" }}>Welcome — start building your landing page.</p>
      </section>
    </main>
  );
}
