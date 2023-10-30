require('dotenv').config();
const express = require("express");
const logger = require("morgan");

require("./config/db.config");
const sessionConfig = require("./config/session.config");

const app = express();
app.use(sessionConfig.session);
const cors = require('./config/cors.config')
app.use(cors);
app.use(express.json());
app.use(logger("dev"));




const routes = require("./config/routes.config");
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Application running at port ${PORT}`));
