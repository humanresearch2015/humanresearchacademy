import Link from "next/link";

export default function AulaIntroducao() {
  return (
    <main style={container}>
      <h1>📌 Aula 1: Introdução à Pesquisa Científica</h1>

      <p style={text}>
        Nesta aula vais aprender os conceitos fundamentais da pesquisa científica,
        tipos de pesquisa e como estruturar um estudo.
      </p>

      <ul>
        <li>O que é pesquisa científica</li>
        <li>Tipos de pesquisa</li>
        <li>Estrutura de um estudo</li>
      </ul>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos-pagos/pesquisa-cientifica">
          ← Voltar ao curso
        </Link>
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