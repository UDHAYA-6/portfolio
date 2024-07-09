import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "./globals.css";
import HeaderMegaMenu from "@/components/Nav comoponent/navbar";

export const metadata = {
  title: "Udhaya Kumar, a next.js and react.js developer",
  description:
    "Explore Udhaya Kumar's portfolio featuring diverse web development projects. Skilled in React Js and Next Js, creates interactive, user-friendly websites.",
  keywords: "web development, portfolio, Udhaya, React js, Next.js",
  author: "Udhaya Kumar",
  image: "/profile.jpg",
  url: "https://portfolio-udhay.vercel.app",
  type: "website",
  alternates: {
    canonical: "https://portfolio-udhay.vercel.app",
  },
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
