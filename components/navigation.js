import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>GO HOMEPAGE</a>
      </Link>
      <br />
      <Link href="/about">
        <a>GO ABOUT</a>
      </Link>
    </nav>
  );
}

export default Navigation;
