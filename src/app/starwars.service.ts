import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, from, Observable } from 'rxjs';
import {
  concatMap,
  expand,
  map,
  mergeMap,
  reduce,
  toArray,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  constructor(private http: HttpClient) {}

  // Get all the ships
  getShips() {
    return this.http
      .get(`https://swapi.dev/api/starships/?page=1&format=json`)
      .pipe(
        // Check if the response has a link to the next page, if yes then query the next page.
        expand((res: any) => {
          return res.next ? this.http.get(res.next) : EMPTY;
        }),
        concatMap((res: any) => res.results), // Get only the results and concat them to an array
        toArray()
      );
  }

  getPilots(pilots: Array<any>) {
    return forkJoin(pilots.map((url) => this.http.get(url)));
  }
}
