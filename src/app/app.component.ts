import {Component, Input} from '@angular/core';
import {Camera, Rover} from "./interfaces/options";
import {ExpeditionService} from "./services/expedition.service";
import {Observable, tap} from "rxjs";
import {Result} from "./interfaces/response";
import {Filter} from "./interfaces/filters";
import {CAMERA_OPTIONS, DEFAULT_FILTER, ROVERS_OPTIONS} from "./constants/defaultFilter";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSol: number = DEFAULT_FILTER.sol.value;
  rovers: Rover[] = ROVERS_OPTIONS;
  cameras: Camera[] = CAMERA_OPTIONS;
  filter: Filter = DEFAULT_FILTER;
  data$: Observable<Result> = this.service.images$;
  hideButtonNext: boolean = false;
  blurNumber: number = 5;

  constructor(private service: ExpeditionService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.ngxService.start();
    this.data$.subscribe(res => {
      if (res.photos.length < this.filter.page.value * 25) {
        this.hideButtonNext = true;
      } else {
        this.hideButtonNext = false;
      }
      this.ngxService.stop();
    })
  }

  changeRover(data: Rover) {
    this.ngxService.start();
    this.filter.rover = data;
    this.service.filterValue.next(this.filter);
  }

  changeCamera(data: Camera) {
    this.ngxService.start();
    this.filter.camera = data;
    this.service.filterValue.next(this.filter);
  }

  changeSol(data: number) {
    this.ngxService.start();
    this.filter.sol.value = data;
    this.service.filterValue.next(this.filter);
  }

  showMorePhotos() {
    this.ngxService.start();
    this.filter.page.value++;
    this.service.filterValue.next(this.filter);
  }
}
