import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

import Content from "data/content";
import PropertyCard from "components/PropertyCard";
import { ReactElement } from "react";

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

        <section className="bg-primary text-white flex flex-col gap-4 plb-12 items-center rounded-2xl">
          <div className="w-1/2 flex flex-col items-center text-center gap-4 pbe-6 border-b border-white">
            <p className="w-1/2 nunito text-3xl font-bold">
              “Yoga is the journey, of the self, through the self, to the self”
            </p>
            <p className="">Bhagavad Gītā, Verse 6.20</p>
          </div>
          <div className="w-1/2 flex flex-col gap-6 items-center">
            <p className="w-2/3">
              Yoga is the ancient Indian science of healthy living - harmonizing
              the relationship between mind, body and environment. Much more
              than a physical exercise, it is a disciplined and holistic
              lifestyle that includes of a variety of practices.
            </p>
            <p className="w-2/3">
              {" "}
              Traditional Yoga is a combination of Ethical Rules (Yamas),
              Personal Observances (Niyamas), Posture (Āsana), Breathing
              (Prāṇāyāma), Withdrawal (Pratyāhāra), Concentration (Dhāraṇā) and
              Meditation (Dhyāna).
            </p>{" "}
            <p className="w-2/3">
              {" "}
              Our Sādhanā (Daily Practice) is designed for you to incorporate
              this Yogic lifestyle through short lessons, which can be viewed at
              your convenience.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center mlb-12">
          <p className="text-3xl nunito font-bold mbe-2 ">Sādhāna</p>
          <p>Your Daily Practice for Holistic Wellbeing</p>

          <div>
            {Content.Sadhanas.map(
              (sadhana): ReactElement => (
                <SadhanaCard
                  title={sadhana.title}
                  leadBy={sadhana.leadBy}
                  alumniOf={sadhana.alumniOf}
                  description={sadhana.description}
                  icon={sadhana.icon}
                  startTime={sadhana.startTime}
                  cardBg={sadhana.cardBg}
                  minutes={sadhana.minutes}
                  artists={sadhana.artists}
                />
              )
            )}
          </div>
        </section>

        <section className="bg-primary text-white flex flex-col plb-12 items-center rounded-2xl">
          <p className="nunito text-3xl mbe-9 font-bold">Manifesto</p>
          <div className="w-1/2 flex flex-col  items-center">
            <ul className="text-center text-sm mbe-8">
              <li>Living through love, not fear</li>
              <li>Learning the language of being human.</li>
              <li>
                Transcending the ego by venturing into uncharted territory
              </li>
              <li>Returning to our roots to uncover lost truths</li>
              <li>Sharing knowledge to empower others</li>
              <li>Living in sync with nature</li>
            </ul>

            <p className="text-center text-sm">
              Our vision is to share ancient Indian wisdom in an accessible and
              authentic manner, empowering people to cultivate inner peace and
              compassion in their everyday lives.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export interface SadhanaCardProps {
  title: string;
  icon: string;
  cardBg: string;
  leadBy?: string;
  alumniOf?: string;
  artists?: string[];
  description: string;
  minutes: number;
  startTime: string;
}

export const SadhanaCard = (props: SadhanaCardProps) => {
  return (
    <div className="flex md:flex-row flex-col gap-9">
      <div
        style={{ backgroundColor: props.cardBg }}
        className="w-60 h-44 flex-shrink-0 rounded-3xl flex flex-col relative justify-center"
      >
        <div className="relative h-2/3">
          <Image src={props.icon} className="object-none" layout="fill" />
        </div>
        <div className="absolute top-4 left-4 bg-white px-2 rounded-md">
          <p className="text-sm">{props.startTime}</p>
        </div>
      </div>

      <div className="relative">
        <p className="absolute top-0 right-0 text-primary">
          {props.minutes} min
        </p>
        <p className="font-bold nunito text-xl mbe-1 ">{props.title}</p>
        {props.leadBy ? (
          <div className="mbe-4">
            <p>
              Led by <strong>{props.leadBy}</strong>
            </p>
            <p>
              Alumni of <strong>{props.alumniOf}</strong>
            </p>
          </div>
        ) : (
          <p className="text-sm mbe-4">
            Artists <strong>{props.artists?.join(" + ")}</strong>
          </p>
        )}

        <p className="text-sm">{props.description}</p>
      </div>
    </div>
  );
};

export default Home;
