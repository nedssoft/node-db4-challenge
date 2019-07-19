const db = require("../dbConfig");
const { ErrorHandler } = require("../../helpers");

const getRecipes = () => {
  try {
    const recipes = db("recipes");
    return recipes
  } catch (error) {
    throw new ErrorHandler(500, error.message);
  }
};

const getShoppingList = recipe_id => {
  try {
    const recipe = db("recipes")
      .select('recipes.id as recipeId', 'recipes.name as recipeName', 'steps.step_number', 'steps.instruction', 'ingredients.name as ingredientName', 'recipe_ingredients.quantity as ingredientQuantity', 'recipe_ingredients.unit as quantityUnit')
      .where('recipes.id', recipe_id)
      .join("recipe_ingredients", "recipes.id", "recipe_ingredients.recipe_id")
      .join("ingredients", "recipes.id", "recipe_ingredients.ingredient_id")
      .join("steps", "recipes.id", "steps.recipe_id")
      .orderBy('steps.step_number')
      
    if (recipe) {
      return recipe;
    }
    return null;
  } catch (error) {
    throw new ErrorHandler(500, error.message);
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
    throw new ErrorHandler(500, error.message);
  }
};

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
