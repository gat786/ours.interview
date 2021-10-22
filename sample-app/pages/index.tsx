import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

import Content from "data/content";

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

        <div className="flex flex-col gap-6 items-center justify-center mlb-16">
          <div className="relative w-60 h-80">
            <Image src="/ui/main-image.png" layout="fill"></Image>
          </div>
          <div className="text-center w-80 flex flex-col gap-4">
            <h3 className="text-3xl font-bold nunito">
              Live a Yogic Lifestyle
            </h3>
            <p className="nunito text-sm">
              A Daily Practice consisting of Yoga, Meditation, Chanting and
              Relaxation Techniques, led by Traditional Indian Practitioners.
            </p>
          </div>
          <button className="bg-primary p-4 rounded-xl text-white nunito">
            Start your Journey
          </button>
        </div>

        <div className="flex flex-col gap-8 items-center justify-center">
          <i className="material-icons">expand_more</i>

          <div className="flex gap-80">
            <div className="bg-gray-200 w-96 h-0.5"></div>
            <div className="h-0.5 bg-gray-200 w-96"></div>
          </div>
        </div>

        <div className="flex justify-center gap-28">
          {Content.PropertiesOfYoga.map((property, index) => (
            <PropertyCard
              key={index}
              icon={property.icon}
              title={property.title}
              subtitle={property.subtitle}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export interface PropertyProps {
  icon: string;
  title: string;
  subtitle: string;
}

const PropertyCard = (props: PropertyProps) => {
  return (
    <div className="w-60 flex flex-col gap-4 items-center nunito text-center my-8">
      <div className="relative h-12 w-12">
        <Image src={props.icon} layout="fill" />
      </div>
      <p className="font-bold text-xl">{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Home;
