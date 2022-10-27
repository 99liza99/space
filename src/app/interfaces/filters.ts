import {Camera, Page, Rover, Sol} from "./options";

export interface Filter {
  rover: Rover,
  camera: Camera,
  sol: Sol,
  page: Page
}
