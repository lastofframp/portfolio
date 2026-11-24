import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/images/favicon.ico" />
        {['bootstrap.min', 'materialdesignicons.min', 'aos', 'style'].map(name =>
          <link key={name} rel="stylesheet" href={'/assets/css/' + name + '.css'} />
        )}
        <link rel="stylesheet" href="/toggle.css" />
      </Head>
      <body id="main">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
