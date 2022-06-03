import Link from "next/link";
import { MainLayout } from "../../components/layout/MainLayout";

/**se puede tener dos Head puesto a que cada uno sobrescribe el objeto head */
export default function contact() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h1 className={"title"}>
        {/*ir a <a href="/.">Home!</a>*/}
        Ir a <Link href={"/"}>Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/contact.jsx</code>
      </p>
    </MainLayout>
  );
}
