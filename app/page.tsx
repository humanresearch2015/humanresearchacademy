import Link from "next/link";

export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Human Research Academy</h1>

      <ul>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/cursos">Cursos</Link></li>
        <li><Link href="/cursos-gratuitos">Cursos Gratuitos</Link></li>
        <li><Link href="/cursos-pagos">Cursos Pagos</Link></li>
      </ul>
    </main>
  );
}