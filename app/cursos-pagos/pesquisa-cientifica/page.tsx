import Link from "next/link";

export default function PesquisaCientifica() {
  return (
    <main style={container}>
      <h1>📚 Pesquisa Científica Completa</h1>

      <p style={text}>
        Este curso ensina como desenvolver um projeto de pesquisa do zero,
        incluindo metodologia, revisão de literatura e redação científica.
      </p>

      <section style={card}>
        <h2>📌 Módulo 1: Introdução à Pesquisa</h2>
        <p>Conceitos básicos, tipos de pesquisa e estrutura de um estudo científico.</p>
      </section>

      <section style={card}>
        <h2>📌 Módulo 2: Metodologia</h2>
        <p>Abordagens qualitativa, quantitativa e mista.</p>
      </section>

      <section style={card}>
        <h2>📌 Módulo 3: Revisão de Literatura</h2>
        <p>Como encontrar, organizar e citar fontes científicas.</p>
      </section>

      <section style={card}>
        <h2>📌 Módulo 4: Redação Científica</h2>
        <p>Estrutura de artigos, relatórios e teses.</p>
      </section>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos-pagos">← Voltar</Link>
      </div>
    </main>
  );
}

/* ESTILOS */

const container = {
  padding: 40,
  fontFamily: "Arial, sans-serif",
};

const text = {
  color: "#475569",
  maxWidth: 700,
  lineHeight: 1.6,
};

const card = {
  marginTop: 20,
  padding: 20,
  border: "1px solid #e2e8f0",
  borderRadius: 12,
  background: "#fff",
};