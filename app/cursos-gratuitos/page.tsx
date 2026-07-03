import Link from "next/link";

export default function CursosGratuitos() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Cursos Gratuitos</h1>

      <Link href="/cursos">Voltar</Link>
    </main>
  );
}