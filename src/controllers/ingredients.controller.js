const response = require('express');
const Ingredient = require('../models/ingredient.model.js');

const getIngredients = async (req, res = response) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(201).json(ingredients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los ingredientes' });
  }
};

const getIngredientByName = async (req, res = response) => {
  try {
    const { name } = req.params;
    console.log(name);
    const ingredients = await Ingredient.find({ name: `/${name}/` });
    console.log('ingredientes', ingredients);
    res.status(201).json(ingredients);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los ingredientes' });
  }
};

const createIngredient = async (req, res = response) => {
  const { name } = req.body;
  try {
    let ingredient = await Ingredient.findOne({ name });

    if (ingredient) {
      return res.status(400).json({
        ok: false,
        msg: 'El ingrediente ya existe',
      });
    }

    ingredient = new Ingredient(req.body);
    await ingredient.save();

    res.status(201).json({
      ok: true,
      ingredient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const editIngredient = async (req, res = response) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      ok: true,
      ingredient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'El ingrediente no pudo ser actualizado',
    });
  }
};

const deleteIngredient = async (req, res = response) => {
  const { id } = req.params;
  try {
    const ingredient = await Ingredient.findByIdAndDelete(id);
    res.status(201).json({
      ok: true,
      ingredient,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

module.exports = {
  getIngredients,
  createIngredient,
  editIngredient,
  deleteIngredient,
  getIngredientByName,
};
