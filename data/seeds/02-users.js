exports.seed = function(knex, Promise) {
    return knex('users').insert([
      {
        username: "the grinch",
        country: "Whoville",
        user_type: "3",
        available: "2020-11-18 03:47:35",
        password: "$2a$10$h6GEnO1ubVktojel3FQ1weQS4P8c8U3JyygqNe60KlJLdpEdhajcy"
    },
    {
        username: "pink panther",
        country: "England (I think?)",
        user_type: "3",
        available: "2020-11-18 03:47:43",
        password: "$2a$10$h6GEnO1ubVktojel3FQ1weQS4P8c8U3JyygqNe60KlJLdpEdhajcy"
    },
    {
        username: "me",
        country: "USA",
        user_type: "3",
        available: "2020-11-18 03:47:52",
        password: "$2a$10$h6GEnO1ubVktojel3FQ1weQS4P8c8U3JyygqNe60KlJLdpEdhajcy"
    }
    //all of the passwords are password
    ]);
  };