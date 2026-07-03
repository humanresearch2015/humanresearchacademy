"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AulaIntroducao() {
  const [autorizado, setAutorizado] = useState(false);

  useEffect(() => {
    const acesso = localStorage.getItem("acesso_pago");
    if (acesso === "true") {
      setAutorizado(true);
    }
  }, []);

  if (!autorizado) {
    return (
      <main style={{ padding: 40 }}>
        <h1>🔒 Conteúdo Protegido</h1>
        <p>Este curso é pago.</p>

        <Link href="/cursos-pagos">← Voltar</Link>
      </main>
    );
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>📌 Aula 1: Introdução à Pesquisa Científica</h1>

      <p>
        Nesta aula vais aprender os conceitos fundamentais da pesquisa científica.
      </p>

      <div style={{ marginTop: 30 }}>
        <Link href="/cursos-pagos/pesquisa-cientifica">
          ← Voltar ao curso
        </Link>
      </div>
    </main>
  );
}