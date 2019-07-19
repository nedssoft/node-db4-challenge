
exports.up = function(knex) {
  return knex.schema.createTable('steps', table => {
    table.increments()
    table.integer('recipe_id').unsigned().notNullable()
    table.integer('step_number').unsigned().notNullable()
    table.text('instruction').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now());

    table.foreign('recipe_id').references('id').inTable('recipes');
})

}
exports.down = function(knex) {
  knex.schema.dropTableIfExists('steps')
};
