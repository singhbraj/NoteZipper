const express = require('express')
const notes = require("./data/notes") 
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

const app =  express();
dotenv.config()
connectDB()


app.use(express.json())
// app.use(notFound)
// app.use(errorHandler)


app.use("/api/users",userRoutes)

const PORT = process.env.PORT || 5000


app.listen(PORT,console.log(`Server started on PORT ${PORT}`))