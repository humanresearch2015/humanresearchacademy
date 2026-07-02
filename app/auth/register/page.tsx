"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleRegister() {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <div>
      <h1>Criar Conta</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Senha"
        type="password"
        onChange={(e) => setSenha(e.target.value)}
      />

      <button onClick={handleRegister}>Criar conta</button>
    </div>
  );
}