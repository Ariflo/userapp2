
exports.up = function(knex, Promise) {
	return knex.schema.createTable('students', function(table){
		table.increments(); //create id SERIAL PRIMARY KEY
		table.string('name');
	});
  
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('students'); 
};
