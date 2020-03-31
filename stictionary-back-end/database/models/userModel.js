// create models.
const db = require('../../config/dbConfig');

const find = () => {
    return db('users').select('*');
}

const findByEmail = (user) => {
    return db('users').select('*').where('email', user);
}

const addUser = (userObj) => {
    return db('users').insert(userObj);
}

module.exports = {
    find,
    findByEmail,
    addUser
}