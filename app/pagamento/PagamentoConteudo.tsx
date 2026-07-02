"use client";

import { useSearchParams } from "next/navigation";

export default function PagamentoConteudo() {
  const searchParams = useSearchParams();

  const curso = searchParams.get("curso");
  const preco = searchParams.get("preco");

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "50px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>💳 Pagamento</h1>

      <p>
        <strong>Curso:</strong> {curso ?? "Não informado"}
      </p>

      <p>
        <strong>Preço:</strong> {preco ?? "0"} MT
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#16a34a",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Pagar com eMola
      </button>
    </main>
  );
}