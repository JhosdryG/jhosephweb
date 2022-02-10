import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Introduction from "@components/Introduction";
import { getExperienceList, getSkillList, getWebsiteList } from "@lib";
import Head from "next/head";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Professional from "@components/Professional";
import Websites from "@components/Websites";
import { IExperienceOrder } from "@lib/generated/graphql";

interface Props {
  skills: Skill[];
  experiences: Experience[];
  websites: Website[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  try {
    const skills = await getSkillList();
    const experiences = await getExperienceList({
      order: IExperienceOrder.SysPublishedVersionDesc,
    });
    const websites = await getWebsiteList();
    return {
      props: {
        skills,
        experiences,
        websites,
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
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@700&family=Roboto:wght@400;500;700&family=Rock+Salt&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Hero />
    <Introduction />
    <Skills skills={skills} />
    <Professional experiences={experiences} />
    <Websites websites={websites} />
  </>
);
export default Index;
