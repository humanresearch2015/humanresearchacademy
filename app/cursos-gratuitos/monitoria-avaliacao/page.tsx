import Link from "next/link";

export default function MonitoriaAvaliacao() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", background: "#f8fafc" }}>
      
      <h1>🟢 Conceitos Básicos de Monitoria e Avaliação</h1>

      <p style={{ color: "#64748b", maxWidth: 800 }}>
        Este curso apresenta os fundamentos essenciais de Monitoria e Avaliação (M&A),
        usados em projetos de desenvolvimento, ONGs e programas de saúde.
      </p>

      <hr />

      {/* CONTEÚDO */}
      <h2>📖 Conteúdo do Curso</h2>

      <ul>
        <li>O que é Monitoria</li>
        <li>O que é Avaliação</li>
        <li>Diferença entre Monitoria e Avaliação</li>
        <li>Indicadores de desempenho</li>
        <li>Importância do M&A em projetos</li>
      </ul>

      {/* BOTÃO FINAL */}
      <div style={{ marginTop: 40 }}>
        <h3>🧪 Teste Final</h3>

        <p>
          Para obter o certificado, deve realizar o teste final do curso.
        </p>

        <Link
          href="/certificado?curso=monitoria-avaliacao"
          style={btn}
        >
          Emitir Certificado
        </Link>
      </div>
    </main>
  );
}

const btn = {
  display: "inline-block",
  marginTop: 10,
  padding: "12px 18px",
  background: "#16a34a",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};