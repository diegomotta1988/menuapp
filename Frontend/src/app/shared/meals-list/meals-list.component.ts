import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { INGREDIENT_TYPES_AND_IMAGES } from '../../ingredients/ingredients.utils';
import { Recipe, RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss'],
})
export class MealsListComponent implements OnInit {
  @Input() mealsList: Recipe[];
  INGREDIENT_TYPES_AND_IMAGES = INGREDIENT_TYPES_AND_IMAGES;
  constructor() {}

  ngOnInit(): void {}
}
