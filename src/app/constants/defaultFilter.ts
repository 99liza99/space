import {Filter} from "../interfaces/filters";
import {Rover} from "../interfaces/options";

export const DEFAULT_FILTER: Filter = {
  rover: 'curiosity',
  camera: 'fhaz',
  sol: 433,
  page: 1
}

export const ROVERS_OPTIONS: Rover[] = [
  {
    key: 'curiosity',
    name: 'Curiosity'
  },
  {
    key: 'opportunity',
    name: 'Opportunity'
  },
  {
    key: 'spirit',
    name: 'Spirit'
  }
];
export const CAMERA_OPTIONS: Rover[] = [
  {
    key: 'fhaz',
    name: 'Front Hazard Avoidance Camera'
  },
  {
    key: 'rhaz',
    name: 'Rear Hazard Avoidance Camera'
  },
  {
    key: 'mast',
    name: 'Mast Camera'
  },
  {
    key: 'chemcam',
    name: 'Chemistry and Camera Complex'
  },
  {
    key: 'mahli',
    name: 'Mars Hand Lens Imager'
  },
  {
    key: 'mardi',
    name: 'Mars Descent Imager'
  },
  {
    key: 'navcam',
    name: 'Navigation Camera'
  },
  {
    key: 'pancam',
    name: 'Panoramic Camera'
  },
  {
    key: 'minites',
    name: 'Miniature Thermal Emission Spectrometer (Mini-TES)'
  },
]
