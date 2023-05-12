/* tslint:disable */
/* eslint-disable */
import { DinosaurDetails } from './dinosaur-details';
import { DinosaurHabitatDetails } from './dinosaur-habitat-details';
export interface ParkAnimalDetails {
  animalNumber?: number;
  birthdate?: string;
  description?: null | string;
  dinosaurType?: DinosaurDetails;
  gender?: null | string;
  habitat?: DinosaurHabitatDetails;
  id?: string;
  name?: null | string;
}
