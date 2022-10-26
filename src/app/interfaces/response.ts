export interface Rover {
  name: string
}

export interface Camera extends Rover {
  full_name: string
}

export interface Photo {
  img_src: string,
  camera: Camera,
  rover: Rover
}

export interface Result {
  photos: Photo[]
}
