/* eslint-disable @next/next/no-html-link-for-pages */

import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">contact</Link>
    </nav>
  );
};
