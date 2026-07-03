"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // LOGIN SIMPLES (TESTE)
    if (email === "admin@hr.com" && password === "1234") {
      localStorage.setItem("user", email);
      router.push("/");
    } else {
      alert("Email ou password incorretos");
    }
  }

  return (
    <main style={container}>
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
const container = {
  padding: 40,
  fontFamily: "Arial",
};

const input = {
  display: "block",
  marginTop: 10,
  padding: 10,
  width: 250,
  border: "1px solid #ccc",
  borderRadius: 6,
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