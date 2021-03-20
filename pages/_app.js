import { Provider } from 'react-redux'
import storeConfigurator from "../store/store";
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={storeConfigurator()}>
        <Component {...pageProps} />
      </Provider>
  )
}

export default MyApp