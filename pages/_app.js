import '@/styles/globals.css';
import 'react-multi-carousel/lib/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
