
exports.up = function(knex, Promise) {
    return knex.schema.createTable('repositorios', table => {
        table.increments('id').primary()
        table.string('id_repositorio').notNull()
        table.string('name').notNull()
        table.string('full_name').notNull()
        table.string('url').notNull()
        table.string('description')
        table.string('language')
        table.string('forks')
        table.string('issues')
        table.string('stargazers')
        table.string('subscribers')
        table.timestamp('data_criacao').defaultTo(knex.fn.now())
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('repositorios')
}
