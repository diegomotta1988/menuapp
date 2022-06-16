const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: false,
  },
  ingredients: [
    {
      ingredient: {
        type: Schema.Types.Object,
        ref: 'Ingredient',
        required: true,
      },
      amount: {
        type: String,
        required: false,
      },
    },
  ],
  ingredientTypes: [
    {
      type: Schema.Types.Object,
      ref: 'IngredientType',
      required: true,
    },
  ],
  lastMade: {
    type: Date,
    required: false,
  },
});

RecipeSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Recipe', RecipeSchema);
