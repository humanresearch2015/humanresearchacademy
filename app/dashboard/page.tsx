"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>{user ?? "Sem utilizador"}</p>
    </main>
  );
}