const Router = require('express');
const {
  getRecipes,
  createRecipe,
  searchRecipesByIngredient,
  editRecipe,
} = require('../controllers/recipes.controller.js');
const recipeRoutes = Router({ mergeParams: true });

recipeRoutes.get('/', getRecipes);

recipeRoutes.get('/searchByIngredient/:ingredient', searchRecipesByIngredient);

recipeRoutes.put('/:id', editRecipe);

recipeRoutes.post('/', createRecipe);

module.exports = { recipeRoutes };
