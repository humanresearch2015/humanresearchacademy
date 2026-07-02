import Link from "next/link";

export default function Cursos() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Cursos</h1>

      <Link href="/cursos-gratuitos">Gratuitos</Link><br />
      <Link href="/cursos-pagos">Pagos</Link>
    </main>
  );
}