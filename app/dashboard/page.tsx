"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("user");

    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  if (!user) {
    return (
      <main style={{ padding: 40 }}>
        <h1>📊 Dashboard</h1>
        <p>Precisas de iniciar sessão.</p>

        <Link href="/login">🔐 Ir para Login</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>📊 Dashboard</h1>

      {/* UTILIZADOR */}
      <div style={box}>
        <h2>👤 Utilizador</h2>
        <p>Email: {user.email}</p>
      </div>

      {/* CURSOS */}
      <div style={box}>
        <h2>📚 Os teus cursos</h2>

        <ul>
          <li>🟢 Monitoria e Avaliação</li>
          <li>📊 Análise de Dados</li>
          <li>📚 Pesquisa Científica</li>
        </ul>

        <Link href="/cursos">Ver todos os cursos</Link>
      </div>

      {/* CERTIFICADO */}
      <div style={box}>
        <h2>🎓 Certificados</h2>

        <p>Quando concluires um curso, aqui aparece o teu certificado.</p>

        <Link href="/certificado">
          Aceder certificado
        </Link>
      </div>

      {/* LOGOUT */}
      <button
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
        style={btn}
      >
        Sair
      </button>
    </main>
  );
}

const box = {
  background: "white",
  padding: 20,
  marginBottom: 20,
  borderRadius: 12,
  border: "1px solid #e2e8f0",
};

const btn = {
  padding: 10,
  background: "red",
  color: "white",
  border: 0,
  borderRadius: 6,
};