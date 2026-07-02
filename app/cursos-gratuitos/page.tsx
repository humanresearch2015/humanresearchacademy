import Link from "next/link";

export default function CursosGratuitos() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", background: "#f8fafc" }}>
      
      <h1>🟢 Cursos Gratuitos</h1>

      <p style={{ color: "#64748b", maxWidth: 700 }}>
        Cursos introdutórios gratuitos da Human Research Academy.
        Começa aqui para aprender os fundamentos.
      </p>

      {/* LISTA DE CURSOS */}
      <section style={{ marginTop: 40 }}>
        <h2>📘 Cursos disponíveis</h2>

        {/* CURSO 1 */}
        <div style={card}>
          <h3>📊 Conceitos Básicos de Monitoria e Avaliação</h3>
          <p>
            Aprende os fundamentos de monitoria, avaliação, indicadores e impacto.
          </p>

          <Link href="/cursos-gratuitos/monitoria-avaliacao" style={btn}>
            Aceder ao curso →
          </Link>
        </div>

        {/* CURSO 2 (EXEMPLO FUTURO) */}
        <div style={card}>
          <h3>📈 Fundamentos de Análise de Dados</h3>
          <p>
            Introdução a dados, indicadores e interpretação básica.
          </p>

          <Link href="#" style={btnDisabled}>
            Em breve
          </Link>
        </div>

        {/* CURSO 3 */}
        <div style={card}>
          <h3>📋 Introdução ao KoboToolbox</h3>
          <p>
            Recolha digital de dados para projetos e pesquisas.
          </p>

          <Link href="#" style={btnDisabled}>
            Em breve
          </Link>
        </div>
      </section>

      {/* VOLTAR */}
      <div style={{ marginTop: 40 }}>
        <Link href="/cursos" style={{ color: "#0f172a" }}>
          ← Voltar ao catálogo
        </Link>
      </div>
    </main>
  );
}

const card = {
  background: "white",
  padding: 20,
  marginTop: 20,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
};

const btn = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#16a34a",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};

const btnDisabled = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#94a3b8",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
  pointerEvents: "none",
};