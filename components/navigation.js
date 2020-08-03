import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>GO HOMEPAGE</a>
      </Link>

      <Link href="/about">
        <a className={styles.link} style={{color:'royalblue'}}>GO ABOUT</a>
      </Link>
    </nav>
  );
}

export default Navigation;
