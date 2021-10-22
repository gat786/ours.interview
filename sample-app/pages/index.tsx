import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
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
        <Nav/>
      </main>
    </div>
  );
};

export default Home;
