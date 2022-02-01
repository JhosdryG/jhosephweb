import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type IAsset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: IContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<IAssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: ISys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<IImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type IAssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IAssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<IAsset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IAssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IAssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<ISysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type IAssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
  experienceCollection?: Maybe<IExperienceCollection>;
  projectsCollection?: Maybe<IProjectsCollection>;
  skillsCollection?: Maybe<ISkillsCollection>;
  websitesCollection?: Maybe<IWebsitesCollection>;
};


export type IAssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsSkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type IAssetLinkingCollectionsWebsitesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IAssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type IContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<IContentfulTag>>;
};

export type IContentfulMetadataFilter = {
  tags?: InputMaybe<IContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type IContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type IContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IEntry = {
  contentfulMetadata: IContentfulMetadata;
  sys: ISys;
};

export type IEntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<IEntry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IEntryFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
};

export enum IEntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperience = IEntry & {
  __typename?: 'Experience';
  contentfulMetadata: IContentfulMetadata;
  dateRange?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  enterprise?: Maybe<Scalars['String']>;
  enterpriseLogo?: Maybe<IAsset>;
  linkedFrom?: Maybe<IExperienceLinkingCollections>;
  occupation?: Maybe<Scalars['String']>;
  subDescription?: Maybe<Scalars['String']>;
  sys: ISys;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceDateRangeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceEnterpriseArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceEnterpriseLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceOccupationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Jobs experience description [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/experience) */
export type IExperienceSubDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type IExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<IExperience>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<IExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IExperienceFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  dateRange?: InputMaybe<Scalars['String']>;
  dateRange_contains?: InputMaybe<Scalars['String']>;
  dateRange_exists?: InputMaybe<Scalars['Boolean']>;
  dateRange_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  dateRange_not?: InputMaybe<Scalars['String']>;
  dateRange_not_contains?: InputMaybe<Scalars['String']>;
  dateRange_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enterprise?: InputMaybe<Scalars['String']>;
  enterpriseLogo_exists?: InputMaybe<Scalars['Boolean']>;
  enterprise_contains?: InputMaybe<Scalars['String']>;
  enterprise_exists?: InputMaybe<Scalars['Boolean']>;
  enterprise_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  enterprise_not?: InputMaybe<Scalars['String']>;
  enterprise_not_contains?: InputMaybe<Scalars['String']>;
  enterprise_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  occupation?: InputMaybe<Scalars['String']>;
  occupation_contains?: InputMaybe<Scalars['String']>;
  occupation_exists?: InputMaybe<Scalars['Boolean']>;
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  occupation_not?: InputMaybe<Scalars['String']>;
  occupation_not_contains?: InputMaybe<Scalars['String']>;
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subDescription?: InputMaybe<Scalars['String']>;
  subDescription_contains?: InputMaybe<Scalars['String']>;
  subDescription_exists?: InputMaybe<Scalars['Boolean']>;
  subDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subDescription_not?: InputMaybe<Scalars['String']>;
  subDescription_not_contains?: InputMaybe<Scalars['String']>;
  subDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
};

export type IExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IExperienceOrder {
  DateRangeAsc = 'dateRange_ASC',
  DateRangeDesc = 'dateRange_DESC',
  EnterpriseAsc = 'enterprise_ASC',
  EnterpriseDesc = 'enterprise_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  SubDescriptionAsc = 'subDescription_ASC',
  SubDescriptionDesc = 'subDescription_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum IImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum IImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum IImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type IImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<IImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<IImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<IImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjects = IEntry & {
  __typename?: 'Projects';
  contentfulMetadata: IContentfulMetadata;
  linkedFrom?: Maybe<IProjectsLinkingCollections>;
  projectDescription?: Maybe<Scalars['String']>;
  projectName?: Maybe<Scalars['String']>;
  projectPreview?: Maybe<IAsset>;
  projectStackCollection?: Maybe<IAssetCollection>;
  sys: ISys;
};


/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjectsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjectsProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjectsProjectNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjectsProjectPreviewArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** projects, sofwares and apps i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/projects) */
export type IProjectsProjectStackCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type IProjectsCollection = {
  __typename?: 'ProjectsCollection';
  items: Array<Maybe<IProjects>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IProjectsFilter = {
  AND?: InputMaybe<Array<InputMaybe<IProjectsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IProjectsFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  projectDescription?: InputMaybe<Scalars['String']>;
  projectDescription_contains?: InputMaybe<Scalars['String']>;
  projectDescription_exists?: InputMaybe<Scalars['Boolean']>;
  projectDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectDescription_not?: InputMaybe<Scalars['String']>;
  projectDescription_not_contains?: InputMaybe<Scalars['String']>;
  projectDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectName?: InputMaybe<Scalars['String']>;
  projectName_contains?: InputMaybe<Scalars['String']>;
  projectName_exists?: InputMaybe<Scalars['Boolean']>;
  projectName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectName_not?: InputMaybe<Scalars['String']>;
  projectName_not_contains?: InputMaybe<Scalars['String']>;
  projectName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  projectPreview_exists?: InputMaybe<Scalars['Boolean']>;
  projectStackCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<ISysFilter>;
};

export type IProjectsLinkingCollections = {
  __typename?: 'ProjectsLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IProjectsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IProjectsOrder {
  ProjectNameAsc = 'projectName_ASC',
  ProjectNameDesc = 'projectName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type IQuery = {
  __typename?: 'Query';
  asset?: Maybe<IAsset>;
  assetCollection?: Maybe<IAssetCollection>;
  entryCollection?: Maybe<IEntryCollection>;
  experience?: Maybe<IExperience>;
  experienceCollection?: Maybe<IExperienceCollection>;
  projects?: Maybe<IProjects>;
  projectsCollection?: Maybe<IProjectsCollection>;
  skills?: Maybe<ISkills>;
  skillsCollection?: Maybe<ISkillsCollection>;
  websites?: Maybe<IWebsites>;
  websitesCollection?: Maybe<IWebsitesCollection>;
};


export type IQueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IAssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IAssetFilter>;
};


export type IQueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IEntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IEntryFilter>;
};


export type IQueryExperienceArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IExperienceFilter>;
};


export type IQueryProjectsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryProjectsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IProjectsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IProjectsFilter>;
};


export type IQuerySkillsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQuerySkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ISkillsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ISkillsFilter>;
};


export type IQueryWebsitesArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type IQueryWebsitesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<IWebsitesOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<IWebsitesFilter>;
};

/** the skills i have gotten [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/skills) */
export type ISkills = IEntry & {
  __typename?: 'Skills';
  contentfulMetadata: IContentfulMetadata;
  linkedFrom?: Maybe<ISkillsLinkingCollections>;
  skill?: Maybe<Scalars['String']>;
  skillLogo?: Maybe<IAsset>;
  sys: ISys;
};


/** the skills i have gotten [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/skills) */
export type ISkillsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** the skills i have gotten [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/skills) */
export type ISkillsSkillArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** the skills i have gotten [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/skills) */
export type ISkillsSkillLogoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ISkillsCollection = {
  __typename?: 'SkillsCollection';
  items: Array<Maybe<ISkills>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ISkillsFilter = {
  AND?: InputMaybe<Array<InputMaybe<ISkillsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ISkillsFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  skill?: InputMaybe<Scalars['String']>;
  skillLogo_exists?: InputMaybe<Scalars['Boolean']>;
  skill_contains?: InputMaybe<Scalars['String']>;
  skill_exists?: InputMaybe<Scalars['Boolean']>;
  skill_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skill_not?: InputMaybe<Scalars['String']>;
  skill_not_contains?: InputMaybe<Scalars['String']>;
  skill_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<ISysFilter>;
};

export type ISkillsLinkingCollections = {
  __typename?: 'SkillsLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type ISkillsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ISkillsOrder {
  SkillAsc = 'skill_ASC',
  SkillDesc = 'skill_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ISys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type ISysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsites = IEntry & {
  __typename?: 'Websites';
  contentfulMetadata: IContentfulMetadata;
  linkedFrom?: Maybe<IWebsitesLinkingCollections>;
  sys: ISys;
  webDescription?: Maybe<Scalars['String']>;
  webLink?: Maybe<Scalars['String']>;
  webName?: Maybe<Scalars['String']>;
  webPreview?: Maybe<IAsset>;
};


/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsitesLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsitesWebDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsitesWebLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsitesWebNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** websites i have made [See type definition](https://app.contentful.com/spaces/c2kllrniidut/content_types/websites) */
export type IWebsitesWebPreviewArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type IWebsitesCollection = {
  __typename?: 'WebsitesCollection';
  items: Array<Maybe<IWebsites>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type IWebsitesFilter = {
  AND?: InputMaybe<Array<InputMaybe<IWebsitesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IWebsitesFilter>>>;
  contentfulMetadata?: InputMaybe<IContentfulMetadataFilter>;
  sys?: InputMaybe<ISysFilter>;
  webDescription?: InputMaybe<Scalars['String']>;
  webDescription_contains?: InputMaybe<Scalars['String']>;
  webDescription_exists?: InputMaybe<Scalars['Boolean']>;
  webDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webDescription_not?: InputMaybe<Scalars['String']>;
  webDescription_not_contains?: InputMaybe<Scalars['String']>;
  webDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webLink?: InputMaybe<Scalars['String']>;
  webLink_contains?: InputMaybe<Scalars['String']>;
  webLink_exists?: InputMaybe<Scalars['Boolean']>;
  webLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webLink_not?: InputMaybe<Scalars['String']>;
  webLink_not_contains?: InputMaybe<Scalars['String']>;
  webLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webName?: InputMaybe<Scalars['String']>;
  webName_contains?: InputMaybe<Scalars['String']>;
  webName_exists?: InputMaybe<Scalars['Boolean']>;
  webName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webName_not?: InputMaybe<Scalars['String']>;
  webName_not_contains?: InputMaybe<Scalars['String']>;
  webName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  webPreview_exists?: InputMaybe<Scalars['Boolean']>;
};

export type IWebsitesLinkingCollections = {
  __typename?: 'WebsitesLinkingCollections';
  entryCollection?: Maybe<IEntryCollection>;
};


export type IWebsitesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum IWebsitesOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebLinkAsc = 'webLink_ASC',
  WebLinkDesc = 'webLink_DESC',
  WebNameAsc = 'webName_ASC',
  WebNameDesc = 'webName_DESC'
}

export type IAssetFieldsFragment = { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null };

export type ISkillsFieldsFragment = { __typename?: 'Skills', skill?: string | null, sys: { __typename?: 'Sys', id: string }, skillLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type IGetSkillsListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<ISkillsOrder>> | InputMaybe<ISkillsOrder>>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetSkillsListQuery = { __typename?: 'Query', skillsCollection?: { __typename?: 'SkillsCollection', items: Array<{ __typename?: 'Skills', skill?: string | null, sys: { __typename?: 'Sys', id: string }, skillLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type IExperienceFieldsFragment = { __typename?: 'Experience', dateRange?: string | null, description?: string | null, enterprise?: string | null, occupation?: string | null, subDescription?: string | null, sys: { __typename?: 'Sys', id: string }, enterpriseLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type IGetExperienceListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<IExperienceOrder>> | InputMaybe<IExperienceOrder>>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetExperienceListQuery = { __typename?: 'Query', experienceCollection?: { __typename?: 'ExperienceCollection', items: Array<{ __typename?: 'Experience', dateRange?: string | null, description?: string | null, enterprise?: string | null, occupation?: string | null, subDescription?: string | null, sys: { __typename?: 'Sys', id: string }, enterpriseLogo?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type IWebsiteFieldsFragment = { __typename?: 'Websites', webName?: string | null, webDescription?: string | null, webLink?: string | null, sys: { __typename?: 'Sys', id: string }, webPreview?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null };

export type IGetWebsiteListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<IWebsitesOrder>> | InputMaybe<IWebsitesOrder>>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetWebsiteListQuery = { __typename?: 'Query', websitesCollection?: { __typename?: 'WebsitesCollection', items: Array<{ __typename?: 'Websites', webName?: string | null, webDescription?: string | null, webLink?: string | null, sys: { __typename?: 'Sys', id: string }, webPreview?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null } | null> } | null };

export type IImageCollectionRequiresFragment = { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', environmentId: string, spaceId: string, id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null } | null> } };

export type IProjectFieldsFragment = { __typename?: 'Projects', projectName?: string | null, projectDescription?: string | null, sys: { __typename?: 'Sys', id: string }, projectPreview?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, projectStackCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', environmentId: string, spaceId: string, id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null } | null> } } | null> } | null };

export type IGetProjectListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<InputMaybe<IProjectsOrder>> | InputMaybe<IProjectsOrder>>;
  locale?: InputMaybe<Scalars['String']>;
}>;


export type IGetProjectListQuery = { __typename?: 'Query', projectsCollection?: { __typename?: 'ProjectsCollection', items: Array<{ __typename?: 'Projects', projectName?: string | null, projectDescription?: string | null, sys: { __typename?: 'Sys', id: string }, projectPreview?: { __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null } | null, projectStackCollection?: { __typename?: 'AssetCollection', items: Array<{ __typename?: 'Asset', title?: string | null, url?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', environmentId: string, spaceId: string, id: string }, contentfulMetadata: { __typename?: 'ContentfulMetadata', tags: Array<{ __typename?: 'ContentfulTag', id?: string | null } | null> } } | null> } | null } | null> } | null };

export const AssetFieldsFragmentDoc = gql`
    fragment AssetFields on Asset {
  title
  url
  width
  height
}
    `;
export const SkillsFieldsFragmentDoc = gql`
    fragment SkillsFields on Skills {
  sys {
    id
  }
  skill
  skillLogo {
    ...AssetFields
  }
}
    ${AssetFieldsFragmentDoc}`;
export const ExperienceFieldsFragmentDoc = gql`
    fragment ExperienceFields on Experience {
  sys {
    id
  }
  dateRange
  description
  enterprise
  enterpriseLogo {
    ...AssetFields
  }
  occupation
  subDescription
}
    ${AssetFieldsFragmentDoc}`;
export const WebsiteFieldsFragmentDoc = gql`
    fragment WebsiteFields on Websites {
  sys {
    id
  }
  webName
  webDescription
  webLink
  webPreview {
    ...AssetFields
  }
}
    ${AssetFieldsFragmentDoc}`;
export const ImageCollectionRequiresFragmentDoc = gql`
    fragment ImageCollectionRequires on Asset {
  sys {
    environmentId
    spaceId
    id
  }
  contentfulMetadata {
    tags {
      id
    }
  }
  ...AssetFields
}
    ${AssetFieldsFragmentDoc}`;
export const ProjectFieldsFragmentDoc = gql`
    fragment ProjectFields on Projects {
  sys {
    id
  }
  projectName
  projectDescription
  projectPreview {
    ...AssetFields
  }
  projectStackCollection {
    items {
      ...ImageCollectionRequires
    }
  }
}
    ${AssetFieldsFragmentDoc}
${ImageCollectionRequiresFragmentDoc}`;
export const GetSkillsListDocument = gql`
    query getSkillsList($limit: Int = 20, $skip: Int = 0, $order: [SkillsOrder] = sys_publishedAt_DESC, $locale: String) {
  skillsCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    items {
      ...SkillsFields
    }
  }
}
    ${SkillsFieldsFragmentDoc}`;
export const GetExperienceListDocument = gql`
    query getExperienceList($limit: Int = 20, $skip: Int = 0, $order: [ExperienceOrder] = sys_publishedAt_DESC, $locale: String) {
  experienceCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    items {
      ...ExperienceFields
    }
  }
}
    ${ExperienceFieldsFragmentDoc}`;
export const GetWebsiteListDocument = gql`
    query getWebsiteList($limit: Int = 20, $skip: Int = 0, $order: [WebsitesOrder] = sys_publishedAt_DESC, $locale: String) {
  websitesCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    items {
      ...WebsiteFields
    }
  }
}
    ${WebsiteFieldsFragmentDoc}`;
export const GetProjectListDocument = gql`
    query getProjectList($limit: Int = 20, $skip: Int = 0, $order: [ProjectsOrder] = sys_publishedAt_DESC, $locale: String) {
  projectsCollection(limit: $limit, skip: $skip, order: $order, locale: $locale) {
    items {
      ...ProjectFields
    }
  }
}
    ${ProjectFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSkillsList(variables?: IGetSkillsListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetSkillsListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetSkillsListQuery>(GetSkillsListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSkillsList');
    },
    getExperienceList(variables?: IGetExperienceListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetExperienceListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetExperienceListQuery>(GetExperienceListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getExperienceList');
    },
    getWebsiteList(variables?: IGetWebsiteListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetWebsiteListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetWebsiteListQuery>(GetWebsiteListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getWebsiteList');
    },
    getProjectList(variables?: IGetProjectListQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<IGetProjectListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<IGetProjectListQuery>(GetProjectListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProjectList');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;