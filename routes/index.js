const { Router} = require('express');
const { getAllRecipes, getShoppingList } = require('../controllers')


const router = Router();
router.get('/', getAllRecipes )

router.get('/:id/shoppingList', getShoppingList)
module.exports = router;