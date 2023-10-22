const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");

exports.getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error("Eroare la obținerea retetelor:", error);
    res.status(500).json({ error: "Eroare la obținerea retetelor" });
  }
};

exports.addRecipe = async (req, res) => {
  try {
    const { name, ingredients, preparationTime, instructions, createdBy } =
      req.body;

    const newRecipe = new Recipe({
      name,
      ingredients,
      preparationTime,
      instructions,
      createdBy,
    });

    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
  } catch (error) {
    console.error("Eroare la adăugarea retetei:", error);
    res.status(500).json({ error: "Eroare la adăugarea retetei" });
  }
};

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const updates = req.body; // Datele noi pentru actualizare

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedRecipe) {
      return res.status(404).json({ error: "Reteta nu a fost gasita." });
    }

    res.json(updatedRecipe);
  } catch (error) {
    console.error("Eroare la actualizarea retetei:", error);
    res.status(500).json({ error: "Eroare la actualizarea retetei" });
  }
};
