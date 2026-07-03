"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);

  function handleLogin() {
    // LOGIN SIMPLES PARA TESTE
    if (email === "admin@hr.com" && password === "1234") {
      setLogged(true);
      localStorage.setItem("user", email);
    } else {
      alert("Credenciais inválidas");
    }
  }

  if (logged) {
    return (
      <main style={{ padding: 40 }}>
        <h1>✅ Login feito com sucesso</h1>
        <p>Bem-vindo à Human Research Academy</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>🔐 Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={input}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={input}
      />

      <button onClick={handleLogin} style={button}>
        Entrar
      </button>
    </main>
  );
}

/* ESTILOS */
const input = {
  display: "block",
  marginTop: 10,
  padding: 10,
  width: 250,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const button = {
  marginTop: 20,
  padding: "10px 18px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};