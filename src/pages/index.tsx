import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Introduction from "@components/Introduction";
import { getExperienceList, getSkillList } from "@lib";
import Head from "next/head";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Professional from "@components/Professional";
import { IExperienceOrder } from "@lib/generated/graphql";

interface Props {
  skills: Skill[];
  experiences: Experience[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  try {
    const skills = await getSkillList();
    const experiences = await getExperienceList({
      order: IExperienceOrder.SysPublishedVersionDesc,
    });
    return {
      props: {
        skills,
        experiences,
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
  </>
);
export default Index;
