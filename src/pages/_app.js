import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../redux/reducer/store";
import "../styles/globals.css";
import theme from "../styles/theme";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
