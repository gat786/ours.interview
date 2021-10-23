import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import { SocialIcon } from "react-social-icons";
import styles from "../styles/Home.module.css";

import Content from "data/content";
import PropertyCard from "components/PropertyCard";
import { ReactElement } from "react";
import SadhanaCard from "components/SadhanaCard";
import React from "react";
import FrequentlyAskedQuestion from "components/FaqComponent";

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

        <div className="flex flex-col gap-6 items-center justify-center mlb-32">
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

        <section className="flex flex-col items-center w-full">
          <div className="flex w-5/6 md:w-1/2 justify-center items-center gap-6">
            <div className="bg-black w-20 md:w-1/4 h-px"></div>
            <div className="nunito font-bold text-3xl">Why OURS?</div>
            <div className="h-px bg-black w-20 md:w-1/4"></div>
          </div>

          <div className="grid grid-cols-1 justify-self-center md:grid-cols-3 md:w-2/3 md:gap-8">
            {Content.PropertiesOfYoga.map((property, index) => (
              <PropertyCard
                key={index}
                icon={property.icon}
                title={property.title}
                subtitle={property.subtitle}
              />
            ))}
          </div>
        </section>

        <section className="bg-primary text-white flex flex-col gap-4 plb-12 items-center rounded-2xl">
          <div className="w-11/12 lg:w-1/2 flex flex-col items-center text-center gap-4 pbe-6 border-b border-white">
            <p className="w-11/12 md:w-1/2 nunito text-3xl font-bold">
              “Yoga is the journey, of the self, through the self, to the self”
            </p>
            <p className="">Bhagavad Gītā, Verse 6.20</p>
          </div>
          <div className="w-11/12 lg:w-1/2 flex flex-col gap-6 items-center">
            <p className="md:w-2/3">
              Yoga is the ancient Indian science of healthy living - harmonizing
              the relationship between mind, body and environment. Much more
              than a physical exercise, it is a disciplined and holistic
              lifestyle that includes of a variety of practices.
            </p>
            <p className="md:w-2/3">
              {" "}
              Traditional Yoga is a combination of Ethical Rules (Yamas),
              Personal Observances (Niyamas), Posture (Āsana), Breathing
              (Prāṇāyāma), Withdrawal (Pratyāhāra), Concentration (Dhāraṇā) and
              Meditation (Dhyāna).
            </p>{" "}
            <p className="md:w-2/3">
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

          <div className={`flex flex-col gap-6 mlb-8 ${styles.sideDots}`}>
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

          <div className="text-gray-800">
            <strong>Please note: </strong>
            The above timings are recommendations only. These techniques can be
            practiced at any time in the day
          </div>
        </section>

        <section className="grid grid-flow-row">
          <div className="w-1/2 flex items-center justify-self-center gap-6 justify-center">
            <div className="bg-gray-200 w-1/4 h-0.5"></div>
            <p className="nunito font-bold text-3xl">Benefits</p>
            <div className="h-0.5 bg-gray-200 w-1/4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:w-2/3 justify-self-center md:gap-8">
            {Content.Benefits.map((property, index) => (
              <PropertyCard
                key={index}
                icon={property.icon}
                title={property.title}
                subtitle={property.subtitle}
              />
            ))}
          </div>
        </section>

        <section className="bg-primary text-white flex flex-col plb-12 items-center rounded-2xl">
          <p className="nunito text-3xl mbe-9 font-bold">Manifesto</p>
          <div className="w-1/2 flex flex-col  items-center">
            <ul className={`text-center text-sm mbe-8 ${styles.manifestList}`}>
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

        <section className="flex flex-col gap-6 items-center mlb-16">
          <p className="text-3xl nunito font-bold">Programme Cost</p>
          <p className="text-sm text-gray-800">
            12 weeks - 90 Days - 5400 Hours
          </p>

          <div className="w-11/12 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className=" w-full justify-self-center text-3xl font-bold bg-gray-200 text-center rounded-xl p-4">
              $500
            </div>
            <div className="text-sm flex flex-col gap-2">
              <div className="font-medium text-base">What's included?</div>
              <ul className={`${styles.checkMarker}`}>
                <li>24 Hatha Yoga Lessons</li>
                <li>12 Guided Meditation Lessons</li>
                <li>12 Yoga Nidra Lessons</li>
                <li>6 Mantra Chants</li>
                <li>Access to OURS for 180 Days</li>
                <li>Upcoming Features & Content</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center mbe-8">
            <button className="bg-primary p-4 rounded-xl text-white nunito">
              Start 7 Day Free Trial
            </button>

            <p className="text-gray-700">No Credit Card Required</p>
          </div>

          <p className="text-primary font-bold">
            You won’t be charged anything today
          </p>
          <p>Only after the free trial, on the 8th day of the programme.</p>
        </section>

        <section className="flex flex-col items-center">
          <div className="w-1/2 flex items-center gap-6 justify-center">
            <div className="bg-gray-200 w-1/4 h-0.5"></div>
            <p className="nunito font-bold text-3xl">FAQs</p>
            <div className="h-0.5 bg-gray-200 w-1/4"></div>
          </div>

          <div className="w-11/12 md:w-1/2">
            {Content.FAQs.map((faq) => (
              <FrequentlyAskedQuestion
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="h-20 flex justify-center border-t">
        <div className="w-11/12 flex justify-between mbs-4 gap-4">
          <div className="flex gap-4">
            <div className="relative h-8 w-8">
              <Image src="/socials/discord.png" layout="fill" />
            </div>
            <div className="relative h-8 w-8">
              <Image src="/socials/instagram.png" layout="fill" />
            </div>
            <div className="relative h-8 w-8">
              <Image src="/socials/spotify.png" layout="fill" />
            </div>
          </div>

          <div className="flex gap-4">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Contact</p>
          </div>

          <div>&#169; OURS Community 2021</div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
