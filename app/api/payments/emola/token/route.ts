import { NextResponse } from "next/server";
import axios from "axios";

export async function POST() {
  try {
    const response = await axios.post(
      "https://e2payments.explicador.co.mz/oauth/token",
      {
        grant_type: "client_credentials",
        client_id: process.env.E2_CLIENT_ID,
        client_secret: process.env.E2_CLIENT_SECRET,
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro ao gerar token" },
      { status: 500 }
    );
  }
}