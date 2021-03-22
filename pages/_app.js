import { Provider } from 'react-redux'
import {store, persistor} from "../store/store";
import '../styles/globals.css'
import '../styles/tailwind.output.css';
import Header from "../componenents/header";
import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import Sidebar from "../componenents/sidebar"

const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header/>
            <Sidebar className={"w-full h-full"}/>
            <Component {...pageProps} />
          </PersistGate>
      </Provider>
  )
}

export default MyApp