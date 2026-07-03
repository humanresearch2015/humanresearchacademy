"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main style={{ padding: 40 }}>
      <h1>🔐 Login</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginTop: 10 }}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginTop: 10 }}
      />

      <button
        style={{ marginTop: 20 }}
        onClick={() =>
          signIn("credentials", {
            email,
            password,
            callbackUrl: "/",
          })
        }
      >
        Entrar
      </button>
    </main>
  );
}