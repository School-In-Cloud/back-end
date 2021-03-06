const router = require('express').Router();
const Tasks = require('./tasks-model.js');

router.get('/', (req, res) => {
    Tasks.getall()
        .then(tasks =>{
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json('Failed to fetch tasks');
        })
})


router.post('/newtask', async(req, res) => {
    const taskname = req.body;

    Tasks.add(taskname)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to create new task" });
      });
})


router.get('/search', (req, res)=>{
  try {
    const { query } = req.body;
    Tasks.searchTask(query)
    .then(tasks => {
      if (tasks.length) {
        res.json(tasks)
      } else {
        res.json({ message: `Could not find task with given query: ${query}` })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.json({ error: err.message })
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  
});


router.get('/:id', (req, res)=>{
  Tasks.getByTaskID(req.params.id)
  .then(tasks => {
      if (tasks.length) {
        res.json(tasks)
      } else {
        res.json({ message: `Could not find task with given id: ${id}` })
      }
    })
    .catch(err => {
      console.log(err.message)
      res.json({ error: err.message })
    });
});

router.get('/:id/tasks', (req, res)=>{
    Tasks.getbyvolunteer(req.params.id)
    .then(tasks => {
        if (tasks.length) {
          res.json(tasks)
        } else {
          res.json({ message: `No task found for ID: ${req.params.id}` })
        }
      })
      .catch(err => {
        console.log(err.message)
        res.json({ error: err.message })
      });
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    Tasks.destroy(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res.status(404).json({ message: `Could not find task with given id: ${id}` });
        }
      })
      .catch(err => {
        res.status(500).json({ message: `Error occured while desroying that task with id: ${id}` });
      });
  });


  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Tasks.update(id, changes)
      .then(task => {
        if (task) {
          res.json(task);
        } else {
          res.status(404).json({ message: `Could not find task with given ID: ${id}` });
        }
      })
      .catch(err => {
        res.status(500).json({ message: `No changes found for that task. (${id})` });
      });
  });


module.exports = router;