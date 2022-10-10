import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [RecipesComponent],
  exports: [],
})
export class RecipesModule {}
