exports.up = function(knex) {
    return knex.schema
        .createTable('users', user => {
            user.increments('uid');
            user.string('firstName', 255)
                .notNullable()
            user.string('lastName', 255)
                .notNullable()
            user.string('email', 255)
                .notNullable()
                .unique();
            user.string('password', 255).notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};