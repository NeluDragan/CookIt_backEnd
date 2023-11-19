const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    enum: ["ml", "g", "piece"],
    required: true,
  },
  diet: {
    type: [String],
    enum: [
      "vegan",
      "meatless",
      "vegetarian",
      "gluten-free",
      "sugar-free",
      "alcohol-free",
    ],
    required: false,
  },
  type: {
    type: String,
    enum: ["fruit", "vegetable", "grain", "protein", "dairy", "other"],
    required: false,
  },
  photo: {
    type: String,
    required: false,
  },
});

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
