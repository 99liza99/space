import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../interfaces/response";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() photos: Photo[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
