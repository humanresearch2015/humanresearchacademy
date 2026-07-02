import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  return NextResponse.json({
    success: true,
    message: `Se existir conta com ${email}, enviamos link de recuperação`,
  });
}