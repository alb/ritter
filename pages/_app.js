import store from '../store/store';
import Head from 'next/head';
import { Provider } from 'react-redux';
import styles from '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ritter</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
