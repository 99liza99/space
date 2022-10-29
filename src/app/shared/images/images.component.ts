import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Photo} from "../../interfaces/response";
import lgZoom from 'lightgallery/plugins/zoom';
import {LightGallery} from "lightgallery/lightgallery";
import {InitDetail} from "lightgallery/lg-events";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnChanges, OnInit{
  @Input() photos: Photo[] | undefined;
  private lightGallery: LightGallery | undefined;

  settings = {
    counter: true,
    plugins: [lgZoom],
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

}
