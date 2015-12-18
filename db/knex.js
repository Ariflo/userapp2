//tell knex what enviorment I'm in 

var env = process.env.NODE_ENV || 'development';
var config = require("../knexfile")[env];
module.exports = require("knex")(config);