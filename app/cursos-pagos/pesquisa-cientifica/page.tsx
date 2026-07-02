"use client";

export default function Curso() {
  const acessos = JSON.parse(localStorage.getItem("acessos") || "[]");

  const cursoId = "pesquisa-cientifica";

  if (!acessos.includes(cursoId)) {
    return (
      <main style={{ padding: 40 }}>
        <h1>❌ Acesso bloqueado</h1>
        <p>Efetua o pagamento para aceder a este curso.</p>

        <a href="/pagamento?curso=pesquisa-cientifica">
          Ir para pagamento
        </a>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>📚 Pesquisa Científica Completa</h1>

      <p>Bem-vindo ao conteúdo do curso.</p>

      {/* CONTEÚDO REAL DO CURSO */}
      <ul>
        <li>Introdução</li>
        <li>Metodologia</li>
        <li>Revisão de literatura</li>
      </ul>
    </main>
  );
}