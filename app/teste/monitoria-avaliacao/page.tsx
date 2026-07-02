"use client";

import { useState } from "react";
import Link from "next/link";

export default function Teste() {
  const [ok, setOk] = useState(false);

  const passar = () => setOk(true);

  return (
    <main style={{ padding: 40 }}>
      <h1>🧪 Teste Final</h1>

      <button onClick={passar} style={{ padding: 10 }}>
        Simular aprovação
      </button>

      {ok && (
        <Link href="/certificado?curso=Monitoria%20e%20Avaliação">
          🎓 Emitir Certificado
        </Link>
      )}
    </main>
  );
}