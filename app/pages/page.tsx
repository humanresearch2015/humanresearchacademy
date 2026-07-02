import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🏫 Human Research Academy</h1>

      <p style={{ marginTop: 10 }}>
        Plataforma de cursos profissionais para pesquisa, dados e saúde.
      </p>

      <div style={{ marginTop: 20 }}>
        <Link href="/courses">📚 Ver Cursos</Link>
      </div>
    </main>
  );
}