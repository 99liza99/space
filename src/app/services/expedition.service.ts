import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, switchMap} from "rxjs";
import {Result} from "../interfaces/response";
import {Filter} from "../interfaces/filters";
import {DEFAULT_FILTER} from "../constants/defaultFilter";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {
  private apiKey: string = 'eTEUM9J91bPCvNpubEdVU1ZDp2kOBJWCE9ykxdzM';

  private adminUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

  constructor(private http: HttpClient) {
  }

  filterValue = new BehaviorSubject<Filter>(DEFAULT_FILTER);
  filterValue$ = this.filterValue.asObservable();

  images$: Observable<Result> = combineLatest([
    this.filterValue$,
  ]).pipe(
    switchMap(([filter]) => this.getImages(filter)),
  );

  getImages(filter: Filter): Observable<Result> {
    let params = {
      sol: filter.sol.value,
      camera: filter.camera.key,
      api_key: this.apiKey
    }
    return this.http.get<Result>(this.adminUrl + filter.rover.key + '/photos', {params});
  }
}
