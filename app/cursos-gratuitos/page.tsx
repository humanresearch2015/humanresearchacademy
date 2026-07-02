import Link from "next/link";

export default function CursosGratuitos() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🟢 Cursos Gratuitos</h1>

      <div>
        <h3>Monitoria e Avaliação</h3>
        <Link href="/cursos-gratuitos/monitoria-avaliacao">
          Aceder
        </Link>
      </div>

      <div>
        <h3>Análise de Dados</h3>
        <span>Em breve</span>
      </div>
    </main>
  );
}