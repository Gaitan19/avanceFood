import 'react-multi-carousel/lib/styles.css';
import '@/styles/globals.css';
import { FoodinglyContext } from '@/context/FoodinglyContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <FoodinglyContext>
        <Component {...pageProps} />
      </FoodinglyContext>
    </>
  );
}
