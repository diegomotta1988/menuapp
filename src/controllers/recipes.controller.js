const response = require('express');
const Recipe = require('../models/recipe.model.js');

const getRecipes = async (req, res = response) => {
  try {
    const recipes = await Recipe.find();
    res.status(201).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener las recetas' });
  }
};

const createRecipe = async (req, res = response) => {
  const { name, instructions, ingredients } = req.body;
  try {
    let recipe = await Recipe.findOne({ name });
    if (recipe) {
      return res.status(400).json({
        ok: false,
        msg: 'La receta ya existe',
      });
    }
    recipe = new Recipe({ name, instructions, ingredients });
    await recipe.save();
    res.status(201).json({
      ok: true,
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const editRecipe = async (req, res = response) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      ok: true,
      recipe,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'La receta no pudo ser actualizada',
    });
  }
};

const deleteRecipe = async (req, res = response) => {
  const { id } = req.params;
  try {
    await Recipe.findByIdAndDelete(id);
    res.status(201).json({
      ok: true,
      msg: 'La receta fue eliminada',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const searchRecipesByText = async (req, res = response) => {
  const { text } = req.params;
  console.log('búsqueda', text);
  try {
    const recipes = await Recipe.find({ $text: { $search: text } });

    res.status(201).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const searchRecipesByName = async (req, res = response) => {
  const { name } = req.params;
  console.log('búsqueda', name);
  try {
    const recipes = await Recipe.find(
      {
        name: { $regex: `.*${name}`, $options: 'i' },
      },
      { name: 1 }
    );
    res.status(201).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const searchRecipesByIngredient = async (req, res = response) => {
  const { ingredient } = req.params;
  console.log('búsqueda', ingredient);
  try {
    const recipes = await Recipe.find(
      {
        'ingredients.ingredient.name': {
          $regex: `.*${ingredient}`,
          $options: 'i',
        },
      },
      { name: 1 }
    );

    res.status(201).json(recipes);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  editRecipe,
  deleteRecipe,
  searchRecipesByText,
  searchRecipesByIngredient,
  searchRecipesByName,
};
