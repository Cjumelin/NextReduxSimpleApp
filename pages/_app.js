import { Provider } from 'react-redux'
import storeConfigurator from "../store/store";
import '../styles/globals.css'
import '../styles/tailwind.output.css';
import Header from "../componenents/header";
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={storeConfigurator()}>
          <Header/>
          <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp