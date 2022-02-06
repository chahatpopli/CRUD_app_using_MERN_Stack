import express from "express"

import mongoose from "mongoose";
import Route from "./route/Route.js"
import cors from "cors"
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/users", Route)

const PORT = 8000;

const URL = "mongodb://user:chahat2001@crud-shard-00-00.kabo3.mongodb.net:27017,crud-shard-00-01.kabo3.mongodb.net:27017,crud-shard-00-02.kabo3.mongodb.net:27017/CRUD?ssl=true&replicaSet=atlas-10kekf-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})
