import "@mantine/core/styles.css";
import "@/styles/globals.css";
import HeaderMegaMenu from "@/components/Nav comoponent/navbar";
import { createTheme, MantineProvider } from "@mantine/core";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const theme = createTheme({
    primaryColor: "cyan",
  });
  return (
    <MantineProvider theme={theme}>
      <HeaderMegaMenu />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
