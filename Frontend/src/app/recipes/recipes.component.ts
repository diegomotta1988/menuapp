import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { RecipesList, RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  public recipesList: RecipesList;
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.getRecipes().subscribe();
  }

  getRecipes(): Observable<RecipesList> {
    return this.recipesService.getRecipesList().pipe(
      tap((res) => {
        this.recipesList = res;
      })
    );
  }
}
