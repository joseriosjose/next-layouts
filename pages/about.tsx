import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";
import { DarkLayout } from "../components/layout/DarkLayout";

/**se puede tener dos Head puesto a que cada uno sobrescribe el objeto head */
export default function about() {
  return (
    <>
      <h1>About page</h1>
      <h1 className={"title"}>
        {/*ir a <a href="/.">Home!</a>*/}
        Ir a <Link href={"/"}>Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.jsx</code>
      </p>
    </>
  );
}

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
