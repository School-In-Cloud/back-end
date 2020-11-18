const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/auth-middleware.js');
const authRouter = require('./auth/auth-router.js');

const userRouter = require('./users/users-router.js')

const taskRouter = require('./tasks/tasks-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/users', authenticate,userRouter)
server.use('/api/tasks', authenticate, taskRouter)

server.get("/", (req, res) => {
    res.json({ api: "online" });
});

module.exports = server;