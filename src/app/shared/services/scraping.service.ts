import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Strings } from 'src/app/components/scraping/scraping.component';
import { material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {
  Url ="https://localhost:44339/api/handlingmaterials"

  constructor(private https: HttpClient) { }
//Sends a description to scraping
  ScrapingMAtrial(LineToSeach:Strings[]):Observable<number>{
   console.log(LineToSeach);
    return this.https.get<number>(`${this.Url}/scrapmaterial/${LineToSeach}`)

  }
//get Resulte of scrping
  GetMaterials():Observable<material[]>
  {
return this.https.get<material[]>(`${this.Url}/getlistmaterial`);
  }
}
