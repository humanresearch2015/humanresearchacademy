import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        
        {/* 🔷 HEADER GLOBAL */}
        <header
          style={{
            padding: "15px 20px",
            background: "#0f172a",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>HumanResearchAcademy</h2>

          <nav style={{ display: "flex", gap: "15px" }}>
            <a href="/" style={{ color: "white" }}>Home</a>
            <a href="/cursos" style={{ color: "white" }}>Cursos</a>
            <a href="/dashboard" style={{ color: "white" }}>Dashboard</a>
            <a href="/login" style={{ color: "white" }}>Login</a>
          </nav>
        </header>

        {/* 🔐 AUTH GLOBAL */}
        <SessionProvider>{children}</SessionProvider>

        {/* 🔻 FOOTER GLOBAL */}
        <footer
          style={{
            marginTop: "50px",
            padding: "20px",
            textAlign: "center",
            background: "#0f172a",
            color: "white",
          }}
        >
          © {new Date().getFullYear()} HumanResearchAcademy
        </footer>
      </body>
    </html>
  );
}