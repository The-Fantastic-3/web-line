import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontPoppins, fontIBM } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-poppins antialiased",
          fontPoppins.variable
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
