import "../styles/globals.scss";
// import { SessionProvider } from "next-auth/react";

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );
// }
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
