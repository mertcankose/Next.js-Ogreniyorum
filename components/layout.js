import Navigation from "../components/navigation";

function Layout({ children }) {
  return (
    <div>
      <Navigation />

      <main>{children}</main>

      <footer>Copyright 2020 | Mertcan Kose</footer>
    </div>
  );
}

export default Layout;
