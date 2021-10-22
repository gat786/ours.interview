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
        <Nav />

        <div className="flex flex-col bg-pink-200 items-center justify-center">
          <div className="relative w-60 h-80">
            <Image src="/ui/main-image.png" layout="fill"></Image>
          </div>
          <h3 className="text-3xl font-bold nunito">Live a Yogic Lifestyle</h3>
          <p>
            A Daily Practice consisting of Yoga, Meditation, Chanting and
            Relaxation Techniques, led by Traditional Indian Practitioners.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
