const db = require("../data/db-config");


module.exports = {
    add,
    getall,
    getbyvolunteer,
    update, 
    destroy,
    getByTaskID
  };


  function getall() {
    return db("tasks").select("id", "task_name","publish_date").orderBy("id");
  }

  function getByTaskID(id) {
    return db("tasks").where({ id });
  }

  async function add(task) {
        const [id] = await db("tasks").insert(task)
        return db('tasks').where({ id }).first()
  }


  function getbyvolunteer(id){
    return db('tasks as t')
    .join('user_tasks as ut', 't.id', 'ut.task_id')
    .join('users as u', 'ut.user_id', 'u.id')
    .select('u.username', 't.task_name')
    .where({'u.id': id})
  }

 async function destroy(id) {
    const task = await db('tasks').where({ id }).first()
    if (!task) return Promise.resolve(null)
    await db("tasks").where({ id }).del()
    return Promise.resolve(task)
  }

  async function update(id, changes){
    const count = await db("tasks").where({ id }).update(changes)
    if (count) {
      return db('tasks').where({ id }).first()
    } else {
      return Promise.resolve(null)
    }
  }