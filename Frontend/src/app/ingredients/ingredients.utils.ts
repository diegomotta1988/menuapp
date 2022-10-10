export enum INGREDIENT_TYPES {
  BREAD = 'Pan',
  DAIRY = 'Lácteo',
  FISH = 'Pescado',
  FRUIT = 'Fruta',
  LEGUME = 'Legumbre',
  MEAT = 'Carne',
  VEGETABLE = 'Verdura',
}

export const INGREDIENT_TYPES_AND_IMAGES: Map<string, string> = new Map([
  [INGREDIENT_TYPES.BREAD, 'ingredient_bread.png'],
  [INGREDIENT_TYPES.DAIRY, 'ingredient_dairy.png'],
  [INGREDIENT_TYPES.FISH, 'ingredient_fish.png'],
  [INGREDIENT_TYPES.FRUIT, 'ingredient_fruit.png'],
  [INGREDIENT_TYPES.LEGUME, 'ingredient_legume.png'],
  [INGREDIENT_TYPES.MEAT, 'ingredient_meat.png'],
  [INGREDIENT_TYPES.VEGETABLE, 'ingredient_vegetable.png'],
]);
