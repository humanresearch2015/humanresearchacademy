"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const entrar = (e: any) => {
    e.preventDefault();

    // validação básica
    if (!email || !senha) {
      alert("Por favor, preencha email e senha");
      return;
    }

    if (!email.includes("@")) {
      alert("Email inválido");
      return;
    }

    if (senha.length < 4) {
      alert("Senha muito curta");
      return;
    }

    // simulação de login (sem base de dados ainda)
    localStorage.setItem(
      "user",
      JSON.stringify({
        email,
      })
    );

    alert("Login efetuado com sucesso!");

    router.push("/perfil");
  };

  return (
    <main
      style={{
        maxWidth: 420,
        margin: "80px auto",
        padding: 30,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >
      <h1>🔐 Entrar</h1>

      <p style={{ color: "#666" }}>
        Insira seu email e senha para aceder à plataforma
      </p>

      <form onSubmit={entrar}>
        {/* EMAIL */}
        <label>Email</label>
        <input
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        {/* SENHA */}
        <label>Senha</label>
        <input
          type="password"
          placeholder="********"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={input}
        />

        <button type="submit" style={btn}>
          Entrar
        </button>
      </form>
    </main>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
};

const btn = {
  width: "100%",
  padding: 12,
  background: "#16a34a",
  color: "white",
  border: 0,
  borderRadius: 6,
  marginTop: 10,
  cursor: "pointer",
};