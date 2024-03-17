const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");

exports.getRecipes = async (req, res) => {
  try {
    const { type } = req.query;

    let recipes;

    if (type) {
      recipes = await Recipe.find({ type: type });
    } else {
      recipes = await Recipe.find();
    }

    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    res.status(500).json({ error: "Error fetching recipes" });
  }
};

exports.addRecipe = async (req, res) => {
  try {
    const {
      name,
      ingredients,
      preparationTime,
      instructions,
      createdBy,
      type,
      image,
    } = req.body;

    const newRecipe = new Recipe({
      name,
      ingredients: ingredients.map((ingredient) => ({
        id: ingredient.id,
        quantity: ingredient.quantity,
      })),
      preparationTime,
      instructions,
      type,
      createdBy,
      image,
    });

    if (!image) {
      newRecipe.image =
        "/Users/macbookpro/Desktop/CookIt/src/images/recipe/defaultimage.png";
    }

    const savedRecipe = await newRecipe.save();
    await User.findByIdAndUpdate(createdBy, {
      $push: { favoriteRecipes: savedRecipe._id },
    });
    res.json(savedRecipe);
  } catch (error) {
    console.error("Eroare la adăugarea retetei:", error);
    res.status(500).json({ error: "Eroare la adăugarea retetei" });
  }
};

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  console.log(updates);

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
