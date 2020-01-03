import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  private baseurl="http://localhost:3000/person";

  getData():Observable<any>{
return this.http.get(this.baseurl);
  }
}
