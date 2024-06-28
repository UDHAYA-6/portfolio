// import "@mantine/core/styles.css";
// import { createTheme, MantineProvider } from "@mantine/core";
// import Head from "next/head";
// import "./globals.css";
// import HeaderMegaMenu from "@/components/Nav comoponent/navbar";
// export const metadata = {
//   title: "Udhaya Kumar, a next.js and react.js developer",
//   description:
//     "Explore Udhaya Kumar's portfolio featuring diverse web development projects. Skilled in React Js and Next Js, creates interactive, user-friendly websites.",
//   keywords: "web development, portfolio, Udhaya, React js, Next.js",
//   author: "Udhaya Kumar",
//   image: "/profile.jpg",
//   url: "https://portfolio-udhay.vercel.app",
//   canonical: "https://portfolio-udhay.vercel.app",
//   type: "website",
// };
// export default function RootLayout({ children }) {
//   const theme = createTheme({
//     primaryColor: "cyan",
//   });
//   return (
//     <html lang="en">
//       <Head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta property="og:title" content={metadata.title} />
//         <meta property="og:description" content={metadata.description} />
//         <meta property="og:image" content={metadata.image} />
//         <meta property="og:url" content={metadata.url} />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={metadata.title} />
//         <meta name="twitter:description" content={metadata.description} />
//         <meta name="twitter:image" content={metadata.image} />
//         <link rel="canonical" href={metadata.canonical} />
//       </Head>
//       <body>
//         <MantineProvider theme={theme}>
//           <HeaderMegaMenu />
//           {children}
//         </MantineProvider>
//       </body>
//     </html>
//   );
// }

import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import Head from "next/head";
import "./globals.css";
import HeaderMegaMenu from "@/components/Nav comoponent/navbar";

// export const metadata = {
//   title: "Udhaya Kumar, a next.js and react.js developer",
//   description:
//     "Explore Udhaya Kumar's portfolio featuring diverse web development projects. Skilled in React Js and Next Js, creates interactive, user-friendly websites.",
//   keywords: "web development, portfolio, Udhaya, React js, Next.js",
//   author: "Udhaya Kumar",
//   image: "/profile.jpg",
//   url: "https://portfolio-udhay.vercel.app",
//   canonical: "https://portfolio-udhay.vercel.app",
//   type: "website",
//   alternates: {
//     "google-site-verification": "alternates",
//   },
// };

export default function RootLayout({ children }) {
  const theme = createTheme({
    primaryColor: "cyan",
  });

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="title"
          content="Udhaya Kumar, a next.js and react.js developer"
        />
        <meta
          name="desciption"
          content="Explore Udhaya Kumar's portfolio featuring diverse web development projects. Skilled in React Js and Next Js, creates interactive, user-friendly websites."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="wuDIsSqwMfqvZZ6Q2UrHr4EElx4obm9E1CjowShj9ls"
        />
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
