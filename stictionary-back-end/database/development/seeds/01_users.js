const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            const salt = bcrypt.genSaltSync(10);;
            return knex('users').insert([{
                username: 'test',
                email: 'test@gmail.com',
                password: bcrypt.hashSync("test", salt)
                
            }, ]);
        });
};