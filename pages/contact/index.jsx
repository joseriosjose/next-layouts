import Head from "next/head";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import styles from "../../styles/Home.module.css";

/**se puede tener dos Head puesto a que cada uno sobrescribe el objeto head */
export default function contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - Jose Rios</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Head>
        <meta name="keywords" content="Jose, next.js, curso, practica" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1>Contact page</h1>
        <h1 className={styles.title}>
          {/*ir a <a href="/.">Home!</a>*/}
          Ir a <Link href={"/"}>Home</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/contact.jsx</code>
        </p>
      </main>
    </div>
  );
}
