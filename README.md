# school-in-cloud buildweek backend

![Heroku Badge](http://heroku-badge.herokuapp.com/?app=school-in-cloud-lambda)

This project was built by the #tt_webft_4 team at Lambda School.

## Current Production Endpoint

<https://school-in-cloud-lambda.herokuapp.com/>

## Endpoints

Endpoints for viewing the projects/technologies tables.

### User related

All users endpoints require authentication.

GET an array of all user objects

* [Users](documentation/USERS.md) : `GET /api/users/`

### Authentication related

Register a new account

* [Register](documentation/REGISTER.md) : `POST /api/auth/register`

Login to account

* [Login](documentation/LOGIN.md) : `POST /api/auth/login`
