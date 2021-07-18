import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormsModule} from '@angular/forms'
import { ThrowStmt } from '@angular/compiler';
import { material } from '../models/material.model';
import { filterparmeter } from '../models/FilterParmeter.model';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  Url ="https://localhost:44339/api/HandlingMaterials"
  getListM():Observable<material[]>
  {
   return this.https.get<material[]>(`${this.Url}/GetlistMaterial`)
  }
  GetNameCategory():Observable<string[]>{
    return this.https.get<string[]>(`${this.Url}/GetNameRenovation`)
  }

  constructor(private https: HttpClient) { }
  getMatrialByReno(NameReno:string):Observable<Map<string,Map<string,string[] >>>
  {
return this.https.get<Map<string,Map<string,string[] >>>(this.Url+"/GetNmaeByRevo/"+NameReno)
  }
  getproductCalculations(listFilter:filterparmeter[],listMaterial:material[],listWorkers:Worker[]):Observable<number>
  {
    console.log("servix")
      return this.https.post<number>(`${this.Url}/productCalculations`,{listFilter,listMaterial,listWorkers})
  }
}
