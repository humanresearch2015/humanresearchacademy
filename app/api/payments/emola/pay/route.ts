import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { amount, phone, reference, wallet_id, token } =
      await request.json();

    const url = `https://e2payments.explicador.co.mz/v1/c2b/emola-payment/${wallet_id}`;

    const response = await axios.post(
      url,
      {
        client_id: process.env.E2_CLIENT_ID,
        amount,
        phone,
        reference,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Falha no pagamento" },
      { status: 500 }
    );
  }
}