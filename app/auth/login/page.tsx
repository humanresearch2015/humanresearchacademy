"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    // Aqui depois ligas ao backend real
    alert("Login manual ainda não ligado ao backend");
  }

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "60px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Entrar na conta</h1>

      {/* EMAIL */}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {/* SENHA */}
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />

      {/* LOGIN BUTTON */}
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "10px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        Entrar
      </button>

      {/* ESQUECEU SENHA */}
      <p style={{ fontSize: "12px", marginBottom: "10px" }}>
        Esqueceu a senha?{" "}
        <a href="/forgot-password" style={{ color: "#2563eb" }}>
          Recuperar aqui
        </a>
      </p>

      <hr style={{ margin: "20px 0" }} />

      {/* 🔵 GOOGLE LOGIN */}
      <button
        onClick={() => signIn("google")}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          background: "white",
          cursor: "pointer",
        }}
      >
        🔵 Entrar com Google
      </button>

      {/* 📘 FACEBOOK LOGIN */}
      <button
        onClick={() => signIn("facebook")}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "6px",
          background: "white",
          cursor: "pointer",
        }}
      >
        📘 Entrar com Facebook
      </button>

      {/* REGISTO */}
      <p style={{ marginTop: "15px", fontSize: "13px" }}>
        Não tem conta?{" "}
        <a href="/register" style={{ color: "#2563eb" }}>
          Criar conta
        </a>
      </p>
    </div>
  );
}