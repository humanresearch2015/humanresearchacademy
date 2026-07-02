import { Suspense } from "react";
import PagamentoContent from "./PagamentoContent";

export default function Page() {
  return (
    <Suspense fallback={<p>A carregar...</p>}>
      <PagamentoContent />
    </Suspense>
  );
}