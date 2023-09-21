import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="CamroseBlinds - Your Source for Great Quality Blinds"
        />
        <meta
          name="keywords"
          content="Camrose Blinds, blinds, window blinds, quality blinds, window treatments, custom blinds, home decor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
