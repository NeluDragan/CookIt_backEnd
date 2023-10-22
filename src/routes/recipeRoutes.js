const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/recipe", recipeController.getRecipes);
router.post("/addRecipe", recipeController.addRecipe);
router.put("/recipe/:id", recipeController.updateRecipe);

module.exports = router;
