import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Tania Murillo Duran's website" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap'
            }
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <Header /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
