import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  Url ="https://localhost:44339/api/main"

  constructor(private https: HttpClient) { }
  GetNameArea():Observable<string[]>{
   
    return this.https.get<string[]>(`${this.Url}/getnamearea`)

  }
}
