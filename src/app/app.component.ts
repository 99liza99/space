import {Component} from '@angular/core';
import {Camera, Rover} from "./interfaces/options";
import {ExpeditionService} from "./services/expedition.service";
import {Observable} from "rxjs";
import {Photo, Result} from "./interfaces/response";
import {Filter} from "./interfaces/filters";
import {CAMERA_OPTIONS, DEFAULT_FILTER, ROVERS_OPTIONS} from "./constants/defaultFilter";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSol: number = DEFAULT_FILTER.sol;
  rovers: Rover[] = ROVERS_OPTIONS;
  cameras: Camera[] = CAMERA_OPTIONS;
  filter: Filter = DEFAULT_FILTER;
  data$: Observable<Result> = this.service.images$;
  images: Photo[] | undefined;
  showButtonNext: boolean = false;
  isFilterChanged: boolean = false;
  blurNumber: number = 5;

  constructor(private service: ExpeditionService, private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.ngxService.start();
    this.data$.subscribe(res => {
      if (this.images && this.showButtonNext && !this.isFilterChanged){
        this.images = [ ...this.images, ...res.photos];
      }else {
        this.images = res.photos;
      }
      this.showButtonNext = this.images.length >= this.filter.page * 25;
      this.ngxService.stop();
    })
  }

  changeRover(data: string) {
    this.ngxService.start();
    this.filter.rover = data;
    this.isFilterChanged = true;
    this.service.filterValue.next(this.filter);
  }

  changeCamera(data: string) {
    this.ngxService.start();
    this.filter.camera = data;
    this.isFilterChanged = true;
    this.service.filterValue.next(this.filter);
  }

  changeSol(data: number) {
    this.ngxService.start();
    this.filter.sol = data;
    this.isFilterChanged = true;
    this.service.filterValue.next(this.filter);
  }

  showMorePhotos() {
    this.ngxService.start();
    this.filter.page++;
    this.isFilterChanged = false;
    this.service.filterValue.next(this.filter);
  }
}


