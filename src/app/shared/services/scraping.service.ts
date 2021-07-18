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
 //Url2 = "https://localhost:44339/api/"
  constructor(private https: HttpClient) { }
//Sends a description to scraping
  ScrapingMatrial(LineToSeach:String):Observable<material[]>{
   console.log(LineToSeach);
    return this.https.get<material[]>(`${this.Url}/scrapmaterial/${LineToSeach}`)

  }
  
//get Resulte of scrping
  GetMaterials():Observable<material[]>
  {
return this.https.get<material[]>(`${this.Url}/getlistmaterial`);
  }
}
