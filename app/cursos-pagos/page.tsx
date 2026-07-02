import Link from "next/link";

const cursosPagos = [
  "📚 Pesquisa Científica Completa",
  "📖 Metodologia de Pesquisa Científica",
  "📝 Escrita Científica e Publicação de Artigos",
  "📑 Revisão Sistemática da Literatura",
  "📊 Estatística Aplicada à Pesquisa",
  "📈 Bioestatística para Ciências da Saúde",
  "📉 SPSS para Análise de Dados",
  "📊 Excel Avançado para Análise de Dados",
  "📊 Power BI para Visualização de Dados",
  "📋 KoboToolbox Profissional",
  "📱 ODK Collect para Recolha de Dados",
  "📍 QGIS para Produção de Mapas",
  "🗺️ SIG Aplicado a Projetos de Desenvolvimento",
  "📈 Monitoria e Avaliação de Projetos",
  "📋 Elaboração de Indicadores SMART",
  "📑 Desenvolvimento de Quadros Lógicos",
  "📊 Gestão de Dados para ONGs",
  "🏥 Sistemas de Informação em Saúde (HIS)",
  "💊 Gestão de Dados Clínicos",
  "🩺 Saúde Pública Baseada em Evidências",
  "📂 Gestão de Bases de Dados em Saúde",
  "📑 Desenvolvimento de Formulários XLSForm",
  "📱 KoboToolbox Avançado",
  "🤖 Inteligência Artificial para Pesquisa Científica",
  "💻 ChatGPT para Investigadores",
  "📊 Dashboards Profissionais no Power BI",
  "💼 Gestão de Projetos Sociais",
  "📋 Elaboração de Propostas para Doadores",
  "💰 Gestão Financeira de Projetos",
  "📑 Escrita de Relatórios Técnicos Profissionais",
  "🌍 Gestão de Projetos Humanitários",
  "🎓 Preparação de Teses e Dissertações",
  "📖 Referenciação Bibliográfica (APA 7ª Edição)",
  "📚 Mendeley e Zotero para Gestão de Referências",
  "🧪 Ética em Pesquisa Científica",
  "📊 Avaliação de Impacto de Projetos",
  "🏆 Certificação em Monitoria e Avaliação",
];

export default function CursosPagos() {
  return (
    <main style={{ maxWidth: 1100, margin: "auto", padding: 40 }}>
      <h1>💰 Cursos Pagos</h1>

      <p style={{ marginBottom: 30 }}>
        Cursos profissionais completos com materiais exclusivos,
        acompanhamento e certificado.
      </p>

      {cursosPagos.map((curso) => (
        <div
          key={curso}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #ddd",
            borderRadius: 10,
            padding: 20,
            marginBottom: 20,
            background: "#fff",
          }}
        >
          <h3>{curso}</h3>

          <Link
            href="/pagamento"
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Inscrever-se
          </Link>
        </div>
      ))}
    </main>
  );
}