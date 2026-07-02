"use client";

import { Suspense } from "react";
import PagamentoConteudo from "./PagamentoConteudo";

export default function PagamentoPage() {
  return (
    <Suspense fallback={<p>A carregar...</p>}>
      <PagamentoConteudo />
    </Suspense>
  );
}