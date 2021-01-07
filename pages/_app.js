import { Provider } from 'react-redux';
import store from '../redux';
import Head from 'next/head';

const _App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/style.css"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default _App;