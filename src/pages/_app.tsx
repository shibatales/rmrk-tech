import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { YakiTheme } from 'themes/rmrk';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={YakiTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
