import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="w-screen text-gray-900 dark:text-zinc-50 bg-gray-50 dark:bg-zinc-900 font-display">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
