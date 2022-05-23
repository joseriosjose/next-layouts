import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

/**es obligatorio que las paginas sean exportaciones por defecto */
/**el nombre del archivo con el de la clase pueden no ser el mismo */
export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={"title"}>
        {/*ir a <a href="/about">About!</a>*/}
        Ir a <Link href={"/about"}>About</Link>
      </h1>
      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.jsx</code>
      </p>
    </MainLayout>
  );
}
