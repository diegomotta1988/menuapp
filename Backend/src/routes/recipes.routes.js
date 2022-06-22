const Router = require('express');
const {
  getRecipes,
  createRecipe,
  searchRecipesByText,
  searchRecipesByIngredient,
  searchRecipesByIngredientType,
  searchRecipesByName,
  editRecipe,
  getMenu,
} = require('../controllers/recipes.controller.js');
const recipeRoutes = Router({ mergeParams: true });

recipeRoutes.get('/', getRecipes);

recipeRoutes.get('/searchByText/:text', searchRecipesByText);

recipeRoutes.get('/searchByIngredient/:ingredient', searchRecipesByIngredient);

recipeRoutes.get(
  '/searchByIngredientType/:ingredientType',
  searchRecipesByIngredientType
);

recipeRoutes.get('/searchByName/:name', searchRecipesByName);

recipeRoutes.get('/menu', getMenu);

recipeRoutes.put('/:id', editRecipe);

recipeRoutes.post('/', createRecipe);

module.exports = { recipeRoutes };
