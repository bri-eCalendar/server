const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
console.log(process.env.NODE_ENV)
const morgan = process.env.NODE_ENV === "dev" ? require("morgan") : null;

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
console.log(morgan)
if (morgan !== null) server.use(morgan("dev"));

// test route
server.get("/", (req, res) => res.status(200).json({ api: "is up" }));

module.exports = server;
