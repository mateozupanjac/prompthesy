import { NextResponse } from "next/server";

import {
  createReading,
  InvalidReadingInput,
  parseCreateReadingInput,
} from "@/lib/readings";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const reading = await createReading(parseCreateReadingInput(body));

    return NextResponse.json(reading, { status: 201 });
  } catch (error) {
    if (error instanceof InvalidReadingInput) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    throw error;
  }
}
