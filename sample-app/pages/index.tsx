import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ours Community Website</title>
        <meta name="description" content="Ours Community App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image src={"/logo.png"} height={32} width={32} />
            <p className="uppercase">Ours</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href={""}>
              <a className="text-primary py-3 px-4 rounded-xl">Log in</a>
            </Link>
            <Link href="">
              <a className="bg-primary text-white py-3 px-4 rounded-xl">Sign up</a>
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
};

export default Home;
