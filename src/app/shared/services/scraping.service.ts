import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Strings } from 'src/app/components/scraping/scraping.component';
import { artical } from '../models/Artical.model';
import { material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {
  Url ="https://localhost:44339/api/googleScraping"
 //Url2 = "https://localhost:44339/api/"
  constructor(private https: HttpClient) { }
//Sends a description to scraping
  ScrapingMatrial(LineToSeach:String):Observable<material[]>{
   console.log(LineToSeach);
    return this.https.get<material[]>(`${this.Url}/scrapmaterial/${LineToSeach}`)

  }
  
//Sends a list to analyze the text of the materials for an accurate calculation of the list
  SendListStringsTOanalyzeTheText(list:Strings[]):Observable<number>
  {
      return this.https.post<number>(`${this.Url}/analyzetext`,list);
  }
  
GetSpecificArtical( Code:string):Observable<artical>
{
return this.https.get<artical>(`${this.Url}/GetArticalSpecific/${Code}`)
}
scarpArtical():Observable<artical[]>{

  return this.https.get<artical[]>(`${this.Url}/GetArtical`);
}

}
