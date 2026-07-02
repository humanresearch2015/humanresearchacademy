import Link from "next/link";
import type { CSSProperties } from "react";

export default function CursosGratuitos() {
  return (
    <main style={container}>
      <h1>🟢 Cursos Gratuitos</h1>

      <p style={descricao}>
        Cursos introdutórios gratuitos da Human Research Academy.
        Começa aqui para aprender os fundamentos da investigação,
        monitoria e análise de dados.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>📘 Cursos disponíveis</h2>

        {/* Curso 1 */}
        <div style={card}>
          <h3>📊 Conceitos Básicos de Monitoria e Avaliação</h3>

          <p>
            Aprende os fundamentos de monitoria, avaliação,
            indicadores, resultados, impacto e elaboração de
            relatórios.
          </p>

          <Link
            href="/cursos-gratuitos/monitoria-avaliacao"
            style={btn}
          >
            Iniciar Curso →
          </Link>
        </div>

        {/* Curso 2 */}
        <div style={card}>
          <h3>📈 Fundamentos de Análise de Dados</h3>

          <p>
            Introdução aos dados, indicadores, limpeza,
            organização e interpretação básica.
          </p>

          <Link href="#" style={btnDisabled}>
            Em breve
          </Link>
        </div>

        {/* Curso 3 */}
        <div style={card}>
          <h3>📋 Introdução ao KoboToolbox</h3>

          <p>
            Aprende a criar formulários digitais para recolha
            de dados em pesquisas e projetos.
          </p>

          <Link href="#" style={btnDisabled}>
            Em breve
          </Link>
        </div>
      </section>

      <div style={{ marginTop: 40 }}>
        <Link href="/cursos" style={voltar}>
          ← Voltar ao catálogo
        </Link>
      </div>
    </main>
  );
}

/* =======================
   ESTILOS
======================= */

const container: CSSProperties = {
  padding: 40,
  fontFamily: "Arial, sans-serif",
  background: "#f8fafc",
  minHeight: "100vh",
};

const descricao: CSSProperties = {
  color: "#64748b",
  maxWidth: 700,
  lineHeight: 1.6,
};

const card: CSSProperties = {
  background: "#ffffff",
  padding: 20,
  marginTop: 20,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const btn: CSSProperties = {
  display: "inline-block",
  marginTop: 15,
  padding: "10px 18px",
  background: "#16a34a",
  color: "#ffffff",
  borderRadius: 8,
  textDecoration: "none",
  fontWeight: "bold",
};

const btnDisabled: CSSProperties = {
  display: "inline-block",
  marginTop: 15,
  padding: "10px 18px",
  background: "#94a3b8",
  color: "#ffffff",
  borderRadius: 8,
  textDecoration: "none",
  pointerEvents: "none",
  cursor: "not-allowed",
  opacity: 0.8,
};

const voltar: CSSProperties = {
  color: "#0f172a",
  textDecoration: "none",
  fontWeight: "bold",
};