
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, instruction: 'Wash pot and ensure there is gas in the cylinder'},
        {id: 2, recipe_id: 1, step_number: 2, instruction: 'Wash the meat and add 1 gram of salt, 1 maggi and onions'},
        {id: 3, recipe_id: 1, step_number: 3, instruction: 'Steam the meat for 30 mins'},
        {id: 4, recipe_id: 1, step_number: 4, instruction: 'Put the egusi in a bowl, add small water to moisten it, add a little oil and steer smoothly '},
      ]);
    });
};
