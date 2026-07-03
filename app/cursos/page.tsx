import Link from "next/link";

export default function Cursos() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Cursos</h1>

      <ul>
        <li><Link href="/cursos-gratuitos">Cursos Gratuitos</Link></li>
        <li><Link href="/cursos-pagos">Cursos Pagos</Link></li>
      </ul>
    </main>
  );
}