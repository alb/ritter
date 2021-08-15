import store from '../store/store';
import { Provider } from 'react-redux';
import styles from '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}