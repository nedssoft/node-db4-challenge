const { Router} = require('express');
const { getAllRecipes } = require('../controllers')


const router = Router();
router.get('/recipes', getAllRecipes )
module.exports = router;