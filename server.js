const express = require("express");
const router = require('./router')

const createServer = () => {
	const app = express();
  app.use(express.json())

  /* User solution goes here*/
  /* End user solution goes here*/
  app.use(router)
	return app;
};

module.exports = createServer;
