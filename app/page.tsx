import Link from "next/link";
import { CSSProperties } from "react";

export default function Home() {
  return (
    <main style={container}>
      <h1>🎓 Human Research Academy</h1>

      <p style={subtitle}>
        Plataforma de formação em Pesquisa Científica, Monitoria e Avaliação,
        Estatística, Power BI, KoboToolbox, Saúde Pública e muito mais.
      </p>

      <div style={grid}>
        <Card
          title="📚 Cursos Gratuitos"
          link="/cursos-gratuitos"
        />

        <Card
          title="💎 Cursos Pagos"
          link="/cursos-pagos"
        />

        <Card
          title="👤 Entrar"
          link="/login"
        />

        <Card
          title="📝 Criar Conta"
          link="/register"
        />
      </div>
    </main>
  );
}

function Card({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <div style={box}>
      <h3>{title}</h3>

      <Link href={link} style={button}>
        Aceder
      </Link>
    </div>
  );
}

const container: CSSProperties = {
  padding: 40,
  fontFamily: "Arial",
};

const subtitle: CSSProperties = {
  color: "#475569",
  marginBottom: 30,
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: 20,
};

const box: CSSProperties = {
  padding: 25,
  background: "#ffffff",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  textAlign: "center",
};

const button: CSSProperties = {
  display: "inline-block",
  marginTop: 15,
  padding: "10px 18px",
  background: "#2563eb",
  color: "#ffffff",
  borderRadius: 8,
  textDecoration: "none",
};