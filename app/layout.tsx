import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import {
  fontDisplay,
  fontHanzi,
  fontNotoDisplay,
  fontNotoSerif,
  fontSerif,
} from "@/config/fonts";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0A09",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-serif antialiased",
          fontDisplay.variable,
          fontSerif.variable,
          fontHanzi.variable,
          fontNotoDisplay.variable,
          fontNotoSerif.variable,
        )}
      >
        {/* Dark only for now; a light "porcelain" theme comes later */}
        <Providers themeProps={{ attribute: "class", forcedTheme: "dark" }}>
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
