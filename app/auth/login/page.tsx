"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = (e: any) => {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    // simulação login
    localStorage.setItem("user", JSON.stringify({ email }));

    alert("Login efetuado com sucesso!");

    router.push("/");
  };

  return (
    <main style={{ maxWidth: 400, margin: "80px auto", padding: 20 }}>
      <h1>🔐 Login</h1>

      <form onSubmit={entrar}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={input}
        />

        <button type="submit" style={button}>
          Entrar
        </button>
      </form>
    </main>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  border: "1px solid #ccc",
  borderRadius: 6,
};

const button = {
  width: "100%",
  padding: 12,
  background: "#16a34a",
  color: "white",
  border: 0,
  borderRadius: 6,
  cursor: "pointer",
};