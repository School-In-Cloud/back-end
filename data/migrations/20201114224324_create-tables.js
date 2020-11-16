

exports.up = function(knex) {
    return knex.schema
    .createTable('user_types', tbl =>{
        tbl.increments();
  
        tbl.string('type', 255)
        .notNullable()
        .unique();
    })
    
    
    .createTable('users', users =>{
      users.increments();
  
      users.string('username', 255)
        .notNullable()
        .unique();
  
      users.string('password', 255)
          .notNullable();
  
      users.integer('user_type')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('user_types')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
      users.timestamp('available')
          .defaultTo(knex.fn.now());

    users.string('country', 225)
    .notNullable()
    })
  
    .createTable('tasks', tbl =>{
        tbl.increments()
  
        tbl.string('task_name', 255)
          .notNullable()
    })
  
    .createTable('user_tasks', tbl =>{
      tbl.increments()
  
      tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  
      tbl.integer('task_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('tasks')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
  })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('user_types') 
      .dropTableIfExists('users')
      .dropTableIfExists('tasks')
      .dropTableIfExists('user_tasks');
  };