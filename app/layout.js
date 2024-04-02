import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./globals.css";
import HeaderMegaMenu from "@/components/Nav comoponent/navbar";
export const metadata = {
  title: "Udhaya's portfolio",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  const theme = createTheme({
    primaryColor: "cyan",
  });
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
