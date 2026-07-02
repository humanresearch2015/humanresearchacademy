"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h1>Login</h1>

      <input placeholder="Email" />
      <input type="password" placeholder="Senha" />

      <button>Entrar</button>

      <hr />

      <button onClick={() => signIn("google")}>
        Entrar com Google
      </button>

      <button onClick={() => signIn("facebook")}>
        Entrar com Facebook
      </button>
    </div>
  );
}