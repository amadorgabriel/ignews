import Document, { Main, NextScript, Head, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ptBr">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />

          <link rel="shortcut icon" href="./favicon.ico" type="image/png" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
