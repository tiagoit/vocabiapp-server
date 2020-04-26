require('dotenv').config()
if (!process.env.JWT_PRIVATE_KEY) throw new Error('Missing environmnet variable: JWT_PRIVATE_KEY');

console.log('ássed')
const express = require("express");
const cors = require("cors");

require('./db')()

const app = express()
app.use(cors())
app.use(express.json());
require("./routes")(app)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`http://localhost:${port}`))