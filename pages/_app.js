import { ChakraProvider } from '@chakra-ui/provider'
import { ContextProvider } from '../context/SocketContext'
import theme from '../theme/index';

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>;
}

export default MyApp
