const express = require('express')
require('dotenv').config()

const PORT =  process.env.PORT
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Lesssa get dis breaaaad on ${PORT}!!!!`))