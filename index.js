const express = require('express')
const dotenv  = require("dotenv");
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('express')
const mongoose = require('mongoose')
const router = require('./routes/form')
const app = express()

const port = process.env.PORT || 5000

dotenv.config();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(morgan('common'))

app.use('/answers', router)

mongoose.connect(`${process.env.URL}`).then(()=>app.listen(port, ()=>console.log('Server is running on port: http://localhost:5000'))).catch((error)=>console.log(error))



