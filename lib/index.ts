import { GraphQLClient } from "graphql-request";
import {
  getSdk,
  IGetSkillsListQueryVariables,
  IGetExperienceListQueryVariables,
  IGetWebsiteListQueryVariables,
  IGetProjectListQueryVariables,
} from "./generated/graphql";
import * as selectors from "./selectors";

export type QueryStatus = "idle" | "loading" | "success" | "error";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

const api = getSdk(client);

export const sdk = api;

export function getSkillList(
  args?: IGetSkillsListQueryVariables
): Promise<Skill[]> {
  return api
    .getSkillsList({ limit: 20, skip: 0, ...args })
    .then((res) => selectors.selectSkills(res.skillsCollection));
}

export function getExperienceList(
  args?: IGetExperienceListQueryVariables
): Promise<Experience[]> {
  return api
    .getExperienceList({ ...args })
    .then((res) => selectors.selectExperiences(res.experienceCollection));
}

export function getWebsiteList(
  args?: IGetWebsiteListQueryVariables
): Promise<Website[]> {
  return api
    .getWebsiteList({ ...args })
    .then((res) => selectors.selectWebsites(res.websitesCollection));
}

export function getProjectList(
  args?: IGetProjectListQueryVariables
): Promise<Project[]> {
  return api
    .getProjectList({ ...args })
    .then((res) => selectors.selectProjects(res.projectsCollection));
}
