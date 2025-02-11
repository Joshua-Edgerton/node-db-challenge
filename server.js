const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const projectsRouter = require('./routes/projects-router');
const resourcesRouter = require('./routes/resources-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourcesRouter);

server.get("/", (req, res) => res.send("GET sent"));

module.exports = server;