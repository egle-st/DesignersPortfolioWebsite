import '@Components/styles/globals.scss';
import type { AppProps } from 'next/app';
import '../styles/globals.scss'; // 24px -> 2.4rem

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
