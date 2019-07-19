
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'maggi'},
        {id: 2, name: 'okpeyi'},
        {id: 3, 'name': 'salt'}
      ]);
    });
};
