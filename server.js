const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/auth-middleware.js');
const authRouter = require('./auth/auth-router.js');

const userRouter = require('./users/users-router.js')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate,userRouter)


module.exports = server;