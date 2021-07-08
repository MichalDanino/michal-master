import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  Url ="https://localhost:44339/api/HandlingMaterials"

  constructor(private https: HttpClient) { }

  GetNameCategory():Observable<string[]>{
    return this.https.get<string[]>(`${this.Url}/GetNameRenovation`);
  }




 
  
}
