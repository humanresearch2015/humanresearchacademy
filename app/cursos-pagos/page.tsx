import Link from "next/link";

export default function PesquisaCientifica() {
  return (
    <main style={container}>
      <h1>📚 Pesquisa Científica Completa</h1>

      <p style={text}>
        Curso completo para desenvolvimento de projetos de pesquisa científica.
      </p>

      <h2>📖 Aulas</h2>

      <ul style={list}>
        <li>
          <Link href="/cursos-pagos/pesquisa-cientifica/aulas/introducao">
            📌 Aula 1: Introdução à Pesquisa
          </Link>
        </li>
      </ul>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos-pagos">← Voltar</Link>
      </div>
    </main>
  );
}

const container = {
  padding: 40,
  fontFamily: "Arial",
};

const text = {
  color: "#475569",
  maxWidth: 700,
  lineHeight: 1.6,
};

const list = {
  marginTop: 20,
  lineHeight: 2,
};