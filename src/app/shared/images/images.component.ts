import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../interfaces/response";
import lgZoom from 'lightgallery/plugins/zoom';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() photos: Photo[] | undefined;
  settings = {
    counter: true,
    plugins: [lgZoom],
  };
  constructor() {
  }

  ngOnInit(): void {
  }

}
