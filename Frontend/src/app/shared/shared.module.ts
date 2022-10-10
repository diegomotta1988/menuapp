import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MealsListComponent } from './meals-list/meals-list.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatChipsModule, MatTooltipModule],
  declarations: [MealsListComponent],
  exports: [MealsListComponent],
})
export class SharedModule {}
