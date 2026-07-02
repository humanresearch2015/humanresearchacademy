"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Registar() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const criarConta = (e: any) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      alert("Preenche todos os campos");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    users.push({ nome, email, senha });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada com sucesso!");

    router.push("/login");
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>📝 Criar Conta</h1>

      <form onSubmit={criarConta}>
        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <br /><br />

        <button type="submit">Criar conta</button>
      </form>
    </main>
  );
}