import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "./globals.css";
import HeaderMegaMenu from "@/components/Nav comoponent/navbar";
export const metadata = {
  title: "Udhaya's portfolio",
  description:
    "Explore Udhaya Kumar's portfolio, which showcases a wide range of web development projects and technical talents. Udhaya's skill in React js and Next js displays a strong desire to create interactive and user-friendly online apps. Detailed project case studies provide insight into unique ideas and proven experience in frontend development. View Udhaya's career experience and contact him to explore potential partnerships and prospects in web development.",
  keywords: "web development, portfolio, Udhaya, React js, Next.js",
  author: "Udhaya Kumar",
  image: "/profile.jpg",
  url: "https://portfolio-udhay.vercel.app",
  canonical: "https://portfolio-udhay.vercel.app",
  type: "website",
};
export default function RootLayout({ children }) {
  const theme = createTheme({
    primaryColor: "cyan",
  });
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <link rel="canonical" href={metadata.canonical} />
      </Head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderMegaMenu />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
