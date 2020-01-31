import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoriesData} from '../interface/categories';

@Injectable({
  providedIn: 'root'
})
export class PopoverDataService {

  constructor(private httpClient: HttpClient) {
  }

  getCategories(): Observable<CategoriesData> {
    return this.httpClient.get<CategoriesData>('assets/categories.json');
  }
}
