"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Registar() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const criarConta = async (e: any) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          password: senha,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao criar conta");
      }

      alert("Conta criada com sucesso!");

      router.push("/login");
    } catch (error) {
      alert("Erro ao registar utilizador");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 420, margin: "60px auto", padding: 20 }}>
      <h1>📝 Criar Conta</h1>

      <form onSubmit={criarConta}>
        <label>Nome completo</label>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={input}
          placeholder="Ex: Saimado Imputiua"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
          placeholder="email@exemplo.com"
        />

        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={input}
          placeholder="********"
        />

        <button type="submit" style={button} disabled={loading}>
          {loading ? "A criar conta..." : "Criar Conta"}
        </button>
      </form>
    </main>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 15,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const button = {
  width: "100%",
  padding: 12,
  background: "#16a34a",
  color: "white",
  border: 0,
  borderRadius: 6,
  fontWeight: "bold",
};