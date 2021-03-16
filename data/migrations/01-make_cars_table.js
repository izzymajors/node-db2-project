// DO YOUR MAGIC
exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
        table.increments('car_id')
        table.string('vin').unique().notNullable()
        table.string('make')
        table.string('model')
       
        
     
      });
    };

    exports.down = function(knex) {
        return knex.schema.dropTableIfExists('cars')
    };