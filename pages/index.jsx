import Head from "next/head"; 
import Link from "next/link";
import styles from "../styles/Home.module.css";

/**es obligatorio que las paginas sean exportaciones por defecto */
/**el nombre del archivo con el de la clase pueden no ser el mismo */
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jose Rios</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {/*ir a <a href="/about">About!</a>*/}
        Ir a <Link href={"/about"}>About</Link>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.jsx</code>
        </p>

      </main>

    </div>
  );
}
