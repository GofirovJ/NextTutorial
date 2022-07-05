import "../styles/globals.css";
// import Script from "next/script";
// import { NextSeo } from "next-seo";

import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-Q8LMFRSEHW`}
      />
      <Script
        strategy='lazyOnload'
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q8LMFRSEHW', {
          page_path: window.location.pathname,
        });
        `} 
        /> */}

      {/* NextSEO  */}
      {/* <NextSeo
        title='This is Next Js tutorial'
        titleTemplate='Jasur Gofirov'
        description='This is just Test'
      />

    <Component {...pageProps} />   */}

      {/* Google and gitHub authintification  */}
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
