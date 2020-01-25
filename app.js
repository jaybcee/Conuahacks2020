const express = require('express')
require('dotenv').config()
var admin = require("firebase-admin");


const PORT =  process.env.PORT
const app = express()

let rockChannelTime = null
let rapChannelTime = null
let popChannelTime = null
let jazzChannelTime = null
let indieChannelTime = null


let serviceAccount = require(`${__dirname}/firebase_auth.json`);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://conuhacksradio.firebaseio.com"
  })

// var db = admin.database


app.get('/', (req, res) => res.send("Hola!") && console.log(admin.database().ref('/modes/')))

app.listen(PORT, () => console.log(`Lesssa get dis breaaaad on ${PORT}!!!!`))