

// two lines 
// Express will be used for the middleware to create various CRUD endpoints.
// Mongoose for managing data in MongoDB using various queries.
// Nodemon to restart our server every time we save our file.
// Dotenv to manage a .env file.



// Now, transfer the contents of Express into a new constant called app.
// Now, let's listen the changes of this file on port 3000.
// now we have add in package.json
// "start": "nodemon index.js"
// This means that we can start our server using npm start, and it will run using the Nodemon package that we previously installed.
// Now, let's import the contents of our .env file in the script file, index.js.
 
require('dotenv').config();
const routes = require('./routes/routes');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use('/api', routes)
app.use(express.json());


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

