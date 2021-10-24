import "aos/dist/aos.css";
import "../@styles/app.scss";

import React, { useEffect } from "react";

import Aos from "aos";
import Head from "next/head";
import { Hydrate } from "react-query/hydration";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";
import { persistStore } from "redux-persist";
import { queryClient } from "@shared/config";
import withReduxStore from "../@shared/config/redux/with-redux-store";
import BackToTop from "@modules/common/back-to-top.component";

function MyApp({ Component, pageProps, reduxStore }: any) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>SharifMart</title>
        <meta
          name="description"
          content="SharifMart | find your daily product. - SharifMart"
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <Provider store={reduxStore}>
        <PersistGate persistor={persistStore(reduxStore)}>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps?.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </QueryClientProvider>
          <BackToTop />
        </PersistGate>
      </Provider>
    </>
  );
}
export default withReduxStore(MyApp);
