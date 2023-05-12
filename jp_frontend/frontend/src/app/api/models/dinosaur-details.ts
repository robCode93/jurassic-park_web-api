/* tslint:disable */
/* eslint-disable */
import { DinosaurClassDetails } from './dinosaur-class-details';
import { DinosaurLocalityDetails } from './dinosaur-locality-details';
import { FileReferenceDetails } from './file-reference-details';
import { PeriodDetails } from './period-details';
export interface DinosaurDetails {
  classification?: DinosaurClassDetails;
  description?: null | string;
  discoveryYear?: null | number;
  dnaString?: null | Array<string>;
  eatingPattern?: null | string;
  heightInCentimeter?: number;
  id?: string;
  lengthInCentimeter?: number;
  localityOfDiscovery?: DinosaurLocalityDetails;
  modeOfLocomotion?: null | string;
  name?: null | string;
  period?: PeriodDetails;
  thumbnail?: FileReferenceDetails;
  thumbnailDownloadUrl?: null | string;
  thumbnailId?: null | string;
  versionNumber?: null | string;
  weightInKilogram?: number;
}
