"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Pagamento() {
  const params = useSearchParams();
  const router = useRouter();

  const curso = params.get("curso");

  const [metodo, setMetodo] = useState("");

  const pagar = () => {
    if (!metodo) {
      alert("Seleciona M-Pesa ou e-Mola");
      return;
    }

    const acessos = JSON.parse(localStorage.getItem("acessos") || "[]");

    if (!acessos.includes(curso)) {
      acessos.push(curso);
    }

    localStorage.setItem("acessos", JSON.stringify(acessos));

    alert("Pagamento confirmado!");

    router.push("/dashboard");
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>💳 Pagamento do Curso</h1>

      <p>Curso: {curso}</p>

      <select onChange={(e) => setMetodo(e.target.value)}>
        <option value="">Selecionar método</option>
        <option value="M-Pesa">M-Pesa</option>
        <option value="e-Mola">e-Mola</option>
      </select>

      <br /><br />

      <button onClick={pagar}>
        Confirmar Pagamento
      </button>
    </main>
  );
}