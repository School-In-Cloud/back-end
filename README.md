# school-in-cloud buildweek backend
![Heroku Badge](http://heroku-badge.herokuapp.com/?app=school-in-cloud-lambda)

This project was built by the #tt_webft_4 team at Lambda School.

### Current Production Endpoint
https://school-in-cloud-lambda.herokuapp.com/

## Endpoints

Endpoints for viewing the projects/technologies tables.

### Authentication related

Register a new account
* [Register](REGISTER.md) : `POST /api/auth/register` requires username, password, usertype, and country
Login to account
* [Login](LOGIN.md) : `POST /api/auth/login`
requires username and password


### EVERYTHING BELOW THIS POINT REQUIRES A KEY FROM THE API ###


### User related

All users endpoints require authentication.

GET an array of all user objects
* [Users](USERS.md) : `GET /api/users/volunteers`
gets a list of all volunteer users


### Task related
Get a list of all tasks
* [Tasks](TASKS.md) : `GET /api/tasks/all`
shows all tasks
* [Tasks](TASKS.md) : `POST /api/tasks/newtask`
adds a new task requires task_name
* [Tasks](TASKS.md) : `GET /api/tasks/:id/tasks`
gets all tasks assigned to the user with the attached id
* [Tasks](TASKS.md) : `DELETE /api/tasks/:id`
deletes the task with the matching id
* [Tasks](TASKS.md) : `PUT /api/tasks/:id`
updates the task with the matching id

