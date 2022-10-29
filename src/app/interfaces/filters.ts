import {Camera, Page, Rover, Sol} from "./options";

export interface Filter {
  rover: string,
  camera: string,
  sol: number,
  page: number
}
