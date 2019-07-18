const { ErrorHandler } = require("../helpers");
const Recipe = require('../data/models/recipe')


const getAllRecipes = async (req, res, next) => {
 try {
   const recipes = await Recipe.getRecipes()
   if (!recipes) {
     throw new ErrorHandler(404, 'Now recipe found in the database')
   } 
   return res.status(200).json({
    message: 'Ok',
    recipes
  })
 } catch (error) {
   next(error)
 }
}

module.exports = {
  getAllRecipes
}