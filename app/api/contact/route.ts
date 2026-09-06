import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  // TODO: wire to real inbox/CRM (e.g. Resend + HubSpot) once credentials are provided.
  console.log("[contact] new submission:", parsed.data);

  return NextResponse.json({ ok: true });
}
