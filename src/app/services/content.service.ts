import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  baseUrl: string = "../assets/db.json";
  constructor(private http: HttpClient) { }

  getSections():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
