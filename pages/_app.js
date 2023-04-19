import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import { StoreProvider } from './utils/store';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <StoreProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />;
      </SessionProvider>
    </StoreProvider>
  );
}
