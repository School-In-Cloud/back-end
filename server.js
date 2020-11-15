const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/auth-middleware.js');
const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);


module.exports = server;