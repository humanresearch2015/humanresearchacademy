"use client";

import { useSearchParams } from "next/navigation";

export default function PagamentoContent() {
  const params = useSearchParams();

  const curso = params.get("curso");

  return (
    <main style={{ padding: 40 }}>
      <h1>Pagamento</h1>

      <p>Curso: {curso}</p>

      <button>Pagar</button>
    </main>
  );
}