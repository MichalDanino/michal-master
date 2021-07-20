import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { Area } from '../models/Area.model';
import { artical } from '../models/Artical.model';
import { SelectionUser } from '../models/selectionUser.model';
import { SearchOfSelectionUser } from '../models/SearchOfSelectionUser.model';
import { feedbake } from '../models/FeedBake.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  Url ="https://localhost:44339/api/main"

  constructor(private https: HttpClient) { }
  GetNameArea():Observable<Area[]>{
   
    return this.https.get<Area[]>(`${this.Url}/getnamearea`)

  }
 GetDateOfSelection(id:string):Observable<SelectionUser[]>
 {
  return this.https.get<SelectionUser[]>(`${this.Url}/getaDate/${id}`)
 }
 GetSelectionUsern(code:string):Observable<SearchOfSelectionUser[]>
 {
  return this.https.get<SearchOfSelectionUser[]>(`${this.Url}/getaSearchOfSelectionUser/${code}`)
 }
 SentTOlERNING(LIST:feedbake):Observable<number>
 {
  return this.https.post<number>(`${this.Url}/lerning`,LIST)
 }
 

}
