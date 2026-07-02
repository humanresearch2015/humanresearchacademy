"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "#2563eb", padding: 16, color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Human Research Academy</h1>

        <div style={{ display: "flex", gap: 15 }}>
          <Link href="/">Home</Link>
          <Link href="/courses">Cursos</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}