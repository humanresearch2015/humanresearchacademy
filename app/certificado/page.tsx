"use client";

import { useState } from "react";

export default function Certificado() {
  const [nome, setNome] = useState("");
  const [metodo, setMetodo] = useState("");
  const [pago, setPago] = useState(false);

  const solicitar = () => {
    if (!nome || !metodo) {
      alert("Preencha todos os campos");
      return;
    }

    alert("Pedido enviado. Aguarde confirmação do pagamento.");
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🎓 Certificado Human Research Academy</h1>

      <input
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={input}
      />

      <select
        value={metodo}
        onChange={(e) => setMetodo(e.target.value)}
        style={input}
      >
        <option value="">Selecionar pagamento</option>
        <option value="M-Pesa">M-Pesa</option>
        <option value="e-Mola">e-Mola</option>
      </select>

      <h3>💰 Valor: 100 MT</h3>

      <button onClick={solicitar} style={btn}>
        Solicitar Certificado
      </button>

      {/* SIMULAÇÃO DE LIBERAÇÃO */}
      {pago && (
        <div style={{ marginTop: 20, color: "green" }}>
          🎓 Certificado disponível para download
        </div>
      )}
    </main>
  );
}

const input = {
  width: "100%",
  padding: 12,
  marginBottom: 10,
  borderRadius: 6,
  border: "1px solid #ccc",
};

const btn = {
  padding: 12,
  background: "#16a34a",
  color: "white",
  border: 0,
  borderRadius: 6,
  width: "100%",
};