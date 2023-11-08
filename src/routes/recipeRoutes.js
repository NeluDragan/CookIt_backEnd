const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const authenticateUser = require("../controllers/authenticateUser");

router.get("/recipe", recipeController.getRecipes);
router.post("/addRecipe", recipeController.addRecipe);
router.put("/recipe/:id", recipeController.updateRecipe);

module.exports = router;
