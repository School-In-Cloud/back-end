exports.seed = function(knex, Promise) {
    return knex('user_types').insert([
      { type: 'admin' },
      { type: 'student' },
      { type: 'volunteer' },
    ]);
  };