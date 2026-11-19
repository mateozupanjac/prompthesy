import { NextResponse } from "next/server";

import { getReading } from "@/lib/readings";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const reading = await getReading(id);

  if (!reading) {
    return NextResponse.json({ error: "Reading not found" }, { status: 404 });
  }

  return NextResponse.json(reading);
}

// TODO: PATCH / DELETE need ownership checks, which depend on auth
const notImplemented = () =>
  NextResponse.json({ error: "Not implemented" }, { status: 501 });

export { notImplemented as PATCH, notImplemented as DELETE };
