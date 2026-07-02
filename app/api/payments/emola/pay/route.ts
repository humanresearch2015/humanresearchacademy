import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await axios.post(
      "https://e2payments.explicador.co.mz/v1/c2b/emola-payment/" +
        body.wallet_id,
      {
        client_id: process.env.EMOLA_CLIENT_ID,
        amount: body.amount,
        phone: body.phone,
        reference: body.reference,
      },
      {
        headers: {
          Authorization: `Bearer ${body.token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(
      { error: "Erro no pagamento eMola" },
      { status: 500 }
    );
  }
}