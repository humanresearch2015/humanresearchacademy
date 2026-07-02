import Link from "next/link";
import type { CSSProperties } from "react";

export default function CursosGratuitos() {
  return (
    <main style={container}>
      <h1>🟢 Cursos Gratuitos</h1>

      <p style={texto}>
        Cursos introdutórios gratuitos da Human Research Academy.
      </p>

      <div style={card}>
        <h3>📊 Monitoria e Avaliação</h3>
        <p>Aprende indicadores, avaliação e impacto.</p>

        <Link href="/cursos-gratuitos/monitoria-avaliacao" style={btn}>
          Aceder →
        </Link>
      </div>

      <div style={card}>
        <h3>📈 Análise de Dados</h3>
        <p>Introdução à análise de dados.</p>

        <span style={btnDisabled}>Em breve</span>
      </div>

      <div style={card}>
        <h3>📋 KoboToolbox</h3>
        <p>Recolha digital de dados.</p>

        <span style={btnDisabled}>Em breve</span>
      </div>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos">← Voltar</Link>
      </div>
    </main>
  );
}

const container: CSSProperties = {
  padding: 40,
  fontFamily: "Arial",
};

const texto: CSSProperties = {
  color: "#475569",
};

const card: CSSProperties = {
  marginTop: 20,
  padding: 20,
  border: "1px solid #e2e8f0",
  borderRadius: 12,
};

const btn: CSSProperties = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#16a34a",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};

const btnDisabled: CSSProperties = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#94a3b8",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
  opacity: 0.6,
  cursor: "not-allowed",
};