import type {
  Maybe,
  ISys,
  IAsset,
  IAssetCollection,
  ISkills,
  IExperience,
  IWebsites,
  IProjects,
} from "./generated/graphql";

// Generic utilities
// ----------------------------------------------------------------
export function nonEmpty<T, O = unknown>(selector: (entity: T) => O) {
  return (entity: Maybe<T> | undefined | null) => {
    if (entity == null) {
      throw new Error(`unexpected empty object found`);
    }

    return selector(entity);
  };
}

type PartialCollection<T> = {
  items: Array<Maybe<T>>;
};
export function selectListOf<T, O>(entitySelector: (entity: T) => O) {
  return nonEmpty<PartialCollection<T>, Array<O>>((partialCollection) =>
    partialCollection.items.map(nonEmpty(entitySelector))
  );
}

type PartialEntityWithId = { sys: Pick<ISys, "id"> };
export const selectEntityId = ({ sys: { id } }: PartialEntityWithId): string =>
  id;

type PartialImageFields = Pick<IAsset, "title" | "url" | "width" | "height">;
export const selectImage = nonEmpty<PartialImageFields, Image>(
  (partialImage) => ({
    title: partialImage.title!,
    url: partialImage.url!,
    width: partialImage.width!,
    height: partialImage.height!,
  })
);

type PartialImageCollectionFields = Pick<IAssetCollection, "items">;
export const selectImageCollection = nonEmpty<
  PartialImageCollectionFields,
  Image[]
>((partialImage) =>
  partialImage.items.map((collectionImage) => ({
    title: collectionImage?.title!,
    url: collectionImage?.url!,
    width: collectionImage?.width!,
    height: collectionImage?.height!,
  }))
);

// Entities selectors
// ----------------------------------------------------------------

type PartialSkill = PartialEntityWithId & {
  skillLogo?: Maybe<PartialImageFields>;
} & Pick<ISkills, "skill">;

export const selectSkill = nonEmpty<PartialSkill, Skill>((partialSkill) => ({
  id: selectEntityId(partialSkill),
  skill: partialSkill.skill!,
  skillLogo: selectImage(partialSkill.skillLogo),
}));

export const selectSkills = selectListOf(selectSkill);

type PartialExperience = PartialEntityWithId & {
  enterpriseLogo?: Maybe<PartialImageFields>;
} & Pick<
    IExperience,
    | "dateRange"
    | "description"
    | "enterprise"
    | "occupation"
    | "subDescription"
    | "brandColor"
  >;

export const selectExperience = nonEmpty<PartialExperience, Experience>(
  (partialExperience) => ({
    id: selectEntityId(partialExperience),
    dateRange: partialExperience.dateRange!,
    enterpriseLogo: selectImage(partialExperience.enterpriseLogo),
    description: partialExperience.description!,
    enterprise: partialExperience.enterprise!,
    occupation: partialExperience.occupation!,
    subDescription: partialExperience.subDescription!,
    brandColor: partialExperience.brandColor!,
  })
);

export const selectExperiences = selectListOf(selectExperience);

type PartialWebsite = PartialEntityWithId & {
  webPreview?: Maybe<PartialImageFields>;
} & Pick<IWebsites, "webDescription" | "webLink" | "webName">;

export const selectWebsite = nonEmpty<PartialWebsite, Website>(
  (partialWebsite) => ({
    id: selectEntityId(partialWebsite),
    webName: partialWebsite.webName!,
    webDescription: partialWebsite.webDescription!,
    webLink: partialWebsite.webLink!,
    webPreview: selectImage(partialWebsite.webPreview),
  })
);

export const selectWebsites = selectListOf(selectWebsite);

type PartialProject = PartialEntityWithId & {
  projectPreview?: Maybe<PartialImageFields>;
  projectStackCollection?: Maybe<PartialImageCollectionFields>;
} & Pick<IProjects, "projectDescription" | "projectName">;

export const selectProject = nonEmpty<PartialProject, Project>(
  (partialProject) => ({
    id: selectEntityId(partialProject),
    projectName: partialProject.projectName!,
    projectDescription: partialProject.projectDescription!,
    projectPreview: selectImage(partialProject?.projectPreview),
    projectStackCollection: selectImageCollection(
      partialProject.projectStackCollection
    ),
  })
);

export const selectProjects = selectListOf(selectProject);
