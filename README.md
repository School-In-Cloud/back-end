# school-in-cloud buildweek backend
![Heroku Badge](http://heroku-badge.herokuapp.com/?app=school-in-cloud-lambda)

This project was built by the #tt_webft_4 team at Lambda School.

### Current Production Endpoint
https://school-in-cloud-lambda.herokuapp.com/

## Endpoints

Endpoints for viewing the projects/technologies tables.

### Authentication related

Register a new account
* [Register](REGISTER.md) : `POST /api/auth/register`
Login to account
* [Login](LOGIN.md) : `POST /api/auth/login`


### EVERYTHING BELOW THIS POINT REQUIRES A KEY FROM THE API ###


### User related

All users endpoints require authentication.

GET an array of all user objects
* [Users](USERS.md) : `GET /api/users/`


### Task related
Get a list of all tasks
* [Tasks](TASKS.md) : `GET /api/tasks/all`

* [Tasks](TASKS.md) : `POST /api/tasks/newtask`

