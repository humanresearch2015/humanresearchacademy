import Link from "next/link";

export default function Cursos() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial", background: "#f8fafc" }}>
      
      <h1>📚 Catálogo de Cursos</h1>

      <p style={{ color: "#64748b", maxWidth: 700 }}>
        Bem-vindo ao catálogo da Human Research Academy.
        Aqui encontras cursos gratuitos para iniciação e cursos pagos com certificação profissional.
      </p>

      {/* 🟢 GRATUITOS */}
      <section style={{ marginTop: 40 }}>
        <h2>🟢 Cursos Gratuitos</h2>

        <p style={{ color: "#64748b" }}>
          Cursos introdutórios sem pagamento.
        </p>

        <Link href="/cursos-gratuitos" style={btnGreen}>
          Ver cursos gratuitos →
        </Link>
      </section>

      {/* 💰 PAGOS */}
      <section style={{ marginTop: 40 }}>
        <h2>💰 Cursos Pagos</h2>

        <p style={{ color: "#64748b" }}>
          Cursos completos com certificado oficial.
        </p>

        <Link href="/cursos-pagos" style={btnBlue}>
          Ver cursos pagos →
        </Link>
      </section>

      {/* EXTRA */}
      <section style={{ marginTop: 50, padding: 20, background: "white", borderRadius: 12 }}>
        <h3>🎓 Dica</h3>
        <p>
          Para obter certificado, é necessário concluir o curso e realizar o teste final.
        </p>

        <Link href="/dashboard" style={linkSmall}>
          Ir para o Dashboard →
        </Link>
      </section>
    </main>
  );
}

const btnGreen = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#16a34a",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};

const btnBlue = {
  display: "inline-block",
  marginTop: 10,
  padding: "10px 15px",
  background: "#2563eb",
  color: "white",
  borderRadius: 8,
  textDecoration: "none",
};

const linkSmall = {
  display: "inline-block",
  marginTop: 10,
  color: "#0f172a",
  textDecoration: "underline",
};