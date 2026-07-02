import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <nav style={{ display: "flex", gap: 20, padding: 20 }}>
          <Link href="/">Home</Link>
          <Link href="/cursos">Cursos</Link>
          <Link href="/cursos-gratuitos">Gratuitos</Link>
          <Link href="/cursos-pagos">Pagos</Link>

          {/* LOGIN SEMPRE AQUI */}
          <Link href="/login" style={{ marginLeft: "auto" }}>
            Entrar
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}