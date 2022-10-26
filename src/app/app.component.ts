import {Component} from '@angular/core';
import {Camera, Rover} from "./interfaces/options";
import {ExpeditionService} from "./services/expedition.service";
import {Observable} from "rxjs";
import {Result} from "./interfaces/response";
import {Filter} from "./interfaces/filters";
import {CAMERA_OPTIONS, DEFAULT_FILTER, ROVERS_OPTIONS} from "./constants/defaultFilter";

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

  constructor(private service: ExpeditionService) {
  }

  ngOnInit() {
  }

  changeRover(data: Rover) {
    this.filter.rover = data;
    this.service.filterValue.next(this.filter);
  }

  changeCamera(data: Camera) {
    this.filter.camera = data;
    this.service.filterValue.next(this.filter);
  }

  changeSol() {
    this.filter.sol.value = this.currentSol;
    this.service.filterValue.next(this.filter);
  }
}
