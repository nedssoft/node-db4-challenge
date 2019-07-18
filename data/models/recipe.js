const db = require("../dbConfig");

const getRecipes = () => {
  try {
    const recipes = db("recipes");
  } catch (error) {
    throw new Error(error.message);
  }
};

const getShoppingList = recipe_id => {
  try {
    const recipe = db("recipes")
      .where({ id: recipe_id })
      .first()
      .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
      .join("ingredients", "recipes.id", "recipe_ingredients.ingredient_id")
      .join("steps", "recipes.id", "steps.recipe_id");
    if (recipe) {
      return recipe;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getInstructions = recipe_id => {
  try {
    const instructions = db("steps")
      .where({ recipe_id })
      .orderBy("step_number", "asc");
    if (instructions) {
      return instructions;
    }
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};