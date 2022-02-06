type Image = {
  title: string;
  url: string;
  width: number;
  height: number;
};

type Skill = {
  id: string;
  skill: string;
  skillLogo: Image;
};

type Experience = {
  id: string;
  dateRange: string;
  description: string;
  enterprise: string;
  enterpriseLogo: Image;
  occupation: string;
  subDescription: string;
  brandColor: string;
};

type Website = {
  id: string;
  webName: string;
  webDescription: string;
  webLink: string;
  webPreview: Image;
};

type Project = {
  id: string;
  projectName: string;
  projectDescription: string;
  projectPreview: Image;
  projectStackCollection: Image[];
};
