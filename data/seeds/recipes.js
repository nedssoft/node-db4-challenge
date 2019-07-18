
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'egusi soup'},
        {id: 2, name: 'Oha soup'},
        {id: 3, name: 'nsala'}
      ]);
    });
};
