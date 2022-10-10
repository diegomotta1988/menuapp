import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';

export interface RecipesList {
  count: number;
  items: Recipe[];
}

export interface Recipe {
  id?: string;
  ingredientTypes?: string[];
  ingredients?: any;
  instructions?: string;
  name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private apiService: ApiService) {}
  public getRecipesList(): Observable<RecipesList> {
    return this.apiService.get('/api/recipes');
  }
}
