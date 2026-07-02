"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

export default function PesquisaCientificaPage() {
  return (
    <main style={container}>
      <h1>📚 Pesquisa Científica Completa</h1>

      <p style={descricao}>
        Curso completo de metodologia de pesquisa científica, revisão de
        literatura, elaboração de projetos, análise de dados e redação de
        artigos científicos.
      </p>

      <div style={card}>
        <h2>Preço</h2>
        <p style={preco}>2.500 MT</p>

        <Link
          href="/pagamento?curso=pesquisa-cientifica&preco=2500"
          style={botao}
        >
          💳 Comprar Curso
        </Link>
      </div>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos-pagos">
          ← Voltar aos cursos pagos
        </Link>
      </div>
    </main>
  );
}

const container: CSSProperties = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "20px",
  fontFamily: "Arial, sans-serif",
};

const descricao: CSSProperties = {
  lineHeight: 1.8,
  color: "#555",
};

const card: CSSProperties = {
  marginTop: 30,
  padding: 25,
  border: "1px solid #ddd",
  borderRadius: 10,
};

const preco: CSSProperties = {
  fontSize: 28,
  fontWeight: "bold",
  color: "#16a34a",
};

const botao: CSSProperties = {
  display: "inline-block",
  marginTop: 20,
  padding: "12px 24px",
  background: "#16a34a",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
};