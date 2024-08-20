import { Html, Head, Main, NextScript } from "next/document";
// import { CssBaseline } from "@nextui-org/react";

export default function Document() {
  return (
    <Html lang="en">
    <Head>
      {/* {CssBaseline.flush()} */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=optional"
        rel="stylesheet"
      />
      {/* <link
      href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
      rel="stylesheet"
    /> */}
      {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
    // <Html lang="en">
    //   <Head />
    //   <body className="min-h-screen bg-background font-sans antialiased">
    //     <Main />
    //     <NextScript />
    //   </body>
    // </Html>
  );
}
