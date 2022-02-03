import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Introduction from "@components/Introduction";
import { getSkillList } from "@lib";
import Head from "next/head";
import Hero from "@components/Hero";
import Skills from "@components/Skills";

interface Props {
  skills: Skill[];
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  try {
    const skills = await getSkillList();
    return {
      props: {
        skills,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Index = ({ skills }: InferGetStaticPropsType<typeof getStaticProps>) => (
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
  </>
);
export default Index;
