import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Category } from '../models/category.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  addRecipeToCookbook(recipe: Recipe): Observable<string> {
    let userId = localStorage.getItem('currentUser');
    return this.http.post<string>(environment.url + 'recipe/addRecipeToCookbook/' + userId, recipe);
  }

  deleteRecipeFromCookbook(recipe: Recipe): Observable<string> {
    let userId = localStorage.getItem('currentUser');
    return this.http.delete<string>(environment.url + 'recipe/deleteRecipeFromCookbook/' + recipe.RecipeId +'/'+ userId);
  }

  getUserCookbook(): Observable<Recipe[]> {
    let userId = localStorage.getItem('currentUser');
    return this.http.get<Recipe[]>(environment.url + 'recipe/getUserCookbook/'+userId);
  }

  checkIfRecipeExist(recipe:Recipe): Observable<boolean> {
    let userId = localStorage.getItem('currentUser');
    return this.http.post<boolean>(environment.url + 'recipe/checkIfRecipeExist/' + userId , recipe);
  }


}
