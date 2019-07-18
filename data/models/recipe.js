const db = require("../dbConfig");

const getRecipes = () => {
  try {
    const recipes = db("recipes");
  } catch (error) {
    throw new Error(error.message);
  }
};




