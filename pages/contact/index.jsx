import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";
import styles from "../../styles/Home.module.css";

/**se puede tener dos Head puesto a que cada uno sobrescribe el objeto head */
export default function contact() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h1 className={styles.title}>
        {/*ir a <a href="/.">Home!</a>*/}
        Ir a <Link href={"/"}>Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
