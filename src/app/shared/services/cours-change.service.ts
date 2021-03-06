import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoursChange} from '../model/cours-change';



@Injectable({
  providedIn: 'root'
})
export class CoursChangeService {
  private url = environment.apiUrl + '/coursChange';
  constructor(private httpClient: HttpClient) { }
  public  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

}
