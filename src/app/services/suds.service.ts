import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SudsService {

  API_PATH = 'https://api.punkapi.com/v2';
  MAX_PER_PAGE = 10;

  constructor(private http: Http) { }

  getSuds(page: number = 1) {
    return this.http.get(`${this.API_PATH}/beers?page=${page}&per_page=${this.MAX_PER_PAGE}`)
      .map((res: Response) => res.json());
  }
}
