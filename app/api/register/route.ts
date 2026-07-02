import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { nome, email, senha } = body;

  return NextResponse.json({
    success: true,
    message: "Utilizador registado com sucesso",
    utilizador: { nome, email },
  });
}