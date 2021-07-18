import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { Area } from '../models/Area.model';
import { artical } from '../models/Artical.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  Url ="https://localhost:44339/api/main"

  constructor(private https: HttpClient) { }
  GetNameArea():Observable<Area[]>{
   
    return this.https.get<Area[]>(`${this.Url}/getnamearea`)

  }
 
 

}
