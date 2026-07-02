"use client";

import { useEffect, useState } from "react";

export default function Perfil() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) setUser(JSON.parse(data));
  }, []);

  if (!user) return <p>A carregar...</p>;

  return (
    <main style={{ padding: 40 }}>
      <h1>👤 Perfil</h1>
      <p>Email: {user.email}</p>
    </main>
  );
}