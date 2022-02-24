import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Introduction from "@components/Introduction";
import {
  getExperienceList,
  getProjectList,
  getSkillList,
  getWebsiteList,
} from "@lib";
import Head from "next/head";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Professional from "@components/Professional";
import Websites from "@components/Websites";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import { IExperienceOrder } from "@lib/generated/graphql";

interface Props {
  skills: Skill[];
  experiences: Experience[];
  websites: Website[];
  projects: Project[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  try {
    const skills = await getSkillList();
    const websites = await getWebsiteList();
    const projects = await getProjectList();
    const experiences = await getExperienceList({
      order: IExperienceOrder.SysPublishedVersionDesc,
    });
    return {
      props: {
        skills,
        experiences,
        websites,
        projects,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Index = ({
  skills,
  experiences,
  websites,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      // @ts-ignore
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }
  });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favico/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favico/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favico/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favico/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favico/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favico/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favico/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favico/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favico/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favico/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favico/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favico/favicon-16x16.png"
        />
        <link rel="manifest" href="/favico/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Roboto:wght@400;500;700&family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <title>Jhoseph FullStack Developer</title>
        <meta
          name="description"
          content="I'm Jhoseph Guerrero, a professional fullstack wep developer and software engineer specialized in solving problems through code."
        />
      </Head>
      <Hero />
      <Introduction />
      <Skills skills={skills} />
      <Professional experiences={experiences} />
      <Websites websites={websites} />
      <Projects projects={projects} />
      <Contact />
    </>
  );
};
export default Index;
