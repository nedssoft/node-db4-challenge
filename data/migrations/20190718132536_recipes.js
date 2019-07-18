
exports.up = function(knex) {
 return  knex.schema.createTable('recipes', table => {
    table.increments()
    table.string('name').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('recipes');
};
