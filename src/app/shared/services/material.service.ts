import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  Url ="https://localhost:44339/api/HandlingMaterials"

  constructor(private https: HttpClient) { }
  getMatrialByReno(NameReno:string):Observable<Map<string,Map<string,string[] >>>
  {
return this.https.get<Map<string,Map<string,string[] >>>(this.Url+"/GetNmaeByRevo/"+NameReno)
  }
}
