
exports.up = function(knex) {
 return knex.schema.createTable('recipe_ingredients', table => {
    table.increments()
    table.integer('recipe_id').notNullable()
    table.integer('ingredient_id').notNullable()
    table.decimal('quantity').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('recipe_id').references('id').inTable('recipes');
    table.foreign('ingredient_id').references('id').inTable('ingredients');
  })
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('recipe_ingredients')
};
