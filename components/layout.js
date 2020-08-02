import Navigation from "../components/navigation";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Mertcan's HomePage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />

      <main>{children}</main>

      <footer>Copyright 2020 | Mertcan Kose</footer>
    </div>
  );
}

export default Layout;
