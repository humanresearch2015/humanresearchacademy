import Link from "next/link";

export default function CursosPagos() {
  return (
    <main style={{ padding: 40 }}>
      <h1>💎 Cursos Pagos</h1>

      <Link href="/cursos-pagos/pesquisa-cientifica">
        Pesquisa Científica
      </Link>
    </main>
  );
}