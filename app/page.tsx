import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", background: "#f8fafc" }}>
      
      <header style={{
        background: "#0f172a",
        color: "white",
        padding: 60,
        borderRadius: 12,
        textAlign: "center"
      }}>
        <h1>🎓 Human Research Academy</h1>
        <p>Plataforma de cursos com certificação</p>
      </header>

      <section style={{ marginTop: 40, textAlign: "center" }}>
        <h2>Bem-vindo</h2>

        <p style={{ maxWidth: 800, margin: "20px auto", color: "#475569" }}>
          Cursos gratuitos e pagos com certificação oficial.
        </p>

        <Link href="/login" style={btn}>
          Entrar
        </Link>
      </section>

      <section style={grid}>
        <Card title="📚 Catálogo" link="/cursos" />
        <Card title="🟢 Gratuitos" link="/cursos-gratuitos" />
        <Card title="💰 Pagos" link="/cursos-pagos" />
      </section>
    </main>
  );
}

function Card({ title, link }) {
  return (
    <div style={box}>
      <h3>{title}</h3>
      <Link href={link}>Aceder</Link>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 20,
  marginTop: 40,
};

const box = {
  padding: 25,
  background: "white",
  borderRadius: 12,
  border: "1px solid #e2e8f0",
  textAlign: "center",
};

const btn = {
  display: "inline-block",
  marginTop: 20,
  padding: "10px 20px",
  background: "#16a34a",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};