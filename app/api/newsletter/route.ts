import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.string().email() });

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // TODO: wire to real ESP (e.g. Mailchimp/Resend) once credentials are provided.
  console.log("[newsletter] subscribed:", parsed.data.email);

  return NextResponse.json({ ok: true });
}
