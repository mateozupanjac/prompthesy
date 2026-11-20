"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { useState } from "react";

// The sign-in form: centred and quiet, the field an underline like a line on
// paper, secondary actions as text links. Round = actions, square = fields (天圆地方).
const ring =
  "outline-none focus-visible:ring-2 focus-visible:ring-huang focus-visible:ring-offset-4 focus-visible:ring-offset-xuan";
const textLink = clsx(
  "text-base text-bone underline-offset-4 hover:underline",
  ring,
);

export function LoginForm({ id }: { id: string }) {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  function submit(event: { preventDefault: () => void }) {
    event.preventDefault();
    // TODO: wire up magic-link auth
    setNotice(
      "Email sign-in isn’t connected yet. This page is a design prototype.",
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-hex-3 text-center">
      <form className="flex w-full flex-col gap-hex-2" onSubmit={submit}>
        <label className="text-[15px] text-bone" htmlFor={`${id}-email`}>
          Email
        </label>
        <input
          autoComplete="email"
          className="h-12 rounded-none border-0 border-b border-bone/50 bg-transparent px-0 text-center text-[17px] text-silk outline-none transition-colors placeholder:text-bone focus:border-huang"
          id={`${id}-email`}
          placeholder="name@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={clsx(
            "mt-hex-2 h-12 rounded-heaven bg-huang text-[17px] text-xuan transition-colors hover:bg-[#D6A93C]",
            ring,
          )}
          type="submit"
        >
          Continue with email
        </button>
      </form>

      {notice && (
        <p className="text-[15px] text-huang" role="status">
          {notice}
        </p>
      )}

      {/* TODO: wire up Google sign-in */}
      <button className={textLink} type="button">
        Continue with Google
      </button>

      <p className="max-w-[46ch] text-sm leading-relaxed text-bone">
        We email you a sign-in link. By continuing, you agree to the{" "}
        <NextLink
          className="text-silk underline underline-offset-2"
          href="/terms"
        >
          Terms
        </NextLink>{" "}
        and{" "}
        <NextLink
          className="text-silk underline underline-offset-2"
          href="/privacy"
        >
          Privacy Policy
        </NextLink>
        .
      </p>
    </div>
  );
}
