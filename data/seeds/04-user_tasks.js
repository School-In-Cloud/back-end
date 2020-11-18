exports.seed = function(knex, Promise) {
    return knex('user_tasks').insert([
    {
        user_id: "3", 
        task_id: "1"
    },
    {
        user_id: "3", 
        task_id: "2"
    },
    {
        user_id: "3", 
        task_id: "3"
    },
    {
        user_id: "1", 
        task_id: "4"
    },
    {
        user_id: "1", 
        task_id: "5"
    },
    {
        user_id: "1", 
        task_id: "6"
    },
    {
        user_id: "1", 
        task_id: "7"
    },
    {
        user_id: "1", 
        task_id: "8"
    },
    {
        user_id: "1", 
        task_id: "9"
    },
    {
        user_id: "2", 
        task_id: "10"
    },
    {
        user_id: "1", 
        task_id: "11"
    },
    {
        user_id: "1", 
        task_id: "12"
    },
    {
        user_id: "1", 
        task_id: "13"
    },
    {
        user_id: "1", 
        task_id: "14"
    },
    {
        user_id: "1", 
        task_id: "15"
    },
    {
        user_id: "1", 
        task_id: "16"
    }
    ]);
  };