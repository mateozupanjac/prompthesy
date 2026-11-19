import { NextResponse } from "next/server";

// TODO: not implemented yet
const notImplemented = () =>
  NextResponse.json({ error: "Not implemented" }, { status: 501 });

export { notImplemented as POST };
